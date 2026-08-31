import { Project, Skill, Experience, Education, Testimonial, UserProfile } from '../types';

export const initialProfile: UserProfile = {
  name: 'Lucas Rocha',
  title: 'Senior Fullstack Developer',
  subtitle: 'Specializing in React, Node.js, TypeScript & Cloud Architecture',
  shortBio: 'I build modern, scalable, and high-performance end-to-end web applications, from rich accessible interfaces to resilient distributed microservices.',
  fullBio: [
    'With over 6 years of experience across the modern web ecosystem, I lead and develop comprehensive software solutions prioritizing performance, intuitive UX, and clean architecture.',
    'Deep expertise in React, Next.js, Node.js, TypeScript, relational & NoSQL databases, alongside cloud infrastructure with Docker, Kubernetes, and AWS.',
    'Passionate about clean code, automated testing, scalable design systems, and continuous delivery that drives tangible business value.'
  ],
  location: 'São Paulo, Brazil (Remote / Hybrid)',
  email: 'lucas.rocha.dev@example.com',
  phone: '+1 (555) 349-2810',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://x.com',
  whatsapp: 'https://wa.me/5511987654321',
  availableForHire: true,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
  resumeUrl: '#',
  stats: {
    yearsOfExperience: 6,
    projectsCompleted: 35,
    githubContributions: 1420,
    clientSatisfaction: 99
  }
};

export const skillsData: Skill[] = [
  // Frontend
  {
    name: 'React.js & Next.js',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconName: 'Atom',
    proficiency: 96,
    experienceYears: 6,
    highlight: 'SSR, SSG, Server Components, advanced hooks, and rendering optimization.',
    popularWith: ['TypeScript', 'Tailwind CSS', 'Redux/Zustand', 'React Query']
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconName: 'FileCode2',
    proficiency: 94,
    experienceYears: 5,
    highlight: 'Strict typing, complex generics, type narrowing, and boosted developer experience.',
    popularWith: ['React', 'Node.js', 'NestJS', 'Express']
  },
  {
    name: 'Tailwind CSS & UI Systems',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconName: 'Palette',
    proficiency: 95,
    experienceYears: 5,
    highlight: 'Scalable design systems, fluid motion animations, and WCAG accessibility.',
    popularWith: ['Radix UI', 'shadcn/ui', 'Framer Motion', 'Figma']
  },
  {
    name: 'Vue.js & Nuxt',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconName: 'Layers',
    proficiency: 82,
    experienceYears: 3,
    highlight: 'Composition API, Pinia state management, and Vite ecosystem.',
    popularWith: ['TypeScript', 'Tailwind', 'Vite']
  },
  {
    name: 'State & Data Fetching',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconName: 'RefreshCw',
    proficiency: 92,
    experienceYears: 5,
    highlight: 'TanStack Query (React Query), Zustand, Redux Toolkit, and optimistic caching.',
    popularWith: ['Axios', 'Fetch API', 'GraphQL Client']
  },

  // Backend
  {
    name: 'Node.js & Express',
    category: 'backend',
    categoryLabel: 'Backend',
    iconName: 'Server',
    proficiency: 94,
    experienceYears: 6,
    highlight: 'High-throughput RESTful APIs, Streams, Event Loop, and security middleware.',
    popularWith: ['TypeScript', 'JWT', 'Jest', 'Prisma']
  },
  {
    name: 'NestJS',
    category: 'backend',
    categoryLabel: 'Backend',
    iconName: 'Box',
    proficiency: 88,
    experienceYears: 3,
    highlight: 'Domain-Driven Design (DDD) modular architecture, dependency injection, and microservices.',
    popularWith: ['TypeScript', 'PostgreSQL', 'TypeORM', 'RabbitMQ']
  },
  {
    name: 'Python (FastAPI / Django)',
    category: 'backend',
    categoryLabel: 'Backend',
    iconName: 'Terminal',
    proficiency: 85,
    experienceYears: 4,
    highlight: 'Async microservices, high-throughput data processing, and LLM/AI model integration.',
    popularWith: ['Pydantic', 'AsyncIO', 'LangChain', 'Docker']
  },
  {
    name: 'GraphQL & REST APIs',
    category: 'backend',
    categoryLabel: 'Backend',
    iconName: 'Share2',
    proficiency: 90,
    experienceYears: 5,
    highlight: 'Declarative schema design, Apollo Server, rate-limiting, and OpenAPI/Swagger specs.',
    popularWith: ['Apollo Client', 'Postman', 'GraphQL CodeGen']
  },
  {
    name: 'Go (Golang)',
    category: 'backend',
    categoryLabel: 'Backend',
    iconName: 'Cpu',
    proficiency: 78,
    experienceYears: 2,
    highlight: 'Goroutines, distributed concurrency, and ultra-fast backend worker services.',
    popularWith: ['Gin', 'gRPC', 'PostgreSQL']
  },

  // Database
  {
    name: 'PostgreSQL & SQL',
    category: 'database',
    categoryLabel: 'Database',
    iconName: 'Database',
    proficiency: 92,
    experienceYears: 6,
    highlight: 'Complex relational modeling, advanced indexing, triggers, and analytical CTEs.',
    popularWith: ['Prisma', 'Drizzle', 'Supabase', 'TypeORM']
  },
  {
    name: 'MongoDB & NoSQL',
    category: 'database',
    categoryLabel: 'Database',
    iconName: 'HardDrive',
    proficiency: 88,
    experienceYears: 5,
    highlight: 'Document-oriented modeling, aggregation pipelines, and sharding.',
    popularWith: ['Mongoose', 'Atlas', 'Express']
  },
  {
    name: 'Redis',
    category: 'database',
    categoryLabel: 'Database',
    iconName: 'Zap',
    proficiency: 90,
    experienceYears: 4,
    highlight: 'In-memory distributed caching, task queues (BullMQ), Pub/Sub, and rate limiting.',
    popularWith: ['Node.js', 'NestJS', 'BullMQ']
  },
  {
    name: 'Prisma & Drizzle ORM',
    category: 'database',
    categoryLabel: 'Database',
    iconName: 'Code2',
    proficiency: 93,
    experienceYears: 4,
    highlight: 'Type-safe queries, automated database migrations, and high productivity.',
    popularWith: ['TypeScript', 'Next.js', 'PostgreSQL']
  },

  // DevOps & Cloud
  {
    name: 'Docker & Containers',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    iconName: 'Container',
    proficiency: 90,
    experienceYears: 5,
    highlight: 'Multi-stage builds, Docker Compose for local workflows, and image footprint optimization.',
    popularWith: ['Kubernetes', 'CI/CD', 'Linux']
  },
  {
    name: 'AWS & Cloud Services',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    iconName: 'Cloud',
    proficiency: 86,
    experienceYears: 4,
    highlight: 'S3, EC2, ECS, Lambda (Serverless), RDS, CloudFront, and IAM Security policies.',
    popularWith: ['Terraform', 'Serverless Framework', 'Docker']
  },
  {
    name: 'CI/CD (GitHub Actions)',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    iconName: 'GitBranch',
    proficiency: 89,
    experienceYears: 4,
    highlight: 'Automated pipelines for linting, unit tests, e2e testing, build, and zero-downtime deployment.',
    popularWith: ['Vercel', 'AWS ECS', 'Docker Hub']
  },
  {
    name: 'Kubernetes & Helm',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud',
    iconName: 'Boxes',
    proficiency: 76,
    experienceYears: 2,
    highlight: 'Pods, services, ingress routing, configmaps, and horizontal pod autoscaling.',
    popularWith: ['Docker', 'AWS EKS', 'Linux']
  },

  // Tools & Quality
  {
    name: 'Git & GitHub Workflow',
    category: 'tools',
    categoryLabel: 'Tools & Quality',
    iconName: 'GitMerge',
    proficiency: 96,
    experienceYears: 6,
    highlight: 'GitFlow, trunk-based development, interactive rebase, and thorough code reviews.',
    popularWith: ['GitHub PRs', 'GitLab', 'Conventional Commits']
  },
  {
    name: 'Testing (Jest / Vitest / Cypress)',
    category: 'tools',
    categoryLabel: 'Tools & Quality',
    iconName: 'CheckCircle2',
    proficiency: 89,
    experienceYears: 5,
    highlight: 'TDD, unit testing, API integration tests, and E2E suites with Cypress/Playwright.',
    popularWith: ['React Testing Library', 'Supertest', 'Vitest']
  },
  {
    name: 'Figma & Design Handoff',
    category: 'tools',
    categoryLabel: 'Tools & Quality',
    iconName: 'LayoutGrid',
    proficiency: 85,
    experienceYears: 4,
    highlight: 'Pixel-perfect UI implementation, responsive auto-layout, and seamless designer collaboration.',
    popularWith: ['Tailwind CSS', 'Storybook', 'Tokens Studio']
  }
];

export const projectsData: Project[] = [
  {
    id: 'cloudflow-engine',
    title: 'CloudFlow Engine',
    subtitle: 'Real-Time SaaS Workflow Orchestration Platform',
    description: 'Enterprise system for automating asynchronous tasks, distributed data pipelines, and event-driven microservices with live telemetry monitoring.',
    fullDescription: 'CloudFlow Engine was engineered to solve microservice orchestration bottlenecks across organizations with complex distributed data streams. It features an interactive drag-and-drop workflow canvas, fault-tolerant execution powered by RabbitMQ/Redis, and live WebSocket telemetry dashboards.',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    tags: ['React', 'TypeScript', 'Node.js', 'Go', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Docker'],
    metrics: ['+2.5M events processed/day', '< 15ms response latency', '99.98% Uptime SLA'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/cloudflow',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    accentColor: 'indigo',
    highlights: [
      'Visual pipeline editor with connectable nodes and real-time DAG (Directed Acyclic Graph) validation.',
      'Distributed Go worker for high-throughput parallel execution with minimal memory footprint.',
      'Telemetry dashboard tracking execution metrics, p99 latency, and automated webhook alerts.'
    ],
    architecture: {
      frontend: 'React 19 + TypeScript, Tailwind CSS, Motion, Interactive Canvas with zoom/pan & TanStack Query.',
      backend: 'Node.js (NestJS) for control API and Golang for high-concurrency task runners.',
      database: 'PostgreSQL with Prisma ORM for persistence and Redis for pub/sub & BullMQ queue.',
      devops: 'Docker Multi-stage, Kubernetes EKS, GitHub Actions CI/CD, and Prometheus/Grafana.'
    },
    challenges: 'Ensuring at-least-once task execution with strict idempotency during network hiccups and container restarts.',
    solution: 'Implemented distributed Saga pattern with dead-letter queues, exponential backoff retries, and Redis state snapshotting.'
  },
  {
    id: 'paynexus-fintech',
    title: 'PayNexus Gateway',
    subtitle: 'Payment Gateway & Financial Analytics Dashboard',
    description: 'Comprehensive financial platform featuring transparent checkout, automated bank reconciliation, recurring billing, and real-time ledger metrics.',
    fullDescription: 'PayNexus is a fintech solution built for SaaS businesses to manage subscriptions, global credit card transactions, and instant bank transfers with PCI-DSS compliance, paired with analytics for MRR, Churn, and LTV cohorts.',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    tags: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe API', 'D3.js', 'Tailwind CSS', 'AWS Lambda'],
    metrics: ['$4.2M transacted volume', 'PCI Level 1 Compliance', 'Zero reconciliation discrepancies'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/paynexus',
    featured: true,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
    accentColor: 'emerald',
    highlights: [
      'Ultra-fast checkout with optimized conversion flow and sub-2-second transaction confirmation.',
      'Comprehensive financial dashboard with cohort analysis, revenue forecasting, and exportable ledger.',
      'Cryptographically signed webhooks (HMAC-SHA256) for secure third-party ERP integration.'
    ],
    architecture: {
      frontend: 'Next.js App Router, Tailwind CSS, Recharts/D3 for interactive financial telemetry.',
      backend: 'Express TypeScript with Hexagonal Clean Architecture and AWS Lambda for serverless jobs.',
      database: 'PostgreSQL hosted on Supabase/RDS with partition strategies for transaction records.',
      devops: 'AWS CloudFront, WAF fraud detection layer, Docker, and GitHub Actions.'
    },
    challenges: 'Handling sudden spikes in transaction volume during peak sales events without database deadlocks.',
    solution: 'Designed an event-driven queueing pipeline with SQS and Redis buffers, decoupling ingestion from persistent disk writes.'
  },
  {
    id: 'devlens-ai',
    title: 'DevLens AI Assistant',
    subtitle: 'Intelligent Code Auditing & Automatic Documentation Engine',
    description: 'AI-driven tool leveraging modern LLMs to audit Git repositories, detect security vulnerabilities, recommend refactors, and generate living technical docs.',
    fullDescription: 'DevLens AI acts as an autonomous code reviewer. It integrates directly with GitHub/GitLab webhooks, analyzes incoming pull requests with state-of-the-art AI models, performs static checks, and generates up-to-date architectural diagrams.',
    category: 'ai_cloud',
    categoryLabel: 'AI & Cloud',
    tags: ['React', 'Python', 'FastAPI', 'Gemini API', 'Vector DB (Qdrant)', 'TypeScript', 'Tailwind CSS'],
    metrics: ['-65% PR review turnaround', '180+ critical bugs detected prior to release'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/devlens',
    featured: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    accentColor: 'violet',
    highlights: [
      'Semantic indexing across massive codebases using Vector Embeddings and RAG pipelines.',
      'Context-aware Pull Request bot commenting with actionable code diffs directly on line items.',
      'Interactive React UI featuring Monaco Editor diff viewers and natural language repo querying.'
    ],
    architecture: {
      frontend: 'React with Monaco Editor (VS Code engine), Syntax Highlighting, and Tailwind CSS.',
      backend: 'Asynchronous FastAPI (Python) integrated with Gemini API and Abstract Syntax Tree (AST) parsers.',
      database: 'Qdrant Vector DB for semantic code search and PostgreSQL for audit histories.',
      devops: 'Google Cloud Run, Cloud Tasks for asynchronous batching, and Docker.'
    },
    challenges: 'Navigating LLM context window limits when analyzing sprawling monolithic repositories with hundreds of thousands of lines.',
    solution: 'Developed AST-guided semantic chunking with hierarchical multi-level embeddings and relevancy scoring.'
  },
  {
    id: 'omnishop-headless',
    title: 'OmniShop Headless E-commerce',
    subtitle: 'Next-Gen High-Performance Headless E-commerce Storefront',
    description: 'Instant-loading headless e-commerce architecture featuring edge caching, persistent carts, internationalization, and multi-gateway checkout.',
    fullDescription: 'OmniShop is a modern storefront optimized for flawless Core Web Vitals (100/100 Lighthouse score). It connects to headless catalog APIs via GraphQL, offering faceted search and real-time cart synchronization.',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tags: ['Next.js 15', 'React 19', 'GraphQL', 'Tailwind CSS', 'Stripe', 'Algolia Search', 'Zustand'],
    metrics: ['100/100 Core Web Vitals', '< 0.4s Page Load Time', '+38% Conversion Lift'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/omnishop',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    accentColor: 'cyan',
    highlights: [
      'Incremental Static Regeneration (ISR) with on-demand revalidation when catalog updates occur.',
      'Instant autocomplete search with faceted filtering across categories, pricing, and specs.',
      'Polished micro-interactions, 360-degree product previewers, and native theme support.'
    ],
    architecture: {
      frontend: 'Next.js 15 Server Components, Tailwind CSS, Motion, Zustand state, and Radix UI primitives.',
      backend: 'Shopify Storefront API & customized Node.js GraphQL gateway for bespoke business logic.',
      database: 'Redis Edge Cache on Vercel for lightning-fast catalog and session resolution.',
      devops: 'Vercel Edge Network, Vercel Analytics, and Real-Time Speed Insights.'
    },
    challenges: 'Maintaining real-time inventory consistency without invalidating aggressively cached static product pages.',
    solution: 'Leveraged Server-Sent Events (SSE) and reactive client hooks for targeted inventory validation at checkout moments.'
  },
  {
    id: 'pulse-metrics',
    title: 'PulseMetrics Observability',
    subtitle: 'Real-Time Server Infrastructure Monitoring & Telemetry Dashboard',
    description: 'Infrastructure telemetry console for SRE teams tracking CPU, RAM, network throughput, distributed traces, and customizable anomaly alerts.',
    fullDescription: 'PulseMetrics aggregates live telemetry from server nodes and Docker containers into a clean interface, empowering operations teams to spot anomalies before end-users are impacted.',
    category: 'backend',
    categoryLabel: 'Backend & APIs',
    tags: ['Node.js', 'Go', 'WebSockets', 'D3.js', 'TimescaleDB', 'Docker', 'React', 'Tailwind CSS'],
    metrics: ['10k datapoints/sec stream', 'Offline resilient local buffer', 'Automated PDF Incident Reports'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/pulsemetrics',
    featured: false,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80',
    accentColor: 'rose',
    highlights: [
      'Real-time streaming via binary WebSockets with optimized client-side decoding.',
      'Interactive time-series charts crafted with D3.js supporting dynamic zooming and incident annotations.',
      'Alerting engine supporting webhooks for Slack, Discord, and PagerDuty.'
    ],
    architecture: {
      frontend: 'React with HTML5 Canvas / D3.js for steady 60fps rendering without DOM bottlenecks.',
      backend: 'Ingestion pipeline in Golang with WebSocket pooling and Node.js management API.',
      database: 'TimescaleDB (PostgreSQL time-series engine) + Redis cache.',
      devops: 'Docker Compose, Nginx Reverse Proxy with HTTP/2 and WSS support.'
    },
    challenges: 'Plotting complex time-series charts with hundreds of thousands of datapoints without browser lag.',
    solution: 'Utilized HTML5 Canvas rendering and Web Workers for background data decimation outside the main UI thread.'
  },
  {
    id: 'habitforge-sync',
    title: 'HabitForge App & Sync',
    subtitle: 'Offline-First Habit Tracker & Productivity Companion',
    description: 'Progressive Web App for routine building, gamified milestones, and daily progress analytics with cloud synchronization.',
    fullDescription: 'HabitForge helps users turn goals into lasting habits. Featuring full offline capabilities, GitHub-style consistency heatmaps, and streak tracking.',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    tags: ['React', 'TypeScript', 'Supabase', 'IndexedDB', 'Tailwind CSS', 'PWA', 'Service Workers'],
    metrics: ['+12,000 Active Users', '100% Offline-capable', '4.9 Star User Rating'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com/habitforge',
    featured: false,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80',
    accentColor: 'amber',
    highlights: [
      'Offline-first architecture with IndexedDB (Dexie.js) and seamless background sync with Supabase.',
      'GitHub-style contribution heatmaps visualizing streak momentum and progress over time.',
      'Installable PWA for desktop and mobile with push notification reminder support.'
    ],
    architecture: {
      frontend: 'React 19, TypeScript, Tailwind CSS, and Service Workers for complete offline caching.',
      backend: 'Supabase Edge Functions (Deno) with JWT authentication and Row Level Security (RLS).',
      database: 'PostgreSQL on Supabase with two-way sync and conflict resolution strategies.',
      devops: 'Vercel, Cloudflare DNS & SSL, PWA Web App Manifest.'
    },
    challenges: 'Resolving data divergence when users update habits on multiple devices while offline.',
    solution: 'Implemented Last-Write-Wins timestamps coupled with per-record logical vector clocks.'
  }
];

export const experiencesData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Fullstack Engineer / Tech Lead',
    company: 'Nexus Tech Solutions',
    companyUrl: 'https://example.com',
    period: '2023 - Present',
    location: 'Remote',
    type: 'Full-time',
    description: 'Technical lead for an engineering team of 6, developing high-availability, scalable enterprise SaaS platforms.',
    achievements: [
      'Led the migration from monolithic architecture to event-driven microservices, reducing average API response latency by 45%.',
      'Engineered a shared Design System with React, Tailwind, and TypeScript, boosting feature delivery speed by 60%.',
      'Architected CI/CD pipelines in GitHub Actions with automated test validation and ephemeral preview environments.',
      'Mentored junior and mid-level engineers in Clean Code, SOLID principles, and automated test-driven development.'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind CSS']
  },
  {
    id: 'exp-2',
    role: 'Mid-Level Fullstack Developer',
    company: 'Vanguard Digital Lab',
    companyUrl: 'https://example.com',
    period: '2021 - 2023',
    location: 'São Paulo, Brazil',
    type: 'Full-time',
    description: 'Developed and maintained high-traffic web applications for enterprise clients across fintech and e-commerce sectors.',
    achievements: [
      'Built checkout and payment modules processing over 100k transactions monthly with 99.9% uptime.',
      'Optimized Core Web Vitals (FCP/LCP), cutting initial page load times from 3.8s down to 0.9s.',
      'Built asynchronous microservices with Node.js and Redis for background report generation and email dispatch.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Jest', 'Docker', 'Git']
  },
  {
    id: 'exp-3',
    role: 'Frontend / Fullstack Developer Junior',
    company: 'PixelCraft Studio',
    companyUrl: 'https://example.com',
    period: '2019 - 2021',
    location: 'Campinas, Brazil',
    type: 'Full-time',
    description: 'Created interactive web portals, administrative dashboards, and responsive SPAs focusing on modern UI/UX principles.',
    achievements: [
      'Shipped over 15 responsive web applications on schedule with 100% client satisfaction scores.',
      'Integrated third-party RESTful APIs including Google Maps, Stripe, SendGrid, and Auth0.',
      'Enforced WCAG AA accessibility standards across multiple client-facing educational platforms.'
    ],
    technologies: ['JavaScript (ES6+)', 'React', 'HTML5/CSS3', 'Sass', 'Node.js', 'Git', 'Bootstrap', 'REST APIs']
  }
];

export const educationData: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    institution: 'University of São Paulo (USP)',
    period: '2016 - 2020',
    location: 'São Paulo, Brazil',
    description: 'Comprehensive curriculum focusing on algorithms, data structures, distributed systems, AI, and software engineering.'
  },
  {
    id: 'edu-2',
    degree: 'Professional Certification',
    field: 'AWS Certified Solutions Architect – Associate',
    institution: 'Amazon Web Services (AWS)',
    period: '2023 - 2026',
    location: 'Online',
    description: 'Advanced validation in resilient cloud architecture, security best practices, high availability, and cost optimization.'
  },
  {
    id: 'edu-3',
    degree: 'Specialization Program',
    field: 'Fullstack Web & Cloud Engineering',
    institution: 'Rocketseat Bootcamp',
    period: '2021',
    location: 'Online',
    description: 'Intensive immersion into the Node.js, React, TypeScript, Docker, and microservice ecosystem.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carolina Mendes',
    role: 'Head of Product',
    company: 'Nexus Tech Solutions',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    content: 'Lucas is one of the most well-rounded engineers I have worked with. Beyond his exceptional technical mastery across the stack, he deeply understands user experience and business outcomes. He delivered our most critical milestones with outstanding precision.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Rodrigo Silveira',
    role: 'CTO & Co-founder',
    company: 'FinPulse Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    content: 'His ability to transform complex architectural requirements into clean, test-driven, scalable software was instrumental in launching our fintech gateway on time. Highly recommended for any ambitious engineering team.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Mariana Duarte',
    role: 'Lead UI/UX Designer',
    company: 'Vanguard Digital Lab',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    content: 'Collaborating with Lucas is a designer’s dream. He treats design tokens, motion transitions, and accessibility with the utmost care, bringing Figma mockups to life with pixel-perfect accuracy and blazing speed.',
    rating: 5
  }
];
