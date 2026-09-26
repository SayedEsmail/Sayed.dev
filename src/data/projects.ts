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
    businessImpact: string[];
    keyDecisions: { decision: string; justification: string }[];
    role: string;
    featured: boolean;
    order: number;
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        slug: "routz",
        title: "Routz",
        subtitle: "Fleet management for school transportation",
        description:
            "A fleet-management and school-transportation SaaS product with admin and client dashboards. I build workflows for drivers, trips, billing, subscriptions, and live GPS tracking.",
        tags: ["Vue 3", "Node.js sockets", "GPS tracking", "Mapping", "Arabic/English"],
        heroImage: "/projects/routz/live-tracking.png",
        screenshots: [
            {
                src: "/projects/routz/live-tracking.png",
                alt: "Routz live fleet tracking map",
            },
            {
                src: "/projects/routz/trips-logs.png",
                alt: "Routz trip management interface",
            },
        ],
        role: "Senior Frontend Engineer at Schoolz",
        featured: true,
        order: 1,
        problem:
            "School transportation teams need clear tools for coordinating drivers and trips, managing subscriptions and billing, and seeing active vehicles on a map.",
        architecture:
            "The product is built in Vue 3 with admin and client dashboards. Custom Node.js socket services provide live trip and driver-location updates, while mapping and geocoding APIs support route planning and location search. Shared components and composables support a bilingual Arabic and English interface.",
        architectureDiagram: `Vue 3 dashboards
        ├── Driver, trip, billing, and subscription workflows
        ├── Mapping and geocoding APIs
        └── Custom Node.js socket services for live tracking`,
        stack: [
            { name: "Vue 3", role: "Frontend for admin and client dashboards" },
            { name: "Node.js socket services", role: "Live trip and driver-location updates" },
            { name: "Mapping and geocoding APIs", role: "Route planning and location search" },
            { name: "Arabic and English", role: "Bilingual interface" },
        ],
        challenges: [
            {
                title: "Live trip visibility",
                solution:
                    "Built a live GPS tracking interface connected to custom Node.js socket services so operators can follow active trips and driver locations.",
            },
            {
                title: "Route and location workflows",
                solution:
                    "Integrated mapping and geocoding APIs for route planning, location search, and map interactions.",
            },
            {
                title: "Operational workflows",
                solution:
                    "Delivered frontend workflows for driver management, trip scheduling, billing, and subscription management.",
            },
            {
                title: "Consistent bilingual UI",
                solution:
                    "Established shared Vue components and composables to support a consistent Arabic and English experience.",
            },
        ],
        impact: [
            { metric: "Live operations", value: "GPS visibility into active trips and driver locations" },
            { metric: "Core workflows", value: "Driver management, trip scheduling, billing, and subscriptions" },
            { metric: "Shared frontend", value: "Reusable Vue components and composables for Arabic and English" },
        ],
        businessImpact: [
            "Gives operators a live view of active trips and driver locations.",
            "Brings day-to-day driver, trip, billing, and subscription workflows into the product.",
            "Supports customers using either Arabic or English.",
        ],
        keyDecisions: [
            {
                decision: "Connect tracking to socket services",
                justification:
                    "Live trip and driver-location updates are central to the operator experience.",
            },
            {
                decision: "Use mapping and geocoding APIs",
                justification:
                    "Route planning and location search depend on accurate map interactions.",
            },
            {
                decision: "Build shared Vue components and composables",
                justification:
                    "Shared frontend patterns keep the bilingual dashboards consistent.",
            },
        ],
        liveUrl: "https://routz.me",
    },
    {
        slug: "untap",
        title: "Untap",
        subtitle: "Multi-tenant platform for innovation programs",
        description:
            "A multi-tenant SaaS platform for competitions, innovation programs, and grant management. Its Vue 3 codebase brings together admin, customer portal, and public-site experiences, with configurable forms and pages for client programs.",
        tags: ["Vue 3", "Multi-tenant SaaS", "SurveyJS", "GrapesJS", "Vite", "Access control"],
        heroImage: "/projects/untap/dashboard-overview.png",
        screenshots: [
            {
                src: "/projects/untap/dashboard-overview.png",
                alt: "Untap platform dashboard overview",
            },
            {
                src: "/projects/untap/form-builder.png",
                alt: "Untap form builder interface",
            },
        ],
        role: "Senior Frontend Engineer / Frontend Team Lead",
        featured: true,
        order: 2,
        problem:
            "Organizations running competitions, innovation programs, and grants need tools to configure their programs and serve administrators, client teams, and public participants. Untap brings those experiences together while allowing client-specific themes, permissions, and runtime configuration.",
        architecture:
            "A Vue 3 codebase serves the admin, customer portal, and public-site experiences. The multi-tenant foundation supports per-client theming, permission roles, and runtime configuration. SurveyJS and GrapesJS provide customized form and page-building experiences; Vite build optimization, route-level code splitting, and state-management refactoring improved initial dashboard load time by 40%.",
        architectureDiagram: `Vue 3 multi-tenant platform
        ├── Admin, customer portal, and public-site experiences
        ├── Client theming, permissions, and runtime configuration
        ├── SurveyJS form builder and GrapesJS page builder
        └── Vite build optimization and route-level code splitting`,
        stack: [
            { name: "Vue 3", role: "Frontend platform across admin, customer, and public experiences" },
            { name: "SurveyJS", role: "Customized schema-driven form builder" },
            { name: "GrapesJS", role: "Customized drag-and-drop page builder" },
            { name: "Vite", role: "Build optimization supporting faster dashboard loads" },
            { name: "Access control", role: "Permission-based frontend access" },
        ],
        challenges: [
            {
                title: "Multi-tenant frontend foundation",
                solution:
                    "Designed the foundation for client-specific theming, permission roles, and runtime configuration across admin, customer portal, and public-site experiences.",
            },
            {
                title: "Configurable program tools",
                solution:
                    "Integrated and extensively customized SurveyJS and GrapesJS to deliver schema-driven forms and a drag-and-drop page builder.",
            },
            {
                title: "Dashboard loading performance",
                solution:
                    "Reduced initial dashboard load time by 40% through Vite build optimization, route-level code splitting, and state-management refactoring.",
            },
            {
                title: "Frontend team leadership",
                solution:
                    "Owned frontend architecture decisions, code reviews, and engineer mentoring as Frontend Team Lead.",
            },
        ],
        impact: [
            { metric: "Initial dashboard load", value: "40% faster after build, routing, and state-management changes" },
            { metric: "Client configuration", value: "Theming, permission roles, and runtime configuration" },
            { metric: "Program authoring", value: "Customized form and page builders for client teams" },
        ],
        businessImpact: [
            "Supports distinct client deployments from a shared frontend codebase.",
            "Lets program teams configure forms and public pages through integrated builders.",
            "Improved initial dashboard load time by 40% through frontend performance work.",
        ],
        keyDecisions: [
            {
                decision: "Build a shared multi-tenant frontend foundation",
                justification:
                    "Admin, customer, and public experiences need to support per-client configuration within one Vue codebase.",
            },
            {
                decision: "Customize established form and page builders",
                justification:
                    "SurveyJS and GrapesJS provide the basis for configurable program forms and pages.",
            },
            {
                decision: "Address dashboard load across build, routing, and state",
                justification:
                    "The reported 40% improvement came from combining Vite optimization, route-level code splitting, and state-management refactoring.",
            },
        ],
        liveUrl: "https://untap.tech",
    },
    {
        slug: "zads",
        title: "Zads",
        subtitle: "Personal education platform",
        description:
            "A personal education project connecting families with teachers. The platform combines teacher discovery, location-aware search, flexible lesson pricing, and parent-to-tutor request workflows.",
        tags: ["Nuxt 3", "Vue 3", "Node.js", "PostgreSQL", "Prisma", "Geolocation"],
        heroImage: "/projects/zads/landing-page.png",
        screenshots: [
            {
                src: "/projects/zads/landing-page.png",
                alt: "Zads education platform landing page",
            },
            {
                src: "/projects/zads/teacher-dashboard.png",
                alt: "Zads teacher dashboard",
            },
            {
                src: "/projects/zads/parent-dashboard.png",
                alt: "Zads parent dashboard in Arabic",
            },
            {
                src: "/projects/zads/parent-requests.png",
                alt: "Zads parent tutoring requests",
            },
            {
                src: "/projects/zads/dependents-list.png",
                alt: "Zads parent student profiles",
            },
        ],
        role: "Founder & Full-Stack Engineer (Personal project)",
        featured: true,
        order: 3,
        problem:
            "Families need a way to find nearby teachers and request tutoring, while teachers need a place to present their subjects and pricing. Zads brings teacher discovery, location-aware search, lesson pricing, and parent requests into one product.",
        architecture:
            "Built the backend with Node.js, Express, Prisma ORM, and PostgreSQL. The customer web app and admin dashboards use Nuxt 3 and Vue 3, with CASL access control and Firebase push notifications. A migration toward a unified Next.js and React stack has begun.",
        architectureDiagram: `Customer web app and admin dashboards
        ├── Nuxt 3 and Vue 3
        └── Migration toward Next.js and React
                    │
                    ▼
        Node.js and Express backend
                    │
                    ▼
        Prisma ORM and PostgreSQL`,
        stack: [
            { name: "Node.js and Express", role: "Backend API" },
            { name: "Prisma ORM", role: "Database access" },
            { name: "PostgreSQL", role: "Application database" },
            { name: "Nuxt 3 and Vue 3", role: "Customer web app and admin dashboards" },
            { name: "CASL", role: "Access control" },
            { name: "Firebase", role: "Push notifications" },
            { name: "Next.js and React", role: "Target for the frontend migration in progress" },
        ],
        challenges: [
            {
                title: "Finding nearby teachers",
                solution:
                    "Built geo-proximity search to match learners with nearby teachers using location mapping and distance routing.",
            },
            {
                title: "Flexible lesson pricing",
                solution:
                    "Implemented dynamic pricing so teachers can offer different lesson arrangements.",
            },
            {
                title: "Parent-to-tutor requests",
                solution:
                    "Automated tutor requests from parent sign-ups to connect registration with the tutoring workflow.",
            },
            {
                title: "Frontend migration",
                solution:
                    "Began moving the Nuxt 3 and Vue 3 frontend toward a unified Next.js and React stack.",
            },
        ],
        impact: [
            { metric: "Teacher discovery", value: "Location-aware search for nearby teachers" },
            { metric: "Lesson options", value: "Dynamic pricing and tutoring arrangements" },
            { metric: "Parent workflow", value: "Tutor requests created from parent sign-ups" },
            { metric: "Platform development", value: "Full-stack product with a frontend migration in progress" },
        ],
        businessImpact: [
            "Connects families with nearby teachers through location-aware discovery.",
            "Gives teachers flexible pricing options for their lessons.",
            "Links parent sign-ups to tutor request workflows.",
        ],
        keyDecisions: [
            {
                decision: "Build the backend with Node.js, Express, Prisma, and PostgreSQL",
                justification:
                    "These technologies form the backend and data layer for the multi-app product.",
            },
            {
                decision: "Use location-aware teacher discovery",
                justification:
                    "Families need to find teachers near them, so search uses location mapping and distance routing.",
            },
            {
                decision: "Move toward a unified Next.js and React frontend",
                justification:
                    "The migration is intended to bring the customer app and admin dashboards toward one frontend stack.",
            },
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
