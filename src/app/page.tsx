import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { getRecentArticles } from "@/data/articles";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ContactLinks from "@/components/ContactLinks";
import FadeIn from "@/components/FadeIn";

export default function Home() {
    const featuredProjects = getFeaturedProjects();
    const recentArticles = getRecentArticles();

    const focusCards = [
        {
            title: "SaaS Architecture",
            description: "Designing scalable, decoupled frontend frameworks for complex enterprise applications that maximize codebase maintainability, isolate features, and simplify parallel engineering workflows.",
            icon: (
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
            )
        },
        {
            title: "Real-Time Systems",
            description: "Building resilient WebSocket coordinate pipelines, sub-second map marker dynamic renderings, Haversine calculations culling, and smooth UI interpolation transitions for active vehicle routing.",
            icon: (
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.64 8.38a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 0015.59 14.37zm0 0L8.25 7.03" />
                </svg>
            )
        },
        {
            title: "Frontend Performance",
            description: "Refactoring high-complexity UI bottlenecks from O(N*M) down to O(N) calculations, caching complex DOM nodes via culling hooks, optimizing asset transfers, and targeting sub-second core vitals.",
            icon: (
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            )
        },
        {
            title: "Multi-Tenant Platforms",
            description: "Configuring run-time customized SCSS/CSS root variables for client dynamic white-labeling, cookie-persisted CASL authorization middleware, and dynamic subdomain routing matrices.",
            icon: (
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            )
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-28 md:gap-36">
            {/* Hero Section */}
            <section aria-label="Introduction" className="min-h-[55vh] flex flex-col justify-center max-w-3xl">
                <FadeIn delay={100}>
                    <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-3 block">
                        Available for Senior Roles
                    </span>
                </FadeIn>
                <FadeIn delay={200}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                        Sayed Esmail
                    </h1>
                </FadeIn>
                <FadeIn delay={300}>
                    <p className="text-base sm:text-lg md:text-xl font-mono tracking-tight text-neutral-300 leading-relaxed mb-8">
                        Senior Frontend Engineer specializing in Vue & React systems, B2B/B2C multi-tenant SaaS architectures, and performance engineering. Focused on solving complex engineering challenges, code organization, and product quality.
                    </p>
                </FadeIn>
                <FadeIn delay={400}>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-tight font-medium text-[#0a0a0a] bg-accent hover:bg-accent-hover px-6 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 select-none shadow-[0_0_20px_rgba(0,212,170,0.15)] hover:shadow-[0_0_25px_rgba(0,212,170,0.3)] text-center"
                        >
                            View Case Studies
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-tight font-medium text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-950/20 px-6 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
                        >
                            About &amp; Resume
                        </Link>
                    </div>
                </FadeIn>
            </section>

            {/* What I Focus On Section */}
            <section id="focus-areas" aria-labelledby="focus-title">
                <FadeIn>
                    <SectionHeading
                        title="What I Focus On"
                        subtitle="A visual summary of my positioning. I specialize in backend-adjacent frontend design, high-frequency rendering optimization, and solid SaaS architecture patterns."
                    />
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-10">
                    {focusCards.map((card, index) => (
                        <FadeIn key={card.title} delay={100 * (index + 1)}>
                            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/30 flex flex-col gap-4 hover:border-accent/30 transition-colors duration-300 h-full">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-lg border border-neutral-900 bg-neutral-950/50">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-mono tracking-tight">{card.title}</h3>
                                </div>
                                <p className="text-neutral-400 text-sm font-mono leading-relaxed pl-1">
                                    {card.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Featured Projects Section */}
            <section id="featured-projects" aria-labelledby="featured-projects-title">
                <FadeIn>
                    <SectionHeading
                        title="Featured Case Studies"
                        subtitle="Detailed write-ups detailing the problem statements, database schemas, frontend architecture choices, and custom algorithms built to solve complex production bottlenecks."
                    />
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
                    {featuredProjects.map((project, index) => (
                        <FadeIn key={project.slug} delay={100 * (index + 1)}>
                            <ProjectCard project={project} />
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Mini Technical Articles Section */}
            <section id="recent-articles" aria-labelledby="articles-title">
                <FadeIn>
                    <SectionHeading
                        title="Mini Technical Articles"
                        subtitle="Brief, high-value write-ups documenting real technical challenges solved, lessons learned, and architectural guidelines established on production platforms."
                    />
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-10">
                    {recentArticles.map((article, index) => (
                        <FadeIn key={article.slug} delay={100 * (index + 1)}>
                            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/20 flex flex-col justify-between h-full hover:border-accent/30 transition-colors duration-300 relative group">
                                <div>
                                    <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 mb-3">
                                        <span>{article.date}</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2 font-mono group-hover:text-accent transition-colors duration-300">
                                        <Link href={`/articles/${article.slug}`}>
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {article.title}
                                        </Link>
                                    </h3>
                                    <p className="text-neutral-400 text-xs font-mono leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>
                                <div className="text-[11px] font-mono text-accent mt-4 flex items-center gap-1">
                                    Read Article
                                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <FadeIn delay={400}>
                        <Link
                            href="/articles"
                            className="font-mono text-xs text-accent hover:text-accent-hover transition-colors flex items-center gap-1.5"
                        >
                            View All Articles
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Callout Section */}
            <section aria-labelledby="contact-title" className="border-t border-neutral-900 pt-16 pb-8">
                <FadeIn className="grid md:grid-cols-3 gap-10 items-center">
                    <div className="md:col-span-2">
                        <h2 id="contact-title" className="text-2xl font-bold tracking-tight text-white mb-3">
                            Let&apos;s build something exceptional
                        </h2>
                        <p className="text-neutral-300 text-sm sm:text-base font-mono leading-relaxed max-w-xl">
                            If you are looking for a Senior Engineer with rigorous architectural standards, a product-oriented mindset, and proven performance optimization skills, let&apos;s connect.
                        </p>
                    </div>
                    <div className="flex flex-col items-stretch md:items-end gap-4">
                        <a
                            href="mailto:sayed.5atab@gmail.com"
                            className="font-mono text-xs font-semibold text-center text-accent border border-accent/20 hover:border-accent bg-accent/5 px-6 py-4 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,170,0.1)]"
                        >
                            sayed.5atab@gmail.com
                        </a>
                        <ContactLinks className="justify-center md:justify-end" iconClassName="w-11 h-11" />
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
