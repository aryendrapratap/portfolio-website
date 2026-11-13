export const profile = {
  name: 'Aryendra Pratap Singh',
  subhead:
    'Computer Science undergrad building AI-powered and full-stack systems — backend, databases, and applied ML.',
  location: 'Toronto / Thunder Bay, ON, Canada',
  status:
    'Honours BSc Computer Science, Lakehead University, expected April 2027. Open to 2027 internships and co-ops.',
  email: 'apsingh2@lakeheadu.ca',
  github: 'https://github.com/aryendrapratap',
  githubHandle: 'github.com/aryendrapratap',
  linkedin: 'https://linkedin.com/in/aryendra-pratap-singh-284b391bb',
  linkedinHandle: 'linkedin.com/in/aryendra-pratap-singh-284b391bb',
  resume: '/aryendra-pratap-singh-resume.pdf',
}

export const about = {
  paragraph:
    'Computer Science undergraduate at Lakehead University (Honours, expected 2027), focused on software development, applied AI, and data systems. I work across the full stack — Python and FastAPI on the backend, Next.js and React on the frontend, with relational database design underneath — and I am most drawn to the layer where machine learning meets real products: retrieval-augmented generation, semantic search, OCR, and NLP. I built RegenMed Form Checker at the Thunder Bay AI Hackathon, an AI reviewer for scanned regulatory forms. At GIANT JAM 2.0, my 3-person team won runner-up with Aaina, a mirror-puzzle game where I led game logic and level design. I have also engineered a full-stack AI real estate assistant with a RAG pipeline, a document-processing platform, and a SQL analytics system modeling a loan portfolio end to end. My information-systems internships taught me to validate records, clean messy data, and document workflows so others can trust the output. Right now I am looking for software, AI/ML, data, IT systems, business systems analysis, or cybersecurity roles where I can keep shipping things that work.',
}

export type Project = {
  id: string
  index: string
  title: string
  flagship?: boolean
  summary: string
  description: string
  tech: string[]
  features: string[]
  stats?: { value: string; label: string }[]
  repo?: string
  label?: string
}

export const projects: Project[] = [
  {
    id: 'ai-real-estate-assistant',
    index: '01',
    title: 'AI Real Estate Assistant',
    flagship: true,
    summary:
      'Full-stack AI platform for conversational property search and investment analysis.',
    description:
      'A full-stack app where users search and compare properties through natural-language chat, backed by retrieval-augmented generation for context-aware recommendations, plus market analytics, mortgage and total-cost-of-ownership calculators, and investment tooling.',
    tech: [
      'Python',
      'FastAPI',
      'Next.js',
      'React',
      'LangChain',
      'ChromaDB',
      'FastEmbed',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'SQLite',
      'Redis',
      'Docker',
      'JWT',
      'OpenAI / Gemini / Claude / DeepSeek / Grok / Ollama',
    ],
    features: [
      'RAG pipeline with vector embeddings + ChromaDB for semantic property search.',
      'Modular FastAPI services with auth, sessions, and notifications.',
      'Multi-provider LLM support behind one unified framework.',
      'Responsive React chat UI with real-time frontend ↔ backend communication.',
    ],
  },
  {
    id: 'regenmed-form-checker',
    index: '02',
    title: 'RegenMed Form Checker',
    summary: 'AI document reviewer for scanned tissue-bank regulatory forms.',
    label: 'Hackathon · Sept 2026',
    description:
      'An AI-powered web app built at the Thunder Bay AI Hackathon that reviews scanned regulatory forms, catches routine omissions, and routes uncertain readings for human review.',
    tech: ['Python', 'FastAPI', 'Uvicorn', 'Gemini API', 'Multimodal LLMs', 'Pydantic', 'PyMuPDF', 'Pillow', 'NumPy', 'React', 'TypeScript', 'Vite', 'Streamlit', 'Render', 'Git'],
    features: [
      'Cuts review time by approximately 75% — from 85 seconds to about 21 seconds.',
      '23-rule validation engine pinpoints issues by page, section, row, and field.',
      'Concurrent multimodal extraction with local form matching and second-opinion verification.',
      'Computer-vision classifier identifies the form in ~0.05s, with 34 of 34 correct and zero misclassifications.',
      'Health checks, clear upload errors, environment-based secrets, and a CLI regression harness.',
    ],
    stats: [
      { value: '~75%', label: 'faster review' },
      { value: '23', label: 'validation rules' },
    ],
    repo: 'https://github.com/aryendrapratap/regenmed-form-checker',
  },
  {
    id: 'aaina',
    index: '03',
    title: 'Aaina — Mirror Puzzle Game',
    summary: 'Split-screen puzzle game where your reflection moves the opposite way.',
    label: 'Game Jam · Oct 2026 · Runner-Up',
    description:
      'Built in 12 hours by a 3-person team at GIANT JAM 2.0 (Games On The Lake, Lakehead University) on the theme "Reversal". The player\'s reflection moves opposite to every input, and both bodies must reach their goals at the same moment. I led game logic and level design.',
    stats: [{ value: 'Runner-Up', label: 'GIANT JAM 2.0' }, { value: '8', label: 'puzzle levels' }],
    features: [
      'Graphics-free JavaScript rules engine (load + step) that returns a new state and an event list, making undo, restart, and testing simple.',
      'Pressure plates that open doors across the mirror, spikes, single-use cracks that swap the two bodies, and a final room with three endings.',
      'Python breadth-first-search solver found the shortest solutions (9–18 moves) and confirmed random key presses cannot beat Levels 3–7 within 300 presses.',
      'Redesigned mid-jam after playtesting into 8 tighter puzzles built on seven simple rules.',
    ],
    tech: ['JavaScript', 'Phaser 3', 'HTML', 'Python', 'NumPy', 'Breadth-first search', 'Git'],
    repo: 'https://github.com/Navyanaweli/mirror-world',
  },
  {
    id: 'heloc-analytics',
    index: '04',
    title: 'HELOC Portfolio Analytics Database System',
    summary: 'MySQL analytics database for a simulated Canadian HELOC portfolio.',
    description:
      'A MySQL 9.7 database tracking 300 simulated Home Equity Line of Credit accounts over 24 months (Oct 2024 – Sep 2026): balances, utilization, payments, delinquency, roll rates, and charge-offs, measured against the real Canadian prime rate history.',
    stats: [{ value: '300', label: 'accounts · 24 months' }, { value: '76.9%', label: 'of flagged accounts went late' }, { value: '36', label: 'automated tests' }],
    features: [
      'Normalized 10-table schema with 9 foreign keys, 31 CHECK constraints, and 8 indexes.',
      '10 triggers enforce Canadian lending limits (OSFI B-20), block invalid draws, and audit-log every change.',
      'Month-end stored procedure handles payments, interest, late fees, freezes, and charge-offs in one transaction.',
      '8 analytical views and 11 business queries using CTEs and window functions; risk score backtested on past months.',
      'Streamlit + Plotly dashboard, 36 pytest tests run by GitHub Actions, and one-command Docker Compose setup.',
    ],
    tech: ['MySQL 9.7', 'SQL', 'Stored procedures', 'Triggers', 'Window functions', 'Python', 'pandas', 'Faker', 'SQLAlchemy', 'Streamlit', 'Plotly', 'pytest', 'GitHub Actions', 'Docker'],
    repo: 'https://github.com/aryendrapratap/heloc-portfolio-analytics',
  },
  {
    id: 'documentai',
    index: '05',
    title: 'DocumentAI',
    summary: 'Intelligent document processing platform.',
    description:
      'An AI system that extracts, analyzes, summarizes, and organizes information from PDFs, scanned docs, images, and text — turning unstructured documents into structured, searchable data.',
    tech: ['Python', 'Tesseract OCR', 'spaCy', 'NLTK', 'SQL', 'LLM concepts', 'Git'],
    features: [
      'OCR-based ingestion pipeline.',
      'NLP for entity recognition, keyword extraction, and document classification.',
      'AI summarization + semantic search.',
      'Structured storage of extracted content for retrieval and reporting.',
    ],
  },
  {
    id: 'portfolio-website',
    index: '06',
    title: 'Portfolio Website',
    summary: 'This site: a fast, responsive personal portfolio.',
    label: 'Live · aryendrasingh.com',
    description:
      'Personal portfolio built with Next.js 16 (App Router), React 19, and TypeScript, deployed on Vercel with a custom domain and continuous deployment from Git.',
    features: [
      'Component-based UI with shadcn/ui and Base UI, styled with Tailwind CSS 4 design tokens.',
      'Fully responsive, mobile-first layout with Lucide icons and tw-animate-css animations.',
      'Vercel Analytics for visitor and performance tracking.',
      'Showcases projects, tech stacks, GitHub repos, and résumé for co-op and job applications.',
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Base UI', 'Vercel', 'Vercel Analytics', 'pnpm'],
    repo: 'https://github.com/aryendrapratap/portfolio-website',
  },
  {
    id: 'it-help-desk',
    index: '07',
    title: 'IT Help Desk Simulation & Ticketing Workflow',
    summary: 'Simulated service-desk workflow from intake to resolution.',
    description:
      'A simulated service-desk workflow modeling intake, categorization, prioritization, escalation, tracking, and resolution, with documented troubleshooting procedures.',
    tech: ['Excel', 'SQL concepts', 'IT support workflows', 'Documentation'],
    features: [
      'Structured ticket records (type, priority, status, resolution).',
      'Documented troubleshooting for login, software, network, hardware, and access issues.',
      'Trend reporting for recurring issues.',
    ],
  },
  {
    id: 'android-business-card',
    index: '08',
    title: 'Android Business Card & Sensor App',
    summary: 'My first Android app, built with Kotlin and Jetpack Compose.',
    label: 'Android · May 2025',
    description:
      'An introductory Android app that shows a business-card screen and, at the tap of a button, opens a second screen with live device sensor readings.',
    features: [
      'Business-card screen with name, title, and contact details.',
      'Screen-to-screen navigation with Navigation Compose.',
      'Live light, proximity, and magnetometer sensor readings.',
      'Responsive Compose layout with state handling.',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Navigation Compose', 'Android Studio'],
    repo: 'https://github.com/aryendrapratap/AndroidStudioApp',
  },
]

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: 'Languages',
    skills: ['Java', 'C++', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'Kotlin', 'HTML', 'CSS'],
  },
  {
    label: 'AI & Data',
    skills: ['RAG', 'NLP', 'OCR', 'Semantic search', 'Embeddings / Vector DBs', 'Document classification', 'Entity extraction', 'Prompt engineering', 'Information retrieval', 'Summarization', 'Multimodal LLMs', 'Computer vision', 'Text preprocessing', 'pandas', 'Data visualization (Plotly, Streamlit)', 'Synthetic data generation', 'Risk segmentation', 'Backtesting'],
  },
  {
    label: 'Backend',
    skills: ['FastAPI', 'Uvicorn', 'REST APIs', 'Auth (JWT)', 'SQLAlchemy', 'Modular services', 'Pydantic', 'JSON Schema'],
  },
  {
    label: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Schema / relational design', 'Stored procedures', 'Triggers', 'Views', 'Indexing', 'CTEs', 'Window functions', 'Transactions', 'CHECK constraints', 'Audit logging'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite', 'Responsive UI', 'Base UI', 'Mobile-first design', 'Jetpack Compose (Android)'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['Docker', 'Vercel', 'Render', 'Firebase', 'Supabase', 'Redis', 'Git / GitHub', 'Linux', 'CI/CD', 'Docker Compose', 'GitHub Actions', 'pytest', 'Vercel Analytics'],
  },
  {
    label: 'IT & Systems',
    skills: ['Help desk support', 'Troubleshooting', 'Ticketing workflows', 'System documentation', 'Data validation', 'Access control basics', 'Endpoint support'],
  },
  {
    label: 'Tools',
    skills: ['VS Code', 'Android Studio', 'MySQL Workbench', 'Jupyter Notebook', 'Google Colab', 'Power BI', 'Microsoft 365 / Excel', 'pnpm', 'Phaser 3'],
  },
  {
    label: 'Security & Governance',
    skills: ['Data privacy', 'Access control', 'Records management', 'Audit logs', 'Secure file handling', 'Secrets management'],
  },
]

export type Experience = {
  role: string
  org: string
  location: string
  period: string
  description?: string
  stats?: { value: string; label: string }[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    role: 'General Merchandise Associate (Part-Time)',
    org: 'Walmart Canada',
    location: 'Thunder Bay, ON',
    period: 'Oct 2026–Present',
    current: true,
    description:
      'Provide customer service on the sales floor, keep assigned areas zoned and stocked, set modulars and shelf caps, return recovery merchandise to its correct location, and support Front End coverage while following safety procedures.',
  },
  {
    role: 'Stock Unloader Associate',
    org: 'Walmart Canada',
    location: 'Thunder Bay, ON',
    period: 'May 2026–Present',
    current: true,
    description:
      'Process incoming merchandise, organize inventory, maintain cold-chain compliance, and support replenishment in a high-volume environment while following safety procedures and providing customer service.',
  },
  {
    role: 'Intern',
    org: 'MyGov',
    location: 'Delhi, India',
    period: 'May–Jul 2022',
    description:
      'Digitized and validated public records in structured information systems; built reports and datasets; contributed to process improvements that cut manual effort.',
    stats: [
      { value: '600+', label: 'records digitized' },
      { value: '~20%', label: 'less manual effort' },
    ],
  },
  {
    role: 'Intern',
    org: 'Eisenvault',
    location: 'Delhi, India',
    period: 'May–Jul 2021',
    description:
      'Supported internal information systems and enterprise content management; data organization, workflow documentation, and digital repository management.',
  },
  {
    role: 'Part-Time Team Member',
    org: 'Masala Grille',
    location: 'Thunder Bay, ON',
    period: 'Oct 2024–Apr 2025',
    description:
      'Worked in a fast-paced customer-facing environment, building teamwork, reliability, problem-solving, time management, and professional communication.',
  },
]

export const education = {
  school: 'Lakehead University',
  degree: 'Honours BSc Computer Science',
  location: 'Thunder Bay, ON',
  expected: 'Expected April 2027',
  gpa: 'CGPA 78.31%',
  coursework: [
    'Data Structures',
    'Algorithm Design & Analysis',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks & Distributed Systems',
    'Software Engineering',
    'Object-Oriented Programming',
    'Big Data',
    'Systems Analysis & Design',
    'Computer Programming I & II',
    'Intro to Computer Architecture',
    'Intro to Assembly Language & OS',
    'Mobile Computing Technology',
    'Advanced Project',
    'Information Systems',
    'Data Management',
    'Technical Writing',
  ],
}

export const navItems = [
  { label: 'About', href: '#about', num: '01' },
  { label: 'Projects', href: '#projects', num: '02' },
  { label: 'Skills', href: '#skills', num: '03' },
  { label: 'Experience', href: '#experience', num: '04' },
  { label: 'Education', href: '#education', num: '05' },
]

