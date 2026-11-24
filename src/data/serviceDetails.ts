import type { ServiceDetail, ServiceStat } from "@/types";

// Every service detail page (src/app/services/[slug]/page.tsx) shares the
// same four company-wide stats shown on the UI/UX Design reference design.
export const serviceStats: ServiceStat[] = [
  { id: "experience", value: "15+", label: "Years Of Experience" },
  { id: "software", value: "380+", label: "Customized Software" },
  { id: "ai-integration", value: "820+", label: "AI Integration In Existing Software" },
  { id: "upgradation", value: "55+", label: "Software Upgradation" },
];

// Every slug is transcribed from a verified PDF export reference
// (UX_Design.pdf, Web_Design.pdf, Web_Development.pdf,
// App_Development.pdf / the fuller Mobile_App_Development_Company_in_USA.pdf,
// Android__Application_Development_Company.pdf,
// Custom_iSO_Application_Development.pdf, Database_Analysis.pdf,
// Digital_Marketing.pdf, and Search_Engine_Optimization.pdf — Figma's API
// was rate limited on every attempt this project, so each page was built
// directly from its PDF render rather than a get_design_context pull).
// App Development has two source exports of different lengths
// (App_Development.pdf and the fuller Mobile_App_Development_Company_in_USA.pdf,
// 1440x3900 vs 1440x5215); the longer one is the one actually used, since
// it includes the Awards + Process sections and matching hero title that
// the shorter export was missing. For each page, only the first FAQ
// answer (and, on Android/iOS, only the first two FAQ answers) was
// visible in the reference — the rest were collapsed "+" accordion rows —
// so those remaining answers are reasonable placeholder copy in the same
// voice. A couple of source PDFs reused another page's FAQ/benefit copy
// almost verbatim (e.g. the iOS page's first FAQ answer began "We build
// Android Yes..."); those specific lines were rewritten to actually
// describe the page they're on rather than reproduced verbatim, matching
// the verified voice elsewhere on each page. The nav dropdown label for
// each slug is transcribed verbatim from the real "Services" dropdown
// (captured in a screenshot embedded in About.pdf) even where it reads
// differently from the page's own <h1> (e.g. "Mobile Application
// Development Company" in the nav vs. "Mobile App Development Company" as
// the heading) — including the real dropdown's "iSO" typo for the Custom
// iOS Development entry.
export const sixStepProcessDescription =
  "Turn your concepts into reality with our simple roadmap for mobile app and website development services. Our process is straightforward, starting with a clear plan followed by visual mockups to display the layout and user flow of your app or website. Improve your app's performance effortlessly. As the best app development company, we offer comprehensive website and app development services. To understand our website design and development services, we have outlined the entire process into six simple stages, illustrating the transition from idea to completion.";
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ui-ux-design",
    navLabel: "UI/UX Design",
    metaDescription:
      "Our UX Development focuses on crafting exceptional digital experiences — intuitive interfaces and seamless journeys that boost satisfaction, engagement, and loyalty.",
    heroTitle: "UI/UX Design",
    heroDescription:
      "Our UX Development focuses on crafting exceptional digital experiences. By prioritizing your users’ needs, we build intuitive interfaces and seamless journeys that boost satisfaction, engagement, and loyalty.",
    heroBullets: [
      "Wireframing & Prototyping",
      "Visual Design & Aesthetics",
      "Interaction Design (IxD)",
      "Information Architecture (IA)",
      "UX Strategy & Optimization",
      "Usability Testing",
      "Accessibility Design",
    ],
    benefitsHeading: "Benefits With Our Service",
    benefits: [
      {
        id: "ui-design",
        icon: "ui-design",
        title: "User Interface (UI) Design",
        description:
          "A well crafted User Interface (UI) design is the key to making a strong first impression and ensuring users enjoy their digital experience. We focus on creating interfaces that are not only visually attractive but also intuitive.",
      },
      {
        id: "mobile-ui",
        icon: "mobile-ui",
        title: "Mobile App UI/UX",
        description:
          "We specialize in crafting mobile app experiences that are visually engaging, easy to navigate, and optimized for performance. From wireframing and prototyping to final design, every step is focused on ensuring your app delivers.",
      },
      {
        id: "prototyping",
        icon: "prototyping",
        title: "Prototyping & Wireframing",
        description:
          "Our prototyping and wireframing services help bring your app or website concept to life before development begins. We create detailed wireframes that map out the structure and flow of your product.",
      },
      {
        id: "interaction",
        icon: "interaction",
        title: "Interaction & Experience Design",
        description:
          "Great digital products go beyond visuals — they feel effortless and engaging to use. Our interaction and experience design services focus on creating intuitive, responsive, and fluid interactions.",
      },
    ],
    stats: serviceStats,
    faqHeading: "Frequently Asked Questions About UI/UX",
    faqSubheading: "Explore how usability impacts overall brand success.",
    faq: [
      {
        id: "ui-vs-ux",
        question: "What is the difference between UI and UX design?",
        answer:
          "UI (User Interface) design focuses on the look and feel of an app or website — colors, typography, buttons, layouts. UX (User Experience) design focuses on usability, flow, and how users interact with the product. Together, they ensure a product is both beautiful and functional.",
      },
      {
        id: "why-important",
        question: "Why is UI/UX design important for my business?",
        answer:
          "Good UI/UX directly affects how long visitors stay, how easily they complete the actions you want, and how much they trust your brand — which translates into fewer drop-offs and more conversions.",
      },
      {
        id: "web-and-mobile",
        question: "Do you create designs for both web and mobile apps?",
        answer:
          "Yes — our team designs for web, iOS, and Android, keeping a consistent experience across every screen size and platform.",
      },
      {
        id: "prototypes",
        question: "Can you provide prototypes before development?",
        answer:
          "Absolutely. We build clickable prototypes so you can test the flow and gather feedback before a single line of code is written.",
      },
      {
        id: "brand-identity",
        question: "How do you ensure the design matches my brand identity?",
        answer:
          "We start from your brand guidelines — colors, typography, tone — and build a design system around them, so every screen feels unmistakably yours.",
      },
      {
        id: "redesign",
        question: "Can you redesign my existing app or website?",
        answer:
          "Yes — we audit your current product, identify usability gaps, and redesign it without losing the data, content, or integrations you already rely on.",
      },
    ],
  },
  {
    // Verified copy from a design reference (Figma node 71:623 / the
    // attached Web_Design.pdf — Figma's API was rate limited again while
    // building this, so the page was built directly from that PDF render).
    // Only the first FAQ answer was visible in the reference (the rest
    // were collapsed "+" accordion rows); the other five answers below are
    // reasonable placeholder copy in the same voice.
    slug: "web-design",
    navLabel: "Web Design",
    metaDescription:
      "When designing your website, the workflows must be such that it brings additional footfalls to the website — dynamic, custom, and responsive web design from SP Nexa Technologies.",
    heroTitle: "Web Design",
    heroDescription:
      "When designing your website, the workflows must be such that it brings additional footfalls to the website. You will need the services of a professional web design company to optimise your site. There are several other benefits for your company too. We will discuss this further in this article.",
    heroBullets: [
      "Dynamic Website Design",
      "Custom Website Design",
      "Responsive Website Design",
      "Landing Page Design",
      "Resource, time & cost is discussed before the project begins",
    ],
    benefitsHeading: "Benefits With Our Service",
    benefits: [
      {
        id: "ui-design",
        icon: "ui-design",
        title: "User Interface (UI) Design",
        description:
          "A well crafted User Interface (UI) is the key to a strong first impression. We create interfaces that are visually appealing, intuitive, and user friendly, ensuring an enjoyable digital experience.",
      },
      {
        id: "responsive",
        icon: "responsive",
        title: "Responsive & Adaptive Design",
        description:
          "We build designs that adapt flawlessly across devices and screen sizes. Your website or app will look and perform beautifully on desktops, tablets, and mobile devices.",
      },
      {
        id: "prototyping",
        icon: "prototyping",
        title: "Prototyping & Wireframing",
        description:
          "Bring your app or website concept to life before development. Our detailed wireframes map out structure, layout, and user flow for a smooth development process.",
      },
      {
        id: "seo-performance",
        icon: "seo-performance",
        title: "SEO & Performance Optimized Design",
        description:
          "Our web designs aren't just attractive they are optimized for speed, SEO, and usability, helping your site rank higher and provide a smooth experience for all visitors.",
      },
    ],
    stats: serviceStats,
    faqHeading: "Frequently Asked Questions About Web Design",
    faqSubheading: "Explore how usability impacts overall brand success.",
    faq: [
      {
        id: "responsive-important",
        question: "Why is responsive web design important?",
        answer:
          "Responsive design ensures your website looks and functions perfectly on desktops, tablets, and mobile devices, providing a seamless experience for all users and improving SEO performance.",
      },
      {
        id: "ux-impact",
        question: "How does good web design impact user experience?",
        answer:
          "Good web design makes a site easy to navigate and quick to understand, so visitors find what they need without friction — which keeps them on the page longer and more likely to convert.",
      },
      {
        id: "design-system",
        question: "What is a design system and why do I need one?",
        answer:
          "A design system is a shared set of components, colors, and typography rules that keep every page consistent. It means new pages go live faster and always look like they belong to the same brand.",
      },
      {
        id: "timeline",
        question: "How long does it take to design a website?",
        answer:
          "Most marketing websites take 3–6 weeks from wireframes to final design, depending on the number of pages and revision rounds.",
      },
      {
        id: "seo-performance-faq",
        question: "Will my website be optimized for performance and SEO?",
        answer:
          "Yes — every page we design is built with fast load times, clean markup, and on-page SEO fundamentals in mind from the very first wireframe.",
      },
      {
        id: "self-update",
        question: "Can I update the website myself after it's built?",
        answer:
          "Yes — we design with your CMS of choice in mind, so your team can update text, images, and blog posts without touching code.",
      },
    ],
  },
  {
    slug: "app-development",
    navLabel: "Mobile Application Development Company",
    metaDescription:
      "Ensuring your application is expertly developed creates a seamless user experience and leaves a lasting impression — custom, mobile, and enterprise application development from SP Nexa Technologies.",
    // Hero title now matches the fuller reference PDF
    // (Mobile_App_Development_Company_in_USA.pdf), which is the same page
    // as App_Development.pdf but with Awards + Process sections included
    // and a title that matches the real nav label below.
    heroTitle: "Mobile App Development Company",
    heroDescription:
      "Ensuring your application is expertly developed creates a seamless user experience and leaves a lasting impression. A well built app keeps users engaged, runs smoothly across devices, and supports your business goals efficiently.",
    heroBullets: [
      "Custom Application Development",
      "Mobile App Development",
      "Enterprise Application Development",
      "Web Application Development",
      "API & Third-Party Integration",
      "Maintenance & Support",
    ],
    benefitsHeading: "Benefits With Our Service",
    benefits: [
      {
        id: "backend-api",
        icon: "backend-api",
        title: "Backend & API Development",
        description:
          "We develop robust, secure, and scalable backends for your applications. Our APIs ensure seamless integration with third-party services, databases, and other systems, providing smooth and reliable app functionality.",
      },
      {
        id: "cloud-enterprise",
        icon: "cloud-enterprise",
        title: "Cloud & Enterprise Solutions",
        description:
          "Our cloud based and enterprise applications help your business scale efficiently. We focus on performance, security, and seamless integration with existing systems for maximum flexibility and productivity.",
      },
      {
        id: "ecommerce-payment",
        icon: "ecommerce-payment",
        title: "E-commerce & Payment Integration",
        description:
          "We design applications with secure payment gateways, shopping carts, and e-commerce functionalities. Our solutions ensure smooth transactions and an effortless user experience for your customers.",
      },
      {
        id: "analytics-performance",
        icon: "analytics-performance",
        title: "Analytics & Performance Optimization",
        description:
          "Our applications include analytics tools to track user behavior and performance metrics. Continuous optimization improves speed, usability, and engagement, helping you make data driven business decisions.",
      },
    ],
    stats: serviceStats,
    showAwards: true,
    faqHeading: "Frequently Asked Questions About Mobile App Development",
    faqSubheading: "Explore how usability impacts overall brand success.",
    // Replaced with the fuller reference PDF's actual FAQ (it's coherent
    // and on-topic as-is, unlike the shorter App_Development.pdf export,
    // which had reused "Web Development" copy here).
    faq: [
      {
        id: "what-is-app-development",
        question: "What is Application Development?",
        answer:
          "Application development is the process of designing, building, and deploying software applications for mobile, web, or enterprise use. It involves planning, coding, testing, and maintaining apps to meet specific business needs.",
      },
      {
        id: "why-custom",
        question: "Why does my business need a custom application?",
        answer:
          "A custom application is built around your exact workflows and goals rather than generic features, so it fits your business better, scales with it, and gives you a competitive edge over off-the-shelf tools.",
      },
      {
        id: "platforms",
        question: "What platforms can applications be developed for?",
        answer:
          "We build for iOS, Android, and the web — as native apps, cross-platform apps, or progressive web apps — depending on your audience and budget.",
      },
      {
        id: "how-long",
        question: "How long does it take to develop an application?",
        answer:
          "Timelines vary with scope, but a typical app moves from planning to launch in a few months, with clear milestones along the way so you always know where things stand.",
      },
      {
        id: "maintenance",
        question: "Do you provide maintenance and support after deployment?",
        answer:
          "Yes — we offer ongoing maintenance, monitoring, and support plans after launch, including updates, bug fixes, and performance checks.",
      },
      {
        id: "new-features",
        question: "Can new features be added later?",
        answer:
          "Yes — we design applications with scalability in mind, so new features and integrations can be added later without reworking the whole app.",
      },
    ],
    process: {
      heading: "Process of Creating Mobile Application",
      description: sixStepProcessDescription,
      steps: [
        { id: "requirement-gathering", icon: "requirement-gathering", label: "Requirement Gathering" },
        { id: "ui-ux-designing", icon: "ui-ux-designing", label: "UI/UX Designing" },
        { id: "app-development", icon: "development", label: "App Development" },
        { id: "testing", icon: "testing", label: "Testing" },
        { id: "deployment", icon: "deployment", label: "Deployment" },
        { id: "support-maintenance", icon: "support-maintenance", label: "Support & Maintenance" },
      ],
    },
  },
  {
    slug: "web-development",
    navLabel: "Web Development",
    metaDescription:
      "Fast, responsive, and secure websites — custom, e-commerce, and web application development from SP Nexa Technologies.",
    // Built from the real Web_Development.pdf reference.
    heroTitle: "Web Development",
    heroDescription:
      "Ensuring your website is expertly developed not only creates a strong first impression but also keeps visitors engaged. Our web development services focus on building fast, responsive, and user friendly websites that drive conversions, enhance user experience, and support your business growth",
    heroBullets: [
      "Custom Web Development",
      "E-commerce Development",
      "Responsive Web Development",
      "Web Application Development",
      "Clear roadmap and milestones",
    ],
    benefitsHeading: "Benefits With Our Service",
    benefits: [
      {
        id: "custom-web-dev",
        icon: "custom-web-dev",
        title: "Custom Web Development",
        description:
          "We build websites and applications tailored to your business needs. Our development ensures functionality, scalability, and a seamless user experience across all platforms.",
      },
      {
        id: "responsive-cross-platform",
        icon: "responsive",
        title: "Responsive & Cross-Platform Development",
        description:
          "Your website or app will perform flawlessly on desktops, tablets, and mobile devices. We ensure consistent performance and accessibility across all screen sizes.",
      },
      {
        id: "api-integration-backend",
        icon: "backend-api",
        title: "API Integration & Backend Development",
        description:
          "From databases to third-party APIs, we create robust backend systems that power your website or application efficiently and securely.",
      },
      {
        id: "performance-security",
        icon: "performance-security",
        title: "Performance & Security Optimization",
        description:
          "Our web development focuses on speed, security, and reliability. Optimized code and secure infrastructure ensure your site runs smoothly and safely.",
      },
    ],
    stats: serviceStats,
    faqHeading: "Frequently Asked Questions About Web Development",
    faqSubheading: "Explore how usability impacts overall brand success.",
    faq: [
      {
        id: "what-is-web-development",
        question: "What is Web Development?",
        answer:
          "Web development is the process of building, coding, and maintaining websites or web applications. It covers both the front-end (what users see) and the back-end (server, database, and logic).",
      },
      {
        id: "why-professional",
        question: "Why Does My Business Need Professional Web Development?",
        answer:
          "A well-built website keeps visitors engaged, loads quickly, and supports your growth goals — professional development reduces bugs, security risks, and costly rework down the line.",
      },
      {
        id: "technologies",
        question: "Which Technologies Do You Use?",
        answer:
          "We choose the stack that fits your project — typically React or Next.js on the frontend with a Node.js, PHP, or headless CMS backend.",
      },
      {
        id: "responsive",
        question: "Can You Make My Website Responsive?",
        answer:
          "Yes — every site we build is tested across desktops, tablets, and phones to make sure it looks and performs consistently.",
      },
      {
        id: "secure",
        question: "How Do You Keep My Website Secure?",
        answer:
          "We follow current security best practices for data handling, authentication, and hosting, and test for vulnerabilities before every release.",
      },
      {
        id: "scalable",
        question: "Will My Website Be Scalable for Future Growth?",
        answer:
          "Yes — we architect the backend and infrastructure to handle growth from day one, so a spike in traffic doesn't mean a rebuild.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    navLabel: "Digital Marketing Services",
    metaDescription:
      "We focus on transforming marketing investments into business drivers, combining strategy and execution with smart, data driven insights.",
    heroTitle: "Digital Marketing",
    heroDescription:
      'We focus on transforming marketing investments into business drivers. We care about the impact of our work. We cut wasted processes and invest in programs that move the "business needle" using an agile LEAN model for management. Our work combines strategy and execution with smart, data driven insights. We audit and create an adaptive strategy.',
    heroBullets: [
      "Research Your Marketplace & Buyers",
      "Build a Killer Website",
      "Cultivating Visible Experts",
      "Integrate Emerging Tech with Marketing",
      "Understand Your Target Audience",
      "Take Advantage of Tech Influencers",
      "Digital Marketing Solutions",
    ],
    benefitsHeading: "Benefits With Our Service",
    benefits: [
      {
        id: "seo-optimization",
        icon: "seo-optimization",
        title: "SEO Optimization",
        description:
          "Enhance your website's visibility on search engines, attract more organic traffic, and improve rankings with targeted strategies.",
      },
      {
        id: "social-media",
        icon: "social-media",
        title: "Social Media Marketing",
        description:
          "Build your brand and engage with your audience across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
      },
      {
        id: "email-marketing",
        icon: "email-marketing",
        title: "Email Marketing",
        description:
          "Craft personalized and automated email campaigns that nurture leads and drive conversions.",
      },
      {
        id: "ppc-advertising",
        icon: "ppc-advertising",
        title: "PPC Advertising",
        description:
          "Run effective paid campaigns across Google Ads, social media, and display networks to generate high-quality leads.",
      },
    ],
    stats: serviceStats,
    faqHeading: "Frequently Asked Questions About Digital Marketing",
    faqSubheading: "Explore how usability impacts overall brand success.",
    faq: [
      {
        id: "marketing-support-services",
        question: "What services are included in Marketing Support?",
        answer:
          "Marketing Support covers SEO, social media, email campaigns, PPC advertising, content creation, and analytics guidance.",
      },
      {
        id: "prior-experience",
        question: "Do I need prior marketing experience to use Marketing Support?",
        answer:
          "No — our team handles the strategy and execution, and walks you through the results in plain language along the way.",
      },
      {
        id: "digital-campaigns",
        question: "Can Marketing Support help with digital campaigns?",
        answer:
          "Yes — from campaign planning through launch and optimization, digital campaigns are a core part of what we run.",
      },
      {
        id: "get-help",
        question: "How do I get help from Marketing Support?",
        answer:
          "Just reach out through the contact form on this page and we'll schedule a strategy call to scope out what you need.",
      },
      {
        id: "small-business",
        question: "Is Marketing Support available for small businesses?",
        answer:
          "Yes — we tailor the scope and budget to fit businesses of any size, from first campaigns to established growth teams.",
      },
    ],
  },
  {
    slug: "database-analysis",
    navLabel: "Database Analysis",
    metaDescription:
      "Effective database analysis is key to making smarter, data-driven business decisions — accuracy, performance, and security across all your systems.",
    heroTitle: "Database Analysis",
    heroDescription:
      "Effective database analysis is key to making smarter, data-driven business decisions. At SP Nexa Technologies, we examine your data to ensure accuracy, consistency, and performance across all systems. Our experts identify inefficiencies, uncover insights, and optimize your database structure to enhance reliability, speed, and scalability.",
    heroBullets: [
      "Data Accuracy & Integrity",
      "Performance Optimization",
      "Scalability & Flexibility",
      "Insightful Reporting",
      "Risk & Security Management",
      "Cost & Resource Efficiency",
    ],
    benefitsHeading: "Benefits With Our Service",
    benefits: [
      {
        id: "db-performance",
        icon: "db-performance",
        title: "Database Performance Optimization",
        description:
          "Enhance your database speed, efficiency, and reliability with targeted optimization strategies that ensure seamless operations and quick data access.",
      },
      {
        id: "data-security",
        icon: "data-security",
        title: "Data Security & Compliance",
        description:
          "Protect sensitive information with robust security measures, including encryption, access controls, and ongoing monitoring to meet industry standards.",
      },
      {
        id: "analytics-reporting",
        icon: "analytics-reporting",
        title: "Analytics & Reporting",
        description:
          "Transform raw data into actionable insights with detailed reports, dashboards, and analysis to drive informed business decisions.",
      },
      {
        id: "scalability-maintenance",
        icon: "scalability-maintenance",
        title: "Scalability & Maintenance",
        description:
          "Ensure your database can grow with your business while staying optimized, secure, and easy to manage over time.",
      },
    ],
    stats: serviceStats,
    showAwards: true,
    faqHeading: "Frequently Asked Questions About Database Analysis",
    faqSubheading: "Explore how usability impacts overall brand success.",
    faq: [
      {
        id: "what-is-db-analysis",
        question: "What is Database Analysis?",
        answer:
          "Database Analysis is the process of examining, optimizing, and managing your databases to ensure data accuracy, performance, and security, helping your business make informed decisions.",
      },
      {
        id: "why-db-analysis",
        question: "Why does my business need Database Analysis?",
        answer:
          "Without regular analysis, databases accumulate inefficiencies that slow down reporting and decision-making — proactive analysis keeps your data fast, accurate, and trustworthy.",
      },
      {
        id: "db-types",
        question: "What types of databases can you analyze?",
        answer:
          "PostgreSQL, MySQL, MongoDB, and most managed cloud databases (RDS, Cloud SQL, and similar).",
      },
      {
        id: "how-often",
        question: "How often should databases be analyzed?",
        answer:
          "Most businesses benefit from a quarterly review, with more frequent checks for high-traffic systems or right after major feature launches.",
      },
      {
        id: "maintenance-after",
        question: "Do you provide maintenance after analysis?",
        answer:
          "Yes — we offer ongoing monitoring and tuning retainers so performance stays healthy as your data grows.",
      },
    ],
  },
  {
    // Figma's API was rate limited while this was built, so it's
    // transcribed from Android__Application_Development_Company.pdf. The
    // nav dropdown label is the verified real text from that same
    // screenshot, kept distinct from the page's own <h1> ("Android
    // Development Company").
    slug: "android-development",
    navLabel: "Android Application Development Company",
    metaDescription:
      "Dynamic, custom Android apps with interactive design, high-performance speed, and advanced security from SP Nexa Technologies.",
    heroTitle: "Android Development Company",
    heroDescription:
      "Our developers design the Android app with strong features including interactive design, user-friendly arrangement, high-performance speed, advanced security, and efficient handling. We serve various industries including Retail and Commerce, Social Network, Travel and Tourism, Logistics.",
    heroBullets: [
      "Dynamic Android Apps",
      "App customization",
      "Consistent look and feel",
      "Solutions for your Enterprise",
      "Cost-Effective",
      "Professional Consultation",
    ],
    benefitsHeading: "Benefits With Our Service",
    benefits: [
      {
        id: "android-robot",
        icon: "android-robot",
        title: "Custom Android App Development",
        description: "Build high-performance, tailor-made Android apps with intuitive design",
      },
      {
        id: "secure-payment",
        icon: "secure-payment",
        title: "Secure Payment Integration",
        description:
          "We integrate trusted and encrypted payment gateways into your Android app to ensure safe and hassle-free transactions. Our solutions support multiple payment methods, including credit/debit cards.",
      },
      {
        id: "analytics-insights",
        icon: "analytics-insights",
        title: "Analytics & Insights",
        description:
          "We integrate advanced analytics tools into your Android app to track user behavior, app performance, and engagement metrics.",
      },
      {
        id: "multi-language",
        icon: "multi-language",
        title: "Multi-Language & Multi-Currency Support",
        description:
          "We integrate multi-language and multi-currency features to help your Android app reach a global audience. Users can browse products, place orders, and complete payments in their preferred language and currency.",
      },
    ],
    stats: serviceStats,
    showAwards: true,
    process: {
      heading: "Process of Creating Android Development",
      description: sixStepProcessDescription,
      steps: [
        { id: "requirement-gathering", icon: "requirement-gathering", label: "Requirement Gathering" },
        { id: "ui-ux-designing", icon: "ui-ux-designing", label: "UI/UX Designing" },
        { id: "development", icon: "development", label: "App Development" },
        { id: "testing", icon: "testing", label: "Testing" },
        { id: "deployment", icon: "deployment", label: "Deployment" },
        { id: "support-maintenance", icon: "support-maintenance", label: "Support & Maintenance" },
      ],
    },
    faqHeading: "Frequently Asked Questions About Android Development",
    faqSubheading: "Explore how usability impacts overall brand success.",
    faq: [
      {
        id: "android-platforms",
        question: "What platforms do you develop for?",
        answer: "We build Android apps for smartphones, tablets, and other devices running Android OS.",
      },
      {
        id: "custom-android",
        question: "Can you create custom Android apps?",
        answer:
          "Yes — we design and build tailor-made Android apps around your specific business requirements and user needs.",
      },
      {
        id: "android-uiux",
        question: "Do you handle UI/UX design for Android apps?",
        answer:
          "Yes — every Android app we build starts with wireframes and UI/UX design tailored to Android's own design guidelines.",
      },
      {
        id: "android-migration",
        question: "Can existing apps be migrated to Android?",
        answer:
          "Yes, we regularly port existing apps to Android, rebuilding them to feel native to the platform rather than a generic port.",
      },
      {
        id: "android-integrations",
        question: "Do you integrate third-party services and APIs?",
        answer:
          "Yes — payment gateways, analytics tools, CRMs, and other third-party services integrate cleanly into every Android app we build.",
      },
    ],
  },
  {
    // Figma's API was rate limited while this was built, so it's
    // transcribed from Custom_iSO_Application_Development.pdf. The nav
    // dropdown label preserves that screenshot's "iSO" typo verbatim
    // (same as the real dropdown); the page's own <h1> uses the correct
    // "iOS" spelling. The first FAQ answer in the source PDF read "We
    // build Android Yes, we develop tailor-made iOS apps..." — clearly
    // copy-pasted from the Android page — so it's rewritten below to
    // actually describe iOS, and the two trailing-fragment benefit
    // descriptions ("...From integrating advanced features." /
    // "...By analyzing these insights.") are completed into full
    // sentences rather than reproduced mid-thought.
    slug: "ios-development",
    navLabel: "Custom iSO Application Development",
    metaDescription:
      "iOS app development services including UX/UI design, implementation, QA, and integration of applications for iPhones and iPads.",
    heroTitle: "Custom iOS Application Development",
    heroDescription:
      "iOS app development services include UX and UI design, implementation, QA, and integration of applications for iPhones and iPads. SP Nexa Technologies has been providing iOS app development services for the past 14 years and gained wealth of expertise across multiple industries.",
    heroBullets: [
      "iOS App Development",
      "Custom iOS App Design",
      "iPhone App Development",
      "iPad App Development",
      "Cross-platform Development",
      "Smartphone App Development",
    ],
    benefitsHeading: "Benefits With Our Service",
    benefits: [
      {
        id: "ios-app",
        icon: "ios-app",
        title: "Custom iOS App Development",
        description:
          "We build high-performance, tailor-made iOS apps for iPhone and iPad with intuitive and engaging design. Our apps are optimized for speed, reliability, and seamless user experience, with advanced features integrated throughout.",
      },
      {
        id: "app-store-deployment",
        icon: "app-store-deployment",
        title: "App Store Deployment",
        description:
          "We manage the entire Apple App Store submission process, ensuring your iOS app meets all guidelines and is approved quickly. From preparing app metadata and screenshots to handling updates and version releases, we make the process smooth and hassle-free.",
      },
      {
        id: "ios-analytics-insights",
        icon: "analytics-insights",
        title: "Analytics & Insights",
        description:
          "We integrate advanced analytics tools into your iOS app to track user behavior, app performance, and engagement metrics in real time, including screen views, session duration, conversion rates, and user interactions you can act on.",
      },
      {
        id: "enterprise-solutions",
        icon: "enterprise-solutions",
        title: "Enterprise iOS Solutions",
        description:
          "We develop scalable, feature-rich iOS apps tailored for large-scale business operations. Our enterprise solutions are designed to handle high user volumes, complex workflows, and secure data management.",
      },
    ],
    stats: serviceStats,
    showAwards: true,
    process: {
      heading: "Process of Creating IOS Development",
      description: sixStepProcessDescription,
      steps: [
        { id: "requirement-gathering", icon: "requirement-gathering", label: "Requirement Gathering" },
        { id: "ui-ux-designing", icon: "ui-ux-designing", label: "UI/UX Designing" },
        { id: "development", icon: "development", label: "IOS Development" },
        { id: "testing", icon: "testing", label: "Testing" },
        { id: "deployment", icon: "deployment", label: "Deployment" },
        { id: "support-maintenance", icon: "support-maintenance", label: "Support & Maintenance" },
      ],
    },
    faqHeading: "Frequently Asked Questions About IOS Development",
    faqSubheading: "Explore how usability impacts overall brand success.",
    faq: [
      {
        id: "custom-ios",
        question: "Can you create custom iOS apps?",
        answer:
          "Yes — we build tailor-made iOS apps to meet your specific business goals and user requirements, for iPhones, iPads, and other Apple devices.",
      },
      {
        id: "ios-uiux",
        question: "Do you handle UI/UX design for iOS apps?",
        answer:
          "Yes — every iOS app starts with wireframes and UI/UX design that follow Apple's Human Interface Guidelines for a familiar, native feel.",
      },
      {
        id: "ios-platforms",
        question: "What platforms do you develop for?",
        answer: "We build apps for iPhone, iPad, and other devices running iOS, with support for the latest OS versions.",
      },
      {
        id: "ios-integrations",
        question: "Do you integrate third-party services and APIs?",
        answer:
          "Yes — payment gateways, analytics tools, CRMs, and other third-party services integrate cleanly into every iOS app we build.",
      },
      {
        id: "ios-performance",
        question: "How do you ensure app performance?",
        answer:
          "We profile and test every build for speed, memory use, and battery impact before it ships, and keep monitoring after launch.",
      },
    ],
  },
  {
    // No design reference for this one yet — "Search Engine Optimization"
    // only appears as an unopened entry in the real nav dropdown
    // (captured in the screenshot embedded in About.pdf) — so this is
    // generic, clearly-placeholder content in the same voice as the other
    // placeholder pages, swap in the real copy once a reference exists.
    slug: "seo",
    navLabel: "Search Engine Optimization",
    metaDescription:
      "Full-service SEO — on-page, off-page, technical, and content — tailored to your business from SP Nexa Technologies.",
    // Now built from the real Search_Engine_Optimization.pdf reference.
    heroTitle: "Search Engine Optimization",
    heroDescription:
      "At SEO Inc, we provide a full set of integrated services to drive your company's digital growth. We have services tailored to individual needs, from complete SEO management and consulting.",
    heroBullets: [
      "Search Engine Optimization",
      "Keyword Ranking",
      "Mobile Optimization",
      "Social Network Monitoring",
      "SEO Consulting",
      "Web Design",
    ],
    benefitsHeading: "Benefits With Our Service",
    benefits: [
      {
        id: "on-page-seo",
        icon: "on-page-seo",
        title: "On-Page SEO",
        description:
          "Optimize your website's content, meta tags, headings, and URLs to improve search engine rankings.",
      },
      {
        id: "technical-seo",
        icon: "technical-seo",
        title: "Technical SEO",
        description:
          "Enhance site speed, mobile-friendliness, crawlability, and indexing for better search performance.",
      },
      {
        id: "off-page-seo",
        icon: "off-page-seo",
        title: "Off-Page SEO",
        description:
          "Build high-quality backlinks, improve domain authority, and increase your website's online presence.",
      },
      {
        id: "content-optimization",
        icon: "content-optimization",
        title: "Content Optimization & Marketing",
        description:
          "Create SEO-friendly, engaging content that attracts, educates, and retains your target audience.",
      },
    ],
    stats: serviceStats,
    showAwards: true,
    faqHeading: "Frequently Asked Questions About Search Engine Optimization",
    faqSubheading: "Explore how usability impacts overall brand success.",
    faq: [
      {
        id: "seo-what-is",
        question: "What is SEO and why is it important?",
        answer:
          "SEO (Search Engine Optimization) improves your website's visibility on search engines, helping attract more organic traffic, potential customers, and higher conversions.",
      },
      {
        id: "seo-timeline",
        question: "How long does it take to see results from SEO?",
        answer:
          "Most sites see meaningful movement in 3–6 months, with compounding gains after that as authority builds.",
      },
      {
        id: "seo-onpage-offpage",
        question: "What is the difference between on-page and off-page SEO?",
        answer:
          "On-page SEO optimizes elements on your own site — content, meta tags, headings, and URLs. Off-page SEO builds authority from outside your site, mainly through high-quality backlinks.",
      },
      {
        id: "seo-keywords",
        question: "How do keywords affect SEO?",
        answer:
          "Keywords tell search engines what your page is about — targeting the right ones, at the right intent, is what connects your content with the people searching for it.",
      },
      {
        id: "seo-guarantee",
        question: "Can SEO guarantee top rankings on Google?",
        answer:
          "No ethical SEO provider can guarantee a specific ranking — we focus on sustainable growth in traffic and qualified leads instead.",
      },
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}
