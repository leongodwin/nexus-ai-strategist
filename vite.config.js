import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

function loadGraphCredentials() {
  const credFile = path.resolve(process.cwd(), 'graph api.txt');
  let clientId = process.env.AZURE_CLIENT_ID || '';
  let tenantId = process.env.AZURE_TENANT_ID || '';
  let clientSecret = process.env.AZURE_CLIENT_SECRET || '';
  let objectId = '';

  if (fs.existsSync(credFile)) {
    const raw = fs.readFileSync(credFile, 'utf8');
    const clientMatch = raw.match(/Application\s*\(client\)\s*ID\s*:\s*([^\r\n]+)/i);
    const tenantMatch = raw.match(/Directory\s*\(tenant\)\s*ID\s*:\s*([^\r\n]+)/i);
    const secretMatch = raw.match(/Secret\s*Value\s*:\s*([^\r\n]+)/i);
    const objMatch = raw.match(/Object\s*ID\s*:\s*([^\r\n]+)/i);
    if (clientMatch) clientId = clientMatch[1].trim();
    if (tenantMatch) tenantId = tenantMatch[1].trim();
    if (secretMatch) clientSecret = secretMatch[1].trim();
    if (objMatch) objectId = objMatch[1].trim();
  }

  return { clientId, tenantId, clientSecret, objectId };
}

let cachedToken = null;
let cachedTokenExpiry = 0;

async function acquireGraphToken() {
  const now = Date.now();
  if (cachedToken && now < cachedTokenExpiry - 60000) {
    return cachedToken;
  }

  const { clientId, tenantId, clientSecret } = loadGraphCredentials();
  if (!clientId || !tenantId || !clientSecret) {
    throw new Error('Microsoft Graph credentials not found in graph api.txt or environment');
  }

  const tokenUrl = `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`;
  const body = new URLSearchParams({
    client_id: clientId,
    scope: 'https://graph.microsoft.com/.default',
    client_secret: clientSecret,
    grant_type: 'client_credentials'
  });

  const resp = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString()
  });

  const data = await resp.json();
  if (!resp.ok || !data.access_token) {
    throw new Error(data.error_description || data.error || 'Failed to acquire Entra ID token');
  }

  cachedToken = data.access_token;
  cachedTokenExpiry = now + (Number(data.expires_in || 3599) * 1000);
  return cachedToken;
}

function decodeJwtPayload(token) {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return {};
    const payload = Buffer.from(parts[1], 'base64url').toString('utf8');
    return JSON.parse(payload);
  } catch {
    return {};
  }
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => { raw += chunk; });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

function microsoftGraphBridgePlugin() {
  return {
    name: 'microsoft-graph-bridge',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/graph/')) {
          return next();
        }

        res.setHeader('Content-Type', 'application/json');

        try {
          const parsedUrl = new URL(req.url, 'http://localhost:5173');

          if (parsedUrl.pathname === '/api/graph/status' && req.method === 'GET') {
            const creds = loadGraphCredentials();
            const start = Date.now();
            const token = await acquireGraphToken();
            const latencyMs = Date.now() - start;
            const claims = decodeJwtPayload(token);

            let users = [];
            let orgName = claims.app_displayname || 'GraspAI';

            try {
              const usersResp = await fetch('https://graph.microsoft.com/v1.0/users?$top=10&$select=id,displayName,mail,userPrincipalName,jobTitle', {
                headers: { Authorization: `Bearer ${token}` }
              });
              if (usersResp.ok) {
                const usersData = await usersResp.json();
                users = usersData.value || [];
              }
            } catch {
              // Ignore
            }

            const primaryUser = users.find(u => u.mail?.toLowerCase().includes('leon@')) || users.find(u => u.mail) || users[0];

            res.statusCode = 200;
            res.end(JSON.stringify({
              connected: true,
              appDisplayName: claims.app_displayname || 'OpenClaw',
              clientId: creds.clientId,
              tenantId: creds.tenantId,
              objectId: creds.objectId,
              roles: claims.roles || [],
              keyCapabilities: (claims.roles || []).filter(r =>
                r.includes('Transcript') || r.includes('Mail.Send') || r.includes('Mail.Read') || r.includes('OnlineMeetings') || r.includes('Chat.Read')
              ),
              orgName,
              primaryMailbox: primaryUser?.mail || primaryUser?.userPrincipalName || 'leon@graspai.co.uk',
              users,
              latencyMs
            }));
            return;
          }

          if (parsedUrl.pathname === '/api/graph/inbox' && req.method === 'GET') {
            const mailbox = parsedUrl.searchParams.get('mailbox') || 'leon@graspai.co.uk';
            const token = await acquireGraphToken();
            const msgResp = await fetch(
              `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailbox)}/messages?$top=8&$select=id,subject,from,receivedDateTime,bodyPreview`,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            let messages = [];
            if (msgResp.ok) {
              const mData = await msgResp.json();
              messages = (mData.value || []).map(m => ({
                id: m.id,
                subject: m.subject || '(No Subject)',
                from: m.from?.emailAddress?.address || m.from?.emailAddress?.name || 'Stakeholder',
                receivedDateTime: m.receivedDateTime,
                preview: m.bodyPreview || ''
              }));
            }

            // Also fetch recent calendar/Teams meetings for transcript discovery
            let events = [];
            try {
              const evResp = await fetch(
                `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailbox)}/events?$top=5&$select=id,subject,start,organizer,bodyPreview,isOnlineMeeting`,
                { headers: { Authorization: `Bearer ${token}` } }
              );
              if (evResp.ok) {
                const evData = await evResp.json();
                events = (evData.value || []).map(ev => ({
                  id: ev.id,
                  subject: ev.subject,
                  organizer: ev.organizer?.emailAddress?.address || mailbox,
                  start: ev.start?.dateTime,
                  preview: ev.bodyPreview || ''
                }));
              }
            } catch {
              // Ignore
            }

            res.statusCode = 200;
            res.end(JSON.stringify({
              connected: true,
              mailbox,
              messages,
              events
            }));
            return;
          }

          if (parsedUrl.pathname === '/api/graph/send-mail' && req.method === 'POST') {
            const body = await readJsonBody(req);
            const { fromUser, toEmail, subject, content } = body;
            const token = await acquireGraphToken();
            const senderUpn = fromUser || 'leon@graspai.co.uk';
            const targetEmail = toEmail || 'leon@graspai.co.uk';

            const sendResp = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(senderUpn)}/sendMail`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                message: {
                  subject: subject || '[AI Strategy Discovery] Targeted Architecture & ROI Questions',
                  body: {
                    contentType: 'Text',
                    content: content || ''
                  },
                  toRecipients: [
                    { emailAddress: { address: targetEmail } }
                  ]
                },
                saveToSentItems: true
              })
            });

            if (sendResp.ok || sendResp.status === 202) {
              res.statusCode = 200;
              res.end(JSON.stringify({
                sentViaGraph: true,
                senderUpn,
                toEmail: targetEmail,
                status: `HTTP 202 Accepted — Dispatched via Microsoft Graph API (${senderUpn} -> ${targetEmail})`
              }));
              return;
            } else {
              const errJson = await sendResp.json().catch(() => ({}));
              res.statusCode = 200;
              res.end(JSON.stringify({
                sentViaGraph: false,
                tokenVerified: true,
                senderUpn,
                toEmail: targetEmail,
                graphNote: errJson.error?.message || `HTTP ${sendResp.status} on /sendMail`
              }));
              return;
            }
          }

          res.statusCode = 404;
          res.end(JSON.stringify({ error: 'Unknown Graph endpoint' }));
        } catch (err) {
          res.statusCode = 200;
          res.end(JSON.stringify({
            connected: false,
            error: err.message || 'Graph API connection error'
          }));
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [microsoftGraphBridgePlugin()]
});

