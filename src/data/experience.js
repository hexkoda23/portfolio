// Career timeline, newest first. `current: true` marks roles still running.
// Dates and employers follow the CV (public/cv/Adeleke_Kehinde_CV.pdf).

const experience = [
  {
    title: 'Software Engineer',
    org: 'Hitech Construction Company Limited',
    year: 'Jul 2026 — Present',
    current: true,
    detail:
      'Building internal systems for a road and civil-infrastructure contractor with a workforce in the thousands. I work on the company ERP (HSE/OHS workflows, project and survey reporting, activity trail), its Claude-powered AI layer, the PayTrack payroll and HRIS workspace, a Survey asset-management module, a Project Documentation Hub, and the ZKTeco biometric-attendance integration. Everything ships through reviewed PRs with role-based UAT.',
    highlights: ['Django', 'PostgreSQL', 'Celery', 'Claude', 'RAG', 'On-prem deploy'],
  },
  {
    title: 'Backend Engineer',
    org: 'Larkwave · Contract',
    year: 'Feb 2026 — Present',
    current: true,
    detail:
      'Own the entire backend of a multi-tenant Point of Sale platform in C# / ASP.NET Core: authentication, terminals, catalogue, inventory, orders, settlement, reporting and notifications. Designed terminal authentication (device pairing, scoped tokens, configurable refresh windows) so physical terminals stay session-safe on poor connections, built hardened transactional email APIs, and standardised live Swagger docs across every environment.',
    highlights: ['C# / .NET', 'ASP.NET Core', 'SQL Server', 'Swagger', 'Auth & Tokens'],
  },
  {
    title: 'Software Engineer',
    org: 'THCO · Full time',
    year: 'Mar 2025 — Present',
    current: true,
    detail:
      'Lead engineer on four concurrent client platforms, each taken from first stakeholder call through architecture, build, demo loop and production: TASCK OS (creative-economy operating system), Talent Nation (AI Engineering Fellowship platform), IHS Procure (vendor onboarding for IHS Towers\' procurement team) and Oyela (family-systems assessment with AI coaching reports). I run weekly demo cycles with founders and enterprise stakeholders and turn ambiguous product intent into shippable increments.',
    highlights: ['React', 'Next.js 15', 'NestJS', 'FastAPI', 'PostgreSQL', 'Claude AI'],
  },
  {
    title: 'Data Annotation Specialist',
    org: 'Awarri · Contract',
    year: 'Nov 2024 — Feb 2025',
    detail:
      'Key contributor on a high-precision computer-vision programme for healthcare diagnostics: pixel-perfect semantic segmentation and object detection across hospital laboratory environments, plus classification, entity recognition and relevance labelling for production ML models.',
    highlights: ['Computer Vision', 'Segmentation', 'NLP Labelling'],
  },
  {
    title: 'AI Developer',
    org: 'Nigerian Communications Commission (NCC) · Full time',
    year: 'Jan 2024 — Oct 2024',
    detail:
      'Integrated AI into national regulatory frameworks: ML models that automated compliance review, and RAG-powered document intelligence with LangChain, FastAPI and vector databases. Led prompt-engineering work that improved LLM response accuracy by 40% on regulatory document analysis.',
    highlights: ['Python', 'LangChain', 'RAG', 'FastAPI', 'Vector DBs'],
  },
  {
    title: 'AI & Full Stack Developer',
    org: 'Independent / Freelance',
    year: 'Feb 2023 — Dec 2023',
    detail:
      'Started professional delivery while completing my B.Sc at Caleb University: multilingual chatbots, retail intelligence tooling and document-analysis assistants for small businesses, built against real requirements and budgets.',
    highlights: ['Python', 'FastAPI', 'React', 'OpenAI API'],
  },
  {
    title: 'Database Manager / Administrator',
    org: 'Sonet Technology Limited · SIWES',
    year: 'Apr 2022 — Jan 2023',
    detail:
      'Tuned Oracle database performance for a 20% improvement in query response times through index and query optimisation, and ran backup and recovery procedures that kept data intact across upgrades and migrations.',
    highlights: ['Oracle DB', 'SQL Tuning', 'Backup & Recovery'],
  },
]

export default experience
