export interface Article {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    readTime: string;
    excerpt: string;
    content: string;
}

export const articles: Article[] = [
    {
        slug: "scaling-vue-3-saas-apps",
        title: "Scaling Vue 3 SaaS Applications for Enterprise Operations",
        subtitle: "Key lessons in folder organization, dynamic route compilation, and state management at scale.",
        date: "May 20, 2026",
        readTime: "5 min read",
        excerpt: "Enterprise scale is about maintainability. Learn how we restructured modular Vue 3 architectures to support highly parallel team deployments and clean code patterns.",
        content: `### Scaling the Core: Vue 3 in Enterprise SaaS

When scaling B2B SaaS platforms to serve thousands of corporate customers, the typical pitfalls aren't network load—they are codebase maintainability and team friction. A monolithic frontend structure leads to massive merge conflicts, sluggish build times, and high cognitive load.

Here are the structural standards we established to scale our Vue 3 codebases:

#### 1. The 3-App Domain Routing Pattern

Rather than shipping distinct codebases or building separate web apps for Super Admins, Client Dashboards, and Public Subdomain portals, we unified them into a **3-in-1 codebase model**. Using \`vite-plugin-pages\` and standard layout wrappers, the app parses the subdomains dynamically at boot time:

\`\`\`typescript
// src/router/guards.ts
router.beforeEach((to, from, next) => {
    const subdomain = getActiveSubdomain(window.location.hostname);
    
    if (subdomain === 'admin' && !to.path.startsWith('/admin')) {
        return next('/admin');
    }
    
    if (isCustomerDashboard(subdomain) && to.path.startsWith('/admin')) {
        return next('/dashboard/unauthorized');
    }
    
    next();
});
\`\`\`

This unified code pattern reduced shared utility duplication and ensured that common components (like our custom forms engines and alert banners) were instantly accessible to all modules.

#### 2. Standardizing the Setup API

We strictly enforced the use of Vue 3 \`<script setup>\` composition paradigms. This eliminated the boilerplate of the Options API and enabled robust composable extraction. For example, rather than writing custom form handling inline on every template, we abstracted SurveyJS inputs into reusable composables:

\`\`\`typescript
// src/composables/useFormEngine.ts
import { ref } from 'vue';
import { Model } from 'survey-core';

export function useFormEngine(surveySchema: object) {
    const surveyModel = ref(new Model(surveySchema));
    const isSubmitting = ref(false);
    
    const handleComplete = async (sender: any) => {
        isSubmitting.value = true;
        try {
            await submitFormResults(sender.data);
        } finally {
            isSubmitting.value = false;
        }
    };
    
    return { surveyModel, isSubmitting, handleComplete };
}
\`\`\`

#### 3. Strict Pinia State Encapsulation

We prohibited component direct state modification outside of dedicated actions. All shared state mutations must flow through Pinia stores. This keeps debugging predictable and allows for centralized hooks (such as cookie session sync and user permission validation).`
    },
    {
        slug: "lessons-from-multi-tenant-architecture",
        title: "Lessons in Multi-Tenant Frontend Architecture",
        subtitle: "How to handle dynamic dynamic branding, runtime custom SCSS themes, and role-based CASL permissions.",
        date: "May 12, 2026",
        readTime: "6 min read",
        excerpt: "Building client-specific experiences from a single codebase is a challenge. Discover our runtime dynamic theming and cookie-persisted CASL authorization patterns.",
        content: `### Engineering Multi-Tenancy on the Frontend

In B2B SaaS applications, multi-tenancy means that a single, active production build of your frontend must render a unique look-and-feel, distinct capabilities, and customized validations depending on the logged-in B2B customer (the tenant).

We solved this at scale by separating layout definitions from custom style parameters and user authorization models.

#### 1. Runtime Theming via CSS Custom Properties

Instead of compiling separate CSS stylesheets for each tenant, we leverage **dynamic CSS custom properties**. At boot time, the tenant configuration is fetched from a metadata endpoint, and custom color variables are injected directly into the document root:

\`\`\`javascript
// src/plugins/theme.ts
export function injectTenantTheme(themeConfig) {
    const root = document.documentElement;
    
    root.style.setProperty('--v-primary-base', themeConfig.primaryColor || '#00d4aa');
    root.style.setProperty('--v-secondary-base', themeConfig.secondaryColor || '#161616');
    root.style.setProperty('--v-theme-radius', \`\${themeConfig.borderRadius || 8}px\`);
    
    // Dynamically update favicon based on B2B metadata
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = themeConfig.faviconUrl || '/default-favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
}
\`\`\`

This runtime transformation enables B2B clients to customize button shapes, colors, and logos instantly without requiring any developer intervention or project redeployment.

#### 2. CASL-Powered Client-Side Guard Rails

Authorization in a multi-tenant platform is highly variable. Some clients enable event management modules, while others restrict them to basic registration.

We integrated **CASL** to maintain strict client-side role guard rails. User abilities are parsed from cookies and loaded into global stores:

\`\`\`typescript
// src/plugins/casl.ts
import { defineAbility } from '@casl/ability';

export const updateAbilities = (userPermissions) => {
    return defineAbility((can) => {
        userPermissions.forEach(permission => {
            can(permission.action, permission.subject);
        });
    });
};
\`\`\`

In the templates, checking permissions is extremely simple:

\`\`\`html
<v-btn v-if="$can('create', 'InnovationProgram')" @click="createNewProgram">
    Launch Program
</v-btn>
\`\`\`

Combined with HTTP-only session cookies on the backend, this configuration ensures robust safety and clean, modules-level layout configuration.`
    },
    {
        slug: "realtime-tracking-optimization",
        title: "Real-Time WebSocket Optimization for Fleet Systems",
        subtitle: "Solving coordinate update bottlenecks, marker clustering, and UI viewport optimizations.",
        date: "May 05, 2026",
        readTime: "4 min read",
        excerpt: "Rendering hundreds of moving vehicles in real-time can crash a browser. Here is how we optimized Leaflet rendering using viewport culling and coordinate debouncing.",
        content: `### Real-Time Fleet Tracking at Scale

In fleet management platforms (like Routz), tracking hundreds of active vehicles in real-time requires continuous data syncing. When raw coordinate updates stream in via WebSockets at sub-second intervals, the naive approach of re-rendering map markers instantly will bring the browser's main thread to a complete crawl.

To achieve smooth 60fps movement, we implemented three coordinate-culling optimization techniques:

#### 1. Viewport Culling (Marker Pruning)

Instead of updating all vehicle markers globally, we check if the vehicle falls within the user's active map bounding box before dispatching DOM updates:

\`\`\`typescript
// src/utils/map.ts
export function updateVisibleMarkers(map, vehiclesData) {
    const bounds = map.getBounds();
    
    vehiclesData.forEach(vehicle => {
        const position = [vehicle.lat, vehicle.lng];
        
        if (bounds.contains(position)) {
            // Render or update marker coordinates
            updateVehicleMarker(vehicle.id, position);
        } else {
            // Prune off-screen marker from the DOM to reduce nodes
            removeVehicleMarker(vehicle.id);
        }
    });
}
\`\`\`

#### 2. Haversine Distance Thresholding

WebSockets often broadcast coordinate updates even when a vehicle is idling at a red light or stuck in heavy traffic. To avoid redundant updates, we calculate the Haversine distance from the previous coordinate and ignore changes below a **5-meter threshold**:

\`\`\`typescript
// src/utils/haversine.ts
export function getDistanceMeters(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth radius in meters
    const phi1 = lat1 * Math.PI / 180;
    const phi2 = lat2 * Math.PI / 180;
    const deltaPhi = (lat2 - lat1) * Math.PI / 180;
    const deltaLambda = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
              Math.cos(phi1) * Math.cos(phi2) *
              Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c; // returns distance in meters
}
\`\`\`

#### 3. Coordinate Debouncing (Interpolation)

Instead of snapping the marker immediately to the new coordinate, we smooth the transitions using linear interpolation (lerp). This reduces visual jitter and creates a smooth moving effect even when WebSocket packets arrive asynchronously.

Implementing these constraints reduced overall main-thread scripting overhead by **~70%**, enabling a highly performant real-time visualization dashboard.`
    }
];

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find((a) => a.slug === slug);
}

export function getRecentArticles(count = 3): Article[] {
    return articles.slice(0, count);
}
