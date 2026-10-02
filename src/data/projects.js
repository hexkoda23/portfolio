// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio projects.
// `featured: true` projects appear in the scatter gallery & home.
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'oyela',
    featured: true,
    title: 'Oyela — Family Systems Engineering Platform',
    subtitle: 'AI Assessment, Reporting & Coaching Platform',
    status: 'Live · oyela.ai',
    kind: 'client',
    category: 'Full-Stack Product Engineering',
    domain: 'oyela.ai',
    year: '2025 — Present',
    role: 'Lead engineer, end-to-end',
    description:
      'oyela.ai — a culturally-aware family-systems assessment platform. People take psychometric assessments, pay to unlock, and receive 23+ page Claude-written diagnostic reports; coaches, practitioners and organisations each get their own portal.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Claude AI', 'WeasyPrint', 'Stripe'],
    metrics: [
      ['6', 'Assessment pathways'],
      ['8', 'FSE scoring systems'],
      ['23+', 'Pages per AI report'],
      ['440+', 'Commits shipped'],
    ],
    overview:
      'Oyela ("Illumination for a Better Human Experience") is the production platform for the Family Systems Engineering™ framework, built for Praise Fowowe International. Users pick a pathway — Marital, Next Chapter Marriage, Premarital, Parenting, Child/Teen, or Executive Wellness — answer guided modules, and receive long-form diagnostic reports on screen, as PDF, and by email. Around that core sit a free Oyela Pulse scan, a coach directory and marketplace, practitioner client links and family bundles, partner-linked couple assessments, a free Human Performance Genome™ corporate pilot for HR teams, and an admin operations console.',
    whyImpressive:
      'This is a real, revenue-generating product with real money and real clinical stakes. Every report package has its own builder that drives Claude to author sections matched word-for-word to client-approved samples, then typesets them with WeasyPrint — and the pipeline refuses to pass a degraded narrative off as a finished one. Payments moved from Mainstack to Stripe with webhook + on-return verification, exact amount/currency matching, atomic unlock claims and idempotent emails, so a forged webhook can never unlock a report.',
    coreConcepts: [
      'Psychometric Scoring Engines',
      'AI Long-Form Report Generation',
      'PDF Typesetting Pipelines',
      'Payment Verification & Idempotency',
      'Couple-Linked Data Flows',
      'Multi-Portal Roles (user, coach, org, admin)',
      'Cloudflare-Safe Long-Running Jobs'
    ],
    techStack: ['React (CRA + Craco)', 'Tailwind + shadcn/Radix', 'FastAPI (Python)', 'MongoDB (motor)', 'Claude API', 'WeasyPrint', 'Stripe Checkout', 'Resend email', 'Google OAuth'],
    features: [
      'Six assessment pathways scored across 8 Family Systems Engineering systems',
      'Per-package Claude report builders producing 23+ page narrative reports',
      'Combined couple report that waits for both partners, then merges their results',
      'Free Oyela Pulse scan — twelve statements across four systems, no account',
      'Human Performance Genome™ corporate pilot: org staff links + private HR results dashboard',
      'Stripe checkout with webhook + return verification and fail-closed amount matching',
      'Coach directory, join-as-coach onboarding and intro videos',
      'Practitioner credit links and family bundles for client assessments',
      'Regional NGN/USD pricing with country detection and multi-language UI',
      'Admin console: orders, stuck reports, report-engine diagnostics, testing-access codes'
    ],
    problemStatement:
      'Families and couples seeking structured relationship insight had no culturally-aware digital tool. Existing assessments were western-centric, produced shallow generic output, and needed a coach to interpret them by hand. The client needed clinical-grade narrative reports produced automatically, priced correctly for Nigerian and international audiences, and trusted enough that coaches and HR teams would hand them to clients.',
    approach:
      'I built Oyela end-to-end: a warm editorial React front-end, a FastAPI + MongoDB backend for the catalogue, scoring, orders, coaches and organisations, and a report engine where each package has a dedicated builder. Because production sits behind Cloudflare\'s ~100s proxy timeout, report generation and download run as background jobs with a progress popup rather than one long request. Deploys follow a mandatory three-step verify routine, and every finance path is covered by simulated end-to-end tests before it touches real money.',
    deliverables: [
      'Production platform at oyela.ai (marketing, assessments, checkout, reports)',
      'Seven AI report builders matched to client-approved samples',
      'Combined couple report pipeline',
      'Stripe payment rail with verification, idempotency and admin recovery tools',
      'Coach, practitioner and organisation portals',
      'Human Performance Genome™ assessment and corporate pilot'
    ],
    limitations:
      'Next on the roadmap: the word-for-word Premarital report once the client supplies its sample, automated coach–client matching, and outcome analytics across completed assessments.',
    images: [
      '/oyela/oyela-1.jpg',
      '/oyela/oyela-2.jpg',
      '/oyela/oyela-3.jpg',
      '/oyela/oyela-4.jpg',
      '/oyela/oyela-5.jpg',
      '/oyela/oyela-6.jpg',
      '/oyela/oyela-7.jpg',
      '/oyela/oyela-8.jpg',
      '/oyela/oyela-9.jpg',
      '/oyela/oyela-10.jpg',
      '/oyela/oyela-11.jpg',
      '/oyela/oyela-12.jpg'
    ],
    github: null,
    demo: 'https://oyela.ai'
  },

  // ── Hitech Construction (in-house, internal systems: designed covers, no screenshots) ──

  {
    id: 'hitech-erp',
    featured: true,
    art: true,
    title: 'Hitech Construction ERP',
    subtitle: 'Enterprise Operations Platform',
    status: 'Hitech · In-house',
    kind: 'hitech',
    category: 'Enterprise Software Engineering',
    year: 'Jun 2026 — Present',
    role: 'Software Engineer, ERP team',
    description:
      'A role-scoped ERP for a road and civil-infrastructure contractor: workforce, biometric attendance, leave, HSE/OHS, fleet telematics, drone survey maps, quantity survey and approvals — one database, one login, nineteen roles.',
    tags: ['Django', 'PostgreSQL', 'Celery', 'Redis', 'CesiumJS', 'Power BI'],
    metrics: [
      ['19', 'Operational roles'],
      ['20+', 'ERP modules'],
      ['10', 'Scheduled jobs'],
      ['500+', 'Team commits'],
    ],
    overview:
      'Hitech Construction runs road and civil projects across many sites, with a workforce in the thousands, a large equipment fleet and drone survey operations. Before the ERP, attendance lived on biometric devices with no link to payroll, site reports were emailed spreadsheets, HSE incidents were paper forms and drone outputs sat on engineers\' laptops. The ERP pulls all of it into one auditable, role-scoped system.',
    whyImpressive:
      'It is a large, multi-developer production system with real operational weight: biometric attendance synced on a schedule, GPS positions pulled from telematics, 3D drone tilesets viewable in a browser, commercial data imported from the estimating system, and append-only audit on every approval and status change. Work moves through reviewed pull requests across a team, with UAT walkthroughs per role.',
    coreConcepts: [
      'Role-Based Access from One Module Map',
      'Scheduled Integrations (Celery Beat)',
      'HSE Leading/Lagging Indicators',
      'Geospatial & 3D Survey Data',
      'Approval Workflows & Audit Trails',
      'On-Prem Deployment'
    ],
    techStack: ['Django', 'PostgreSQL', 'Celery + Redis', 'Django REST Framework', 'CesiumJS', 'Esri basemaps', 'Wialon telematics', 'ZKBio Time', 'Power BI API'],
    features: [
      'Nineteen roles, each scoped from a single module-access map shared by menus and views',
      'Biometric attendance synced automatically from ZKTeco terminals',
      'HSE/OHS module with incident records, corrective actions and coordinator/manager dashboards',
      'Fleet positions from Wialon GPS linked to projects and sites',
      'Drone map with orthomosaics and 3D tilesets in the browser',
      'Quantity survey: BOQ, budget and valuation imports',
      'Overdue reports and unresolved approvals surface on their own',
      'Read-only Power BI API for board and ESG reporting'
    ],
    problemStatement:
      'Attendance disputes, invisible late site reports, paper HSE records, isolated fuel and equipment logs, and survey data nobody outside the survey team could open. Everyone either saw nothing or saw everything.',
    approach:
      'I work on the ERP as part of Hitech\'s engineering team. My recent work includes consolidating the HSE/OHS workflow so coordinators and managers get one dashboard instead of two, the project → area → site structure, survey daily and weekly reporting with its two survey roles, a per-person activity trail, and review fixes across HSE and accounts, all landed through reviewed PRs.',
    deliverables: [
      'Consolidated HSE/OHS workflow and role dashboards',
      'Project area hierarchy and estate commands',
      'Survey daily/weekly reporting',
      'Per-person activity trail',
      'ZKTeco / ZKBio Time attendance integration study and REST API reference'
    ],
    limitations:
      'Internal system. Shown with designed cover art instead of screenshots to protect company and employee data.',
    images: ['/hitech/hitech-erp.svg'],
    github: null,
    demo: null
  },

  {
    id: 'hitech-ai',
    featured: false,
    art: true,
    title: 'ERP AI Layer — Department Agents & RAG',
    subtitle: 'Natural-Language Questions over Company Records',
    status: 'Hitech · In-house',
    kind: 'hitech',
    category: 'Applied AI Engineering',
    year: '2026',
    role: 'Software Engineer',
    description:
      'An AI layer inside the ERP: ask in plain English, get answers drawn from records the asker is allowed to see, with citations and deep links back into the ERP. Claude does the reasoning, and a deterministic extractive fallback keeps answering when the API is unavailable.',
    tags: ['Claude', 'RAG', 'Agents', 'Django', 'NLQ'],
    metrics: [
      ['4', 'AI Django apps'],
      ['2', 'LLM backends'],
      ['Role', 'Scoped retrieval'],
      ['Always', 'Backend disclosed'],
    ],
    overview:
      'Four Django apps make up the layer. ai_core handles natural-language queries with scope enforcement, a semantic vocabulary, proposals and deep links. ai_agents adds a planner, an agent registry, streaming, follow-ups, disclosures and an evidence cache. ai_rag covers retrieval over HR documents and tabular data. ai_identity uses LLM matching to tie people and estate records together.',
    whyImpressive:
      'The design is built for trust. The hosted backend (Claude) reasons and summarises; the local backend is extractive and never composes a claim that is not literally in a retrieved record. The interface always tells the user which backend answered, and department access is enforced before retrieval, not after.',
    coreConcepts: ['Retrieval-Augmented Generation', 'Agent Planning & Routing', 'Row-Level Scope Enforcement', 'Extractive Fallback', 'Evaluation Suites for NLQ'],
    techStack: ['Python / Django', 'Claude (Anthropic API)', 'RAG over documents + tables', 'Server-sent streaming', 'Extensive test suites'],
    features: [
      'Plain-English questions across HR, HSE, fleet, survey, projects and more',
      'Department agents chosen by a planner with intent and referent tracking',
      'Answers cite records and deep-link back into the ERP',
      'Role and department scoping applied before retrieval',
      'Deterministic extractive fallback when the hosted model is unavailable',
      'Backend in use is always disclosed to the user'
    ],
    problemStatement:
      'Managers had to learn every module to answer simple questions. A chatbot that quietly fails, or leaks another department\'s data, is worse than none.',
    approach:
      'I work on this layer with the ERP team. It is split into separate apps with tests for routing, department-only access, disclosures, referents, fallback privacy and review fixes, so its behaviour can still be checked as the ERP grows.',
    deliverables: ['ai_core, ai_agents, ai_rag, ai_identity apps', 'NLQ evaluation tooling', 'Demo data for safe walkthroughs'],
    limitations: 'Internal system. Shown with designed cover art rather than screenshots.',
    images: ['/hitech/hitech-ai.svg'],
    github: null,
    demo: null
  },

  {
    id: 'hitech-paytrack',
    featured: false,
    art: true,
    title: 'Hitech PayTrack — Payroll & HRIS',
    subtitle: 'Payroll Workspace, Weekly Reports & Approvals',
    status: 'Hitech · Pilot',
    kind: 'hitech',
    category: 'Enterprise Software Engineering',
    year: 'Jul 2026 — Present',
    role: 'Software Engineer',
    description:
      'Replaces the monthly payroll Excel workflow: HR imports a ~5,200-row workbook, edits it in a multi-user spreadsheet grid with full audit, routes risky changes through review, and exports a file identical in shape to the original. HRIS weekly reporting and role dashboards sit alongside.',
    tags: ['Django', 'PostgreSQL', 'Celery', 'openpyxl', 'HRIS'],
    metrics: [
      ['~5.2k', 'Rows per workbook'],
      ['26', 'Contract columns'],
      ['1:1', 'Excel round-trip'],
      ['100%', 'Changes audited'],
    ],
    overview:
      'PayTrack treats Excel as the contract: the 26-column header row agreed with HR defines import, export and CSV paths alike, and export → re-import must produce identical values. Rows missing from a re-import are flagged, never deleted. Money is always Decimal. Down-adjustments go to a review queue, largest first, with no batch resolve.',
    whyImpressive:
      'It shows the discipline payroll demands: append-only audit, multi-user presence in a custom spreadsheet grid, background imports and exports on Celery, and the "humans decide" rule written into the code. On the HRIS side I delivered weekly-report workflows, PM review modification tracking, approval locking and project/location routing for HR.',
    coreConcepts: ['Spreadsheet Round-Tripping', 'Audit-First Data Design', 'Review & Approval Queues', 'Background Jobs', 'Role Dashboards'],
    techStack: ['Django', 'PostgreSQL', 'Celery + Redis', 'openpyxl', 'Vanilla JS grid'],
    features: [
      'Import preview and commit for the monthly workbook',
      'Spreadsheet-style grid with keyboard navigation, paste and live presence',
      'Calculation and validation with HR-confirmed formula constants',
      'Review queue for down-adjustments and anomalies',
      'Byte-for-byte shaped export back to Excel',
      'HRIS weekly reports with PM review tracking and approval locking',
      'HR routing by project and location; role-based dashboards'
    ],
    problemStatement:
      'Payroll lived in one huge spreadsheet edited by hand, with no audit, no review and no protection against silent mistakes.',
    approach:
      'A layered Django app with the import/export services built around one EXPECTED_COLUMNS list, plus pilot runbooks, backup/restore guides and a test plan for HR pilot users.',
    deliverables: ['Payroll workspace (pilot)', 'HRIS weekly reports & dashboards', 'Deployment, backup and pilot runbooks'],
    limitations: 'Internal system in controlled pilot. Shown with designed cover art rather than screenshots.',
    images: ['/hitech/hitech-paytrack.svg'],
    github: null,
    demo: null
  },

  {
    id: 'hitech-survey',
    featured: false,
    art: true,
    title: 'Survey Inventory & Asset Management',
    subtitle: 'ERP Module for the Survey Department',
    status: 'Hitech · Built',
    kind: 'hitech',
    category: 'Enterprise Software Engineering',
    year: 'Aug 2026',
    role: 'Software Engineer',
    description:
      'Moves the Survey Department off two sprawling workbooks: GNSS kits, total stations, levels, drones, radios, software licences and consumables, tracked by site, custodian and condition, with alerts for expiries and low stock.',
    tags: ['Django', 'Data Modelling', 'Inventory', 'ERP Module'],
    metrics: [
      ['16', 'Worksheets replaced'],
      ['30', 'Sites normalised'],
      ['1', 'Name per site'],
      ['Auto', 'Expiry alerts'],
    ],
    overview:
      'The real files had one site written six different ways, equipment condition buried in free text, custodian and site packed into one cell, licence keys in plain columns, and subscriptions that had expired years earlier still listed as live. The module turns that into clean, reportable data that links back to the ERP.',
    whyImpressive:
      'It is careful domain work. Normalising messy real-world data, separating custodian from site, typing equipment condition, moving secrets out of spreadsheets, and surfacing expiries and critically low stock before anyone has to notice them.',
    coreConcepts: ['Data Normalisation', 'Asset Lifecycle', 'Custody Tracking', 'Proactive Alerts'],
    techStack: ['Django', 'SQLite → PostgreSQL', 'ERP integration'],
    features: [
      'Equipment registry with typed condition (working, fault, in repair)',
      'Surveyor placement across sites and ranks',
      'Licence register with expiry alerts',
      'Consumables stock book with low-stock warnings',
      'Movement history: who took what, and when'
    ],
    problemStatement: 'Shared spreadsheets made it impossible to answer simple questions like "what is on Section 1B?"',
    approach: 'I wrote the PRD from the real workbooks first, then built the module and cleaned the deployment (no hardcoded values, no demo credentials).',
    deliverables: ['Survey inventory module', 'PRD v3.2'],
    limitations: 'Internal system. Shown with designed cover art rather than screenshots.',
    images: ['/hitech/hitech-survey.svg'],
    github: null,
    demo: null
  },

  {
    id: 'hitech-dochub',
    featured: false,
    art: true,
    title: 'Project Documentation Hub',
    subtitle: 'Controlled Documents & Auto-Generated PRDs',
    status: 'Hitech · In-house',
    kind: 'hitech',
    category: 'Knowledge Systems',
    year: 'Aug 2026',
    role: 'Software Engineer',
    description:
      'An organisational knowledge system. Construction projects get controlled documents, PRDs and decision/risk/issue/change registers with owners, versions and approvals. Software projects can upload their source and get PRD sections 01–08 written for them.',
    tags: ['Django', 'Document Control', 'Code Analysis', 'Audit'],
    metrics: [
      ['2', 'Separate workspaces'],
      ['4', 'Registers'],
      ['8', 'Auto-written PRD sections'],
      ['Every', 'Doc owned & versioned'],
    ],
    overview:
      'The Hub is not a file share. Every project follows the same structure, every document has an owner, a version and a review period, decisions are traceable, and people can find what they need. A software workspace analyses an uploaded ZIP or folder to document what the app is, its stack, its modules, its data models, how to run it, its configuration (names only, never values) and its dependencies.',
    whyImpressive: 'It combines document-control rigour with practical automation: real source code turned into readable documentation.',
    coreConcepts: ['Document Control', 'Registers & Traceability', 'Static Code Analysis', 'Role-Based Accounts'],
    techStack: ['Django', 'SQLite / PostgreSQL', 'Email onboarding'],
    features: [
      'Construction and software workspaces that never mix',
      'Controlled document taxonomy with phases and review periods',
      'Decision, risk, issue and change registers',
      'Upload a codebase → PRD sections 01–08 generated',
      'Admin-managed accounts with forced first-login password change'
    ],
    problemStatement: 'Project knowledge was scattered, unversioned and owned by no one.',
    approach: 'Taxonomy installed by migration, capabilities per account, and an analyser that reads code rather than guessing.',
    deliverables: ['Documentation Hub application'],
    limitations: 'Internal system. Shown with designed cover art rather than screenshots.',
    images: ['/hitech/hitech-dochub.svg'],
    github: null,
    demo: null
  },

  {
    id: 'ihs-vendor-portal',
    featured: true,
    title: 'IHS Procure — Enterprise Vendor Portal',
    subtitle: 'Procurement & Vendor Onboarding for IHS Towers',
    status: 'Client Work',
    kind: 'client',
    category: 'Enterprise Frontend Engineering',
    description:
      'An enterprise procurement portal where vendors onboard through a gated multi-step compliance wizard — declarations, categories, supplier forms, documents, licenses, risk scoring — then manage contracts, tenders, and performance from a live dashboard.',
    tags: ['Next.js 15', 'TypeScript', 'Enterprise UX', 'Azure DevOps', 'Docker'],
    overview:
      'IHS Procure ("Procurement, under control") is the vendor-facing portal of the ProcureAI platform built for IHS Towers — one of the largest telecom infrastructure providers in Africa. Vendors register, complete a ten-stage onboarding wizard with mandatory compliance gates (anti-bribery declarations, data privacy acknowledgment, licensing, HSSE, cyber, insurance), and land on a dashboard tracking onboarding progress, completion status per compliance area, risk rating, and audit timeline.',
    whyImpressive:
      'This is enterprise-grade delivery: a strict multi-environment git workflow (Azure DevOps + GitHub dual remotes, PRs into develop, protected main/staging), Dockerized Next.js builds, token refresh flows, OTP-verified account changes, and a compliance wizard where every stage is sequentially locked until its gate passes. It demonstrates working inside a large organization\'s engineering process — code review, branching strategy documents, sprint-based user stories.',
    coreConcepts: [
      'Gated Multi-Step Onboarding',
      'Compliance & Risk Workflows',
      'Auth with Token Refresh + OTP',
      'Protected Branch Git Workflow',
      'Dockerized CI Delivery',
      'Enterprise Design System'
    ],
    techStack: ['Next.js 15 (App Router, Turbopack)', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Query', 'Docker', 'Azure DevOps', 'Vitest'],
    features: [
      'Ten-stage onboarding wizard: declarations → categories → company type → supplier form → documents → compliance → license → risk score → review → signatory',
      'Mandatory compliance gates with per-clause acknowledgments',
      'Dashboard with onboarding progress, completion status, and risk rating',
      'Document, license, and compliance file management',
      'Risk tracker, tender, and contract operations sections',
      'Settings with OTP-verified email change and password policy enforcement',
      'Session management with refresh-token rotation',
      'Fully responsive split-screen auth experience'
    ],
    problemStatement:
      'IHS needed to replace manual vendor onboarding — scattered emails, spreadsheets, and unverifiable compliance documents — with a single portal that enforces regulatory gates before vendors can participate in sourcing events, while giving procurement teams a live view of vendor risk and readiness.',
    approach:
      'I delivered the vendor portal frontend inside an enterprise workflow: Next.js App Router with route groups for auth/protected areas, a sequentially-gated wizard driven by onboarding state from the API, React Query for server state with token refresh, and a design system matching IHS brand guidelines. Work flowed through PRs to develop with dual remotes on Azure DevOps and GitHub, backed by a documented branching strategy and sprint user stories.',
    deliverables: [
      'Vendor portal frontend (auth, onboarding wizard, dashboard, settings)',
      'Dockerfile + containerized build pipeline',
      'Branching strategy alignment across Azure DevOps and GitHub',
      'Settings & scope feature packages delivered to spec',
      'Local demo backend for isolated frontend testing'
    ],
    limitations:
      'Portal scope currently covers vendor-side flows; buyer-side sourcing modules and AI-assisted procurement scoring are the platform\'s next phases.',
    images: [
      '/ihs-vendor-portal/ihs-1-login.png',
      '/ihs-vendor-portal/ihs-2-dashboard.png',
      '/ihs-vendor-portal/ihs-5-onboarding.png',
      '/ihs-vendor-portal/ihs-3-dashboard-detail.png',
      '/ihs-vendor-portal/ihs-4-register.png'
    ],
    github: null,
    demo: null
  },

  {
    id: 'tasck',
    featured: true,
    title: 'TASCK OS — Creative Economy Operating System',
    subtitle: 'CRM, AI Deal Intelligence & Creative Portals',
    status: 'Client Work',
    kind: 'client',
    category: 'Full-Stack Product Engineering',
    description:
      '"Creativity, Managed." — the operating system for Africa\'s creative economy: an admin command centre with CRM pipeline, scraper agents and meeting intelligence, plus brand, creative, and super-creative portals covering briefs, deliverables, approvals, invoices, and wallets.',
    tags: ['React', 'FastAPI', 'MongoDB', 'AI Agents', 'CRM', 'Multi-Portal'],
    overview:
      'TASCK OS connects brands, artists, creatives, and super-creative teams through one production-ready workflow. The platform ships as multiple portals from one codebase: an Admin Control Centre (scraping, meetings, business cases, matching, delivery, finance, permissions, reporting), a Brand Portal (snapshots, approvals, documents, invoices), a Creative Portal (briefs, deliverables, wallet), and a Super Creative Portal (roster and team-earnings management). A four-stage pipeline moves every deal from signal to closure.',
    whyImpressive:
      'It is an ambitious multi-tenant product built through iterative client collaboration — V1, V2, and V3 visions merged into one direction after weekly review sessions. The system includes AI-flavored capabilities across the workflow: scraper agents for contact research, Meeting Intelligence, Alignment Snapshots, AI-generated Business Case documents, and deal simulation in an AI-native command centre.',
    coreConcepts: [
      'Multi-Portal Architecture',
      'CRM Pipeline Design',
      'AI Meeting Intelligence',
      'Scraper / Research Agents',
      'Business Case Generation',
      'Wallet & Payout Flows',
      'Role-Based Access'
    ],
    techStack: ['React 19 (CRA + Craco)', 'Tailwind + Radix UI', 'FastAPI (Python)', 'MongoDB', 'Recharts', 'JetBrains Mono / Fraunces design language'],
    features: [
      'Admin Control Centre: production command room for scraping, meetings, business cases, matching, delivery, finance, permissions, and reporting',
      'Four-stage deal pipeline with stage progression and CRM data density',
      'AI briefings, deal simulator, intelligence signals, and live operations in the v2 command centre',
      'Brand portal: campaign analytics, approval queue, health dashboard, ROI tracking, invoices',
      'Creative portal: opportunities, projects, wallet, portfolio, AI matching',
      'Super creative portal: roster delivery and team earnings tracking',
      'Meeting Intelligence and Alignment Snapshot document generation',
      'Public entry: brand enquiry, creative application, super-creative application'
    ],
    problemStatement:
      'Africa\'s creative agencies run on fragmented tools — spreadsheets for pipeline, chat apps for briefs, manual invoicing — with no system connecting brand demand to creative supply. TASCK needed one platform where deals, production, and payouts flow through a single accountable pipeline.',
    approach:
      'I built the platform iteratively with the client across recorded weekly review sessions, merging three product visions into one architecture. The frontend is a role-aware React app with distinct portal shells sharing a component system; the FastAPI + MongoDB backend models the full domain — signals, deals, projects, network, talent, revenue, messages, automations. AI features (meeting intelligence, business case authoring, matching) are woven into the operational surfaces rather than bolted on.',
    deliverables: [
      'Multi-portal platform (admin, brand, creative, super-creative)',
      'Four-stage CRM pipeline with business case workflow',
      'AI-native v2 command centre',
      'Snapshot & business case document templates',
      'Staging environment with client feedback loops'
    ],
    limitations:
      'The client feedback phase continues: snapshot template redesign, staging auth hardening, and a Framing→Planning workflow restructure are the approved next milestones.',
    images: [
      '/tasck/tasck-1.png',
      '/tasck/tasck-6.png',
      '/tasck/tasck-5.png',
      '/tasck/tasck-2.png',
      '/tasck/tasck-7.png',
      '/tasck/tasck-3.png',
      '/tasck/tasck-4.png'
    ],
    github: null,
    demo: null
  },

  {
    id: 'talent-nation',
    featured: true,
    title: 'Talent Nation — AI Engineering Fellowship Platform',
    subtitle: 'Learning, Assessment Games & Talent Placement',
    status: 'Client Work',
    kind: 'client',
    category: 'Full-Stack Platform Engineering',
    description:
      'A full-stack talent development platform for an AI Engineering Fellowship: cognitive challenge games, a seven-day readiness sprint, mission pools, knowledge trees, placement flows, and an admin console — React/Vite frontends on a NestJS + PostgreSQL + Redis backend.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'EdTech'],
    overview:
      'Talent Nation takes individuals from application to AI-engineering readiness. Candidates face a challenge built from fast cognitive games — Pattern Cascade, Logic Chains, The Anomaly, Resource Puzzle, persistence ladders — then a seven-day, six-hours-daily readiness sprint before entering the fellowship: project-based learning with mission pools, knowledge trees, remediation, and placement. Admins configure cohorts, campus devices, gate kiosks, and coin economies from a dedicated admin app.',
    whyImpressive:
      'The scope spans an entire talent pipeline — marketing site, gamified assessment engine, LMS middleware, user and admin apps, and infrastructure — delivered as a production monorepo. The launch phase (mini + main platform) shipped with feature flags, setup-password flows, placement logic, remediation, gate kiosks, and campus device management: real operational complexity, not a CRUD demo.',
    coreConcepts: [
      'Gamified Cognitive Assessment',
      'Learning Management Systems',
      'Feature-Flagged Launches',
      'Monorepo Architecture',
      'Caching & Session Infrastructure',
      'Placement & Remediation Logic'
    ],
    techStack: ['React + Vite', 'NestJS', 'PostgreSQL + Prisma', 'Redis', 'Docker Compose', 'Swagger/OpenAPI', 'LMS middleware'],
    features: [
      'Cognitive challenge games: memory, logic, pattern reading, planning, persistence',
      'Seven-day readiness sprint with guided daily work and clean submissions',
      'Fellowship pathway: mission pools, knowledge tree, project-based learning',
      'Placement and remediation flows with gate kiosks and campus devices',
      'Coin economy and setup-password onboarding',
      'Admin app for cohort configuration and long-run monitoring',
      'LMS middleware bridging external learning content',
      'Editorial marketing site with fellowship program narrative'
    ],
    problemStatement:
      'Traditional bootcamp admissions filter on credentials rather than the habits AI engineering actually needs — sharp pattern thinking, disciplined reps, and daily momentum. The client needed an assessment-to-placement pipeline that measures those habits directly and carries candidates through a structured fellowship.',
    approach:
      'I engineered the platform as a monorepo: React/Vite user and admin apps, a NestJS API with Prisma/PostgreSQL and Redis, Docker-composed infrastructure, and LMS middleware. Assessment games run as timed client experiences reporting to the scoring API; the fellowship layer gates progression through flags, missions, and remediation; and the admin app exposes cohort, device, and economy configuration.',
    deliverables: [
      'User app: marketing site, challenge games, sprint, fellowship dashboard',
      'Admin app: cohort, config, kiosk, and device management',
      'NestJS API with Prisma migrations, seeds, and Swagger docs',
      'LMS middleware integration',
      'Launch-phase rollout with feature flags (mini + main platform)'
    ],
    limitations:
      'An admin-app light-UI redesign is staged but intentionally unreleased; upcoming phases extend analytics on game telemetry and cohort outcomes.',
    images: [
      '/talent-nation/tn-app-1.png',
      '/talent-nation/tn-app-2.png',
      '/talent-nation/tn-dash.jpg',
      '/talent-nation/tn-config-1.jpg',
      '/talent-nation/tn-app-3.png',
      '/talent-nation/tn-app-4.png',
      '/talent-nation/tn-config-2.jpg',
      '/talent-nation/tn-longrun.jpg'
    ],
    github: null,
    demo: null
  },

  {
    id: 'atom',
    featured: true,
    title: 'Atom — General AI Assistant by THCO',
    subtitle: 'Premium Conversational AI Experience',
    status: 'Client Work',
    kind: 'client',
    category: 'AI Product & Frontend Craft',
    description:
      'A calm, editorial AI chat platform — serif-led interface with light and dark cinema themes, projects workspace, image generation ("Imagine"), dictation, and attachment flows — engineered for perceived performance with CSS-only animation rules.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind v4', 'Framer Motion', 'AI UX'],
    overview:
      'Atom is THCO\'s general AI assistant — "a premium African AI lab opening a set of calm, powerful gates for business work." The interface rejects the typical neon-AI look for an ivory editorial canvas with serif typography, monochrome-minimal chat surfaces, and a cinematic dark theme. Users organize work into projects, chat with markdown-rich responses, generate images, and dictate messages.',
    whyImpressive:
      'It demonstrates taste — a complete bespoke design system (warm-editorial light / cinema dark, token-driven, system-default aware) executed with performance discipline: CSS-only animation rules, an inline-SVG logo system driven by currentColor, and a live component tree. The product feels like a crafted brand, not a ChatGPT clone.',
    coreConcepts: [
      'Design-System Engineering',
      'Conversational AI UX',
      'Theme Architecture (Light/Dark/System)',
      'Perceived-Performance Optimization',
      'Markdown Rendering Pipelines'
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'react-markdown + GFM', 'Nginx + Docker'],
    features: [
      'Editorial chat interface with serif display type and monochrome surfaces',
      'Light warm-editorial and dark cinema themes with system-default detection',
      'Projects workspace for organizing conversations',
      'Imagine mode for image generation',
      'Dictation input and attachment support',
      'Quick-intent chips (Help me write, Learn about, Summarize text)',
      'Markdown + GFM rendering with code support',
      'Dockerized Nginx deployment'
    ],
    problemStatement:
      'AI chat products all look the same — dark neon dashboards with cramped sidebars. THCO wanted Atom to feel like a premium editorial product that business users trust, without sacrificing responsiveness or capability.',
    approach:
      'I built Atom\'s frontend as a token-driven design system: every color flows from theme tokens that flip between warm ivory and cinema dark, the wordmark and logo are inline SVGs inheriting currentColor, and animation follows CSS-only performance rules with Framer Motion reserved for meaningful transitions. The chat pipeline renders markdown with GFM, streams responses, and keeps the layout stable during generation.',
    deliverables: [
      'Complete chat frontend with projects, imagine, and dictation',
      'Dual-theme design system with system-preference detection',
      'Inline-SVG brand system (logo + Fredoka wordmark)',
      'Dockerized production build with Nginx config'
    ],
    limitations:
      'Atom\'s frontend currently pairs with THCO\'s gateway APIs; offline model support and mobile-native wrappers are future explorations.',
    images: [
      '/atom/atom-1.png',
      '/atom/atom-2.png',
      '/atom/atom-4.png',
      '/atom/atom-3.png'
    ],
    github: null,
    demo: null
  },

  {
    id: 'rubbersearch',
    featured: true,
    title: 'RubberSearch — Lightweight Search Engine API',
    subtitle: 'Full-Text Search & Indexing Engine',
    status: 'Published',
    kind: 'engineering',
    category: 'Backend Engineering & Search Infrastructure',
    description:
      'A lightweight search engine and data store built with .NET 9 — fast full-text search, document indexing, tenant-based API access, and relevance-ranked results, with the core engine (tokenization, inverted index, TF-IDF ranking) implemented from scratch.',
    tags: ['.NET 9', 'C#', 'Search Engine', 'REST API', 'Inverted Index'],
    overview:
      'RubberSearch is a compact full-text search engine that lets applications index documents and retrieve relevant results through a REST API. It combines document storage, tokenization, inverted indexing, API-key-based tenancy, and relevance scoring into a developer-friendly search service.',
    whyImpressive:
      'It implements the core building blocks of a search engine from scratch: n-gram tokenization, posting lists, TF-IDF-style scoring, title boosting, proximity ranking, tenant isolation, API authentication, Swagger documentation, and testable service architecture.',
    coreConcepts: ['Full-Text Search', 'Inverted Indexing', 'N-Gram Tokenization', 'TF-IDF Ranking', 'Proximity Boosting', 'Tenant-Based API Keys'],
    techStack: ['.NET 9', 'C#', 'ASP.NET Core Web API', 'Swagger / OpenAPI', 'xUnit', 'Azure App Service'],
    features: [
      'Document indexing through POST /api/index',
      'Search through GET and POST /api/search',
      'API key generation with tenant-isolated indexes',
      'Inverted index with token-to-document postings',
      'TF-IDF relevance with title and proximity boosting',
      'Swagger UI and built-in web tester',
      'Unit tests covering tokenizer and indexing behavior'
    ],
    problemStatement:
      'Small applications need fast, simple search without running a production-scale search platform. Developers need a lightweight service exposing clear APIs for prototypes, internal tools, and early-stage products.',
    approach:
      'ASP.NET Core exposes REST endpoints for indexing, searching, and key creation. Documents are tokenized into words and n-grams and stored in an inverted index; queries are scored with TF-IDF-style relevance, boosted by title matches and token proximity. API keys map tenants to isolated logical indexes.',
    deliverables: [
      'ASP.NET Core REST API deployed to Azure',
      'Tenant-aware API key authentication',
      'JSON-backed document and index repositories',
      'Static web UI for testing',
      'Unit test suite'
    ],
    limitations:
      'Optimized for development-scale workloads; future work includes persistent database storage, distributed indexing, and autocomplete.',
    images: ['/rubbersearch/rubbersearch-cover.svg'],
    github: 'https://github.com/Ugbe/Rubbersearch',
    demo: 'https://rubbersearch-bdgcheg2d4gagqau.canadacentral-01.azurewebsites.net/swagger/index.html'
  },

  {
    id: 'nysc-chatbot',
    featured: false,
    title: 'NYSC AI Chatbot',
    subtitle: 'Multilingual Intelligent Assistant',
    status: 'In Progress',
    kind: 'ai',
    category: 'Conversational AI',
    description:
      'A multilingual RAG assistant for National Youth Service Corps members — 24/7 answers on orientation, placement, and service-year queries in English, Yoruba, and Hausa.',
    tags: ['NLP', 'RAG', 'Multi-Language', 'LLM', 'Python'],
    overview:
      'The NYSC AI Chatbot bridges the information gap for corps members in Nigeria, providing real-time answers to orientation, placement, and service-year queries in major local languages, grounded in official NYSC documentation.',
    whyImpressive:
      'It addresses a large-scale accessibility challenge with a multilingual RAG system that understands Nigerian linguistic nuances — the first stage of digitalizing the corps-member experience at scale.',
    coreConcepts: ['Multilingual NLP', 'RAG Architecture', 'Source-Grounded Generation', 'Information Accessibility'],
    techStack: ['Python', 'LangChain', 'OpenAI API', 'React', 'FastAPI'],
    features: [
      '24/7 information access',
      'English, Yoruba, and Hausa support',
      'Context-aware NYSC knowledge base',
      'Source-grounded responses to prevent hallucination'
    ],
    problemStatement:
      'Corps members struggle to find accurate, timely information during their service year; language barriers further complicate access to official guidelines.',
    approach:
      'A RAG pipeline with multilingual embeddings retrieves and synthesizes information from NYSC handbooks and official sources in the user\'s preferred language.',
    deliverables: ['Interactive multilingual chatbot', 'Specialized NYSC knowledge base', 'Phase 1 deployment'],
    limitations:
      'Phase 1 covers information access; future phases add mobile deployment, portal integration, and more dialects.',
    images: [
      '/nysc-ai-chatbot/nysc1.jpg', '/nysc-ai-chatbot/nysc2.jpg', '/nysc-ai-chatbot/nysc3.jpg',
      '/nysc-ai-chatbot/nysc4.jpg', '/nysc-ai-chatbot/nysc5.jpg', '/nysc-ai-chatbot/nysc6.jpg',
      '/nysc-ai-chatbot/nysc7.jpg', '/nysc-ai-chatbot/nysc8.jpg', '/nysc-ai-chatbot/nysc9.jpg',
      '/nysc-ai-chatbot/nysc10.jpg'
    ],
    github: 'https://github.com/hexkoda23/nysc_chatbot_ai',
    demo: 'https://nysc-ai-chatbot.vercel.app/'
  },

  {
    id: '23-fashion',
    featured: true,
    title: 'TWENTY3™ — Luxury Fashion Platform',
    subtitle: 'E-commerce, Lookbook, AI Studio & Outfit Generator',
    status: 'Live',
    kind: 'product',
    category: 'Digital Product & Frontend',
    domain: '23-web.vercel.app',
    year: '2025 — 2026',
    role: 'Designer & engineer',
    description:
      'A luxury brand platform for TWENTY3™: "Wear your world." Cinematic storytelling, a full shop with product pages and garment measurements, a lookbook, an outfit generator, a 23 AI Studio for styling, accounts, subscriber emails and a looping soundtrack.',
    tags: ['React', 'Vite', 'Tailwind', 'E-commerce', 'AI Styling', 'Vercel'],
    metrics: [
      ['12+', 'Routes & experiences'],
      ['80+', 'Commits shipped'],
      ['1', 'Barcode per garment'],
      ['AI', 'Styling studio'],
    ],
    overview:
      'TWENTY3™ is "luxury personalised for you". It is a living brand platform where every garment carries its own barcode identity and story. Visitors move from a cinematic hero into new arrivals and unreleased concepts, browse a shop of signature pieces, open product pages with per-type garment measurement diagrams and a size guide, flip through an editorial lookbook, build fits in the outfit generator, and get styling advice in the 23 AI Studio.',
    whyImpressive:
      'It treats brand and product as one problem. The scroll choreography, the Archivo Black / serif pairing and the barcode storytelling give it a luxury editorial feel, and underneath sit real commerce mechanics: a persistent cart, accounts with password visibility and reset, weekly subscriber emails, garment measurements and an assistant that knows the catalogue.',
    coreConcepts: ['Brand-Led Product Design', 'Scroll Choreography', 'Commerce UX', 'AI Styling Assistant', 'Component Design System'],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Serverless API routes', 'Vercel'],
    features: [
      'Cinematic hero, new arrivals and unreleased-concepts storytelling',
      'Shop grid with signature pieces and product detail pages',
      'Garment measurement diagrams per garment type, plus a size guide',
      'Editorial lookbook with scattered polaroid layout',
      'Outfit generator with a wardrobe panel and a daily planner',
      '23 AI Studio: stylist, try-on, challenges, trends and drop concepts',
      'Accounts with sign-up, password reset and weekly subscriber emails',
      'Catalogue-aware shopping assistant and a looping soundtrack with play/pause'
    ],
    problemStatement:
      'The brand needed a digital home that communicates its ethos and gives people tools to style and belong, so admiration turns into participation and purchase.',
    approach:
      'A modular, component-driven UI keeps the aesthetic consistent across shop, lookbook, generator and studio, while the information architecture leads from story to product to checkout. The barcode identity system ties each physical piece to its digital story.',
    deliverables: ['Live brand + commerce site', 'Outfit generator & AI Studio', 'Measurement and size-guide system', 'Account and subscriber email flows'],
    limitations:
      'Next: live inventory sync, payments at scale and personalisation models trained on styling history.',
    images: [
      '/23/23-1.jpg', '/23/23-2.jpg', '/23/23-3.jpg', '/23/23-4.jpg', '/23/23-5.jpg', '/23/23-6.jpg',
      '/23/23-7.jpg', '/23/23-8.jpg', '/23/23-9.jpg', '/23/23-10.jpg', '/23/23-11.jpg', '/23/23-12.jpg'
    ],
    github: 'https://github.com/hexkoda23/23-web',
    demo: 'https://23-web.vercel.app/'
  },

  {
    id: 'smart-shop',
    featured: false,
    title: 'Smart Provision Shop Management System',
    subtitle: 'AI-Powered Retail Assistant',
    status: 'Published',
    kind: 'ai',
    category: 'Retail Technology',
    description:
      'A web-based shop management system with AI insights — sales tracking, inventory, low-stock alerts, and a chat assistant that turns shop data into restocking decisions.',
    tags: ['AI Assistant', 'Inventory', 'Analytics', 'React'],
    overview:
      'Digitizes small retail operations: sales recording updates inventory in real time while an AI layer analyzes patterns to generate insights, restock recommendations, and natural-language answers about business performance.',
    whyImpressive:
      'It democratizes business intelligence for everyday entrepreneurs, wrapping predictive analytics in an interface simple enough for paper-ledger users.',
    coreConcepts: ['Sales Trend Analysis', 'Predictive Restocking', 'NL Business Queries', 'Dashboard Design'],
    techStack: ['React / Next.js', 'Python', 'FastAPI', 'PostgreSQL / SQLite', 'OpenAI API', 'Pandas'],
    features: [
      'Simple sales recording with live stock tracking',
      'Low-stock alerts and profit summaries',
      'AI chat assistant for business queries',
      'Smart restock recommendations',
      'Mobile-friendly responsive design'
    ],
    problemStatement:
      'Small shop owners manage on paper or basic spreadsheets, making it hard to track inventory and make informed restocking decisions.',
    approach:
      'Transactions update inventory automatically; an AI component analyzes sales patterns and stock levels to generate recommendations, exposed through a chat interface.',
    deliverables: ['Responsive web app', 'AI chat assistant', 'Analytics dashboard', 'Restock engine'],
    limitations:
      'Single-shop focus today; multi-user support, WhatsApp summaries, and supplier integration are planned.',
    images: [
      '/ai-shop/Notable1.jpg', '/ai-shop/Notable2.jpg', '/ai-shop/Notable3.jpg', '/ai-shop/Notable4.jpg',
      '/ai-shop/Notable5.jpg', '/ai-shop/Notable6.jpg', '/ai-shop/Notable7.jpg', '/ai-shop/Notable8.jpg',
      '/ai-shop/Notable9.jpg', '/ai-shop/Notable10.jpg', '/ai-shop/Notable11.jpg'
    ],
    github: 'https://github.com/hexkoda23/AI-Powered-smart-shop-manager',
    demo: 'https://ai-powered-smart-shop-manager-2l9n.vercel.app/'
  },

  {
    id: 'study-planner',
    featured: false,
    title: 'Intelligent AI Study Planner',
    subtitle: 'Adaptive Learning Agent',
    status: 'Published',
    kind: 'ai',
    category: 'Adaptive Learning Systems',
    description:
      'An AI agent that creates personalized study plans and adapts them weekly based on progress, preferences, and long-term memory of the learner.',
    tags: ['AI Agent', 'Vector DB', 'LLM', 'Next.js'],
    overview:
      'Combines LLM reasoning with long-term memory to create study plans that evolve with the learner\'s progress, preferences, and goals.',
    whyImpressive:
      'True agent-like behavior: context maintained over time, intelligent decisions, and strategy adaptation from user feedback.',
    coreConcepts: ['Long-term Memory', 'Vector Databases', 'LLM Reasoning', 'User Profiling'],
    techStack: ['Python', 'Pinecone / FAISS', 'FastAPI', 'OpenAI API', 'React / Next.js', 'PostgreSQL'],
    features: [
      'Personalized plan generation from goals and constraints',
      'Weekly adaptive updates from progress feedback',
      'Dynamic difficulty adjustment',
      'Progress visualization and multi-goal support'
    ],
    problemStatement:
      'Static study tools don\'t adapt to individual learning styles, pace, or changing circumstances.',
    approach:
      'Vector stores hold user profiles and learning history; LLM reasoning generates plans; weekly feedback refines future recommendations.',
    deliverables: ['Onboarding flow', 'Plan generation & update system', 'Progress dashboard', 'Management API'],
    limitations:
      'Focused on structured goals; LMS integration and collaborative study groups are future work.',
    images: ['/ai-study/ai-study1.jpg', '/ai-study/ai-study2.jpg', '/ai-study/ai-study3.jpg', '/ai-study/ai-study4.jpg'],
    github: null,
    demo: null
  },

  {
    id: 'resume-match',
    featured: false,
    title: 'AI Resume & Job Match Scoring System',
    subtitle: 'NLP & Semantic Analysis',
    status: 'Published',
    kind: 'ai',
    category: 'Natural Language Processing',
    description:
      'Analyzes CVs against job descriptions to produce match scores, missing-skill gaps, and personalized improvement recommendations using transformer embeddings.',
    tags: ['NLP', 'Embeddings', 'FastAPI', 'React'],
    overview:
      'Leverages semantic similarity to assess candidate-job fit, giving job seekers actionable feedback and recruiters an objective screening signal.',
    whyImpressive:
      'Solves a real hiring problem with a hybrid of embeddings-based semantics and interpretable rule-based analysis.',
    coreConcepts: ['Text Embeddings', 'Semantic Similarity', 'Cosine Similarity', 'Hybrid ML Logic'],
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'Sentence Transformers', 'React', 'TypeScript'],
    features: [
      'Automated CV and JD analysis',
      'Match percentage via semantic similarity',
      'Missing-skills gap analysis',
      'Personalized improvement recommendations',
      'REST API for integration'
    ],
    problemStatement:
      'Job seekers don\'t understand rejections; recruiters burn hours manually screening resumes.',
    approach:
      'Transformer embeddings vectorize CVs and job descriptions; cosine similarity plus rule-based skill analysis produce scores and gap reports.',
    deliverables: ['Web app', 'Documented REST API', 'Evaluation metrics', 'Deployment guide'],
    limitations:
      'Non-standard CV formats remain challenging; domain-specific embeddings and ATS integrations are planned.',
    images: [
      '/ai-resume/ai-resume1.jpg', '/ai-resume/ai-resume2.jpg', '/ai-resume/ai-resume3.jpg',
      '/ai-resume/ai-resume4.jpg', '/ai-resume/ai-resume5.jpg', '/ai-resume/ai-resume6.jpg'
    ],
    github: null,
    demo: null
  },

  {
    id: 'fraud-detection',
    featured: false,
    title: 'AI Fraud & Anomaly Detection System',
    subtitle: 'Unsupervised Learning',
    status: 'Published',
    kind: 'ai',
    category: 'Machine Learning Engineering',
    description:
      'Detects unusual transactions and behavior patterns in real time with Isolation Forests and autoencoders — no labeled fraud examples required.',
    tags: ['ML', 'Anomaly Detection', 'Unsupervised Learning', 'Streamlit'],
    overview:
      'Identifies suspicious patterns in transaction data using unsupervised techniques, with visual anomaly plots, configurable thresholds, and evaluation tooling.',
    whyImpressive:
      'Anomaly detection is critical in finance and e-commerce; this demonstrates production-minded ML engineering on a hard, unlabeled problem.',
    coreConcepts: ['Isolation Forest', 'Autoencoders', 'Feature Engineering', 'Anomaly Scoring'],
    techStack: ['Python', 'Scikit-learn', 'Pandas / NumPy', 'Streamlit', 'Plotly', 'FastAPI'],
    features: [
      'Real-time anomaly detection on transaction streams',
      'Visual anomaly plots and heatmaps',
      'Configurable sensitivity thresholds',
      'Precision/recall evaluation tooling',
      'Batch and streaming modes'
    ],
    problemStatement:
      'Rule-based fraud systems are easily circumvented, and supervised learning needs labeled fraud data that rarely exists for emerging patterns.',
    approach:
      'Isolation Forests surface outliers in engineered feature spaces; autoencoders catch complex patterns; anomaly scores feed thresholded alerts.',
    deliverables: ['Interactive Streamlit dashboard', 'Evaluation reports', 'Real-time detection API', 'Synthetic dataset generation'],
    limitations:
      'Requires careful threshold tuning; adaptive thresholds and ensembles are future work.',
    images: [
      '/ai-fruad/ai-fruad1.jpg', '/ai-fruad/ai-fruad2.jpg', '/ai-fruad/ai-fruad3.jpg',
      '/ai-fruad/ai-fruad4.jpg', '/ai-fruad/ai-fruad5.jpg'
    ],
    github: null,
    demo: null
  },

  {
    id: 'business-insight',
    featured: false,
    title: 'AI Business Insight Generator',
    subtitle: 'Data-Driven Decision Making',
    status: 'Published',
    kind: 'ai',
    category: 'Business Intelligence',
    description:
      'Turns uploaded CSV data into executive-level insights: automated trend detection, plain-language summaries, and actionable recommendations with interactive charts.',
    tags: ['Data Analysis', 'LLM Reasoning', 'Business Intelligence', 'Visualization'],
    overview:
      'Combines statistical analysis with LLM reasoning to produce executive-level insights from raw data — trends, anomalies, and recommendations, visualized interactively.',
    whyImpressive:
      'Bridges raw data and strategic decision-making: complex datasets become plain-language insight reports leaders can act on.',
    coreConcepts: ['Automated Insight Generation', 'Trend Detection', 'Statistical Analysis', 'NL Summarization'],
    techStack: ['Python', 'Pandas', 'OpenAI API', 'Plotly', 'Streamlit', 'NumPy'],
    features: [
      'CSV upload with automatic type detection',
      'Automated insight and trend generation',
      'Executive summary authoring',
      'Interactive charts and downloadable reports'
    ],
    problemStatement:
      'Business leaders receive raw data reports that take significant time and expertise to interpret.',
    approach:
      'Statistical analysis finds patterns and anomalies; an LLM converts findings into natural-language insights supported by generated visualizations.',
    deliverables: ['Upload interface', 'Insight report generation', 'Visualization dashboard', 'PDF/HTML export'],
    limitations:
      'Works best with structured data; predictive analytics and tool integrations (Salesforce, GA) are planned.',
    images: [
      '/ai-business/ai-business1.jpg', '/ai-business/ai-business2.jpg', '/ai-business/ai-business3.jpg',
      '/ai-business/ai-business4.jpg', '/ai-business/ai-business5.jpg', '/ai-business/ai-business6.jpg',
      '/ai-business/ai-business7.jpg', '/ai-business/ai-business8.jpg', '/ai-business/ai-business9.jpg'
    ],
    github: null,
    demo: null
  }
]

export const featuredProjects = projects.filter(p => p.featured)
export const hitechProjects = projects.filter(p => p.kind === 'hitech')
export const clientProjects = projects.filter(p => p.kind === 'client')
export const getProject = id => projects.find(p => p.id === id)
/** Short address-bar label for a project's browser-frame mockup. */
export const frameLabel = p => p.domain || p.title.split(' — ')[0]
/** Smaller copy of a screenshot, for filmstrips. */
export const thumb = src => src.replace(/\/([^/]+\.jpg)$/, '/thumbs/$1')
export default projects
