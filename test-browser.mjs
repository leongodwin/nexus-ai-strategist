import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('test-artifacts');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function runBrowserTest() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const consoleLogs = [];
  const errors = [];
  page.on('console', msg => consoleLogs.push({ type: msg.type(), text: msg.text() }));
  page.on('pageerror', err => errors.push(err.message));

  console.log('Navigating to http://localhost:5173/...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  // 1. Discovery View Screenshot
  console.log('Capturing Discovery View...');
  await page.screenshot({ path: path.join(outDir, '01-discovery-view.png') });

  // Test sorting in Discovery View
  console.log('Testing Sort Pills in Discovery...');
  await page.click('button[data-sort="roi"]');
  await page.waitForTimeout(500);

  // 2. Open Initiative Modal & test 1-Click Magic Fill
  console.log('Testing New Initiative Modal...');
  await page.click('#btn-new-initiative');
  await page.waitForTimeout(300);
  await page.click('#magic-fill-chips button[data-preset="0"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, '02-initiative-modal.png') });
  await page.click('#modal-close');
  await page.waitForTimeout(300);

  // 2b. Test Microsoft Graph Transcript & Stakeholder Email Co-Pilot Hub
  console.log('Testing Microsoft Graph Transcript & Stakeholder Email Co-Pilot...');
  await page.click('#btn-open-copilot-hub');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '10-graph-transcript-copilot.png') });

  // Click Synthesize Transcript & Auto-Update App (switches to Tab 2: Stakeholder Emails)
  await page.click('#btn-synthesize-transcript');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '11-graph-stakeholder-emails.png') });

  // Click Sync Graph Inbox & Ingest Stakeholder Replies
  await page.click('#btn-ingest-graph-replies');
  await page.waitForTimeout(600);
  await page.click('#copilot-close');
  await page.waitForTimeout(300);

  // 3. Navigate to Agent Studio
  console.log('Navigating to Agent Studio...');
  await page.click('#nav-tab-architect');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '03-agent-studio.png') });

  // Test swarm simulation
  console.log('Simulating Agent Swarm...');
  await page.click('#btn-simulate-swarm');
  await page.waitForTimeout(1500);

  // 4. Navigate to Enterprise Integration
  console.log('Navigating to Enterprise Integration...');
  await page.click('#nav-tab-integration');
  await page.waitForTimeout(600);
  // Run RAG simulation
  await page.click('#btn-run-rag-test');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '04-integration-view.png') });

  // 5. Navigate to AIOps
  console.log('Navigating to AIOps & Observability...');
  await page.click('#nav-tab-aiops');
  await page.waitForTimeout(600);
  // Simulate surge
  await page.click('#btn-simulate-surge');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '05-aiops-view.png') });

  // 6. Navigate to Governance
  console.log('Navigating to Governance & Security...');
  await page.click('#nav-tab-governance');
  await page.waitForTimeout(600);
  // Run red-team test
  await page.click('#btn-test-prompt-injection');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '06-governance-view.png') });

  // 7. Navigate to Horizon Radar
  console.log('Navigating to Horizon Radar...');
  await page.click('#nav-tab-horizon');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '07-horizon-radar.png') });

  // 8. Test Export Modal
  console.log('Testing Export Modal...');
  await page.click('#btn-quick-export');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '08-export-modal.png') });
  await page.click('#export-close');
  await page.waitForTimeout(300);

  // 9. Test Global Search (Ctrl+K)
  console.log('Testing Global Search...');
  await page.fill('#global-search-input', 'SAP');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, '09-global-search.png') });

  console.log('Completed all browser tests!');
  console.log(`Page errors: ${errors.length}`);
  if (errors.length > 0) {
    console.error('Errors encountered:', errors);
  }

  await browser.close();
}

runBrowserTest().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});

