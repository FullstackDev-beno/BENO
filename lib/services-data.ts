export type CapabilityCard = {
  iconName: string
  title: string
  description: string
  features?: string[]
  highlighted?: boolean
}

export type UseCase = {
  tabLabel: string
  tabSub: string
  projectTitle: string
  description: string
  bullets: string[]
  stats: { value: string; label: string }[]
  ctaLabel: string
}

export type ServiceData = {
  meta: {
    title: string
    description: string
    canonicalUrl?: string
  }
  hero: {
    tagline: string
    tagline2?: string
    description: string
    ctaButtons?: string[]
  }
  intro: {
    sectionLabel: string
    title: string
    paragraphs: string[]
  }
  capabilities: {
    sectionLabel: string
    title: string
    subtitle: string
    cards: CapabilityCard[]
  }
  scale: {
    sectionLabel: string
    title: string
    subtitle: string
    cards: CapabilityCard[]
  }
  useCases: {
    sectionLabel: string
    title: string
    cases: UseCase[]
  }
  cta?: {
    title: string
    content: string
    buttons: string[]
  }
  faq?: {
    question: string
    answer: string
  }[]
}

export const servicesData: Record<string, ServiceData> = {
  "core-engineering-application-architecture": {
    meta: {
      title: "Custom Software Development & SaaS Engineering Services | Beno Support",
      description:
        "Beno Support delivers scalable custom software development, SaaS engineering, API architecture, and microservices solutions for startups, SMBs, and enterprises.",
      canonicalUrl: "/services/software-development-company/",
    },
    hero: {
      tagline: "Engineered for Scale.",
      tagline2: "Built for Innovation.",
      description:
        "We engineer resilient SaaS platforms, cloud-native architectures, and enterprise applications that power modern business growth.",
      ctaButtons: ["Request a Proposal", "Talk to Our Experts"],
    },
    intro: {
      sectionLabel: "Core Engineering",
      title: "BEYOND CODE: HIGH-PERFORMANCE SOFTWARE ENGINEERING",
      paragraphs: [
        "Modern businesses require more than software development — they require scalable engineering systems built for performance, security, and continuous innovation.",
        "At Beno Support, we help organizations develop cloud-native applications, SaaS platforms, mobile experiences, and API-driven ecosystems that support digital transformation and long-term business growth.",
        "Our engineering teams combine architecture expertise, agile delivery, DevOps practices, and product-focused execution to deliver high-performance digital solutions.",
      ],
    },
    capabilities: {
      sectionLabel: "Core Engineering Capabilities",
      title: "OUR CORE ENGINEERING CAPABILITIES",
      subtitle:
        "From SaaS platforms to mobile applications, our full-stack engineering capability covers every layer of your technology stack with precision and scale.",
      cards: [
        {
          iconName: "Code2",
          title: "Custom SaaS\nDevelopment",
          description:
            "We design and develop scalable SaaS platforms that support subscription models, enterprise workflows, and cloud-native scalability for startups, SMBs, and growing enterprises.",
          features: [
            "Multi-tenant SaaS architecture",
            "Subscription & billing integrations",
            "Role-based access systems",
            "Scalable backend engineering",
            "Cloud-native deployment",
            "Performance optimization",
          ],
          highlighted: false,
        },
        {
          iconName: "Globe",
          title: "Web Application\nDevelopment",
          description:
            "Our web engineering services focus on secure, responsive, and scalable applications built using modern frontend and backend technologies.",
          features: [
            "Enterprise web applications",
            "Progressive web apps",
            "Secure authentication systems",
            "API-first architecture",
            "Real-time dashboards",
            "Scalable frontend frameworks",
          ],
          highlighted: false,
        },
        {
          iconName: "Smartphone",
          title: "Mobile App Development\n(iOS & Android)",
          description:
            "We create high-performance mobile applications for iOS and Android platforms that deliver seamless user experiences and scalable business functionality.",
          features: [
            "Native & cross-platform apps",
            "Flutter & React Native development",
            "Enterprise mobility solutions",
            "Mobile UI/UX optimization",
            "Secure mobile integrations",
            "App modernization services",
          ],
          highlighted: true,
        },
        {
          iconName: "Link2",
          title: "API Architecture\n& Integration",
          description:
            "Our API engineering services help businesses create connected digital ecosystems with secure and scalable integrations.",
          features: [
            "REST & GraphQL APIs",
            "Third-party integrations",
            "API gateways & security",
            "Payment gateway integrations",
            "CRM & ERP integrations",
            "Middleware engineering",
          ],
          highlighted: false,
        },
        {
          iconName: "GitBranch",
          title: "Microservices &\nDistributed Systems",
          description:
            "We help organizations modernize legacy systems through scalable microservices architecture and distributed engineering practices.",
          features: [
            "Distributed systems engineering",
            "Containerized architecture",
            "Kubernetes orchestration",
            "Event-driven systems",
            "Service mesh architecture",
            "High-availability engineering",
          ],
          highlighted: false,
        },
        {
          iconName: "RefreshCw",
          title: "Application Lifecycle\nManagement",
          description:
            "Our ALM services ensure continuous monitoring, optimization, modernization, and long-term application maintenance.",
          features: [
            "Application monitoring",
            "CI/CD integration",
            "Release management",
            "DevSecOps implementation",
            "Performance optimization",
            "Long-term maintenance",
          ],
          highlighted: false,
        },
        {
          iconName: "CheckCircle",
          title: "Quality Engineering\n& Test Automation",
          description:
            "Automated quality engineering frameworks designed for reliable and faster software delivery.",
          features: [
            "End-to-end test strategy",
            "Automated testing frameworks",
            "CI/CD-integrated testing",
            "Regression & performance testing",
            "Test coverage reporting",
            "Quality metrics dashboards",
          ],
          highlighted: false,
        },
      ],
    },
    scale: {
      sectionLabel: "How We Guarantee Scale",
      title: "HOW WE GUARANTEE SCALE & STABILITY",
      subtitle:
        "Beno Support combines cloud-native engineering expertise, agile development practices, and scalable architecture capabilities to help businesses build modern digital platforms.",
      cards: [
        {
          iconName: "Layers",
          title: "SaaS Product\nEngineering Expertise",
          description:
            "Enforces multi-tenant isolation, high-availability design patterns, and auto-scaling to handle 3x peak traffic using AWS/Azure/GCP and Docker.",
          highlighted: false,
        },
        {
          iconName: "Cloud",
          title: "Cloud-Native\nArchitecture Approach",
          description:
            "Governed by automated Terraform (IaC) templates and Kubernetes (EKS/AKS) orchestration SOPs to ensure rapid, repeatable, and infrastructure-independent deployments.",
          highlighted: false,
        },
        {
          iconName: "GitBranch",
          title: "Agile & DevOps-Led\nDevelopment",
          description:
            "Managed via Jira sprint workflows and automated GitHub Actions/GitLab CI pipelines; requires mandatory dual-peer code reviews before merging.",
          highlighted: true,
        },
        {
          iconName: "Shield",
          title: "Enterprise-Grade\nSecurity Practices",
          description:
            "Features a DevSecOps SOP that injects automated SonarQube/Snyk vulnerability scanning into the build pipeline and mandates HashiCorp Vault for secrets management.",
          highlighted: false,
        },
        {
          iconName: "TrendingUp",
          title: "Scalable\nEngagement Models",
          description:
            "Governed by strict SLA tracking and automated regression testing to ensure seamless platform scaling without accumulating technical debt.",
          highlighted: false,
        },
        {
          iconName: "Users",
          title: "Dedicated\nEngineering Teams",
          description:
            "Continuous alignment via Confluence knowledge bases, maintaining a strict quality gate of at least 85% unit test coverage across all deliverables.",
          highlighted: false,
        },
      ],
    },
    useCases: {
      sectionLabel: "Strategic Use Cases",
      title: "STRATEGIC USE CASES",
      cases: [
        {
          tabLabel: "BIHAR TOURISM",
          tabSub: "CMS & Mobile App Development",
          projectTitle: "State-Scale CMS & Mobile App Development",
          description:
            "Engineering a high-performance CMS web platform and integrated mobile application to modernize Bihar's digital tourism ecosystem.",
          bullets: [
            "Scalable Laravel CMS web platform deployed on Google Cloud",
            "Cross-platform Flutter mobile app with offline-first utility",
            "Integrated in-app booking system for accommodations and tours",
          ],
          stats: [
            { value: "50%", label: "Increase in web traffic" },
            { value: "10K+", label: "App downloads in 90 days" },
            { value: "30%", label: "Boost in bookings" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "STRATOS",
          tabSub: "Enterprise SaaS Scaling",
          projectTitle: "Scalable SaaS Foundations",
          description:
            "Engineering robust, multi-tenant software that allows startups to launch at lightning speed without accumulating crippling technical debt.",
          bullets: [
            "Rapid MVP launches optimized for fast market entry",
            "Modular, multi-tenant architecture ready for scale",
            "Enterprise-grade security and data isolation from day one",
          ],
          stats: [
            { value: "50%", label: "Faster market launch" },
            { value: "10x", label: "User scaling capacity" },
            { value: "0", label: "Critical technical debt" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "OMNI COGNITIVE",
          tabSub: "Intelligent AI Workflows",
          projectTitle: "Production-Ready AI Integration",
          description:
            "Embedding advanced LLMs and automated workflows seamlessly into your production environment without breaking existing infrastructure.",
          bullets: [
            "Secure vector databases for intelligent context retrieval",
            "Robust API middleware bridging AI with legacy systems",
            "Optimized, low-latency LLM data pipelines",
          ],
          stats: [
            { value: "65%", label: "Higher workflow efficiency" },
            { value: "<200ms", label: "Vector query latency" },
            { value: "100%", label: "Data privacy security" },
          ],
          ctaLabel: "View Case Study",
        },
      ],
    },
    cta: {
      title: "Ready to Build Scalable Digital Products?",
      content:
        "Partner with Beno Support to modernize applications, develop scalable software platforms, and accelerate digital innovation with engineering-led solutions.",
      buttons: ["Request a Proposal", "Schedule a Consultation", "Talk to Our Experts"],
    },
    faq: [
      {
        question: "Do you develop custom SaaS platforms?",
        answer:
          "Yes. We build scalable SaaS applications with subscription systems, multi-tenant architecture, and cloud-native deployment.",
      },
      {
        question: "Which technologies does Beno Support use?",
        answer:
          "We work with React, Angular, Node.js, Python, .NET, Flutter, Kubernetes, AWS, Azure, and modern cloud-native technologies.",
      },
      {
        question: "Can you modernize legacy applications?",
        answer:
          "Absolutely. We help businesses transform outdated systems into scalable and secure cloud-native applications.",
      },
      {
        question: "Do you provide dedicated development teams?",
        answer:
          "Yes. We offer flexible engagement models including dedicated teams, project-based delivery, and long-term engineering support.",
      },
      {
        question: "Can Beno Support support startup product development?",
        answer:
          "Yes. We help startups build MVPs, scalable SaaS platforms, and digital products designed for rapid growth and market expansion.",
      },
    ],
  },

  "cyber-resilience-threat-intelligence": {
    meta: {
      title: "Cybersecurity Services & Threat Intelligence Solutions | Beno Support",
      description:
        "Protect digital infrastructure with cybersecurity consulting, SOC services, threat intelligence, compliance frameworks, and AI security solutions.",
      canonicalUrl: "/services/cybersecurity-services/",
    },
    hero: {
      tagline: "Strengthen Digital Security with",
      tagline2: "Proactive Cyber Resilience",
      description:
        "Beno Support helps startups, SMBs, and enterprises secure applications, cloud infrastructure, AI systems, and enterprise environments through proactive cybersecurity and threat intelligence services.",
      ctaButtons: ["Request Security Assessment", "Talk to Security Experts"],
    },
    intro: {
      sectionLabel: "Cyber Resilience",
      title: "CYBERSECURITY & THREAT MANAGEMENT SERVICES",
      paragraphs: [
        "Modern digital ecosystems face evolving cyber threats, compliance challenges, and increasing infrastructure risks.",
        "Beno Support provides enterprise-grade cybersecurity services designed to strengthen security posture, improve operational resilience, and protect critical systems through proactive monitoring, threat intelligence, and security governance frameworks.",
        "Our security teams combine cloud security expertise, AI governance capabilities, and enterprise risk management practices to deliver scalable cybersecurity solutions.",
      ],
    },
    capabilities: {
      sectionLabel: "Security Services",
      title: "CORE CYBERSECURITY SERVICES",
      subtitle:
        "Enterprise-grade cybersecurity services covering AI security, penetration testing, SOC operations, compliance, and vulnerability management.",
      cards: [
        {
          iconName: "Shield",
          title: "AI-Specific Security\n& Guardrails",
          description:
            "Protect enterprise AI systems, LLM workflows, and automation platforms against misuse, vulnerabilities, and data leakage.",
          features: [
            "AI governance frameworks",
            "Prompt injection protection",
            "AI risk assessment",
            "LLM security controls",
            "Secure AI deployment",
            "Data privacy protection",
          ],
          highlighted: true,
        },
        {
          iconName: "Bug",
          title: "Penetration\nTesting",
          description:
            "Identify security vulnerabilities across applications, APIs, cloud infrastructure, and enterprise systems.",
          features: [
            "Web application testing",
            "API security testing",
            "Cloud security assessment",
            "Infrastructure penetration testing",
            "Security validation",
            "Threat simulation exercises",
          ],
          highlighted: false,
        },
        {
          iconName: "Eye",
          title: "Security Operations\n(SOC)",
          description:
            "Monitor, detect, and respond to cyber threats with proactive security operations and incident response support.",
          features: [
            "24/7 threat monitoring",
            "Incident response management",
            "Threat intelligence analysis",
            "Security event monitoring",
            "SIEM integration",
            "Threat detection workflows",
          ],
          highlighted: false,
        },
        {
          iconName: "FileCheck",
          title: "Compliance\nFrameworks",
          description:
            "Support enterprise governance and regulatory compliance through security-focused implementation strategies.",
          features: [
            "Security compliance consulting",
            "Governance framework support",
            "Risk assessment planning",
            "Security audit preparation",
            "Compliance monitoring",
            "Policy implementation support",
          ],
          highlighted: false,
        },
        {
          iconName: "Search",
          title: "Vulnerability\nAssessment",
          description:
            "Detect and mitigate infrastructure, application, and cloud security risks through proactive vulnerability analysis.",
          features: [
            "Infrastructure vulnerability scans",
            "Cloud security analysis",
            "Risk prioritization",
            "Security remediation planning",
            "Endpoint security assessment",
            "Continuous vulnerability monitoring",
          ],
          highlighted: false,
        },
      ],
    },
    scale: {
      sectionLabel: "Continuous Security & Validation",
      title: "CONTINUOUS SECURITY & VALIDATION",
      subtitle:
        "Hardened blueprints, secure cloud transitions, and deep technical audits designed to future-proof your ecosystem against evolving risks.",
      cards: [
        {
          iconName: "Network",
          title: "Edge Defense &\nCluster Shielding",
          description:
            "Deploys automated ingress filtering and micro-segmentation to insulate critical data from coordinated attacks.",
          highlighted: false,
        },
        {
          iconName: "Lock",
          title: "Hardened IaC &\nContainer Security",
          description:
            "Standardizes infrastructure provisioning using pre-audited templates and continuous registry scanning to block root vulnerabilities.",
          highlighted: false,
        },
        {
          iconName: "GitBranch",
          title: "Shift-Left &\nPipeline Integrity",
          description:
            "Injects automated policy-as-code checks and mandatory peer reviews directly into daily developer workflows.",
          highlighted: true,
        },
        {
          iconName: "UserCheck",
          title: "Identity & Runtime\nGovernance",
          description:
            "Monitors privileged accounts in real time with automated quarantine scripts to instantly lock down compromised secrets.",
          highlighted: false,
        },
        {
          iconName: "Activity",
          title: "Capacity Analytics\n& Telemetry",
          description:
            "Combines proactive tracking telemetry with rigorous stress testing to eliminate performance lag under heavy loads.",
          highlighted: false,
        },
        {
          iconName: "Shield",
          title: "Centralized Engineering\nGuardrails",
          description:
            "Synchronizes technical teams through unified reference frameworks to enforce strict, non-negotiable security gates.",
          highlighted: false,
        },
      ],
    },
    useCases: {
      sectionLabel: "Case Studies",
      title: "STRATEGIC USE CASES",
      cases: [
        {
          tabLabel: "FINVANTAGE LABS",
          tabSub: "Cloud & API Security Hardening",
          projectTitle: "Penetration Testing & Core Infrastructure Vulnerability Remediation",
          description:
            "Auditing and fixing critical access points inside a high-volume payment processing pipeline to stop unauthorized API exploits.",
          bullets: [
            "Deployment of automated penetration testing scripts to uncover hidden security flaws before malicious deployment",
            "Patching cloud configurations to strictly isolate transaction data sets from external network calls",
            "Integration of active encryption tokens to secure data routing channels across external banking integrations",
          ],
          stats: [
            { value: "0", label: "Critical data breaches or bypass leaks" },
            { value: "100%", label: "Compliance score across regulatory audits" },
            { value: "4x", label: "Faster identification of live system exploits" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "NEURALHEALTH AI",
          tabSub: "Enterprise AI Guardrail Deployment",
          projectTitle: "Large Language Model Security Validation & Data Isolation",
          description:
            "Embedding continuous filtering layers around an enterprise healthcare LLM to prevent data leaking and adversarial attacks.",
          bullets: [
            "Configuration of input validation walls to intercept malicious prompt injection attempts targeting the core model",
            "Implementation of secure database permissions to stop accidental exposure of sensitive employee and clinical records",
            "Setup of real-time query logging pipelines to trace and audit every outbound automated response instantly",
          ],
          stats: [
            { value: "<50ms", label: "Guardrail check processing latency" },
            { value: "0", label: "Sensitive data exposure incidents" },
            { value: "99.9%", label: "Mitigation of adversarial prompt injection variants" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "RETAILMAX GLOBAL",
          tabSub: "Managed SOC & Incident Response",
          projectTitle: "24/7 Threat Intelligence & Active Ransomware Containment",
          description:
            "Deploying an enterprise security monitoring hub to neutralize incoming digital threats across distributed commerce servers.",
          bullets: [
            "Installation of continuous behavioral detection agents to catch suspicious software executions at edge nodes",
            "Engineering automated script playbooks to instantly lock down compromised server assets during a hypothetical intrusion",
            "Consolidating system events into a single live portal for rapid visibility across all infrastructure zones",
          ],
          stats: [
            { value: "12 min", label: "Average containment time for active threats" },
            { value: "0", label: "Point-of-sale system operational downtime minutes" },
            { value: "10M+", label: "Daily security logs tracked and scrubbed live" },
          ],
          ctaLabel: "View Case Study",
        },
      ],
    },
    cta: {
      title: "Ready to Strengthen Cyber Resilience?",
      content:
        "Partner with Beno Support to secure digital infrastructure, protect enterprise systems, and improve cybersecurity readiness with proactive threat intelligence solutions.",
      buttons: ["Schedule Security Consultation", "Request Vulnerability Assessment", "Talk to Cybersecurity Experts"],
    },
    faq: [
      {
        question: "Do you provide enterprise cybersecurity services?",
        answer:
          "Yes. We provide cybersecurity consulting, SOC services, penetration testing, compliance support, and threat intelligence solutions.",
      },
      {
        question: "Can you secure AI systems and LLM workflows?",
        answer:
          "Absolutely. We implement AI security guardrails, governance frameworks, and secure AI deployment practices.",
      },
      {
        question: "Do you provide cloud security services?",
        answer:
          "Yes. We secure cloud infrastructure, cloud-native applications, APIs, and hybrid environments.",
      },
      {
        question: "What industries do you support with cybersecurity services?",
        answer:
          "We support healthcare, BFSI, SaaS, manufacturing, retail, logistics, education, and enterprise organizations.",
      },
      {
        question: "Can startups use your cybersecurity services?",
        answer:
          "Yes. We provide scalable cybersecurity solutions for startups, SMBs, and enterprises based on operational requirements.",
      },
    ],
  },

  "agentic-ai-intelligent-automation": {
    meta: {
      title: "Agentic AI & Intelligent Automation | Beno Support",
      description:
        "Beno Support builds AI agents, LLM integrations, RAG pipelines, and intelligent automation systems that transform how enterprises operate and make decisions.",
    },
    hero: {
      tagline: "Deploy AI-Powered Automation for",
      tagline2: "Smarter Business Operations",
      description:
        "Beno Support helps startups, SMBs, and enterprises implement AI agents, intelligent workflows, and automation systems that improve operational efficiency, customer experience, and decision-making",
      ctaButtons: ["Request a Proposal", "Talk to Our Experts"],
    },
    intro: {
      sectionLabel: "Agentic AI",
      title: "AI DEVELOPMENT & INTELLIGENT AUTOMATION SERVICES",
      paragraphs: [
        "AI is transforming how modern businesses operate. Beno Support helps organizations deploy intelligent automation systems, enterprise AI agents, and LLM-powered workflows that improve productivity and accelerate digital transformation.",
        "Our AI teams combine automation engineering, machine learning expertise, cloud infrastructure, and enterprise integration capabilities to build scalable and secure AI ecosystems.",
      ],
    },
    capabilities: {
      sectionLabel: "Core AI Services",
      title: "CORE AI SERVICES",
      subtitle:
        "Enterprise-grade AI services covering agent deployment, LLM integration, and intelligent automation to transform your business operations at scale.",
      cards: [
        {
          iconName: "Bot",
          title: "AI Agent\nDeployment",
          description:
            "We build enterprise AI agents that automate workflows, customer interactions, operational tasks, and business processes.",
          features: [
            "Conversational AI agents",
            "Enterprise AI copilots",
            "Workflow automation systems",
            "Multi-agent orchestration",
            "AI-powered support systems",
            "Process optimization",
          ],
          highlighted: true,
        },
        {
          iconName: "Brain",
          title: "LLM Integration\n& Fine-Tuning",
          description:
            "We integrate and optimize large language models for enterprise use cases and intelligent business operations.",
          features: [
            "OpenAI & LLM integrations",
            "Custom AI fine-tuning",
            "RAG implementation",
            "Enterprise knowledge systems",
            "Secure AI deployment",
            "AI governance frameworks",
          ],
          highlighted: false,
        },
        {
          iconName: "Zap",
          title: "Intelligent Process\nAutomation",
          description:
            "Automate repetitive workflows using AI-powered automation and orchestration systems.",
          features: [
            "Workflow automation",
            "AI-driven analytics",
            "Intelligent document processing",
            "Robotic process automation",
            "Operational intelligence",
            "Business process optimization",
          ],
          highlighted: false,
        },
        {
          iconName: "Eye",
          title: "Computer Vision &\nDocument Processing",
          description:
            "Extract insights from images, videos, and enterprise documents using AI-powered computer vision systems.",
          features: [
            "AI-powered document intelligence",
            "OCR & intelligent data extraction",
            "Invoice & financial document automation",
            "Healthcare records processing",
            "Visual AI & inspection systems",
            "Facial recognition solutions",
          ],
          highlighted: false,
        },
        {
          iconName: "Lightbulb",
          title: "AI Strategy\nConsulting",
          description:
            "We help businesses build AI adoption roadmaps and scalable transformation strategies.",
          features: [
            "AI readiness assessment",
            "AI governance consulting",
            "Enterprise AI roadmap",
            "AI transformation strategy",
            "Risk & compliance planning",
            "AI adoption consulting",
          ],
          highlighted: false,
        },
      ],
    },
    scale: {
      sectionLabel: "How We Guarantee Scale",
      title: "ACCELERATING AUTOMATION WITH AGENTIC AI",
      subtitle:
        "Dependable frameworks, strict data security, and constant testing to keep your intelligent systems running smoothly.",
      cards: [
        {
          iconName: "Network",
          title: "Multi-Agent Orchestration\n& Scale",
          description:
            "We set up advanced AI tools that work together smoothly on AWS and GCP. This keeps your automated tasks fast and reliable, even during busy business hours.",
          highlighted: false,
        },
        {
          iconName: "Cloud",
          title: "Cloud-Native AI Infrastructure\n& GitOps",
          description:
            "Pre-made cloud blueprints accelerate system deployment, enabling rapid, secure updates with absolutely zero business downtime.",
          highlighted: false,
        },
        {
          iconName: "RefreshCw",
          title: "Continuous MLOps\n& LLM Fine-Tuning",
          description:
            "Constant tracking and automated testing maintain high model accuracy, preventing drift and eliminating incorrect or off-track AI responses.",
          highlighted: false,
        },
        {
          iconName: "Shield",
          title: "Enterprise AI Governance\n& Security",
          description:
            "Automated privacy and security filters guard sensitive business data, while digital vaults securely lock down all passwords and access keys.",
          highlighted: true,
        },
        {
          iconName: "CheckCircle",
          title: "Quality-Assured\nEvaluation Frameworks",
          description:
            "AI responses are rigorously evaluated against strict quality scores before going live, catching mistakes early to guarantee reliable software performance.",
          highlighted: false,
        },
        {
          iconName: "Users",
          title: "Dedicated AI Lifecycle\nEngineering Teams",
          description:
            "Our tech teams follow daily coding guidelines to maintain consistency and accelerate deployment across the AI lifecycle.",
          highlighted: false,
        },
      ],
    },
    useCases: {
      sectionLabel: "Case Studies",
      title: "STRATEGIC USE CASES",
      cases: [
        {
          tabLabel: "HOLOZONE NCR",
          tabSub: "Smart Booking System",
          projectTitle: "AI-Powered Booking & Operational Automation",
          description:
            "Deploying intelligent reservation agents and automated operations for a modern, high-traffic virtual reality and holographic gaming center.",
          bullets: [
            "Smart AI agents for 24/7 automated customer booking and ticketing",
            "Automated scheduling systems that sync gaming arenas in real-time",
            "Centralized dashboard to track daily customer traffic and venue analytics",
          ],
          stats: [
            { value: "45%", label: "Reduction in manual booking effort" },
            { value: "24/7", label: "Instant customer response time" },
            { value: "35%", label: "Increase in arena slot utilization" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "AAROHAN DIGITAL",
          tabSub: "Automated SEO Pipeline",
          projectTitle: "Automated Search Indexing & Web Performance",
          description:
            "Implementing automated SEO monitoring and indexing workflows to maximize web visibility for multi-domain digital assets.",
          bullets: [
            "Automated Google Search Console integration for real-time keyword tracking",
            "Instant technical audit scripts to fix website crawl errors automatically",
            "Smart content indexing pipelines built to handle large domain networks",
          ],
          stats: [
            { value: "3x", label: "Faster search engine indexing" },
            { value: "0", label: "Manual keyword tracking hours" },
            { value: "80%", label: "Fewer technical website errors" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "FINVEX SOLUTIONS",
          tabSub: "Financial Settlement Engine",
          projectTitle: "Intelligent Financial Workflow Automation",
          description:
            "Streamlining merchant payouts, international transactions, and payment settlements using smart automation.",
          bullets: [
            "Automated merchant integration for hassle-free payment settlements",
            "Smart verification pipelines to check international transactions for errors",
            "Automated ledger matching that updates account balances instantly",
          ],
          stats: [
            { value: "70%", label: "Faster payment settlement tracking" },
            { value: "99.9%", label: "Transaction workflow accuracy" },
            { value: "0", label: "Manual payout processing delays" },
          ],
          ctaLabel: "View Case Study",
        },
      ],
    },
    cta: {
      title: "Ready to Scale with Intelligent Automation?",
      content:
        "Partner with Beno Support to deploy AI agents, automate workflows, and build enterprise-ready AI ecosystems that accelerate operational efficiency.",
      buttons: ["Request a Proposal", "Schedule a Consultation", "Talk to Our Experts"],
    },
    faq: [
      {
        question: "What AI models does Beno Support support?",
        answer:
          "We support OpenAI, Gemini, Claude, open-source LLMs, and enterprise AI deployments tailored to business requirements.",
      },
      {
        question: "Do you develop custom AI agents?",
        answer:
          "Yes. We build AI agents for workflow automation, customer support, analytics, and enterprise operations.",
      },
      {
        question: "Can you integrate AI into existing business systems?",
        answer:
          "Absolutely. We integrate AI into CRMs, ERPs, SaaS platforms, and enterprise applications.",
      },
      {
        question: "Do you provide AI governance consulting?",
        answer:
          "Yes. We help organizations implement AI governance frameworks, compliance policies, and secure AI deployment practices.",
      },
      {
        question: "Can startups use your AI automation services?",
        answer:
          "Yes. We help startups automate operations, build AI-powered products, and accelerate growth using scalable AI systems.",
      },
    ],
  },

  "digital-products-experience-engineering": {
    meta: {
      title: "Digital Products & Experience Engineering | Beno Support",
      description:
        "Beno Support designs and engineers digital products with world-class UX, high-performance frontends, and conversion-optimised experiences that drive business growth.",
    },
    hero: {
      tagline: "Experiences That",
      tagline2: "Drive Engagement",
      description:
        "Beautiful, performant digital products engineered from strategy through pixel — designed to delight users and deliver measurable business outcomes.",
    },
    intro: {
      sectionLabel: "Digital Products",
      title: "BEYOND DESIGN: EXPERIENCE-DRIVEN PRODUCT ENGINEERING",
      paragraphs: [
        "Great digital products are not just beautiful — they are fast, accessible, conversion-optimised, and engineered to delight users at every interaction.",
        "At Beno Support, we combine deep UX research, design systems thinking, and high-performance frontend engineering to build digital products that users love and businesses profit from.",
        "Our product engineering teams work at the intersection of design and technology, ensuring that every pixel, interaction, and user flow is backed by data and serves a clear business purpose.",
      ],
    },
    capabilities: {
      sectionLabel: "Product Capabilities",
      title: "CORE PRODUCT & EXPERIENCE CAPABILITIES",
      subtitle:
        "From research and strategy through to pixel-perfect engineering, our full-spectrum digital product capability builds experiences that convert, retain, and grow.",
      cards: [
        {
          iconName: "Palette",
          title: "UX Research\n& Design",
          description:
            "In-depth user research, journey mapping, wireframing, and high-fidelity prototyping creating products validated by real users before a single line of code is written.",
          highlighted: false,
        },
        {
          iconName: "Monitor",
          title: "Frontend\nEngineering",
          description:
            "Performant, accessible React and Next.js applications with pixel-perfect design implementation, Core Web Vitals optimisation, and progressive enhancement.",
          highlighted: true,
        },
        {
          iconName: "Layers",
          title: "Design Systems\n& Component Libraries",
          description:
            "Scalable, token-based design systems ensuring consistent UI across all platforms, products, and teams — dramatically reducing time-to-market for new features.",
          highlighted: false,
        },
        {
          iconName: "Target",
          title: "Product Strategy\n& Roadmapping",
          description:
            "Product discovery, opportunity mapping, OKR alignment, and sprint-ready backlog prioritisation for fast-moving product teams at any stage.",
          highlighted: false,
        },
        {
          iconName: "BarChart2",
          title: "Conversion Rate\nOptimisation",
          description:
            "Data-driven CRO programs combining user behavioural analysis, heatmaps, session recording, and A/B testing to continuously improve conversion metrics.",
          highlighted: false,
        },
        {
          iconName: "Eye",
          title: "Accessibility &\nInclusive Design",
          description:
            "WCAG 2.1 AA compliance, screen reader testing, keyboard navigation, and inclusive design patterns ensuring every user can fully engage with your product.",
          highlighted: false,
        },
      ],
    },
    scale: {
      sectionLabel: "How We Guarantee Scale",
      title: "HOW WE GUARANTEE EXPERIENCE AT SCALE",
      subtitle:
        "Performance, consistency, and data-driven iteration are built into our delivery model — ensuring your digital product keeps improving as your user base grows.",
      cards: [
        {
          iconName: "Zap",
          title: "Performance\nOptimisation",
          description:
            "Sub-2-second page loads through code splitting, lazy loading, image optimisation, edge caching, and Core Web Vitals engineering across all platforms.",
          highlighted: false,
        },
        {
          iconName: "Layers",
          title: "Component\nArchitecture",
          description:
            "Atomic design principles and reusable component libraries reducing frontend development time by up to 60% while maintaining visual consistency.",
          highlighted: true,
        },
        {
          iconName: "TrendingUp",
          title: "Analytics &\nProduct Insights",
          description:
            "GA4, Mixpanel, and Hotjar integration delivering granular behavioural insights that inform every product decision and roadmap iteration.",
          highlighted: false,
        },
        {
          iconName: "Search",
          title: "SEO & Core\nWeb Vitals",
          description:
            "Technical SEO audits, structured data implementation, and Core Web Vitals engineering delivering measurable organic traffic growth.",
          highlighted: false,
        },
        {
          iconName: "Award",
          title: "A/B Testing\nPrograms",
          description:
            "Structured experimentation with statistically significant test design, automated analysis pipelines, and full rollout frameworks for winning variants.",
          highlighted: false,
        },
        {
          iconName: "Globe",
          title: "Brand-Consistent\nExecution",
          description:
            "Design token governance and comprehensive review processes ensuring complete brand integrity across every product touchpoint and screen size.",
          highlighted: false,
        },
      ],
    },
    useCases: {
      sectionLabel: "Case Studies",
      title: "STRATEGIC USE CASES",
      cases: [
        {
          tabLabel: "SHOPNEST",
          tabSub: "E-Commerce Platform Redesign",
          projectTitle: "Full E-Commerce Platform Redesign & CRO",
          description:
            "Complete redesign of a mid-market e-commerce platform driving significant improvements in conversion, average order value, and customer retention.",
          bullets: [
            "Full design system built from scratch with 200+ reusable components",
            "Checkout flow redesign reducing cart abandonment by 34%",
            "Core Web Vitals achieved green scores across all key pages",
          ],
          stats: [
            { value: "34%", label: "Reduction in cart abandonment" },
            { value: "28%", label: "Increase in conversion rate" },
            { value: "2.1s", label: "Average page load time" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "FINDASH",
          tabSub: "Financial Analytics Dashboard",
          projectTitle: "Real-Time Financial Analytics Dashboard",
          description:
            "Designed and engineered a complex financial analytics dashboard processing 50M+ data points daily with sub-second rendering and WCAG AA compliance.",
          bullets: [
            "Custom data visualisation library with 30+ chart types built on D3.js",
            "Real-time WebSocket data feeds with optimistic UI updates",
            "Full WCAG 2.1 AA accessibility audit and implementation",
          ],
          stats: [
            { value: "50M+", label: "Daily data points rendered" },
            { value: "<500ms", label: "Dashboard load time" },
            { value: "AA", label: "WCAG compliance achieved" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "EDULEARN",
          tabSub: "Learning Platform UX",
          projectTitle: "Adaptive Learning Platform Experience",
          description:
            "Redesigned an enterprise learning management system improving course completion rates and learner engagement through data-driven UX improvements.",
          bullets: [
            "User research with 500+ learners informing complete IA restructure",
            "Adaptive learning path algorithm with personalised content recommendations",
            "Mobile-first responsive redesign with offline learning support",
          ],
          stats: [
            { value: "67%", label: "Increase in course completion" },
            { value: "4.8/5", label: "Learner satisfaction score" },
            { value: "3x", label: "Mobile engagement increase" },
          ],
          ctaLabel: "View Case Study",
        },
      ],
    },
  },

  "enterprise-startup-tech-strategy": {
    meta: {
      title: "Digital Transformation & Enterprise Technology Consulting | Beno Support",
      description:
        "Modernize infrastructure, optimize technology ecosystems, and accelerate digital transformation with Beno Support's consulting services.",
      canonicalUrl: "/services/enterprise-tech-strategy-consulting/",
    },
    hero: {
      tagline: "Align Technology Strategy with",
      tagline2: "Business Growth",
      description:
        "Beno Support helps businesses modernize infrastructure, optimize enterprise architecture, and accelerate digital transformation through strategic technology consulting.",
      ctaButtons: ["Request a Proposal", "Talk to Our Experts"],
    },
    intro: {
      sectionLabel: "Tech Strategy",
      title: "ENTERPRISE TECHNOLOGY CONSULTING SERVICES",
      paragraphs: [
        "Modern businesses need technology strategies that support scalability, operational efficiency, and long-term innovation.",
        "Beno Support provides enterprise consulting and architecture advisory services that help organizations modernize systems, optimize infrastructure, and align technology investments with business growth.",
      ],
    },
    capabilities: {
      sectionLabel: "Consulting Services",
      title: "CORE CONSULTING SERVICES",
      subtitle:
        "Enterprise technology consulting covering stack audits, legacy modernization, digital transformation, CTO advisory, and modern workplace architecture.",
      cards: [
        {
          iconName: "Search",
          title: "Technology\nStack Audit",
          description:
            "Assess and optimize existing infrastructure, software systems, and technology ecosystems.",
          features: [
            "Infrastructure assessment",
            "Technology gap analysis",
            "Security posture review",
            "Scalability evaluation",
            "Platform optimization",
            "Architecture recommendations",
          ],
          highlighted: false,
        },
        {
          iconName: "RefreshCw",
          title: "Legacy\nModernisation",
          description:
            "Transform outdated systems into scalable cloud-native environments.",
          features: [
            "Legacy system assessment",
            "Cloud-native modernization",
            "Infrastructure transformation",
            "Application modernization",
            "Platform migration",
            "Performance optimization",
          ],
          highlighted: true,
        },
        {
          iconName: "Map",
          title: "Digital Transformation\nRoadmap",
          description:
            "Develop strategic modernization plans aligned with business goals.",
          features: [
            "Transformation strategy",
            "Cloud adoption planning",
            "AI adoption roadmap",
            "Operational modernization",
            "Digital innovation planning",
            "Enterprise scalability strategy",
          ],
          highlighted: false,
        },
        {
          iconName: "Users",
          title: "CTO Advisory\nServices",
          description:
            "Access executive-level technology leadership and architecture consulting.",
          features: [
            "Technology leadership advisory",
            "Product architecture planning",
            "Scaling strategy consulting",
            "Innovation planning",
            "IT governance advisory",
            "Executive technology guidance",
          ],
          highlighted: false,
        },
        {
          iconName: "Monitor",
          title: "Modern Workplace\nArchitecture",
          description:
            "Secure digital workplace environments built for collaboration, productivity, and hybrid operations.",
          features: [
            "Microsoft 365 & Google Workspace deployment",
            "Collaboration platform integration",
            "MDM & endpoint management",
            "Zero-trust access setup",
            "Hybrid work infrastructure",
            "Secure remote workforce enablement",
          ],
          highlighted: false,
        },
      ],
    },
    scale: {
      sectionLabel: "Accelerating Modernization",
      title: "ACCELERATING MODERNIZATION",
      subtitle:
        "Dependable blueprints, secure cloud transitions, and rigorous technical evaluations to confidently future-proof your business operations.",
      cards: [
        {
          iconName: "FileSearch",
          title: "Tech Stack Audit\n& Cost Control",
          description:
            "Automated diagnostic scripts scan software to identify architectural bloat, immediately cutting redundant license costs and cloud waste.",
          highlighted: false,
        },
        {
          iconName: "Cloud",
          title: "Cloud Migration\n& Zero-Downtime",
          description:
            "Container blueprints and IaC templates migrate legacy applications to AWS or Azure with zero operational business disruption.",
          highlighted: false,
        },
        {
          iconName: "GitBranch",
          title: "Microservices\n& Modularity",
          description:
            "Brittle monolithic systems are broken into scalable microservices, allowing individual modules to update instantly without taking the application offline.",
          highlighted: true,
        },
        {
          iconName: "Shield",
          title: "Security &\nThreat Compliance",
          description:
            "Integrated digital vaults, automated access controls, and strict encryption protocols keep business records and sensitive client data secure.",
          highlighted: false,
        },
        {
          iconName: "Lightbulb",
          title: "CTO Advisory\n& Growth Mapping",
          description:
            "Clear, executive-level technical roadmaps outline precise development phases, resource budgeting, and technology selection for the next 3 to 5 years.",
          highlighted: false,
        },
        {
          iconName: "Award",
          title: "Architecture &\nEngineering Teams",
          description:
            "Senior technology consultants follow precise engineering guidelines to provide complete oversight across system design, testing, and deployment.",
          highlighted: false,
        },
      ],
    },
    useCases: {
      sectionLabel: "Case Studies",
      title: "STRATEGIC USE CASES",
      cases: [
        {
          tabLabel: "VANGUARD LOGISTICS",
          tabSub: "Legacy Core Migration",
          projectTitle: "Legacy Modernization & Cloud Transition for Supply Chains",
          description:
            "Modernizing a 15-year-old on-premise ERP into a scalable, cloud-native routing architecture.",
          bullets: [
            "Migration of siloed legacy databases into a high-availability cloud data warehouse",
            "Re-engineered APIs to sync third-party warehouse management systems seamlessly",
            "Containerized microservices to process telemetry and routes with zero delays",
          ],
          stats: [
            { value: "85%", label: "Lower legacy server maintenance costs" },
            { value: "0", label: "Mid-transit data sync faults" },
            { value: "5x", label: "Faster route optimization processing" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "NEXUS HEALTH",
          tabSub: "Interoperable Enterprise Architecture",
          projectTitle: "Healthcare IT Infrastructure Overhaul & Blueprinting",
          description:
            "Restructuring data workflows across a multi-facility network to meet modern medical standards.",
          bullets: [
            "Decoupled data environments separating clinical platforms from public patient portals",
            "Standardized database setups to instantly comply with global medical data rules",
            "Failover cloud frameworks ensuring patient charts remain accessible during outages",
          ],
          stats: [
            { value: "100%", label: "Compliance with healthcare data audits" },
            { value: "0", label: "Single points of failure across systems" },
            { value: "70%", label: "Faster data retrieval for medical staff" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "ELEVATE INSURETECH",
          tabSub: "CTO Advisory & Platform Scaling",
          projectTitle: "Digital Transformation & Microservices for High-Volume Claims",
          description:
            "Upgrading a sluggish monolithic insurance platform into a rapid, multi-tenant digital hub.",
          bullets: [
            "Strategic auditing to map out a risk-free software decomposition roadmap",
            "Elastic auto-scaling infrastructure deployed to absorb major user traffic spikes",
            "Distributed tracing and logging pipelines to monitor core database transactions",
          ],
          stats: [
            { value: "12x", label: "Higher concurrent traffic capacity" },
            { value: "0", label: "Application downtime minutes" },
            { value: "45%", label: "Faster claim approval pipeline speed" },
          ],
          ctaLabel: "View Case Study",
        },
      ],
    },
    cta: {
      title: "Ready to Modernize Your Technology Ecosystem?",
      content:
        "Partner with Beno Support to build scalable technology strategies, modernize infrastructure, and accelerate digital transformation initiatives.",
      buttons: ["Talk to Our Consultants", "Request a Consultation", "Schedule a Strategy Session"],
    },
    faq: [
      {
        question: "Do you provide digital transformation consulting?",
        answer:
          "Yes. We help businesses modernize operations, infrastructure, and enterprise technology ecosystems.",
      },
      {
        question: "Can you support startup technology planning?",
        answer:
          "Absolutely. We support startups with architecture strategy, product planning, and scaling roadmaps.",
      },
      {
        question: "What industries do you support?",
        answer:
          "We work across BFSI, healthcare, retail, SaaS, logistics, manufacturing, education, and public sector industries.",
      },
      {
        question: "Do you provide CTO advisory services?",
        answer:
          "Yes. Our consultants provide executive-level technology guidance for scaling and modernization initiatives.",
      },
      {
        question: "Can you help with legacy modernization?",
        answer:
          "Yes. We modernize outdated infrastructure and applications using cloud-native engineering practices.",
      },
    ],
  },

  "strategic-it-governance-managed-services": {
    meta: {
      title: "Strategic IT Governance & Managed Services | Beno Support",
      description:
        "Beno Support provides 24/7 managed IT operations, ITIL-aligned service management, infrastructure management, and IT governance frameworks for enterprises worldwide.",
    },
    hero: {
      tagline: "Governance That",
      tagline2: "Drives Continuity",
      description:
        "Round-the-clock managed IT operations, ITIL-aligned service management, and strategic governance frameworks delivering 99.9% uptime and cost-optimised technology operations.",
    },
    intro: {
      sectionLabel: "Managed Services",
      title: "BEYOND SUPPORT: STRATEGIC IT OPERATIONS",
      paragraphs: [
        "Managed services are no longer just about keeping the lights on — they are a strategic lever for operational excellence, cost reduction, and business agility.",
        "At Beno Support, we deliver fully managed IT operations, service management, and governance programs that free your internal teams to focus on innovation while we ensure your technology runs reliably.",
        "Our managed services teams operate with contractual SLA commitments, AIOps-enhanced monitoring, and proactive engineering that prevents incidents before they impact your business.",
      ],
    },
    capabilities: {
      sectionLabel: "Managed Services Capabilities",
      title: "CORE MANAGED SERVICES CAPABILITIES",
      subtitle:
        "End-to-end IT operations management across infrastructure, service desk, governance, and compliance — all under one contractual SLA commitment.",
      cards: [
        {
          iconName: "Settings",
          title: "24/7 Managed\nIT Operations",
          description:
            "Round-the-clock infrastructure monitoring, incident management, and proactive maintenance ensuring maximum uptime across all technology layers.",
          highlighted: false,
        },
        {
          iconName: "Headphones",
          title: "IT Service\nManagement (ITSM)",
          description:
            "ITIL-aligned service management covering change, incident, problem, and configuration management with full audit trail and reporting.",
          highlighted: true,
        },
        {
          iconName: "Server",
          title: "Infrastructure\nManagement",
          description:
            "End-to-end management of on-premise, hybrid, and cloud infrastructure including servers, networks, storage, and endpoint devices.",
          highlighted: false,
        },
        {
          iconName: "Headphones",
          title: "Help Desk &\nEnd-User Support",
          description:
            "Tier 1–3 technical support with guaranteed SLAs, knowledge base management, and continuous first-call resolution improvement programs.",
          highlighted: false,
        },
        {
          iconName: "RefreshCw",
          title: "Change &\nRelease Management",
          description:
            "Structured change control processes minimising service disruption while accelerating the speed of technology delivery across your estate.",
          highlighted: false,
        },
        {
          iconName: "FileText",
          title: "IT Governance\n& Policy",
          description:
            "IT governance frameworks, policy development, RACI definition, and compliance controls ensuring accountability and regulatory alignment.",
          highlighted: false,
        },
      ],
    },
    scale: {
      sectionLabel: "How We Guarantee Scale",
      title: "HOW WE GUARANTEE SERVICE AT SCALE",
      subtitle:
        "Our managed services model is built on contractual commitments, proactive engineering, and continuous optimisation — not reactive firefighting.",
      cards: [
        {
          iconName: "Award",
          title: "Guaranteed SLA\nPerformance",
          description:
            "99.9% uptime SLA with contractual commitments, real-time performance dashboards, and financial penalties ensuring accountability at every level.",
          highlighted: false,
        },
        {
          iconName: "Activity",
          title: "Proactive\nAIOps Monitoring",
          description:
            "AIOps-enhanced monitoring detecting anomalies before they become incidents, reducing unplanned downtime by up to 75% across your entire estate.",
          highlighted: true,
        },
        {
          iconName: "Database",
          title: "Asset Lifecycle\nManagement",
          description:
            "Complete visibility into IT assets from procurement through decommission, eliminating shadow IT and ensuring cost-effective technology refresh cycles.",
          highlighted: false,
        },
        {
          iconName: "Users",
          title: "Multi-Vendor\nManagement",
          description:
            "Single-point vendor governance covering procurement, licensing, renewal, and performance management across your entire technology supplier ecosystem.",
          highlighted: false,
        },
        {
          iconName: "DollarSign",
          title: "IT Cost\nOptimisation",
          description:
            "Regular IT cost reviews identifying consolidation opportunities, licence rationalisation, and cloud spend optimisation delivering consistent savings.",
          highlighted: false,
        },
        {
          iconName: "FileCheck",
          title: "Audit &\nCompliance Reporting",
          description:
            "Automated compliance reports, audit logs, and policy attestations ensuring you are always audit-ready across all frameworks and regulatory requirements.",
          highlighted: false,
        },
      ],
    },
    useCases: {
      sectionLabel: "Case Studies",
      title: "STRATEGIC USE CASES",
      cases: [
        {
          tabLabel: "GLOBAL MFG CO",
          tabSub: "IT Consolidation Program",
          projectTitle: "Global IT Consolidation & Centralised Operations",
          description:
            "Consolidated fragmented IT operations across 8 business units into a single managed service model, achieving consistent SLAs and significant cost reduction.",
          bullets: [
            "Unified NOC monitoring 2,400+ devices across 12 global sites",
            "ITSM implementation with single CMDB serving all business units",
            "IT spend reduction of 32% through contract consolidation and optimisation",
          ],
          stats: [
            { value: "32%", label: "IT cost reduction" },
            { value: "2,400+", label: "Devices under management" },
            { value: "99.96%", label: "Uptime achieved" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "HEALTHNET",
          tabSub: "ITSM Implementation",
          projectTitle: "ITIL-Aligned ITSM Platform Implementation",
          description:
            "Implemented a comprehensive ITIL-aligned ITSM platform for a healthcare network, transforming reactive IT support into proactive service management.",
          bullets: [
            "ServiceNow deployment with 45 custom workflows and automation rules",
            "First call resolution improved from 43% to 78% within 90 days",
            "Change management process reducing change-related incidents by 65%",
          ],
          stats: [
            { value: "78%", label: "First call resolution rate" },
            { value: "65%", label: "Fewer change incidents" },
            { value: "45", label: "Custom workflows deployed" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "BANKFIRST",
          tabSub: "Managed Infrastructure & SOC",
          projectTitle: "Managed Infrastructure & Security Operations",
          description:
            "Took full operational ownership of a regional bank's IT infrastructure and security operations, delivering guaranteed SLAs and regulatory compliance.",
          bullets: [
            "24/7 NOC and SOC co-managed model with dedicated bank liaison",
            "Automated regulatory reporting for FCA, PRA, and internal audit requirements",
            "Disaster recovery testing program achieving RTO of under 4 hours",
          ],
          stats: [
            { value: "4 hrs", label: "Recovery time objective" },
            { value: "100%", label: "Regulatory reports on time" },
            { value: "0", label: "Major incidents in 18 months" },
          ],
          ctaLabel: "View Case Study",
        },
      ],
    },
  },

  "cloud-platform-engineering": {
    meta: {
      title: "Cloud & Platform Engineering | Beno Support",
      description:
        "Beno Support delivers cloud migration, Kubernetes orchestration, serverless architecture, FinOps, and internal developer platforms on AWS, Azure, and GCP.",
    },
    hero: {
      tagline: "Cloud That",
      tagline2: "Scales Infinitely",
      description:
        "Cloud-native architecture, Kubernetes platforms, and FinOps engineering that give your business the infrastructure agility, security, and cost efficiency to scale without limits.",
    },
    intro: {
      sectionLabel: "Cloud Engineering",
      title: "BEYOND MIGRATION: CLOUD-NATIVE ENGINEERING",
      paragraphs: [
        "Cloud transformation is not a one-time migration project — it is a continuous engineering journey that compounds business value through automation, optimisation, and platform maturity.",
        "At Beno Support, we design, build, and operate cloud-native platforms on AWS, Azure, and GCP that give your engineering teams the infrastructure agility to move fast without breaking things.",
        "From Kubernetes orchestration and serverless architecture to FinOps governance and internal developer platforms, our cloud engineers build the foundations that scale with your business.",
      ],
    },
    capabilities: {
      sectionLabel: "Cloud Capabilities",
      title: "CORE CLOUD & PLATFORM CAPABILITIES",
      subtitle:
        "Full-spectrum cloud engineering from migration strategy and Kubernetes orchestration to FinOps governance and developer platform delivery.",
      cards: [
        {
          iconName: "Cloud",
          title: "Cloud Migration\n& Modernisation",
          description:
            "Lift-and-shift, re-platform, and re-architect migration strategies with zero-downtime cutover planning across AWS, Azure, and GCP.",
          highlighted: false,
        },
        {
          iconName: "Server",
          title: "Kubernetes &\nContainer Orchestration",
          description:
            "Production-grade Kubernetes platforms with autoscaling, service mesh, GitOps workflows, and multi-cluster management for enterprise workloads.",
          highlighted: true,
        },
        {
          iconName: "Zap",
          title: "Serverless &\nEvent-Driven Architecture",
          description:
            "AWS Lambda, Azure Functions, and Cloud Run implementations with event-driven microservices patterns for cost-efficient, auto-scaling workloads.",
          highlighted: false,
        },
        {
          iconName: "Globe",
          title: "Multi-Cloud &\nHybrid Strategy",
          description:
            "Vendor-neutral cloud strategies with workload portability, cross-cloud networking, data gravity management, and unified observability.",
          highlighted: false,
        },
        {
          iconName: "GitMerge",
          title: "DevOps &\nPlatform Engineering",
          description:
            "Internal developer platforms, golden path templates, and CI/CD automation that reduce developer cycle time by 60% and eliminate toil.",
          highlighted: false,
        },
        {
          iconName: "DollarSign",
          title: "FinOps & Cloud\nCost Engineering",
          description:
            "Cloud cost governance, rightsizing, reserved instance management, and commitment optimisation consistently delivering 30–40% cost savings.",
          highlighted: false,
        },
      ],
    },
    scale: {
      sectionLabel: "How We Guarantee Scale",
      title: "HOW WE GUARANTEE CLOUD SCALE & RELIABILITY",
      subtitle:
        "Our cloud platforms are engineered for 99.99% availability, elastic scale, and continuous cost optimisation — not just provisioned and forgotten.",
      cards: [
        {
          iconName: "TrendingUp",
          title: "Auto-Scaling\nInfrastructure",
          description:
            "Demand-driven auto-scaling ensuring zero performance degradation during traffic spikes while maintaining cost efficiency at low load periods.",
          highlighted: false,
        },
        {
          iconName: "Lock",
          title: "Cloud-Native\nSecurity",
          description:
            "Runtime security, container image scanning, secrets management, and Cloud Security Posture Management across all environments and accounts.",
          highlighted: true,
        },
        {
          iconName: "TrendingDown",
          title: "FinOps Cost\nGovernance",
          description:
            "Monthly FinOps reviews, showback/chargeback models, and spend anomaly alerting keeping cloud costs predictable and continuously optimised.",
          highlighted: false,
        },
        {
          iconName: "Database",
          title: "Disaster Recovery\n& Business Continuity",
          description:
            "RTO/RPO-driven DR architectures with automated failover, multi-region replication, and regular DR drills ensuring recoverability at all times.",
          highlighted: false,
        },
        {
          iconName: "Network",
          title: "High-Availability\nEngineering",
          description:
            "Active-active multi-AZ and multi-region architectures with intelligent traffic routing ensuring 99.99% availability for mission-critical workloads.",
          highlighted: false,
        },
        {
          iconName: "Layers",
          title: "Platform\nObservability",
          description:
            "Full-stack observability with distributed tracing, log aggregation, metrics dashboards, SLO tracking, and intelligent alerting across the entire platform.",
          highlighted: false,
        },
      ],
    },
    useCases: {
      sectionLabel: "Case Studies",
      title: "STRATEGIC USE CASES",
      cases: [
        {
          tabLabel: "ECOMMERCE GIANT",
          tabSub: "AWS Migration & Platform",
          projectTitle: "AWS Cloud Migration & Platform Modernisation",
          description:
            "Migrated a peak-traffic e-commerce platform from on-premise to AWS, handling 500K concurrent users during flash sale events with zero downtime.",
          bullets: [
            "Zero-downtime migration of 240+ microservices to AWS EKS",
            "Auto-scaling achieving 500K concurrent users during peak events",
            "FinOps program delivering 38% reduction in monthly cloud spend",
          ],
          stats: [
            { value: "500K", label: "Concurrent users handled" },
            { value: "38%", label: "Cloud cost reduction" },
            { value: "0", label: "Downtime during migration" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "FINTECH STARTUP",
          tabSub: "Kubernetes Platform Engineering",
          projectTitle: "Production Kubernetes Platform for FinTech",
          description:
            "Designed and deployed a production-grade Kubernetes platform enabling a FinTech startup to achieve PCI-DSS compliance and 99.99% availability.",
          bullets: [
            "Multi-cluster Kubernetes with Istio service mesh and mTLS everywhere",
            "GitOps deployment pipeline with ArgoCD enabling 40+ daily deployments",
            "PCI-DSS compliant infrastructure achieving SOC 2 Type II certification",
          ],
          stats: [
            { value: "99.99%", label: "Platform availability" },
            { value: "40+", label: "Daily deployments" },
            { value: "SOC 2", label: "Type II certified" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "MEDIA CO",
          tabSub: "Serverless Video Processing",
          projectTitle: "Serverless Video Processing at Scale",
          description:
            "Rebuilt a video processing pipeline on serverless architecture, reducing infrastructure costs by 72% while handling 10x more content volume.",
          bullets: [
            "Event-driven serverless pipeline processing 100K+ videos monthly",
            "Auto-scaling from 0 to 10,000 concurrent jobs with no pre-provisioning",
            "CDN and edge optimisation achieving 40% faster global video delivery",
          ],
          stats: [
            { value: "72%", label: "Infrastructure cost reduction" },
            { value: "100K+", label: "Videos processed monthly" },
            { value: "10x", label: "Volume increase handled" },
          ],
          ctaLabel: "View Case Study",
        },
      ],
    },
  },

  "workforce-technology-human-capital-advisory": {
    meta: {
      title: "Workforce Technology & Human Capital Advisory | Beno Support",
      description:
        "Beno Support implements HRMS platforms, workforce analytics, learning management systems, and digital adoption programs that transform how enterprises manage and develop their people.",
    },
    hero: {
      tagline: "Empowering Your",
      tagline2: "Digital Workforce",
      description:
        "HRMS implementation, workforce analytics, and digital learning platforms that transform how enterprises attract, develop, and retain their most important asset — their people.",
    },
    intro: {
      sectionLabel: "Workforce Technology",
      title: "BEYOND HR SYSTEMS: PEOPLE-FIRST DIGITAL TRANSFORMATION",
      paragraphs: [
        "The future of work is digital, data-driven, and deeply human. Organisations that invest in workforce technology gain measurable advantages in talent attraction, retention, and productivity.",
        "At Beno Support, we implement HRMS platforms, build workforce analytics capabilities, and deploy learning management systems that make people operations more strategic and impactful.",
        "Our human capital advisors combine technology expertise with deep HR domain knowledge to deliver implementations that employees actually adopt — and that deliver measurable workforce outcomes.",
      ],
    },
    capabilities: {
      sectionLabel: "Workforce Capabilities",
      title: "CORE WORKFORCE TECHNOLOGY CAPABILITIES",
      subtitle:
        "From HRMS implementation through workforce analytics and digital learning, our human capital technology capability covers the full employee lifecycle.",
      cards: [
        {
          iconName: "Users",
          title: "HRMS Implementation\n& Integration",
          description:
            "Deploy and integrate leading HRMS platforms including SAP SuccessFactors, Workday, and BambooHR with full data migration and change management support.",
          highlighted: false,
        },
        {
          iconName: "BarChart2",
          title: "Workforce Analytics\n& Insights",
          description:
            "Advanced people analytics platforms delivering real-time workforce intelligence, attrition prediction, skills gap analysis, and headcount planning.",
          highlighted: true,
        },
        {
          iconName: "BookOpen",
          title: "Learning Management\nSystems",
          description:
            "LMS implementation, custom e-learning content development, and blended learning programs that upskill your workforce and close critical skills gaps at scale.",
          highlighted: false,
        },
        {
          iconName: "Smartphone",
          title: "Employee Self-Service\nPortals",
          description:
            "Intuitive self-service portals reducing HR workload by 50% through automated leave management, payslip access, onboarding workflows, and policy libraries.",
          highlighted: false,
        },
        {
          iconName: "UserCheck",
          title: "Talent Technology\n& ATS",
          description:
            "Applicant tracking system implementation, candidate experience design, and AI-powered recruitment workflow automation for faster, better hires.",
          highlighted: false,
        },
        {
          iconName: "FileText",
          title: "Payroll &\nBenefits Automation",
          description:
            "End-to-end payroll automation with multi-country compliance, benefits administration, and statutory reporting integration for global workforces.",
          highlighted: false,
        },
      ],
    },
    scale: {
      sectionLabel: "How We Guarantee Scale",
      title: "HOW WE GUARANTEE WORKFORCE TRANSFORMATION",
      subtitle:
        "Technology implementations only succeed when people adopt them. Our change management, training, and analytics capabilities ensure your workforce transformation sticks.",
      cards: [
        {
          iconName: "RefreshCw",
          title: "Change\nManagement",
          description:
            "Structured OCM programs ensuring new technology adoption through stakeholder engagement, communication planning, training, and resistance management.",
          highlighted: false,
        },
        {
          iconName: "GraduationCap",
          title: "Digital Learning\nPathways",
          description:
            "Personalised, role-based learning journeys that continuously develop employee capabilities, close skills gaps, and support career progression.",
          highlighted: true,
        },
        {
          iconName: "Monitor",
          title: "Digital Adoption\nPlatforms",
          description:
            "In-app guidance, contextual help overlays, and usage analytics accelerating employee adoption of new technology by up to 70% vs. classroom training alone.",
          highlighted: false,
        },
        {
          iconName: "Heart",
          title: "Culture &\nEngagement",
          description:
            "Employee engagement platforms, continuous pulse surveys, and feedback loops that build high-performance culture and measurably reduce unwanted turnover.",
          highlighted: false,
        },
        {
          iconName: "Shield",
          title: "Workforce\nCompliance",
          description:
            "Automated statutory compliance management, labour law adherence tracking, and audit-ready documentation across all jurisdictions and employment types.",
          highlighted: false,
        },
        {
          iconName: "TrendingDown",
          title: "Retention\nAnalytics",
          description:
            "Predictive retention models and early warning systems identifying flight-risk employees before departure — enabling timely, targeted intervention.",
          highlighted: false,
        },
      ],
    },
    useCases: {
      sectionLabel: "Case Studies",
      title: "STRATEGIC USE CASES",
      cases: [
        {
          tabLabel: "GLOBAL CORP",
          tabSub: "HRMS Transformation",
          projectTitle: "Global HRMS Transformation & Consolidation",
          description:
            "Consolidated 6 disparate HR systems into a single Workday platform for a 15,000-employee global enterprise with operations in 22 countries.",
          bullets: [
            "Workday HCM deployment with multi-country payroll across 22 jurisdictions",
            "Legacy data migration of 15 years of employee records with 99.8% accuracy",
            "Employee self-service adoption reaching 92% within 60 days of go-live",
          ],
          stats: [
            { value: "92%", label: "Self-service adoption rate" },
            { value: "22", label: "Countries on single platform" },
            { value: "40%", label: "HR admin cost reduction" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "TECHSTART",
          tabSub: "Workforce Analytics Platform",
          projectTitle: "People Analytics Platform for High-Growth Startup",
          description:
            "Built a custom workforce analytics platform for a 1,200-person tech company providing real-time insights on attrition, skills gaps, and team performance.",
          bullets: [
            "Predictive attrition model with 87% accuracy identifying at-risk employees",
            "Skills inventory platform mapping 400+ competencies across 60 job families",
            "Manager effectiveness dashboard improving engagement scores by 22%",
          ],
          stats: [
            { value: "87%", label: "Attrition prediction accuracy" },
            { value: "34%", label: "Reduction in unwanted attrition" },
            { value: "22%", label: "Increase in engagement scores" },
          ],
          ctaLabel: "View Case Study",
        },
        {
          tabLabel: "RETAILCO",
          tabSub: "LMS & Digital Learning",
          projectTitle: "Enterprise LMS & Digital Learning Transformation",
          description:
            "Deployed and customised a learning management system for a 20,000-employee retailer, shifting from in-person training to digital-first learning at scale.",
          bullets: [
            "Cornerstone OnDemand implementation with custom retail-specific content library",
            "AI-powered learning path recommendations reducing time-to-competency by 45%",
            "Mobile-first learning app achieving 78% active monthly users across stores",
          ],
          stats: [
            { value: "78%", label: "Monthly active learners" },
            { value: "45%", label: "Faster time-to-competency" },
            { value: "£800K", label: "Training cost savings annually" },
          ],
          ctaLabel: "View Case Study",
        },
      ],
    },
  },
}
