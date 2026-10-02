// Career timeline, newest first. `current: true` marks roles still running.

const experience = [
  {
    title: 'Software Engineer',
    org: 'Hitech Construction Company Limited',
    year: 'Jun 2026 — Present',
    current: true,
    detail:
      'Building internal systems for a road and civil-infrastructure contractor with a workforce in the thousands. I work on the company ERP (HSE/OHS workflows, project and survey reporting, activity trail), its Claude-powered AI layer, the PayTrack payroll and HRIS workspace, a Survey asset-management module, a Project Documentation Hub, and the ZKTeco biometric-attendance integration. Everything ships through reviewed PRs with role-based UAT.',
    highlights: ['Django', 'PostgreSQL', 'Celery', 'Claude', 'RAG', 'On-prem deploy'],
  },
  {
    title: 'Software Engineer · Client Platforms',
    org: 'Contract',
    year: '2025 — Present',
    current: true,
    detail:
      'Design and ship production platforms end-to-end: Oyela (oyela.ai, AI assessment and coaching reports with Stripe payments), IHS Procure (enterprise vendor portal for IHS Towers), TASCK OS (creative-economy CRM and portals), Talent Nation (AI engineering fellowship platform), Atom (THCO\'s general AI assistant) and TWENTY3™ (luxury fashion platform). I own the architecture, AI pipelines, payments, deployment and client demo loops.',
    highlights: ['React', 'FastAPI', 'Next.js', 'NestJS', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Data Annotation Specialist',
    org: 'Awarri',
    year: 'Dec 2024 — Jan 2025',
    detail:
      'Key contributor to a high-precision computer-vision project for healthcare diagnostics: semantic segmentation and object detection on hospital laboratory datasets, producing pixel-accurate training data for models that detect medical equipment and anomalies.',
    highlights: ['Computer Vision', 'Segmentation', 'Data Quality'],
  },
  {
    title: 'AI Developer',
    org: 'Nigerian Communications Commission (NCC)',
    year: 'Aug 2024 — Jan 2025',
    detail:
      'Integrated AI into national regulatory work: designed and deployed machine-learning models that automate compliance tasks, working with cross-functional teams on digital transformation.',
    highlights: ['Machine Learning', 'NLP', 'Analytics'],
  },
  {
    title: 'AI Developer',
    org: 'Freelance',
    year: 'Nov 2023 — Present',
    detail:
      'Intelligent applications built with LLMs, RAG and modern web technologies: multilingual chatbots, retail intelligence, resume matching, anomaly detection and business-insight tools.',
    highlights: ['LLMs', 'RAG', 'Python'],
  },
  {
    title: 'Database Manager (SIWES)',
    org: 'Sonet Technology Limited',
    year: 'May 2023 — Nov 2023',
    detail:
      'Managed Oracle databases, data integrity and day-to-day operations; assisted with data migration, backups and performance monitoring.',
    highlights: ['Oracle', 'Backups', 'Migration'],
  },
]

export default experience
