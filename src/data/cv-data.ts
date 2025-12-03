import type { CVData } from '../models/cv-types';

export const cvData: CVData = {
  person: {
    fullName: "Morteza Ghelich Khani",
    shortName: "",
    location: "Vienna, AT",
    headline: "Senior Frontend Engineer · Vienna, Austria",
    summary:
      "Senior Frontend Engineer with 10+ years of experience delivering high-quality web applications in fast-paced, international environments. Skilled in modern frontend frameworks, scalable UI architecture, API integrations, performance optimization, and UX-focused collaboration with product and design teams."
  },

  contact: {
    email: "m.ghelichkhani@gmail.com",
    linkedInUrl: "https://linkedin.com/in/mghelichkhani",
    githubUrl: undefined,
    websiteUrl: undefined
  },

  lookingFor: {
    title: "Currently Looking for",
    bulletPoints: [
      "Frontend Engineer / UI Engineer roles",
      "Full-time · Remote in EU or Vienna-based hybrid",
      "Available immediately"
    ]
  },

  languages: [
    { name: "Persian", level: "Native" },
    { name: "English", level: "C1 (IELTS Academic)" },
    { name: "German", level: "B2 (ÖSD Certificate)" }
  ],

  otherInfo: [
    { category: "Other", value: "Climbing" },
    { category: "Hobby", value: "Cycling" },
    { category: "Hobby", value: "Guitars" },
    { category: "Hobby", value: "DIY projects" },
  ],

  techTags: [
    //
    // ───────────────────────────────────────────
    // FRONTEND & UI
    // ───────────────────────────────────────────
    //
    { id: "javascript", name: "JavaScript (ES6+)", category: "frontendUi", level: 5},
    { id: "typescript", name: "TypeScript", category: "frontendUi", level: 5},
    { id: "vue", name: "Vue.js", category: "frontendUi", level: 5},
    { id: "react", name: "React", category: "frontendUi", level: 4},
    { id: "nextjs", name: "Next.js", category: "frontendUi", level: 3 },
    { id: "alpine", name: "Alpine.js", category: "frontendUi", level: 3 },
    { id: "tailwind", name: "Tailwind CSS", category: "frontendUi", level: 5},
    { id: "bootstrap", name: "Bootstrap", category: "frontendUi", level: 4 },
    { id: "angular", name: "Angular", category: "frontendUi", level: 4 },
    { id: "foundation", name: "Foundation", category: "frontendUi", level: 3 },
    { id: "growthbook", name: "GrowthBook (Experiments)", category: "frontendUi", level: 4},
    { id: "csharpdotnet", name: "C# / .NET (Frontend work)", category: "frontendUi", level: 3 },
    { id: "actionscript", name: "ActionScript / Flash", category: "frontendUi", level: 2 },
    { id: "handlebars", name: "Handlebars", category: "frontendUi", level: 3 },
    { id: "lottiejs", name: "Lottie.js", category: "frontendUi", level: 3 },
    { id: "vuelidate", name: "Vuelidate", category: "frontendUi", level: 3 },
  
    // Data visualisation
    { id: "chartjs", name: "Chart.js", category: "frontendUi", level: 3 },
    { id: "highcharts", name: "Highcharts", category: "frontendUi", level: 3 },
    { id: "d3", name: "D3.js", category: "frontendUi", level: 2 },
  
    //
    // ───────────────────────────────────────────
    // API & BACKEND INTEGRATION (consumer-only)
    // ───────────────────────────────────────────
    //
    { id: "rest", name: "REST APIs", category: "apiBackend", level: 4 },
    { id: "graphql", name: "GraphQL", category: "apiBackend", level: 3 },
    { id: "grpc", name: "gRPC (consumer)", category: "apiBackend", level: 3 },
    { id: "axios", name: "Axios (Data fetching)", category: "apiBackend", level: 4 },
    { id: "node", name: "Node.js (light usage)", category: "apiBackend", level: 3 },
    { id: "express", name: "Express (consumer/API routes)", category: "apiBackend", level: 2 },
    { id: "django", name: "Django (frontend integration)", category: "apiBackend", level: 2 },
    { id: "swagger", name: "Swagger / OpenAPI (consumer)", category: "apiBackend", level: 3 },
    { id: "redis", name: "Redis (consumer)", category: "apiBackend", level: 2 },
    { id: "jsonschema", name: "JSON Schema / validation", category: "apiBackend", level: 2 },
    { id: "protobuf", name: "Protocol Buffers (gRPC)", category: "apiBackend", level: 3 },
    { id: "go", name: "Go (light usage)", category: "apiBackend", level: 2 },
    { id: "stablediffusion", name: "Stable Diffusion (AI)", category: "apiBackend", level: 2 },
    { id: "comfyui", name: "ComfyUI (AI)", category: "apiBackend", level: 2 },
  
    //
    // ───────────────────────────────────────────
    // TOOLING, DEVOPS & PERFORMANCE
    // ───────────────────────────────────────────
    //
    { id: "vite", name: "Vite", category: "toolingDevOps", level: 4},
    { id: "webpack", name: "Webpack", category: "toolingDevOps", level: 4 },
    { id: "rollup", name: "Rollup", category: "toolingDevOps", level: 3 },
    { id: "esbuild", name: "ESBuild", category: "toolingDevOps", level: 3 },
    { id: "babel", name: "Babel", category: "toolingDevOps", level: 4 },
    { id: "npm", name: "npm / pnpm", category: "toolingDevOps", level: 4 },
    { id: "cypress", name: "Cypress", category: "toolingDevOps", level: 4},
    { id: "playwright", name: "Playwright", category: "toolingDevOps", level: 3 },
    { id: "jest", name: "Jest", category: "toolingDevOps", level: 3 },
    { id: "docker", name: "Docker (frontend workflows)", category: "toolingDevOps", level: 3 },
    { id: "git", name: "Git", category: "toolingDevOps", level: 5 },
    { id: "gitlab", name: "GitLab", category: "toolingDevOps", level: 3 },
    { id: "bitbucket", name: "Bitbucket + Pipelines", category: "toolingDevOps", level: 3 },
    { id: "sentry", name: "Sentry (Error tracking)", category: "toolingDevOps", level: 3 },
    { id: "ga4", name: "Google Analytics 4", category: "toolingDevOps", level: 3 },
    { id: "gtm", name: "Google Tag Manager", category: "toolingDevOps", level: 3 },
    { id: "hotjar", name: "Hotjar", category: "toolingDevOps", level: 2 },
    { id: "gcp", name: "GCP (light usage)", category: "toolingDevOps", level: 2 },
    { id: "s3", name: "S3 / Object storage", category: "toolingDevOps", level: 2 },
    { id: "pagespeed", name: "PageSpeed / Lighthouse", category: "toolingDevOps", level: 4 },
    { id: "cicd", name: "CI/CD Pipelines", category: "toolingDevOps", level: 4 },
    { id: "gulp", name: "Gulp", category: "toolingDevOps", level: 3 },
    { id: "grunt", name: "Grunt", category: "toolingDevOps", level: 3 },
    { id: "vagrant", name: "Vagrant", category: "toolingDevOps", level: 2 },
    { id: "grafana", name: "Grafana (frontend metrics)", category: "toolingDevOps", level: 3 },
    { id: "vercel", name: "Vercel", category: "toolingDevOps", level: 4 },
    { id: "eslint", name: "ESLint", category: "toolingDevOps", level: 5 },
    { id: "prettier", name: "Prettier", category: "toolingDevOps", level: 5 },
    { id: "husky", name: "Husky", category: "toolingDevOps", level: 4 },
    { id: "shell", name: "Shell scripting (Bash/Zsh)", category: "toolingDevOps", level: 3 },
    { id: "makefiles", name: "Makefiles", category: "toolingDevOps", level: 2 },
  
    //
    // ───────────────────────────────────────────
    // UX, DESIGN & PROTOTYPING
    // ───────────────────────────────────────────
    //
    { id: "figma", name: "Figma", category: "uxDesign", level: 4 },
    { id: "adobeXd", name: "Adobe XD", category: "uxDesign", level: 3 },
    { id: "photoshop", name: "Adobe Photoshop", category: "uxDesign", level: 4 },
    { id: "illustrator", name: "Adobe Illustrator", category: "uxDesign", level: 3 },
    { id: "sketch", name: "Adobe Sketch", category: "uxDesign", level: 3 },
    { id: "zeplin", name: "Zeplin", category: "uxDesign", level: 3 },
    { id: "flash", name: "Adobe Flash", category: "uxDesign", level: 2 },
    { id: "authorware", name: "Adobe Authorware", category: "uxDesign", level: 2 },
    { id: "storybook", name: "Storybook", category: "uxDesign", level: 3 },
    { id: "miro", name: "Miro", category: "uxDesign", level: 4 },
  
    //
    // ───────────────────────────────────────────
    // PLATFORMS / CMS
    // ───────────────────────────────────────────
    //
    { id: "typo3", name: "TYPO3 / Fluid", category: "platforms", level: 4 },
    { id: "neos", name: "NEOS CMS", category: "platforms", level: 3 },
    { id: "wordpress", name: "WordPress", category: "platforms", level: 2 },
    { id: "sanity", name: "Sanity CMS", category: "platforms", level: 3 },
    { id: "joomla", name: "Joomla", category: "platforms", level: 2 },
    { id: "shopify", name: "Shopify / Liquid", category: "platforms", level: 2 },
    { id: "october", name: "October CMS", category: "platforms", level: 2 },
  ],  

  roles: [
    {
      id: "refurbed-2022",
      title: "Senior Frontend Engineer",
      company: "Refurbed Marketplace GmbH",
      location: "Vienna, Austria",
      startDate: "2022-04-04",
      endDate: "2025-02-06",
      isCurrent: false,
      techTagIds: [
        "vue",
        "typescript",
        "javascript",
        "rest",
        "grpc",
        "vite",
        "cypress",
        "cucumber",
        "tailwind",
        "growthbook",
        "ga4",
        "gitlab",
        "docker",
        "sentry",
        "storybook",
        "playwright",
        "grafana",
        "pagespeed",
        "sentry",
        "git",
        "docker",
        "vscode",
        "cursor",
        "comfyui",
        "figma",
      ],
      summary:
        "Senior frontend engineer in the Search & Discovery squad, working on refurbed.com’s catalog, filters and experiments, and on shared frontend tooling and analytics.",
    
      microMetrics: [
        "Refactored search and filter UIs into a typed Alpine.js + TypeScript setup, making the codebase easier to maintain and safer to experiment on.",
        "Helped the transition from REST to gRPC on the frontend side by introducing stronger TypeScript typing around data models and API usage.",
        "Supported the migration from Universal Analytics to GA4 and improved how experiments and key user flows were tracked."
      ],
    
      chips: [
        "Code quality",
        "Performance",
        "Observability",
        "Feature flagging",
        "Analytics",
        "Design system",
        "Mentoring",
        "Cross-team collaboration",
      ],
    
      detailsBullets: [
        // Core product work – search & filters
        "Worked mainly on refurbed.com’s search, listing and filter pages as part of the Search & Discovery squad.",
        "Refactored filter and search logic to a more modern, reactive approach using Alpine.js with TypeScript definitions, improving readability and easing future changes.",
        "Integrated SSR Go templates with client-side JavaScript by hydrating server-rendered markup into interactive components (filters, autocomplete, product interactions).",
        "Consumed multiple backend services (REST and later gRPC) for filters, product data, pricing, campaigns and experiments, aligning closely with backend teams on data contracts.",
    
        // Experiments & analytics
        "Implemented and maintained feature-flagged and A/B-tested changes using GrowthBook and custom tracking.",
        "Worked on both server-side and client-side experiments, coordinating with product and analytics on setup and evaluation.",
        "Participated in the migration from Universal Analytics to GA4, including event design for key funnels and experiments.",
    
        // Shared components / design system / DX
        "Contributed to shared component libraries and design-system primitives used across teams, including utilities where backwards compatibility was important.",
        "Helped refine documentation and internal guidelines around shared components, workflows and experiment setup.",
        "Supported Sentry adoption and error-tracking workflows so frontend issues were easier to trace across releases.",
    
        // Collaboration & leadership
        "Collaborated with designers to translate ideas and constraints into concrete UI requirements, and then into production-ready implementations.",
        "Took part in OKR discussions, feature shaping and A/B test ideation with product and other stakeholders.",
        "Regularly did cross-team code reviews and pair programming, sharing patterns between squads.",
        "Mentored junior developers, encouraged them to take ownership of initiatives, and reviewed their code with a focus on learning and long-term maintainability.",
        "Contributed to engineering calls, demos and hackathon projects, showcasing new frontend approaches (e.g. Vue-based interactive modules like an AI purchase assistant).",
    
        // Internal support
        "Helped unblock non-technical colleagues by shaping or adjusting internal tools and smaller features when needed."
      ],
    
      caseStudyLinks: [{ label: "Refurbed Marketplace", url: "https://www.refurbed.com/" }]
    },
    {
      id: "bitpanda-2021",
      title: "Frontend Developer",
      company: "Bitpanda GmbH",
      location: "Vienna, Austria",
      startDate: "2021-01-01",
      endDate: "2022-03-31",
      isCurrent: false,
      techTagIds: [
        "javascript",
        "axios",
        "rest",
        "git",
        "chartjs",
        "highcharts",
        "tailwind",
        "bootstrap",
        "webpack",
        "vite",
        "figma",
        "lottiejs",
        "october",
        "liquid",
      ],
    
      summary:
        "Frontend developer in the B2C website team, working on the marketing site, charts and data visualisation, two major rebrandings, and performance/SEO improvements.",
    
      microMetrics: [
        "Delivered high-traffic homepage and asset pages with live data visualisation during major crypto bull-runs.",
        "Led a full migration from Bootstrap to Tailwind and helped modernise the website’s frontend architecture.",
        "Improved performance through tree-shaking, lazy loading, critical CSS, above-the-fold rendering and custom chunk splitting."
      ],
    
      chips: [
        "Fintech",
        "Data visualisation",
        "Rebranding",
        "Performance",
        "Marketing website"
      ],
    
      detailsBullets: [
        // Core website work
        "Worked mainly on Bitpanda’s public marketing website, blog and whitepages as part of a small B2C website team.",
        "Implemented new landing pages, product sections and high-fidelity animations using modern JavaScript motion libraries.",
        "Collaborated closely with design, product and management during two major rebrandings and multiple visual facelifts.",
        
        // Data visualisation & real-time pricing
        "Built live price modules and charts for crypto, stocks and metals on the marketing homepage and asset pages.",
        "Designed a Vue.js mini-app responsible for rendering chart cards in a custom carousel, with lazy-loaded and performance-sensitive data fetching.",
        "Integrated and orchestrated multiple REST APIs to fetch real-time financial data, designing a predictable loading/fallback strategy.",
        "Implemented formatting utilities for currencies, dates, numbers and chart data to ensure correctness across locales.",
    
        // CMS, content & collaboration
        "Supported the integration of blog content into the main website’s CMS to unify content management across pages.",
        "Worked with multiple external agencies to coordinate migrations, handovers and responsibilities.",
        "Participated in reshaping the website’s content structure to match marketing and product needs.",
    
        // Performance & SEO
        "Improved performance across the site via tree-shaking, lazy loading, custom chunk splitting and critical CSS extraction.",
        "Optimised above-the-fold rendering, reduced blocking scripts and improved Lighthouse scores.",
        "Reworked analytics, cookies, HeatMap/mouse-tracking and other slow third-party scripts to minimise their impact on the main thread.",
    
        // Styling & components
        "Led the migration from Bootstrap to Tailwind, rebuilding components, layouts and utilities for a more maintainable setup.",
        "Created custom UI building blocks including a slideshow library and a performant mega menu.",
        "Built visual prototypes in Figma or directly in code depending on context and urgency.",
    
        // Collaboration & team growth
        "Worked in a fast-paced environment amid organisational changes, adapting to new team structures and expectations.",
        "Contributed to onboarding as the team grew from 2 to ~8 developers, documenting workflows and setting conventions.",
        "Performed code reviews, pair programming, and cross-team collaboration to ensure consistent quality and delivery.",
        "Supported designers, marketing and product stakeholders with feasibility checks, UX input and quick turnaround prototypes."
      ],
    
      caseStudyLinks: []
    },    
    {
      id: "paysafe-2017",
      title: "Frontend Developer",
      company: "Paysafecard.com Wertkarten GmbH",
      location: "Vienna, Austria",
      startDate: "2017-11-01",
      endDate: "2021-01-01",
      isCurrent: false,
    
      techTagIds: [
        "javascript",
        "angular",
        "typo3",
        "gulp",
        "bootstrap",
        "node",
        "git",
        "wordpress",
        "chartjs",
        "highcharts"
      ],
    
      summary:
        "Frontend developer working on Paysafecard’s global marketing website, large-scale rebrandings, internal tooling, and internationalised UI experiences.",
    
      microMetrics: [
        "Delivered multi-language, multi-region marketing pages used across countries.",
        "Led TYPO3 component development for campaigns and feature launches.",
        "Improved Lighthouse and performance scores through script optimisations and better rendering strategies."
      ],
    
      chips: [
        "Payments",
        "Global Marketing Website",
        "Rebranding",
        "TYPO3",
        "Internationalisation"
      ],
    
      detailsBullets: [
        // Main website responsibilities
        "Worked primarily on Paysafecard’s global marketing website, building pages, campaigns and UI modules used across multiple regions.",
        "Implemented Fluid-based TYPO3 components, templates and layouts for landing pages, campaigns and promotional flows.",
        "Built WordPress templates and components for the global blog system to unify content and improve editorial workflows.",
        "Collaborated with backend, B2B and payments teams to integrate shared modules and support internal initiatives.",
    
        // Data, maps & custom interfaces
        "Implemented and customised the Paysafecard merchant locator, including Google Maps styling, interactive popups and location-based discovery.",
        "Built responsive email templates, promotional popups, and UI modules for the email-marketing team.",
        "Developed chart- and data-driven components using JavaScript charting libraries for select product pages.",
    
        // Internal tools & React prototype
        "Contributed to the architecture and implementation of an internal process builder tool (React) that connected Salesforce workflows with internal systems.",
        "Implemented drag-and-drop form and layout builder modules as part of the prototype’s first iteration.",
    
        // Rebranding & design system
        "Participated in a major cross-product rebranding alongside teams from Skrill, Neteller and other Paysafe brands.",
        "Co-created and consumed a shared CSS variables repository to unify Bootstrap theming across products before design systems were standard.",
        "Worked closely with designers to translate new visual identity guidelines into TYPO3 components and reusable frontend patterns.",
    
        // Performance & SEO
        "Improved performance through Lighthouse optimisation, script cleanup, lazy loading and bundling improvements.",
        "Reduced legacy browser issues by refactoring code and implementing safe fallbacks for older user agents.",
        "Optimised third-party scripts, cookie banners and tracking libraries to reduce layout shifts and blocking time.",
    
        // Cross-team collaboration
        "Worked across teams to align UX, branding, and localisation for multi-country launches.",
        "Supported B2B teams with frontend integrations and created promotional pages for partner initiatives.",
        "Participated in knowledge-sharing sessions during rebranding phases to coordinate work across multiple Paysafe sub-brands."
      ],
    
      caseStudyLinks: []
    },    
    {
      id: "yelster-2017",
      title: "Frontend Developer",
      company: "Yelster Digital GmbH",
      location: "Vienna, Austria",
      startDate: "2017-05-01",
      endDate: "2017-06-30",
      isCurrent: false,
      techTagIds: ["javascript", "angular", "git"],
      summary:
        "Short-term frontend engagement improving existing Angular UIs.",
      microMetrics: [
        "Adjusted layouts and responsive behaviour for existing pages.",
        "Fixed cross-browser issues and smaller UI defects."
      ],
      chips: ["Usability", "Responsive QA"],
      detailsBullets: [
        "Worked on bugfixes and layout adjustments in an existing Angular application.",
        "Focused on responsive behaviour and cross-browser visual consistency.",
        "Cooperated with the in-house team to stabilise the frontend before releases."
      ],
      caseStudyLinks: []
    },
    {
      id: "studioq-2016",
      title: "Frontend Developer",
      company: "Studio Q",
      location: "Vienna, Austria",
      startDate: "2016-07-01",
      endDate: "2017-04-30",
      isCurrent: false,
      techTagIds: ["javascript", "neos", "foundation", "gulp", "docker", "vagrant", "git"],
      summary:
        "Frontend developer in an agency setting, delivering responsive marketing websites.",
      microMetrics: [
        "Implemented responsive layouts and interactions for multiple client projects.",
        "Worked with NEOS CMS and modern frontend tooling for deployments."
      ],
      chips: ["Agency", "Responsive", "Animations"],
      detailsBullets: [
        "Implemented frontend for NEOS CMS-based websites using ES6, Foundation and task runners.",
        "Created animations and micro-interactions for client brands within performance limits.",
        "Used Docker- and Vagrant-based setups in the development workflow.",
        "Aligned implementations closely with design handoffs and brand requirements."
      ],
      caseStudyLinks: []
    },
    {
      id: "insota-2015",
      title: "Frontend Developer",
      company: "Insota",
      location: "Vienna, Austria",
      startDate: "2015-10-01",
      endDate: "2016-01-31",
      isCurrent: false,
      techTagIds: ["javascript", "django", "bootstrap"],
      summary:
        "Frontend development for a Django-backed web application.",
      microMetrics: [
        "Implemented UI layouts and components from wireframes.",
        "Improved consistency of shared styles and components."
      ],
      chips: ["Prototyping", "UI design"],
      detailsBullets: [
        "Built frontend views on top of a Django backend, using Bootstrap for layout.",
        "Translated wireframes and concepts into working UI screens.",
        "Helped align styles and components across different parts of the app."
      ],
      caseStudyLinks: []
    },
    {
      id: "self-employed-2011",
      title: "IT Specialist & Developer",
      company: "Self-employed",
      location: "Tehran, Iran",
      startDate: "2011-10-01",
      endDate: "2015-09-30",
      isCurrent: false,
      techTagIds: ["wordpress", "joomla", "photoshop", "illustrator", "javascript", "bootstrap", "csharpdotnet"],
      summary:
        "Self-employed IT specialist providing web, IT and design services to local clients.",
      microMetrics: [
        "Set up and maintained IT and network infrastructure for small businesses.",
        "Delivered CMS-based websites and basic e-commerce solutions.",
        "Provided design support for branding and print materials."
      ],
      chips: ["SME support", "Web & IT"],
      detailsBullets: [
        "Configured and maintained local networks, servers and basic surveillance / IT setups.",
        "Built and maintained small CMS- and WordPress/Joomla-based sites for clients.",
        "Created visual assets such as logos and print-ready artwork where needed."
      ],
      caseStudyLinks: []
    },
    {
      id: "teacher-2009",
      title: "High School IT Teacher",
      company: "Peyvandesadra High School",
      location: "Tehran, Iran",
      startDate: "2009-09-01",
      endDate: "2010-09-30",
      isCurrent: false,
      techTagIds: [],
      summary:
        "High school IT teacher for basic computing and programming topics.",
      microMetrics: [
        "Prepared and delivered lessons on computing fundamentals and the web."
      ],
      chips: ["Teaching", "Public speaking"],
      detailsBullets: [
        "Taught topics such as binary, operating systems, and internet fundamentals.",
        "Introduced students to algorithms, flowcharts and basic programming concepts.",
        "Supported students with exercises and exam preparation."
      ],
      caseStudyLinks: []
    },
    {
      id: "mahak-2008",
      title: "Developer (.NET & ActionScript)",
      company: "Mahak Charity – Cancer Research Center",
      location: "Tehran, Iran",
      startDate: "2008-04-01",
      endDate: "2008-09-30",
      isCurrent: false,
    
      techTagIds: ["csharpdotnet", "actionscript", "flash"],
    
      summary:
        "Developer in the Mahak Cancer Research Center, working on data visualisation and internal reporting tools used by medical researchers.",
    
      microMetrics: [
        "Created interactive visualisations to support cancer statistics research.",
        "Maintained and extended existing .NET and database-driven reporting tools."
      ],
    
      chips: ["Data visualisation", "Non-profit", "Medical research"],
    
      detailsBullets: [
        "Developed an interactive map of Iran using ActionScript/Flash to visualise cancer incidence by region.",
        "Worked with researchers to translate statistical data into clear visual summaries for internal studies.",
        "Maintained SQL databases and contributed small enhancements to .NET-based reporting components.",
      ],
    
      caseStudyLinks: []
    },    
    {
      id: "dorsa-2007",
      title: "Designer",
      company: "DorsaGroup",
      location: "Tehran, Iran",
      startDate: "2007-11-01",
      endDate: "2008-02-29",
      isCurrent: false,
      techTagIds: ["photoshop", "illustrator", "flash", "authorware"],
      summary:
        "Designer working on interactive e-learning content and user interfaces.",
      microMetrics: [
        "Contributed visual and interaction design to interactive learning software."
      ],
      chips: ["E-learning", "Interaction design"],
      detailsBullets: [
        "Created visual assets and interaction flows for e-learning modules.",
        "Worked with tools like Flash and Authorware to implement interactive content.",
        "Collaborated with subject-matter experts to translate content into interactive experiences."
      ],
      caseStudyLinks: []
    }
  ],
  skills: [
    // --- Core Frontend Engineering ---
    { id: "reactivity-architecture", name: "Reactivity & State Architecture", category: "technical", description: "" },
    { id: "ssr-hydration", name: "SSR & Hydration Patterns", category: "technical", description: "" },
    { id: "component-systems", name: "Component Systems & Design Tokens", category: "technical", description: "" },
    { id: "bundle-optimization", name: "Bundle Optimization & Loading Strategy", category: "technical", description: "" },
    { id: "ui-behavior", name: "UI Behaviour & Interaction Design", category: "technical", description: "" },
  
    // --- API, Data & Rendering ---
    { id: "typed-data", name: "Typed Data Contracts", category: "technical", description: "" },
    { id: "api-integration", name: "API Integration & Data Flows", category: "technical", description: "" },
    { id: "mixed-rendering", name: "Mixed Rendering (Client + Server)", category: "technical", description: "" },
  
    // --- Product & Experimentation ---
    { id: "ab-testing-engineering", name: "A/B Testing Engineering", category: "product", description: "" },
    { id: "analytics", name: "Analytics & Event Instrumentation", category: "product", description: "" },
  
    // --- Performance & Quality ---
    { id: "performance", name: "Frontend Performance", category: "technical", description: "" },
    { id: "testing-foundations", name: "Testing Foundations (Unit & E2E)", category: "technical", description: "" },
    { id: "observability", name: "Frontend Observability & Error Tracking", category: "technical", description: "" },
  
    // --- Design, UX & Collaboration ---
    { id: "ux-collab", name: "Design & UX Collaboration", category: "collaboration", description: "" },
    { id: "content-systems", name: "CMS Architecture & Content Workflows", category: "collaboration", description: "" },
  
    // --- Teamwork & Leadership ---
    { id: "mentoring", name: "Mentoring & Developer Guidance", category: "leadership", description: "" },
    { id: "knowledge-sharing", name: "Knowledge Sharing & Documentation", category: "leadership", description: "" },
    { id: "cross-squad-delivery", name: "Cross-Squad Delivery & Collaboration", category: "leadership", description: "" },
    { id: "onboarding", name: "Onboarding & Team Enablement", category: "leadership", description: "" },
  
    // --- Developer Experience ---
    { id: "dx-tooling", name: "Developer Experience & Tooling", category: "technical", description: "" }
  ]    
  
};
