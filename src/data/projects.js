// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio projects.
// `featured: true` projects appear in the scatter gallery & home.
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'oyela',
    featured: true,
    title: 'Oyela — Family Systems Engineering Platform',
    subtitle: 'AI-Powered Assessment & Coaching Platform',
    status: 'Client Work',
    kind: 'client',
    category: 'Full-Stack Product Engineering',
    description:
      'A culturally-aware relationship assessment platform that turns guided diagnostics into narrative AI coaching reports — covering marital, premarital, parenting, teen, and executive wellness pathways, with payments, coach marketplace, and PDF report generation.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Claude AI', 'WeasyPrint', 'Payments'],
    overview:
      'Oyela ("Illumination for Every Family") is a production client platform for Family Systems Engineering diagnostics. Users choose an assessment pathway — Marital, Singles, Next Chapter Marriage, Parenting, Teen, or Executive Wellness — answer guided modules in 7–10 minutes, and receive coach-ready narrative reports scored across 8 FSE systems. The platform handles the entire journey: multi-language marketing site, checkout with regional currency detection (NGN/USD), partner-linked couple assessments, a coach directory, and an admin operations console.',
    whyImpressive:
      'This is a real, revenue-generating client product — not a demo. It combines assessment engine design, AI-authored long-form report generation matched word-for-word to clinical templates, PDF typesetting with WeasyPrint, payment orchestration through Mainstack, and couple-linking flows where two partners\' results merge into one combined report. Every report package has its own deterministic Claude-powered builder to guarantee 15+ page professional output.',
    coreConcepts: [
      'Assessment Engine Design',
      'AI Narrative Report Generation',
      'PDF Typesetting Pipelines',
      'Payment Integration',
      'Multi-Currency Pricing',
      'Couple-Linked Data Flows',
      'Coach Marketplace'
    ],
    techStack: ['React 19 (CRA + Craco)', 'Tailwind + Radix UI', 'FastAPI (Python)', 'MongoDB', 'Claude API', 'WeasyPrint', 'Mainstack Payments', 'Docker'],
    features: [
      'Six assessment pathways scored across 8 FSE scoring systems',
      'AI-authored narrative reports (15+ pages) matched to clinical sample templates',
      'Combined couple reports that merge two partners\' assessment data',
      'Regional pricing with automatic NGN/USD currency detection',
      'Mainstack payment integration with confirmation tracking',
      'Coach directory, invites, and join-as-coach onboarding',
      'Partner invite links for couple assessments',
      'Admin console for orders, reports, and content operations',
      'Regenerate-on-download report pipeline with silent backfill of past reports'
    ],
    problemStatement:
      'Families and couples seeking structured relationship insight had no culturally-aware digital tool: existing assessments were western-centric, produced shallow generic outputs, and required manual coach interpretation. The client needed assessments that produce clinical-grade narrative reports automatically, priced correctly for Nigerian and international audiences.',
    approach:
      'I built the platform end-to-end: a React front-end with a warm editorial design system, a FastAPI + MongoDB backend for assessments, scoring, orders, and coach data, and a per-package AI report pipeline where each of the seven report types has its own builder that drives Claude to author sections matching approved clinical samples, then typesets them to PDF with WeasyPrint. Payments route through Mainstack with regional currency logic, and couple flows link two assignment records into one combined report.',
    deliverables: [
      'Production web platform (marketing site + assessment engine + checkout)',
      'Seven AI report builders matched word-for-word to client-approved samples',
      'Combined marital/couple report pipeline',
      'Coach directory and onboarding flows',
      'Admin operations console',
      'Payment integration with regional pricing'
    ],
    limitations:
      'Payments currently route through one general Mainstack link while six branded fixed-price pages await activation. Next phases include automated coach-client matching and deeper analytics on assessment outcomes.',
    images: [
      '/oyela/oyela-1.png',
      '/oyela/oyela-2.png',
      '/oyela/oyela-6.png',
      '/oyela/oyela-3.png',
      '/oyela/oyela-4.png',
      '/oyela/oyela-5.png',
      '/oyela/oyela-7.png',
      '/oyela/oyela-8.png'
    ],
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
    featured: false,
    title: '23 — Fashion Platform & Brand Experience',
    subtitle: 'E-commerce, Lookbook & Outfit Generator',
    status: 'Published',
    kind: 'product',
    category: 'Digital Product & Frontend',
    description:
      'A luxury brand experience for TWENTY3™ blending shopping, editorial storytelling, and an outfit generator — a platform built to inspire, not just sell.',
    tags: ['E-commerce', 'Fashion UX', 'React', 'Tailwind', 'Outfit Generator'],
    overview:
      '23 is more than a clothing website — a living brand platform with a cinematic lookbook, curated shop drops, and an outfit generator that turns browsing into creation. The design language pairs Archivo Black wordmarks with DM Serif Display headlines for a luxury editorial feel.',
    whyImpressive:
      'It fuses brand storytelling with product utility: design-system thinking, performance-first frontend engineering, and an interaction model that deepens engagement with the brand.',
    coreConcepts: ['Conversion & Community UX', 'Component-Driven Design System', 'Stateful Interactions', 'Outfit Suggestion Logic'],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    features: [
      'Cinematic hero narrative and editorial lookbook',
      'Shop grid for drops and capsules',
      'Outfit generator with wardrobe panels and guided styling',
      'Persistent cart and quick-view interactions',
      'Resilient try-on flow that never hard-fails'
    ],
    problemStatement:
      'The brand needed a digital home that communicates ethos and gives people tools to style and belong — a path from admiration to participation.',
    approach:
      'A modular, component-driven UI keeps the aesthetic consistent across Lookbook, Shop, and Generator, with information architecture guiding discovery to purchase.',
    deliverables: ['Responsive site with lookbook, shop, and generator', 'Reusable design-system components', 'Deployment with performance budget'],
    limitations:
      'Demo inventory; next steps are live inventory, payments, and personalization models.',
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
export default projects
