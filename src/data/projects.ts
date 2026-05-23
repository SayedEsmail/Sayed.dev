export interface StackItem {
    name: string;
    role: string;
}

export interface Challenge {
    title: string;
    solution: string;
}

export interface Impact {
    metric: string;
    value: string;
}

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    heroImage: string;
    screenshots: { src: string; alt: string }[];
    problem: string;
    architecture: string;
    architectureDiagram?: string;
    stack: StackItem[];
    challenges: Challenge[];
    impact: Impact[];
    role: string;
    featured: boolean;
    order: number;
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    // ─────────────────────────────────────────────
    // 1. Routz
    // ─────────────────────────────────────────────
    {
        slug: "routz",
        title: "Routz",
        subtitle: "Enterprise Fleet & Logistics Management System",
        description:
            "A large-scale, enterprise-grade transportation, fleet, and logistics management system providing comprehensive tools for managing trips, live tracking, drivers, passengers, vehicles, and complex billing/subscription systems.",
        tags: [
            "Vue 3",
            "Vuetify 3",
            "Pinia",
            "Leaflet",
            "Google Maps",
            "WebSockets",
            "ApexCharts",
            "i18n",
        ],
        heroImage: "/projects/routz/live-tracking.png",
        screenshots: [
            {
                src: "/projects/routz/live-tracking.png",
                alt: "Live Tracking Map — Real-time fleet tracking with WebSocket connection and Google Maps integration",
            },
            {
                src: "/projects/routz/trips-logs.png",
                alt: "Trips Logs — Advanced trip management with multi-column filtering, status tracking, and passenger management",
            },
        ],
        role: "Frontend Developer / Vue.js Engineer",
        featured: true,
        order: 1,

        problem:
            "Transportation companies needed a unified platform to manage their entire fleet operations — from real-time vehicle tracking and trip scheduling to driver management, passenger handling, and complex billing with subscription packages. The existing solutions were fragmented, lacked real-time capabilities, and couldn't handle the multi-tenant requirements of serving different organizations (schools, enterprises) with distinct configurations.",

        architecture: `3-App Architecture separating Super Admin controls, Customer Dashboards, and specific Subdomains — all within a single Vue 3 codebase. The app dynamically resolves the correct interface, routing, and authentication flow based on the active domain and user permissions.

Key architectural decisions:
• Dynamic routing with vite-plugin-pages and layout system for multi-tenant support
• Centralized state management with Pinia stores for fleet data, trip management, and user sessions
• RESTful API integration via custom fetchData/postData controllers with Axios
• WebSocket integration for real-time vehicle tracking and trip status updates
• Cookie-based authentication with role-based access control
• Full internationalization (English/Arabic) with dynamic RTL/LTR switching`,

        stack: [
            { name: "Vue 3", role: "Core framework — Composition API with <script setup>" },
            { name: "Vuetify 3", role: "UI component library — responsive layouts, data tables, forms" },
            { name: "Pinia", role: "Centralized state management for fleet data and sessions" },
            { name: "Vue Router", role: "Dynamic routing with vite-plugin-pages and layouts plugin" },
            { name: "Leaflet / Google Maps", role: "Interactive maps for live tracking and route visualization" },
            { name: "WebSockets", role: "Real-time vehicle tracking and trip status updates" },
            { name: "ApexCharts", role: "Analytics dashboards and fleet performance metrics" },
            { name: "Axios", role: "API integration with custom fetchData/postData controllers" },
            { name: "Vue I18n", role: "Multi-language support (English/Arabic) with RTL" },
            { name: "Vite", role: "Build tooling with hot module replacement" },
        ],

        challenges: [
            {
                title: "Real-time Fleet Tracking at Scale",
                solution:
                    "Implemented WebSocket-based live tracking with efficient map marker updates. Used Google Maps clustering for large fleets and optimized re-renders by debouncing position updates and only updating visible markers within the viewport.",
            },
            {
                title: "Multi-tenant Dynamic Routing",
                solution:
                    "Built a routing system that dynamically resolves the correct app interface (Admin, Dashboard, Subdomain) based on the active domain. Used vite-plugin-pages with layout conventions and meta/layout/title patterns integrated with i18n keys.",
            },
            {
                title: "Complex Data Tables with Live Filters",
                solution:
                    "Engineered trip logs and driver management tables with multi-column filtering (status, direction, date ranges), pagination with API parameter handling, and bulk management actions — all abstracted into reusable components like AppActionDialog.",
            },
            {
                title: "Interactive Mapping with Localization",
                solution:
                    "Enhanced map centering, geocoding, and autocomplete by leveraging the user's localized country data from Pinia stores. Fixed critical bugs with location APIs and implemented precise coordinate management for pickup/dropoff points.",
            },
        ],

        impact: [
            { metric: "Architecture", value: "3-App Architecture serving Admin, Dashboard, and Subdomain users" },
            { metric: "Modules Built", value: "Driver management, Staff management, Trip logs, Live tracking, Subscriptions" },
            { metric: "Reusable Components", value: "Abstracted UI patterns (AppActionDialog) reducing dev time for new features by ~40%" },
            { metric: "i18n Coverage", value: "100% — zero hardcoded strings, full English/Arabic RTL support" },
            { metric: "Real-time", value: "WebSocket-powered live tracking with sub-second updates" },
        ],
    },

    // ─────────────────────────────────────────────
    // 2. Untap
    // ─────────────────────────────────────────────
    {
        slug: "untap",
        title: "Untap",
        subtitle: "Multi-Tenant SaaS Innovation Platform",
        description:
            "An advanced, multi-tenant B2B/B2C SaaS platform for organizations to launch, manage, and scale innovation programs, competitions, grants, events, and mentorships. Serves multiple user personas — from system admins to corporate clients and public participants — through a single, highly scalable frontend architecture.",
        tags: [
            "Vue 3",
            "Vuetify 3",
            "SurveyJS",
            "GrapesJS",
            "Pinia",
            "Multi-tenant",
            "CASL",
            "SCSS",
        ],
        heroImage: "/projects/untap/dashboard-overview.png",
        screenshots: [
            {
                src: "/projects/untap/dashboard-overview.png",
                alt: "Dashboard Overview — KPI cards, activity logs, referral tracking, and visitor analytics",
            },
            {
                src: "/projects/untap/form-builder.png",
                alt: "Form Builder — SurveyJS-powered drag-and-drop form designer with question types, logic builder, and evaluator settings",
            },
        ],
        role: "Frontend Software Engineer (Vue.js)",
        featured: true,
        order: 2,

        problem:
            "Organizations running innovation programs, hackathons, grants, and competitions needed a platform that could handle the full lifecycle — from creating multi-step application forms and managing submissions to coordinating judges, publishing results, and building custom landing pages. The challenge was building a single codebase that serves three completely different user experiences (admin, customer dashboard, public participant portal) while supporting multi-tenant customization per client.",

        architecture: `3-in-1 Codebase Architecture — a single Vue 3 SPA that houses three distinct applications (Super Admin, Customer Dashboard, and Public Subdomain Portal) within one repository. The app dynamically resolves the correct interface, routing, and authentication flow based on the active domain/URL and user permissions.

Key architectural decisions:
• Multi-tenancy via subdomain routing — B2B clients configure their dashboards, which dynamically drive the UI, themes, and data on public-facing participant portals
• HTTP-only cookie-based authentication with CASL permission/role management
• SurveyJS deep integration for dynamic, multi-step application forms with file uploads and video recordings
• GrapesJS visual page builder letting customers build landing pages via drag-and-drop
• Dynamic SCSS theming per tenant with RTL/LTR layout switching
• Google Analytics (gtag) integration with custom cookie-consent management`,

        stack: [
            { name: "Vue 3", role: "Core framework — Composition API for all feature modules" },
            { name: "Vuetify 3", role: "UI framework — responsive layouts, complex forms, data tables" },
            { name: "Pinia", role: "State management across all three app contexts" },
            { name: "SurveyJS", role: "Dynamic form builder — multi-step applications, evaluations, surveys" },
            { name: "GrapesJS", role: "Visual drag-and-drop page builder for customer landing pages" },
            { name: "CASL", role: "Permission-based access control with role management" },
            { name: "SCSS", role: "Dynamic theming per tenant with RTL/LTR support" },
            { name: "Axios", role: "API layer with custom fetchData/postData controllers" },
            { name: "Vue I18n", role: "Bilingual platform (English/Arabic) with lazy-loaded locales" },
            { name: "Google Analytics", role: "Tracking with custom cookie-consent integration" },
            { name: "Vite", role: "Build system with dynamic favicon handling and icon generation" },
        ],

        challenges: [
            {
                title: "Performance: O(N×M) → O(N) Cart Calculations",
                solution:
                    "Refactored complex frontend data processing algorithms for collective payments in the subdomain cart feature. Reduced time complexity from O(N×M) to O(N), significantly improving UI responsiveness for large data sets with many participants and payment items.",
            },
            {
                title: "Third-Party SDK Integration (GrapesJS)",
                solution:
                    "Solved complex integration bugs within GrapesJS by utilizing custom DOM injection and MutationObserver patterns to bypass library limitations — specifically fixing video upload capabilities within the studio builder that the SDK didn't natively support.",
            },
            {
                title: "Dynamic Hash Fragment Scrolling",
                solution:
                    "Implemented asynchronous smooth-scrolling for dynamic hash fragments in the subdomain portal. Had to handle the timing between Vue's rendering cycle and the browser's scroll behavior, especially with dynamically loaded content sections.",
            },
            {
                title: "Multi-Tenant Theming & Routing",
                solution:
                    "Built a routing system where each B2B client's subdomain dynamically loads their specific theme, branding, and content configuration. The same codebase renders completely different experiences based on the domain, with CSS custom properties for real-time theme switching.",
            },
        ],

        impact: [
            { metric: "Architecture", value: "3-in-1 codebase serving Admin, Dashboard, and Public Subdomain" },
            { metric: "Performance", value: "O(N×M) → O(N) optimization on payment calculations" },
            { metric: "Form Engine", value: "SurveyJS integration with file uploads, video recording, and dynamic validations" },
            { metric: "Page Builder", value: "GrapesJS visual editor with custom DOM patches for full media support" },
            { metric: "i18n", value: "Full bilingual (EN/AR) with dynamic RTL/LTR switching, zero hardcoded strings" },
            { metric: "DX", value: "Authored architectural docs, established linting rules, standardized Composition API practices" },
        ],
    },

    // ─────────────────────────────────────────────
    // 3. Zads (زاد)
    // ─────────────────────────────────────────────
    {
        slug: "zads",
        title: "Zads",
        subtitle: "Local Education Marketplace Platform",
        description:
            "A full-stack education marketplace connecting learners with local teachers and trainers. Supports four flexible session modes — online, at the learner's home, at the teacher's home, or group sessions — with independent pricing per mode. Built as a multi-app monorepo spanning the entire stack.",
        tags: [
            "Nuxt 3",
            "Next.js 16",
            "Express.js",
            "Prisma",
            "PostgreSQL",
            "Full-Stack",
            "Vue 3",
            "React 19",
        ],
        heroImage: "/projects/zads/landing-page.png",
        screenshots: [
            {
                src: "/projects/zads/landing-page.png",
                alt: "Zads Landing Page — Clean, conversion-focused design with feature highlights and how-it-works flow",
            },
            {
                src: "/projects/zads/teacher-dashboard.png",
                alt: "Teacher Dashboard — Profile metrics (Views, Contact Requests, Ratings, Active Subjects) and incoming parent connection requests",
            },
            {
                src: "/projects/zads/parent-dashboard.png",
                alt: "Parent Dashboard — Overview showing followed teachers, requests count, search panel, and quick request recommendations in Arabic RTL",
            },
            {
                src: "/projects/zads/parent-requests.png",
                alt: "Parent Request Logs — Live tracking page showing active, closed, and deleted teacher tutoring requests across subjects",
            },
            {
                src: "/projects/zads/dependents-list.png",
                alt: "Dependents (Children) Management — Area for parents to manage multiple student sub-profiles and associate distinct subjects/learning stages",
            },
        ],
        role: "Full-Stack Developer",
        featured: true,
        order: 3,

        problem:
            "There was no dedicated platform in the Egyptian market for connecting local learners with nearby teachers across multiple session formats. Parents needed a way to find verified tutors in their neighborhood, compare them, and book sessions — whether online, at home, or in groups. Teachers needed a platform to showcase their expertise with flexible per-subject, per-mode pricing. The solution required a full-stack platform with geo-proximity search, multi-modal pricing, and bilingual Arabic-first support.",

        architecture: `Multi-App Monorepo with 4 distinct projects sharing a single REST API and PostgreSQL database:

• zads_web (Nuxt 3 SSR) — Consumer-facing web app with geo-search, teacher profiles, and booking
• zads-api (Express.js) — REST API backend with 13 endpoint groups, Prisma ORM, JWT auth
• zads-dashboard (Vue 3 + Docker) — Admin panel with full CRUD and analytics
• zads-app (Next.js 16 + React 19) — Migration target consolidating both frontends into one TypeScript app

Database: 17 Prisma models, 8 enums, 3-level geographic hierarchy (Governorate → City → Area) seeded with real Egyptian location data.

The architecture supports progressive migration — Vue/Nuxt → Next.js/React — consolidating 2 frontend apps into 1 unified TypeScript application while keeping the API stable.`,

        architectureDiagram: `┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Web (Nuxt 3)   │     │ Dashboard (Vue 3) │     │ zads-app (Next) │
│  ⭐ active       │     │  ⭐ active         │     │  🔄 migration    │
└────────┬────────┘     └────────┬──────────┘     └────────┬────────┘
         │                       │                          │
         └───────────────────────┼──────────────────────────┘
                                 ▼
                        ┌───────────────┐
                        │   REST API    │
                        │  (Express)    │
                        └───────┬───────┘
                                ▼
                        ┌───────────────┐
                        │  PostgreSQL   │
                        │  (Prisma)     │
                        └───────────────┘`,

        stack: [
            { name: "Nuxt 3", role: "Consumer web app — SSR, SEO, geo-proximity teacher search" },
            { name: "Vue 3", role: "Admin dashboard — Composition API with Vuetify 3" },
            { name: "Next.js 16", role: "Migration target — consolidating both frontends (React 19 + TypeScript)" },
            { name: "Express.js", role: "REST API — 13 endpoint groups with JWT auth and role guards" },
            { name: "Prisma 5", role: "ORM — 17 models, 8 enums, type-safe database access" },
            { name: "PostgreSQL", role: "Primary database with 3-level geographic hierarchy" },
            { name: "Zod", role: "Schema validation on all API endpoints" },
            { name: "CASL", role: "RBAC with cookie-persisted ability rules across SSR" },
            { name: "Firebase FCM", role: "Push notifications with per-user token management" },
            { name: "Docker", role: "Containerized dashboard deployment with nginx" },
            { name: "Zustand", role: "State management in Next.js migration (11 stores)" },
            { name: "shadcn/ui", role: "Component library for Next.js migration" },
        ],

        challenges: [
            {
                title: "Geo-Proximity Search Algorithm",
                solution:
                    "Implemented a multi-level teacher ranking algorithm using Haversine distance calculations. Results are ranked by proximity (same area → same city → same governorate), then by verified status, rating, and view count. The 3-level geographic hierarchy (Governorate → City → Area) is seeded with real Egyptian location data for accurate results.",
            },
            {
                title: "Multi-Modal Pricing Matrix",
                solution:
                    "Designed a pricing system with 5 independent price points per subject per teacher: at teacher's home, at student's home, group session, online, and offline — each with duration and negotiable flag. This required a complex TeacherSubject join model in Prisma with careful validation.",
            },
            {
                title: "Cross-Framework Migration (Vue → React)",
                solution:
                    "Leading a progressive migration from Vue/Nuxt to Next.js 16 + React 19 + TypeScript, consolidating 2 separate frontend apps into 1 unified app. Maintained feature parity while converting 9 Pinia stores to 11 Zustand stores, CASL Vue to CASL React, and @nuxtjs/i18n to next-intl.",
            },
            {
                title: "CASL RBAC Across SSR",
                solution:
                    "Implemented cookie-persisted CASL ability rules that work seamlessly with Nuxt 3 server-side rendering. The authorization system handles 3 roles (parent, teacher, admin) with middleware guards and global ACL middleware for role-based redirects.",
            },
        ],

        impact: [
            { metric: "Full-Stack Scope", value: "4-app monorepo — API, SSR web, admin dashboard, and migration target" },
            { metric: "Database Design", value: "17 Prisma models, 8 enums, 5 migrations with real geographic data" },
            { metric: "API Coverage", value: "13 REST endpoint groups with Zod validation on all routes" },
            { metric: "Search Algorithm", value: "Haversine-based geo-proximity with multi-level ranking" },
            { metric: "Cross-Framework", value: "Active Vue/Nuxt → Next.js/React migration maintaining full feature parity" },
            { metric: "i18n", value: "Arabic-first (RTL) with English (LTR), lazy-loaded locale files" },
        ],

        liveUrl: "https://zads.app",
    },
];

// ─────────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects
        .filter((p) => p.featured)
        .sort((a, b) => a.order - b.order);
}

export function getAllSlugs(): string[] {
    return projects.map((p) => p.slug);
}
