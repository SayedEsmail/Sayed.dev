import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactLinks from "@/components/ContactLinks";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
    title: "About & Engineering Methodology",
    description: "Learn about Sayed Esmail's engineering methodology, B2B SaaS product mindset, frontend architecture principles, and senior leadership practices.",
};

export default function AboutPage() {
    const methodologies = [
        {
            title: "Rigorous Code Standards",
            description: "I believe code is read 10x more than it is written. I enforce strict linting rules, structured monorepo directories, cookie-based session scopes, and clean type-safety to prevent code rot and reduce onboarding drag."
        },
        {
            title: "Architecture-First Design",
            description: "I separate core platform rules from custom styles and third-party dependencies. Utilizing dynamic domain-matching routing and layout systems, I ensure multi-tenant applications remain light and easily deployable."
        },
        {
            title: "Product & Business Mindset",
            description: "Startups don't just hire for raw code output — they hire to solve business problems. I focus on optimizing user workflows, accelerating onboarding funnels, and reducing server-load/queries to improve customer conversion and lower operational overhead."
        },
        {
            title: "Engineering Leadership",
            description: "A senior developer is a force multiplier. I establish code conventions, author clear specifications docs, design boilerplate repositories, and mentor engineers to level up team velocity."
        }
    ];

    const timeline = [
        {
            role: "Senior Frontend Developer / Vue.js Engineer",
            company: "Routz Fleet System",
            period: "2024 - Present",
            achievements: [
                "Led frontend engineering of a multi-tenant enterprise fleet management system with a 3-App architecture (Admin / Dashboard / Portal).",
                "Optimized high-frequency WebSocket coordinates mapping pipelines, reducing dispatcher viewport culling scripting overhead by ~70%.",
                "Implemented localized geocoding and nesting Coordinate inputs, accelerating client dispatcher onboarding speeds by ~50%.",
                "Standardized Pinia stores and cookie session managers, achieving clean separation of concerns and O(N) cart calculations."
            ]
        },
        {
            role: "Frontend Software Engineer (Vue.js)",
            company: "Untap SaaS Innovation Platform",
            period: "2022 - 2024",
            achievements: [
                "Built and scaled a highly modular 3-in-1 SPA codebase serving system admins, corporate organizations, and public portals.",
                "Integrated deep custom DOM overrides on GrapesJS visual page editor, reducing customer onboarding layout support requests by ~60%.",
                "Refactored collective invoice calculations in the subdomain portal cart from O(N×M) to O(N), improving cart speeds for large customer datasets.",
                "Authored rigorous engineering documentation guidelines and standardized Vue 3 setup composition APIs across teams."
            ]
        },
        {
            role: "Full-Stack Developer",
            company: "Zads Education Marketplace",
            period: "2021 - 2022",
            achievements: [
                "Architected a Nuxt 3 / Express / Prisma monorepo with Governorates-Cities-Areas nested seeding models for geographic search.",
                "Implemented a geo-proximity Haversine ranking algorithm (same-area -> city -> governorate), dropping platform bounce rates by ~20%.",
                "Engineered a multi-modal dynamic pricing matrix (online, offline, group, teacher home, parent home) with full Prisma schema safety.",
                "Initiated and progressively migrated the platform from Vue/Nuxt monorepo into a unified Next.js 16 + Zustand + React 19 codebase."
            ]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-20 md:gap-28">
            {/* Page Header */}
            <section aria-labelledby="about-heading" className="max-w-3xl">
                <FadeIn delay={100}>
                    <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-3 block">
                        The Human Side
                    </span>
                </FadeIn>
                <FadeIn delay={200}>
                    <SectionHeading
                        title="About Sayed Esmail"
                        subtitle="A senior software engineer focused on structural alignment, computational efficiency, and robust product outcomes."
                    />
                </FadeIn>
                <FadeIn delay={300}>
                    <p className="text-base sm:text-lg font-mono text-neutral-300 leading-relaxed mb-6 pl-4 border-l border-neutral-900 mt-6">
                        I specialize in creating highly optimized, B2B multi-tenant SaaS structures and real-time systems. I view frontend development not as static page building, but as engineering the interactive runtime layer that directly delivers business results.
                    </p>
                </FadeIn>
            </section>

            {/* Experience / Timeline */}
            <section aria-labelledby="experience-heading">
                <FadeIn>
                    <h2 id="experience-heading" className="text-xl font-bold tracking-tight text-white mb-8 flex items-center gap-2 font-mono">
                        <span className="w-1.5 h-5 bg-accent rounded-full"></span>
                        Professional Experience
                    </h2>
                </FadeIn>

                <div className="flex flex-col gap-10 mt-8 border-l border-neutral-900 pl-4 md:pl-8 ml-2">
                    {timeline.map((job, index) => (
                        <FadeIn key={job.company} delay={100 * (index + 1)} className="relative">
                            {/* Dot indicator */}
                            <span className="absolute -left-[21px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-accent border border-background shadow-[0_0_10px_rgba(0,212,170,0.4)]"></span>
                            
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-white font-mono tracking-tight leading-none mb-1">
                                        {job.role}
                                    </h3>
                                    <span className="text-sm text-neutral-400 font-mono">
                                        {job.company}
                                    </span>
                                </div>
                                <span className="text-xs font-mono text-accent font-semibold px-2.5 py-1 rounded bg-accent/5 border border-accent/15 self-start md:self-center">
                                    {job.period}
                                </span>
                            </div>

                            <ul className="flex flex-col gap-3 pl-4 list-disc marker:text-accent font-mono text-neutral-400 text-sm leading-relaxed max-w-4xl">
                                {job.achievements.map((ach, idx) => (
                                    <li key={idx}>{ach}</li>
                                ))}
                            </ul>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Engineering Methodology */}
            <section aria-labelledby="methodology-heading">
                <FadeIn>
                    <h2 id="methodology-heading" className="text-xl font-bold tracking-tight text-white mb-8 flex items-center gap-2 font-mono">
                        <span className="w-1.5 h-5 bg-accent rounded-full"></span>
                        Engineering Methodology &amp; Way of Work
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-6">
                    {methodologies.map((method, index) => (
                        <FadeIn key={method.title} delay={100 * (index + 1)}>
                            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/20 flex flex-col gap-3 h-full hover:border-accent/15 transition-colors duration-300">
                                <h3 className="text-base font-bold text-white font-mono tracking-tight flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    {method.title}
                                </h3>
                                <p className="text-neutral-400 text-xs sm:text-sm font-mono leading-relaxed pl-3.5">
                                    {method.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Resume Callout & Contact */}
            <section aria-labelledby="resume-cta-heading" className="border-t border-neutral-900 pt-16 pb-8">
                <FadeIn className="grid md:grid-cols-3 gap-10 items-center">
                    <div className="md:col-span-2">
                        <h2 id="resume-cta-heading" className="text-xl font-bold tracking-tight text-white mb-3 font-mono">
                            Need a download copy of my CV?
                        </h2>
                        <p className="text-neutral-400 text-sm font-mono leading-relaxed max-w-xl">
                            Download the comprehensive PDF copy of my technical experience, leadership benchmarks, and project outcomes.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col items-stretch md:items-end gap-4">
                        <a
                            href="/resume.pdf"
                            download="Sayed_Esmail_CV.pdf"
                            className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-tight font-medium text-[#0a0a0a] bg-accent hover:bg-accent-hover px-6 py-4 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,212,170,0.15)] select-none text-center"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download PDF CV
                        </a>
                        <ContactLinks className="justify-center md:justify-end" iconClassName="w-11 h-11" />
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
