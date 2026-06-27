export const profile = {
  name: 'Aryendra Pratap Singh',
  subhead:
    'Computer Science undergrad building AI-powered and full-stack systems — backend, databases, and applied ML.',
  location: 'Toronto / Thunder Bay, ON, Canada',
  status:
    'Honours BSc Computer Science, Lakehead University, expected April 2027. Open to 2026 / 2027 internships and co-ops.',
  email: 'apsingh2@lakeheadu.ca',
  github: 'https://github.com/aryendrapratap',
  githubHandle: 'github.com/aryendrapratap',
  linkedin: 'https://linkedin.com/in/aryendra-pratap-singh-284b391bb',
  linkedinHandle: 'linkedin.com/in/aryendra-pratap-singh-284b391bb',
  resume: '/aryendra-pratap-singh-resume.pdf',
}

export const about = {
  paragraph:
    'Computer Science undergraduate at Lakehead University (Honours, expected 2027), focused on software development, applied AI, and data systems. I work across the full stack — Python and FastAPI on the backend, Next.js and React on the frontend, with relational database design underneath — but I am most drawn to the layer where machine learning meets real products: retrieval-augmented generation, semantic search, OCR, and NLP.That shows up in what I build. I have engineered a full-stack AI real estate assistant with a RAG pipeline over a vector database, a document-processing platform that turns scanned PDFs into searchable structured data, and a SQL analytics system modeling a loan portfolio end to end. Two information-systems internships taught me the less glamorous half of the job too — validating hundreds of records, cleaning messy data, and documenting workflows so others can trust the output.Right now I am looking for software, AI/ML, data, or IT co-op and internship roles where I can keep shipping things that work.',
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
      'Redis',
      'Docker',
      'JWT',
      'OpenAI / Gemini / Claude',
    ],
    features: [
      'RAG pipeline with vector embeddings + ChromaDB for semantic property search.',
      'Modular FastAPI services with auth, sessions, and notifications.',
      'Multi-provider LLM support behind one unified framework.',
      'Responsive React chat UI with real-time frontend ↔ backend communication.',
    ],
  },
  {
    id: 'documentai',
    index: '02',
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
    id: 'heloc-analytics',
    index: '03',
    title: 'HELOC Portfolio Analytics Database System',
    summary:
      'SQL analytics system modeling a Home Equity Line of Credit portfolio.',
    description:
      'A SQL analytics system modeling a Home Equity Line of Credit portfolio — customers, accounts, balances, utilization, delinquency, and payments — built for portfolio-level reporting and risk analysis.',
    tech: [
      'MySQL',
      'SQL',
      'Relational design',
      'Stored procedures',
      'Triggers',
      'Analytical views',
    ],
    features: [
      'Normalized schema with keys/constraints.',
      '150+ simulated records across time periods for trend analysis.',
      'Stored procedures, triggers, and views automating calculations.',
      'Queries for utilization, delinquency roll-rates, and customer risk segments.',
    ],
    stats: [
      { value: '150+', label: 'simulated records' },
      { value: 'Multi-period', label: 'trend analysis' },
    ],
  },
  {
    id: 'it-help-desk',
    index: '04',
    title: 'IT Help Desk Simulation & Ticketing Workflow',
    summary:
      'Simulated service-desk workflow from intake to resolution.',
    description:
      'A simulated service-desk workflow modeling intake, categorization, prioritization, escalation, tracking, and resolution, with documented troubleshooting procedures.',
    tech: ['Excel', 'SQL concepts', 'IT support workflows', 'Documentation'],
    features: [
      'Structured ticket records (type, priority, status, resolution).',
      'Documented troubleshooting for login, software, network, hardware, and access issues.',
      'Trend reporting for recurring issues.',
    ],
  },
]

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: 'Languages',
    skills: ['Java', 'C++', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'Kotlin', 'HTML', 'CSS'],
  },
  {
    label: 'AI & Data',
    skills: [
      'RAG',
      'NLP',
      'OCR',
      'Semantic search',
      'Embeddings / Vector DBs',
      'Document classification',
      'Entity extraction',
      'Prompt engineering',
    ],
  },
  {
    label: 'Backend',
    skills: ['FastAPI', 'REST APIs', 'Auth (JWT)', 'SQLAlchemy', 'Modular services'],
  },
  {
    label: 'Databases',
    skills: [
      'MySQL',
      'PostgreSQL',
      'Schema / relational design',
      'Stored procedures',
      'Triggers',
      'Views',
      'Indexing',
    ],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['Docker', 'Vercel', 'Firebase', 'Supabase', 'Redis', 'Git / GitHub', 'Linux'],
  },
  {
    label: 'IT & Systems',
    skills: [
      'Help desk support',
      'Troubleshooting',
      'Ticketing workflows',
      'System documentation',
      'Data validation',
    ],
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
    role: 'Stock Unloader Associate',
    org: 'Walmart Canada',
    location: 'Thunder Bay, ON',
    period: 'May 2026–Present',
    current: true,
  },
]

export const education = {
  school: 'Lakehead University',
  degree: 'Honours BSc Computer Science',
  location: 'Thunder Bay, ON',
  expected: 'Expected April 2027',
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
  ],
}

export const navItems = [
  { label: 'About', href: '#about', num: '01' },
  { label: 'Projects', href: '#projects', num: '02' },
  { label: 'Skills', href: '#skills', num: '03' },
  { label: 'Experience', href: '#experience', num: '04' },
  { label: 'Education', href: '#education', num: '05' },
]
