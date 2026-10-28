// ==========================================================================
// Nexus AI Strategist Hub - Enterprise Mock Dataset
// Aligned with Enterprise AI Strategist Responsibilities:
// Microsoft Copilot Studio, Azure AI Foundry, Power Platform, UiPath RPA,
// AI Governance, Change Management, SDLC Best Practices & Executive KPIs
// ==========================================================================

export const INITIAL_INITIATIVES = [
  {
    id: "init-01",
    title: "Autonomous Customer Case Resolution & Triage Agent",
    department: "Customer Operations",
    problem: "Level 1 customer inquiries take an average of 42 minutes to triage across legacy CRM, emails, and SharePoint documentation. High agent attrition.",
    cycleTimeReduction: "42m → 3.5m (-92%)",
    stack: "Microsoft Copilot Studio + Power Platform + Dataverse",
    feasibility: 94,
    hoursSaved: 6800,
    hourlyRate: 55,
    apiCost: 18000,
    projectedRoi: 356000,
    risk: "Low",
    status: "In Production",
    sdlcStage: "Prod Ring 3 (CI/CD Managed Solution)",
    changeProgramme: "Champions Network + Copilot Academy (94% Certified)",
    adoptionRate: 88,
    utilisationRate: 92,
    weeklyActiveUsers: 410,
    kpiTarget: "FCR +26% | CSAT +18 pts",
    leadArchitect: "Elena Rostova",
    topologyId: "topo-01",
    models: ["Azure OpenAI GPT-4o", "Text-Embedding-3-Large"]
  },
  {
    id: "init-02",
    title: "Global Supply Chain Disruption Predictor & Re-router",
    department: "Supply Chain & Logistics",
    problem: "Port delays and shipping manifest alterations are manually checked in SAP every morning, taking 3 FTEs 4 hours daily to reconcile discrepancies.",
    cycleTimeReduction: "4.0h → 12m (-95%)",
    stack: "Azure AI Foundry + Microsoft Fabric OneLake + UiPath RPA",
    feasibility: 89,
    hoursSaved: 4200,
    hourlyRate: 75,
    apiCost: 22000,
    projectedRoi: 293000,
    risk: "Medium",
    status: "In Architecture Review",
    sdlcStage: "Prompt Flow Eval Gate (Golden Dataset 96%)",
    changeProgramme: "Logistics Planner Co-Design Workshops",
    adoptionRate: 42,
    utilisationRate: 64,
    weeklyActiveUsers: 85,
    kpiTarget: "OTIF Delivery +14% | Demurrage -31%",
    leadArchitect: "Marcus Vance",
    topologyId: "topo-03",
    models: ["Azure OpenAI o3-mini", "UiPath Unattended Bot"]
  },
  {
    id: "init-03",
    title: "Intelligent Financial Audit & ERP Invoice Reconciliation",
    department: "Finance & Accounting",
    problem: "Multi-currency PDF invoice extraction suffers from OCR errors in nested tables; cross-referencing with purchase orders in legacy SAP GUI requires 12 minutes per invoice.",
    cycleTimeReduction: "12m → 45s (-94%)",
    stack: "Azure AI Foundry + UiPath Document Understanding + Semantic Kernel",
    feasibility: 96,
    hoursSaved: 8500,
    hourlyRate: 65,
    apiCost: 24000,
    projectedRoi: 528500,
    risk: "Low",
    status: "Active Deployment",
    sdlcStage: "UAT Canary Ring (GitHub Actions + Bicep IaC)",
    changeProgramme: "Finance Center of Excellence (CoE) Playbook",
    adoptionRate: 76,
    utilisationRate: 84,
    weeklyActiveUsers: 190,
    kpiTarget: "Straight-Through Processing 91%",
    leadArchitect: "Sarah Jenkins",
    topologyId: "topo-02",
    models: ["Azure Document Intelligence v4.0", "UiPath RPA Bot", "GPT-4o"]
  },
  {
    id: "init-04",
    title: "Enterprise Knowledge Synthesizer & Policy Copilot",
    department: "Human Resources & Legal",
    problem: "Employees spend ~3.4 hours/week searching across disjointed intranet policies, SharePoint PDFs, and Teams channels for benefits and compliance guidance.",
    cycleTimeReduction: "3.4h/wk → 0.4h/wk (-88%)",
    stack: "Microsoft Copilot Studio + Azure AI Foundry + Purview",
    feasibility: 92,
    hoursSaved: 14200,
    hourlyRate: 60,
    apiCost: 32000,
    projectedRoi: 820000,
    risk: "High",
    status: "Pilot (1,200 Users)",
    sdlcStage: "Pilot Ring 2 (Automated Red-Team Gate Passed)",
    changeProgramme: "Executive Townhalls + Department Prompt Clinics",
    adoptionRate: 91,
    utilisationRate: 89,
    weeklyActiveUsers: 1092,
    kpiTarget: "HR Ticket Deflection 68%",
    leadArchitect: "David Kim",
    topologyId: "topo-04",
    models: ["Azure OpenAI GPT-4o", "Purview Sensitive Info Types"]
  },
  {
    id: "init-05",
    title: "Field Service Predictive Dispatcher & Diagnostic Co-worker",
    department: "Field Engineering",
    problem: "Technicians frequently arrive on-site without the exact spare parts or equipment schematics needed, leading to 24% repeat visits.",
    cycleTimeReduction: "24% Repeat Visits → 6%",
    stack: "Power Platform + Dynamics 365 + Azure AI Foundry (Phi-4)",
    feasibility: 85,
    hoursSaved: 5100,
    hourlyRate: 80,
    apiCost: 19000,
    projectedRoi: 389000,
    risk: "Medium",
    status: "Discovery & Blueprint",
    sdlcStage: "Dev Sandbox (Power Platform ALM Pipeline)",
    changeProgramme: "Field Engineer Mobile Onboarding Cohort",
    adoptionRate: 28,
    utilisationRate: 52,
    weeklyActiveUsers: 64,
    kpiTarget: "First-Time Fix Rate 94%",
    leadArchitect: "Elena Rostova",
    topologyId: "topo-05",
    models: ["Phi-4 ONNX Runtime", "Azure AI Search"]
  }
];

export const PROCESS_MINING_OPPORTUNITIES = [
  {
    id: "init-pm-01",
    title: "Autonomous Vendor Contract Redlining & Risk Scoring",
    department: "Legal & Procurement",
    problem: "Process mining telemetry detected a 6.4-day bottleneck in standard NDA and MSA redlining across 420 monthly supplier onboarding workflows.",
    cycleTimeReduction: "6.4d → 4.5h (-97%)",
    stack: "Azure AI Foundry + Semantic Kernel + Azure AI Search",
    feasibility: 93,
    hoursSaved: 5400,
    hourlyRate: 85,
    apiCost: 15000,
    projectedRoi: 444000,
    risk: "High",
    status: "Discovery & Blueprint",
    sdlcStage: "Architecture Gate Review",
    changeProgramme: "Legal Counsel HITL Prompt Workshop",
    adoptionRate: 35,
    utilisationRate: 60,
    weeklyActiveUsers: 48,
    kpiTarget: "Contract Cycle Time -85%",
    leadArchitect: "David Kim",
    topologyId: "topo-02",
    models: ["Azure OpenAI GPT-4o", "Azure AI Search"]
  },
  {
    id: "init-pm-02",
    title: "Procure-to-Pay Three-Way Match RPA & Agent Resolver",
    department: "Supply Chain & Logistics",
    problem: "Power Automate & UiPath Task Mining logs show 19% of PO goods receipts require manual email follow-ups and legacy ERP screen entry.",
    cycleTimeReduction: "48h → 8m (-99%)",
    stack: "Microsoft Copilot Studio + Power Platform + UiPath RPA",
    feasibility: 95,
    hoursSaved: 3900,
    hourlyRate: 60,
    apiCost: 15000,
    projectedRoi: 219000,
    risk: "Low",
    status: "Discovery & Blueprint",
    sdlcStage: "Dev Sandbox (Solution Blueprinting)",
    changeProgramme: "AP Automation Champions Programme",
    adoptionRate: 40,
    utilisationRate: 70,
    weeklyActiveUsers: 72,
    kpiTarget: "Auto-Match Rate 96.5%",
    leadArchitect: "Marcus Vance",
    topologyId: "topo-01",
    models: ["Azure OpenAI GPT-4o-mini", "UiPath Unattended Bot"]
  }
];

export const AGENT_TOPOLOGIES = [
  {
    id: "topo-01",
    name: "Enterprise Multi-Agent Customer Support Swarm",
    framework: "Microsoft Copilot Studio + Power Platform + Semantic Kernel",
    targetHost: "Azure AI Foundry + Power Platform Managed Env",
    sdlcPipeline: "GitHub Actions + Power Platform ALM -> Prod Ring 3",
    ptuCapacity: 100,
    maxReplicas: 16,
    semanticCache: true,
    nodes: [
      {
        id: "node-triage",
        role: "Triage & Intent Classifier",
        icon: "zap",
        model: "Azure OpenAI GPT-4o-mini",
        desc: "Parses customer sentiment, language, urgency, and extracts core issue entities.",
        tools: ["Copilot Studio Topic Trigger", "Content Safety Shield"]
      },
      {
        id: "node-rag",
        role: "Knowledge Grounding Agent",
        icon: "search",
        model: "Azure AI Search (Hybrid + Semantic Ranker)",
        desc: "Executes vector search over SharePoint policy store and Dynamics KB articles.",
        tools: ["Azure AI Foundry Index", "Purview Data Boundary Validator"]
      },
      {
        id: "node-action",
        role: "Power Platform & RPA Executor",
        icon: "cpu",
        model: "Power Automate + UiPath RPA Connector",
        desc: "Creates/updates service cases in Dataverse and dispatches UiPath bot for legacy billing updates.",
        tools: ["Dataverse Web API Connector", "UiPath Orchestrator Queue API"]
      },
      {
        id: "node-reviewer",
        role: "Responsible AI Supervisor",
        icon: "shield",
        model: "Azure AI Content Safety + Guardrail",
        desc: "Verifies hallucination index, checks PII redaction, ensures SLA compliance.",
        tools: ["Purview Sensitivity Inspector", "Tone & Empathy Evaluator"]
      }
    ]
  },
  {
    id: "topo-02",
    name: "Autonomous Financial Audit & UiPath RPA Orchestrator",
    framework: "Azure AI Foundry + UiPath Document Understanding",
    targetHost: "Azure Functions + UiPath Automation Cloud",
    sdlcPipeline: "Azure DevOps CI/CD + Prompt Flow Eval Gate -> UAT Canary",
    ptuCapacity: 150,
    maxReplicas: 24,
    semanticCache: true,
    nodes: [
      {
        id: "node-ocr",
        role: "Document Intelligence Extractor",
        icon: "file-text",
        model: "Azure Document Intelligence v4.0",
        desc: "Extracts key-value pairs, nested invoice line items, tax codes, and barcodes.",
        tools: ["Doc Intelligence Prebuilt-Invoice", "UiPath DU Validation Station"]
      },
      {
        id: "node-erp",
        role: "UiPath Unattended SAP Reconciler",
        icon: "bot",
        model: "UiPath Unattended RPA Bot + GPT-4o",
        desc: "Cross-checks PO numbers against SAP S/4HANA and executes 3-way match in legacy GUI.",
        tools: ["UiPath SAP BAPI Connector", "Azure Key Vault Managed Identity"]
      },
      {
        id: "node-eval",
        role: "Audit Signoff & HITL Agent",
        icon: "scale",
        model: "Azure OpenAI o3-mini",
        desc: "Evaluates tolerance thresholds (under $5,000 auto-approves; routes exceptions to Teams).",
        tools: ["Fraud Detection Heuristics", "Power Automate Teams Approval"]
      }
    ]
  },
  {
    id: "topo-03",
    name: "Global Supply Chain Disruption & Re-routing Mesh",
    framework: "Azure AI Foundry Agent Service + Microsoft Fabric",
    targetHost: "Azure Kubernetes Service (AKS) + Fabric OneLake",
    sdlcPipeline: "GitHub Actions Bicep IaC -> Prompt Flow Evaluation",
    ptuCapacity: 120,
    maxReplicas: 20,
    semanticCache: true,
    nodes: [
      {
        id: "node-ingest",
        role: "OneLake Telemetry Watcher",
        icon: "globe",
        model: "Fabric Real-Time Intelligence",
        desc: "Monitors global port congestion streams, weather alerts, and carrier EDI feeds.",
        tools: ["Fabric Eventstream Connector", "OneLake Delta Reader"]
      },
      {
        id: "node-sim",
        role: "Route Optimization Reasoner",
        icon: "compass",
        model: "Azure OpenAI o3-mini",
        desc: "Simulates alternative freight corridors, customs lead times, and landed cost impact.",
        tools: ["SAP S/4HANA Inventory API", "Azure Maps Route Matrix"]
      },
      {
        id: "node-dispatch",
        role: "Logistics RPA & Teams Dispatcher",
        icon: "truck",
        model: "Power Platform + UiPath Logistics Bot",
        desc: "Updates purchase order delivery schedules and dispatches Adaptive Cards to regional planners.",
        tools: ["UiPath ERP PO Updater", "Copilot Studio Teams Broadcaster"]
      }
    ]
  },
  {
    id: "topo-04",
    name: "M365 Enterprise Knowledge Synthesizer",
    framework: "Microsoft Copilot Studio + Azure AI Foundry",
    targetHost: "Microsoft Teams + Azure App Service",
    sdlcPipeline: "Copilot Studio ALM Pipeline -> Pilot Ring 2",
    ptuCapacity: 200,
    maxReplicas: 32,
    semanticCache: true,
    nodes: [
      {
        id: "node-acl",
        role: "Entra ID Claims & ACL Trimmer",
        icon: "lock",
        model: "Microsoft Graph Security Trimmer",
        desc: "Validates user Entra ID group claims and Purview sensitivity clearance prior to retrieval.",
        tools: ["Entra ID OBO Token Exchange", "Purview Sensitivity Validator"]
      },
      {
        id: "node-synth",
        role: "Cross-Tenant Knowledge Synthesizer",
        icon: "book",
        model: "Azure OpenAI GPT-4o",
        desc: "Synthesizes policy citations across SharePoint, Viva Engage, and Confluence connectors.",
        tools: ["Microsoft Graph Connector", "Azure AI Search Semantic Ranker"]
      },
      {
        id: "node-cite",
        role: "Citation & Groundedness Verifier",
        icon: "check",
        model: "Azure AI Content Safety Groundedness API",
        desc: "Verifies every policy claim maps to an immutable SharePoint document URL.",
        tools: ["Groundedness Detection Shield", "Audit Telemetry Logger"]
      }
    ]
  },
  {
    id: "topo-05",
    name: "Field Service Edge Diagnostic Co-worker",
    framework: "Power Platform + Dynamics 365 + ONNX Edge Mesh",
    targetHost: "Surface Copilot+ PC (NPU) + Azure AI Foundry",
    sdlcPipeline: "Power Platform Pipelines -> Dev Sandbox",
    ptuCapacity: 50,
    maxReplicas: 12,
    semanticCache: false,
    nodes: [
      {
        id: "node-iot",
        role: "IoT Telemetry Anomaly Detector",
        icon: "radio",
        model: "Azure IoT Operations Edge Agent",
        desc: "Analyzes equipment vibration and thermal telemetry streams from field assets.",
        tools: ["Azure IoT MQ Broker", "Time-Series Anomaly Detector"]
      },
      {
        id: "node-edge-slm",
        role: "Offline Schematic Diagnostic SLM",
        icon: "wrench",
        model: "Phi-4 Multimodal ONNX (Local NPU)",
        desc: "Runs zero-latency multimodal visual inspection and schematic lookup without cloud connectivity.",
        tools: ["ONNX Runtime GenAI", "Local Vector Cache"]
      },
      {
        id: "node-parts",
        role: "Power Platform Field Service Sync",
        icon: "truck",
        model: "Copilot Studio Field Service Plugin",
        desc: "Reserves spare parts in nearest regional depot and updates technician work order in Power Apps.",
        tools: ["Dynamics 365 Field Service API", "Power Apps Offline Sync"]
      }
    ]
  }
];

export const ENTERPRISE_INTEGRATIONS = [
  {
    name: "Microsoft 365 Graph & Copilot Studio",
    category: "Productivity & Enterprise Copilot",
    status: "Healthy",
    latency: "42ms",
    endpoint: "https://graph.microsoft.com/v1.0",
    security: "Entra ID OAuth2 Token Exchange",
    syncedRecords: "1.4M Messages / Day",
    purviewBoundary: "Enforced (Group Sensitive Label)",
    businessProcess: "HR & Legal Policy Knowledge Synthesis (init-04)"
  },
  {
    name: "Microsoft Power Platform & Dataverse",
    category: "Low-Code Automation & CRM",
    status: "Healthy",
    latency: "38ms",
    endpoint: "https://contoso.crm.dynamics.com/api/data/v9.2",
    security: "Managed Identity (Power Platform CoE)",
    syncedRecords: "480k Case Entities",
    purviewBoundary: "Enforced (Role-Based Column Masking)",
    businessProcess: "Autonomous L1 Customer Case Triage (init-01)"
  },
  {
    name: "UiPath Orchestrator & Automation Cloud",
    category: "Intelligent RPA & Task Mining",
    status: "Healthy",
    latency: "54ms",
    endpoint: "https://cloud.uipath.com/contoso/prod/orchestrator_",
    security: "OAuth 2.0 External App + Key Vault",
    syncedRecords: "62 Unattended RPA Bots",
    purviewBoundary: "Enforced (Credential Proxy & PII Mask)",
    businessProcess: "Legacy ERP 3-Way Match & GUI Automation (init-03)"
  },
  {
    name: "Azure AI Foundry & AI Search Index",
    category: "Model Catalog, Eval & RAG Vector Store",
    status: "Healthy",
    latency: "28ms",
    endpoint: "https://contoso-ai-foundry.services.ai.azure.com",
    security: "Keyless Managed Identity",
    syncedRecords: "920k Vectorized Chunks",
    purviewBoundary: "Index Filtered by User ACL",
    businessProcess: "Enterprise-Wide Semantic Grounding Mesh (All Agents)"
  },
  {
    name: "Microsoft Fabric OneLake & SAP S/4HANA",
    category: "Unified Data Mesh & Core ERP",
    status: "Healthy",
    latency: "64ms",
    endpoint: "onelake.dfs.fabric.microsoft.com/ContosoWorkspace",
    security: "Entra ID Storage RBAC + mTLS Gateway",
    syncedRecords: "12.8 TB Parquet Delta + 185k POs",
    purviewBoundary: "Enforced (Financial & Lakehouse Governance)",
    businessProcess: "Global Supply Chain Disruption Re-routing (init-02)"
  }
];

export const GOVERNANCE_POLICIES = [
  {
    id: "gov-01",
    framework: "Microsoft Responsible AI Standard v2",
    title: "Fairness & Demographic Bias Auditing",
    description: "Ensure customer-facing agent responses maintain neutral, unbiased sentiment regardless of customer origin or dialect.",
    status: "Compliant",
    checked: true,
    severity: "High",
    impactedInitiatives: ["init-01", "init-04"]
  },
  {
    id: "gov-02",
    framework: "Microsoft Purview Compliance",
    title: "Zero Data Retention (ZDR) & Enterprise Data Boundary",
    description: "Verify that Azure OpenAI deployments operate with Microsoft customer data boundary guarantees and zero model retraining on prompts.",
    status: "Compliant",
    checked: true,
    severity: "Critical",
    impactedInitiatives: ["init-01", "init-02", "init-03", "init-04", "init-05"]
  },
  {
    id: "gov-03",
    framework: "Azure AI Content Safety",
    title: "Automated PII/PHI Redaction in Context Pipelines",
    description: "Incoming user queries with SSNs, Credit Cards, or HIPAA data must be redacted before dispatch to LLM context buffers.",
    status: "Compliant",
    checked: true,
    severity: "Critical",
    impactedInitiatives: ["init-01", "init-03", "init-04"]
  },
  {
    id: "gov-04",
    framework: "EU AI Act (Regulation 2024/1689)",
    title: "Human-in-the-Loop Override for High-Impact Decisions",
    description: "Autonomous financial approvals over $5,000 or customer contract alterations must route to human supervisor approval in Microsoft Teams.",
    status: "Compliant",
    checked: true,
    severity: "Critical",
    impactedInitiatives: ["init-02", "init-03", "init-04"]
  },
  {
    id: "gov-05",
    framework: "NIST AI Risk Management Framework",
    title: "Adversarial Prompt Injection & Jailbreak Defense",
    description: "Employ dual-layer input filtering (Content Safety Prompt Shield + Semantic Kernel system prompt boundaries).",
    status: "Compliant",
    checked: true,
    severity: "High",
    impactedInitiatives: ["init-01", "init-04"]
  },
  {
    id: "gov-06",
    framework: "ISO/IEC 42001 (AI Management System)",
    title: "Continuous Drift, SDLC Eval Gate & Model Card Logging",
    description: "Maintain immutable audit logs in Azure Log Analytics for every model deployment revision, Prompt Flow evaluation, and RPA bot trigger.",
    status: "Compliant",
    checked: true,
    severity: "Medium",
    impactedInitiatives: ["init-02", "init-05"]
  }
];

export const HORIZON_RADAR = [
  {
    id: "radar-01",
    tag: "Microsoft Small Language Model (SLM)",
    title: "Phi-4 Multimodal ONNX Deployment on Edge",
    source: "Microsoft Research & Azure AI Foundry",
    summary: "Phi-4 achieves parity with GPT-4 class reasoning on complex STEM & reasoning benchmarks at 1/10th the inference latency.",
    impact: "Recommendation: Deploy Phi-4 for offline Field Service technicians on Surface devices; eliminates $48k/yr in mobile API latency and cloud egress fees.",
    readiness: "Ready for Pilot",
    linkedInitiativeId: "init-05",
    linkedInitiativeName: "Field Service Predictive Dispatcher (init-05)",
    actionText: "Benchmark in Lab"
  },
  {
    id: "radar-02",
    tag: "Autonomous Orchestration & RPA",
    title: "Azure AI Foundry Agent Service + Copilot Studio + UiPath Bridge",
    source: "Microsoft Ignite / Azure AI Foundry & UiPath Alliance",
    summary: "Unified orchestration connecting declarative Copilot Studio agents, code-first Azure AI Foundry models, and UiPath unattended RPA bots.",
    impact: "Recommendation: Transition HR & Finance Copilots to hybrid Agent Service + UiPath queues for end-to-end straight-through processing.",
    readiness: "Generally Available (GA)",
    linkedInitiativeId: "init-03",
    linkedInitiativeName: "Intelligent Financial Audit & ERP Reconciliation (init-03)",
    actionText: "Inspect Architecture"
  },
  {
    id: "radar-03",
    tag: "Low-Latency Voice & Reasoning",
    title: "GPT-4o Realtime Audio & Multimodal API in Azure",
    source: "Azure OpenAI Service",
    summary: "Direct speech-to-speech low latency (sub-350ms) without separate Speech-to-Text and Text-to-Speech serialization pipelines.",
    impact: "Recommendation: Pilot for Contact Center escalation hotline. Improves First Call Resolution (FCR) by an estimated 28%.",
    readiness: "Public Preview",
    linkedInitiativeId: "init-01",
    linkedInitiativeName: "Autonomous Customer Case Agent (init-01)",
    actionText: "Request Access"
  },
  {
    id: "radar-04",
    tag: "Enterprise Data Fabric",
    title: "Microsoft Fabric OneLake Direct Lake Vector Search",
    source: "Microsoft Fabric Engineering",
    summary: "Direct vector indexing on Delta Parquet tables without copying data into separate vector search clusters.",
    impact: "Recommendation: Integrate into Supply Chain re-routing agent to index 12.8TB of telemetry in-place with zero ETL lag.",
    readiness: "Coming Q1 2027",
    linkedInitiativeId: "init-02",
    linkedInitiativeName: "Global Supply Chain Predictor (init-02)",
    actionText: "Track Roadmap"
  }
];
