export type WorkCategory = "company" | "freelance";

export interface WorkItem {
    slug: string;
    title: string;
    category: WorkCategory;
    employer?: string;
    period?: string;
    role?: string;
    description: string;
    contributions: string[];
    tags: string[];
    image?: { src: string; alt: string };
    imageCaption?: string;
    caseStudy?: string;
    liveUrl?: string;
}

export const work: WorkItem[] = [
    {
        slug: "schoolz-routz",
        title: "Routz",
        category: "company",
        employer: "Schoolz (Routz Platform)",
        period: "Jan 2025–Present",
        role: "Senior Frontend Engineer",
        description:
            "A fleet-management and school-transportation SaaS platform with admin and client dashboards.",
        contributions: [
            "Built frontend product workflows for driver management, trip scheduling, billing, and subscriptions.",
            "Developed live GPS tracking backed by custom Node.js socket services.",
            "Integrated mapping and geocoding APIs for route planning, location search, and map interactions.",
            "Established shared Vue components and composables for a bilingual Arabic and English interface.",
        ],
        tags: ["Vue 3", "Node.js sockets", "GPS tracking", "Mapping", "Arabic/English"],
        image: {
            src: "/projects/routz/live-tracking.png",
            alt: "Routz live fleet tracking map",
        },
        caseStudy: "/projects/routz",
        liveUrl: "https://routz.me",
    },
    {
        slug: "untap",
        title: "Untap",
        category: "company",
        employer: "Untap",
        period: "Dec 2022–Apr 2026",
        role: "Senior Frontend Engineer / Frontend Team Lead",
        description:
            "A multi-tenant SaaS platform for competitions, innovation programs, and grant management, bringing admin, customer portal, and public-site experiences into one Vue codebase.",
        contributions: [
            "Led frontend architecture, code reviews, and engineer mentoring.",
            "Designed the multi-tenant foundation for client theming, permission roles, and runtime configuration.",
            "Delivered a schema-driven form builder and drag-and-drop page builder by integrating and customizing SurveyJS and GrapesJS.",
            "Improved initial dashboard load time by 40% through Vite build optimization, route-level code splitting, and state-management refactoring.",
            "Implemented permission-based access control and frontend security practices aligned with ISO requirements.",
        ],
        tags: ["Vue 3", "Multi-tenant SaaS", "SurveyJS", "GrapesJS", "Vite", "Access control"],
        image: {
            src: "/projects/untap/dashboard-overview.png",
            alt: "Untap platform dashboard overview",
        },
        caseStudy: "/projects/untap",
        liveUrl: "https://untap.tech",
    },
    {
        slug: "autotager",
        title: "AutoTager",
        category: "company",
        employer: "AutoTager",
        period: "Jan 2022–Dec 2022",
        role: "Frontend Engineer",
        description:
            "An automotive B2B marketplace with admin, client, and dealer dashboards for analytics, inventory, and multi-tenant listings.",
        contributions: [
            "Built data-dense dashboards for administrators, clients, and dealers.",
            "Developed a vehicle-inspection workflow for photo uploads, condition scoring, and structured reports before publication.",
            "Turned Figma designs into a reusable React component library.",
        ],
        tags: ["React", "B2B marketplace", "Dashboards", "Vehicle inspection"],
    },
    {
        slug: "botme",
        title: "Botme",
        category: "company",
        employer: "Botme",
        period: "Jan 2018–Jan 2022",
        role: "Frontend Engineer",
        description:
            "An omnichannel chatbot builder with workflow automation, live chat, and commerce experiences.",
        contributions: [
            "Built and improved chatbot-building, workflow automation, live-chat, and commerce features using Vue.js and Angular.",
            "Contributed to Botme Shops, an automated e-commerce module featured at Facebook F8 Refresh 2021.",
            "Designed user flows for visual automation and interactive forms.",
        ],
        tags: ["Vue.js", "Angular", "Chatbots", "Workflow automation", "E-commerce"],
    },
    {
        slug: "earlier-agency-work",
        title: "Earlier Agency Work",
        category: "company",
        employer: "MoreCreative, Enjaz (KSA), MTC (Qatar), and Webdivs",
        period: "2014–2018",
        role: "Frontend / Web Developer",
        description:
            "Custom website and storefront work for clients across the MENA region.",
        contributions: [
            "Designed and built WordPress, WooCommerce, and Shopify websites and storefronts.",
            "Integrated third-party APIs for client projects.",
        ],
        tags: ["WordPress", "WooCommerce", "Shopify", "API integration"],
    },
    {
        slug: "zads",
        title: "Zads",
        category: "freelance",
        employer: "Personal project",
        period: "2024–Present",
        role: "Founder & Full-Stack Engineer",
        description:
            "A multi-app education ecosystem connecting families with teachers through location-aware discovery and tutoring workflows.",
        contributions: [
            "Built the backend using Node.js, Express, Prisma ORM, and PostgreSQL.",
            "Developed geo-proximity search to match learners with nearby teachers using location mapping and distance routing.",
            "Implemented dynamic pricing and automated tutor requests from parent sign-ups.",
            "Built the customer web app and admin dashboards in Nuxt 3 and Vue 3, with CASL access control and Firebase push notifications; began a move toward Next.js and React.",
        ],
        tags: ["Nuxt 3", "Vue 3", "Node.js", "PostgreSQL", "Prisma", "Geolocation"],
        image: {
            src: "/projects/zads/landing-page.png",
            alt: "Zads education platform landing page",
        },
        caseStudy: "/projects/zads",
        liveUrl: "https://zads.app",
    },
    {
        slug: "yanfaa",
        title: "Yanfaa",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "A full UI redesign implemented as a responsive HTML and CSS experience.",
        contributions: [
            "Redesigned the user interface across the experience.",
            "Implemented responsive layouts with HTML and CSS.",
            "Addressed frontend performance as part of the redesign work.",
        ],
        tags: ["HTML", "CSS", "Responsive design", "Performance"],
        image: {
            src: "/projects/yanfaa/current-site.png",
            alt: "Current Yanfaa public website homepage in Arabic",
        },
        imageCaption:
            "Current public website captured in September 2026; it may differ from the UI redesign delivered for this project.",
        liveUrl: "https://yanfaa.com/",
    },
    {
        slug: "wellpal",
        title: "Wellpal",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "A custom Sylius storefront focused on the customer shopping experience.",
        contributions: [
            "Aligned the storefront interface with UX research and business goals.",
            "Built a custom frontend experience for the Sylius commerce platform.",
        ],
        tags: ["Sylius", "E-commerce", "Storefront UX"],
        image: {
            src: "/projects/wellpal/current-site.png",
            alt: "Current WellPal Web SA storefront homepage",
        },
        imageCaption:
            "Current public storefront captured in September 2026; it may differ from the custom Sylius storefront UX delivered for this project.",
        liveUrl: "https://sa.wellpal.net/en/",
    },
    {
        slug: "fundseer",
        title: "FundSeer",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "Marketing websites and a secure investor dashboard, with attention to performance and scalability.",
        contributions: [
            "Built marketing website experiences.",
            "Developed a secure dashboard for investors.",
            "Worked on frontend performance and scalability for the product experience.",
        ],
        tags: ["Marketing websites", "Investor dashboard", "Security", "Performance", "Scalability"],
    },
    {
        slug: "kadouscope",
        title: "Kadouscope",
        category: "freelance",
        employer: "Freelance client project",
        role: "Frontend Developer",
        description:
            "A React frontend for analytics workflows, built with attention to rendering, responsive behavior, and visual consistency.",
        contributions: [
            "Overhauled the frontend of a complex analytics dashboard in React.",
            "Optimized rendering speed, responsive usability, and visual consistency.",
        ],
        tags: ["React", "Analytics", "Responsive design", "Rendering"],
    },
    {
        slug: "movex",
        title: "Movex",
        category: "freelance",
        employer: "Freelance client project",
        period: "2020",
        role: "Frontend Developer",
        description:
            "A logistics experience for shipment tracking, with responsive interfaces connected to a tracking API.",
        contributions: [
            "Built responsive frontend views for shipment tracking.",
            "Integrated the shipment-tracking API into the interface.",
        ],
        tags: ["Logistics", "Shipment tracking", "API integration", "Responsive design"],
    },
];
