// ==========================================================================
// Nexus AI Strategist Hub - Enterprise Mock Dataset
// Real-world Microsoft AI Solutions, Topologies, Telemetry, and Policies
// Mapped directly to the 8 Core Enterprise AI Strategist Responsibilities
// ==========================================================================

export const INITIAL_INITIATIVES = [
  {
    id: "init-01",
    title: "Autonomous Customer Case Resolution Agent",
    department: "Customer Operations",
    problem: "Level 1 customer inquiries take an average of 42 minutes to triage across legacy CRM, emails, and SharePoint documentation. High agent attrition.",
    cycleTimeReduction: "42m → 3.5m (-92%)",
    stack: "Copilot Studio + Power Automate + Dataverse",
    feasibility: 94,
    hoursSaved: 6800,
    hourlyRate: 55,
    apiCost: 18000,
    projectedRoi: 356000,
    risk: "Low",
    status: "In Production",
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
    stack: "Azure AI Agent Service + Microsoft Fabric OneLake",
    feasibility: 89,
    hoursSaved: 4200,
    hourlyRate: 75,
    apiCost: 22000,
    projectedRoi: 293000,
    risk: "Medium",
    status: "In Architecture Review",
    adoptionRate: 42,
    utilisationRate: 64,
    weeklyActiveUsers: 85,
    kpiTarget: "OTIF Delivery +14% | Demurrage -31%",
    leadArchitect: "Marcus Vance",
    topologyId: "topo-03",
    models: ["Azure OpenAI o3-mini", "Fabric Data Factory"]
  },
  {
    id: "init-03",
    title: "Intelligent Financial Audit & Invoice Reconciliation",
    department: "Finance & Accounting",
    problem: "Multi-currency PDF invoice extraction suffers from OCR errors in nested tables; cross-referencing with purchase orders requires 12 minutes per invoice.",
    cycleTimeReduction: "12m → 45s (-94%)",
    stack: "Azure Document Intelligence + Semantic Kernel + Cosmos DB",
    feasibility: 96,
    hoursSaved: 8500,
    hourlyRate: 65,
    apiCost: 24000,
    projectedRoi: 528500,
    risk: "Low",
    status: "Active Deployment",
    adoptionRate: 76,
    utilisationRate: 84,
    weeklyActiveUsers: 190,
    kpiTarget: "Straight-Through Processing 91%",
    leadArchitect: "Sarah Jenkins",
    topologyId: "topo-02",
    models: ["Azure Document Intelligence v4.0", "GPT-4o"]
  },
  {
    id: "init-04",
    title: "M365 Enterprise Knowledge Synthesizer (Teams Copilot)",
    department: "Human Resources & Legal",
    problem: "Employees spend ~3.4 hours/week searching across disjointed intranet policies, SharePoint PDFs, and Teams channels for benefits and compliance guidance.",
    cycleTimeReduction: "3.4h/wk → 0.4h/wk (-88%)",
    stack: "Microsoft 365 Copilot Custom Engine + Graph API + Purview",
    feasibility: 92,
    hoursSaved: 14200,
    hourlyRate: 60,
    apiCost: 32000,
    projectedRoi: 820000,
    risk: "High",
    status: "Pilot (1,200 Users)",
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
    stack: "Dynamics 365 Field Service + Azure OpenAI + Offline Phi-4",
    feasibility: 85,
    hoursSaved: 5100,
    hourlyRate: 80,
    apiCost: 19000,
    projectedRoi: 389000,
    risk: "Medium",
    status: "Discovery & Blueprint",
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
    stack: "Azure OpenAI + Semantic Kernel + Azure AI Search",
    feasibility: 93,
    hoursSaved: 5400,
    hourlyRate: 85,
    apiCost: 15000,
    projectedRoi: 444000,
    risk: "High",
    status: "Discovery & Blueprint",
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
    title: "Procure-to-Pay Three-Way Match Exception Resolver",
    department: "Supply Chain & Logistics",
    problem: "M365 & Power Automate logs show 19% of PO goods receipts require manual email follow-ups between warehouse leads and AP clerks.",
    cycleTimeReduction: "48h → 8m (-99%)",
    stack: "Copilot Studio + Power Automate + Dataverse",
    feasibility: 95,
    hoursSaved: 3900,
    hourlyRate: 60,
    apiCost: 15000,
    projectedRoi: 219000,
    risk: "Low",
    status: "Discovery & Blueprint",
    adoptionRate: 40,
    utilisationRate: 70,
    weeklyActiveUsers: 72,
    kpiTarget: "Auto-Match Rate 96.5%",
    leadArchitect: "Marcus Vance",
    topologyId: "topo-01",
    models: ["Azure OpenAI GPT-4o-mini", "Power Automate Process Mining"]
  }
];

export const AGENT_TOPOLOGIES = [
  {
    id: "topo-01",
    name: "Enterprise Multi-Agent Customer Support Swarm",
    framework: "Microsoft Semantic Kernel (C# / Python)",
    targetHost: "Azure Container Apps + Copilot Studio",
    ptuCapacity: 100,
    maxReplicas: 16,
    semanticCache: true,
    nodes: [
      {
        id: "node-triage",
        role: "Triage & Intent Classifier",
        avatar: "⚡",
        model: "Azure OpenAI GPT-4o-mini",
        desc: "Parses customer sentiment, language, urgency, and extracts core issue entities.",
        tools: ["Semantic Kernel Intent Filter", "Content Safety Shield"]
      },
      {
        id: "node-rag",
        role: "Knowledge Grounding Agent",
        avatar: "🔍",
        model: "Azure AI Search (Hybrid + Semantic Ranker)",
        desc: "Executes vector search over SharePoint policy store and Dynamics KB articles.",
        tools: ["Azure AI Search Plugin", "Purview Data Boundary Validator"]
      },
      {
        id: "node-action",
        role: "Dataverse Transaction Executor",
        avatar: "⚙️",
        model: "Semantic Kernel Custom Native Plugin",
        desc: "Creates/updates service cases in Dataverse, triggers escalation webhooks.",
        tools: ["Dataverse Web API Connector", "SAP BAPI RFC Gateway"]
      },
      {
        id: "node-reviewer",
        role: "Responsible AI Supervisor",
        avatar: "🛡️",
        model: "Azure AI Content Safety + Guardrail",
        desc: "Verifies hallucination index, checks PII redaction, ensures SLA compliance.",
        tools: ["Purview Sensitivity Inspector", "Tone & Empathy Evaluator"]
      }
    ]
  },
  {
    id: "topo-02",
    name: "Autonomous Financial Document Auditor",
    framework: "Azure AI Agent Service + AutoGen v0.4",
    targetHost: "Azure Functions (Isolated Worker)",
    ptuCapacity: 150,
    maxReplicas: 24,
    semanticCache: true,
    nodes: [
      {
        id: "node-ocr",
        role: "Doc Intelligence Extractor",
        avatar: "📄",
        model: "Azure Document Intelligence v4.0",
        desc: "Extracts key-value pairs, nested invoice line items, and barcodes.",
        tools: ["Doc Intelligence Prebuilt-Invoice"]
      },
      {
        id: "node-erp",
        role: "SAP Ledger Reconciler",
        avatar: "🏦",
        model: "AutoGen AssistantAgent",
        desc: "Cross-checks PO numbers against SAP S/4HANA purchase orders.",
        tools: ["SAP OData Connector", "Azure Key Vault Managed Identity"]
      },
      {
        id: "node-eval",
        role: "Audit Signoff Agent",
        avatar: "⚖️",
        model: "Azure OpenAI o3-mini",
        desc: "Evaluates tolerance thresholds (under $5,000 auto-approves; flags anomalies).",
        tools: ["Fraud Detection Heuristics", "Teams Approval Webhook"]
      }
    ]
  },
  {
    id: "topo-03",
    name: "Global Supply Chain Disruption & Re-routing Mesh",
    framework: "Azure AI Agent Service + Microsoft Fabric",
    targetHost: "Azure Kubernetes Service (AKS) + Fabric OneLake",
    ptuCapacity: 120,
    maxReplicas: 20,
    semanticCache: true,
    nodes: [
      {
        id: "node-ingest",
        role: "OneLake Telemetry Watcher",
        avatar: "🌐",
        model: "Fabric Real-Time Intelligence",
        desc: "Monitors global port congestion streams, weather alerts, and carrier EDI feeds.",
        tools: ["Fabric Eventstream Connector", "OneLake Delta Reader"]
      },
      {
        id: "node-sim",
        role: "Route Optimization Reasoner",
        avatar: "🧭",
        model: "Azure OpenAI o3-mini",
        desc: "Simulates alternative freight corridors, customs lead times, and landed cost impact.",
        tools: ["SAP S/4HANA Inventory API", "Azure Maps Route Matrix"]
      },
      {
        id: "node-dispatch",
        role: "Logistics Execution Agent",
        avatar: "🚢",
        model: "Semantic Kernel Process Framework",
        desc: "Updates purchase order delivery schedules and dispatches Teams alerts to regional planners.",
        tools: ["SAP BAPI PO Updater", "Adaptive Card Teams Broadcaster"]
      }
    ]
  },
  {
    id: "topo-04",
    name: "M365 Enterprise Knowledge Synthesizer",
    framework: "M365 Copilot Custom Engine + Graph API",
    targetHost: "Microsoft Teams + Azure App Service",
    ptuCapacity: 200,
    maxReplicas: 32,
    semanticCache: true,
    nodes: [
      {
        id: "node-acl",
        role: "Entra ID Claims & ACL Trimmer",
        avatar: "🔐",
        model: "Microsoft Graph Security Trimmer",
        desc: "Validates user Entra ID group claims and Purview sensitivity clearance prior to retrieval.",
        tools: ["Entra ID OBO Token Exchange", "Purview Sensitivity Validator"]
      },
      {
        id: "node-synth",
        role: "Cross-Tenant Knowledge Synthesizer",
        avatar: "📚",
        model: "Azure OpenAI GPT-4o",
        desc: "Synthesizes policy citations across SharePoint, Viva Engage, and Confluence connectors.",
        tools: ["Microsoft Graph Connector", "Azure AI Search Semantic Ranker"]
      },
      {
        id: "node-cite",
        role: "Citation & Groundedness Verifier",
        avatar: "✅",
        model: "Azure AI Content Safety Groundedness API",
        desc: "Verifies every policy claim maps to an immutable SharePoint document URL.",
        tools: ["Groundedness Detection Shield", "Audit Telemetry Logger"]
      }
    ]
  },
  {
    id: "topo-05",
    name: "Field Service Edge Diagnostic Co-worker",
    framework: "Dynamics 365 + ONNX Runtime Edge Mesh",
    targetHost: "Surface Copilot+ PC (NPU) + Azure IoT Operations",
    ptuCapacity: 50,
    maxReplicas: 12,
    semanticCache: false,
    nodes: [
      {
        id: "node-iot",
        role: "IoT Telemetry Anomaly Detector",
        avatar: "📡",
        model: "Azure IoT Operations Edge Agent",
        desc: "Analyzes equipment vibration and thermal telemetry streams from field assets.",
        tools: ["Azure IoT MQ Broker", "Time-Series Anomaly Detector"]
      },
      {
        id: "node-edge-slm",
        role: "Offline Schematic Diagnostic SLM",
        avatar: "🛠️",
        model: "Phi-4 Multimodal ONNX (Local NPU)",
        desc: "Runs zero-latency multimodal visual inspection and schematic lookup without cloud connectivity.",
        tools: ["ONNX Runtime GenAI", "Local Vector Cache"]
      },
      {
        id: "node-parts",
        role: "Dynamics 365 Parts & Dispatch Sync",
        avatar: "🚚",
        model: "Copilot Studio Field Service Plugin",
        desc: "Reserves spare parts in nearest regional depot and updates technician work order.",
        tools: ["Dynamics 365 Field Service API", "Offline Sync Queue"]
      }
    ]
  }
];

export const ENTERPRISE_INTEGRATIONS = [
  {
    name: "Microsoft 365 Graph API",
    category: "Productivity & Communications",
    status: "Healthy",
    latency: "42ms",
    endpoint: "https://graph.microsoft.com/v1.0",
    security: "Entra ID OAuth2 Token Exchange",
    syncedRecords: "1.4M Messages / Day",
    purviewBoundary: "Enforced (Group Sensitive Label)",
    businessProcess: "HR & Legal Policy Knowledge Synthesis (init-04)"
  },
  {
    name: "Microsoft Dataverse (Dynamics 365)",
    category: "CRM & ERP Core",
    status: "Healthy",
    latency: "38ms",
    endpoint: "https://contoso.crm.dynamics.com/api/data/v9.2",
    security: "Managed Identity (App Registration)",
    syncedRecords: "480k Case Entities",
    purviewBoundary: "Enforced (Role-Based Column Masking)",
    businessProcess: "Autonomous L1 Customer Case Triage (init-01)"
  },
  {
    name: "Microsoft Fabric OneLake",
    category: "Unified Data Mesh",
    status: "Healthy",
    latency: "64ms",
    endpoint: "onelake.dfs.fabric.microsoft.com/ContosoWorkspace",
    security: "Entra ID Storage RBAC",
    syncedRecords: "12.8 TB Parquet Delta",
    purviewBoundary: "Enforced (Lakehouse Classification)",
    businessProcess: "Global Supply Chain Disruption Re-routing (init-02)"
  },
  {
    name: "Azure AI Search (Hybrid + Semantic)",
    category: "Grounding & Vector Index",
    status: "Healthy",
    latency: "28ms",
    endpoint: "https://contoso-ai-search.search.windows.net",
    security: "Keyless Managed Identity",
    syncedRecords: "920k Vectorized Chunks",
    purviewBoundary: "Index Filtered by User ACL",
    businessProcess: "Enterprise-Wide Semantic Grounding Mesh (All Agents)"
  },
  {
    name: "SAP S/4HANA OData Gateway",
    category: "Enterprise ERP",
    status: "Healthy",
    latency: "110ms",
    endpoint: "https://erp.internal.contoso.com/sap/opu/odata/sap",
    security: "mTLS + Entra ID Hybrid Gateway",
    syncedRecords: "185k Purchase Orders",
    purviewBoundary: "Enforced (Financial Boundary)",
    businessProcess: "Automated Invoice & PO Reconciliation (init-03)"
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
    title: "Continuous Drift & Model Card Version Logging",
    description: "Maintain immutable audit logs in Azure Log Analytics for every model deployment revision, system prompt change, and tool definition.",
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
    tag: "Autonomous Orchestration",
    title: "Azure AI Agent Service Integration with Copilot Studio",
    source: "Microsoft Ignite / Azure AI Product Group",
    summary: "Unified developer experience connecting declarative Copilot Studio agents with enterprise code-first Semantic Kernel backends.",
    impact: "Recommendation: Transition Custom HR Copilot to hybrid Agent Service to unlock native multi-turn memory without manual Cosmos DB state management.",
    readiness: "Generally Available (GA)",
    linkedInitiativeId: "init-04",
    linkedInitiativeName: "M365 Enterprise Knowledge Synthesizer (init-04)",
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
