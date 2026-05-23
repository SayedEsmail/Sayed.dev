import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Case Study`,
        description: project.subtitle,
        openGraph: {
            title: `${project.title} | Case Study`,
            description: project.subtitle,
            type: "website",
            images: [{ url: project.heroImage }],
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 md:gap-16">
            {/* Navigation Back */}
            <FadeIn delay={100}>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-accent transition-colors duration-200 group"
                >
                    <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Case Studies
                </Link>
            </FadeIn>

            {/* Project Header */}
            <section aria-labelledby="project-title" className="max-w-4xl">
                <FadeIn delay={200}>
                    <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-3 block">
                        {project.role}
                    </span>
                </FadeIn>
                <FadeIn delay={300}>
                    <h1 id="project-title" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                        {project.title}
                    </h1>
                </FadeIn>
                <FadeIn delay={400}>
                    <p className="text-base sm:text-lg md:text-xl font-mono text-neutral-300 leading-relaxed mb-8">
                        {project.subtitle}
                    </p>
                </FadeIn>

                {/* External Action Links */}
                {(project.liveUrl || project.githubUrl) && (
                    <FadeIn delay={450}>
                        <div className="flex flex-wrap items-center gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-mono text-xs tracking-tight font-medium text-[#0a0a0a] bg-accent hover:bg-accent-hover px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Live Platform
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-mono text-xs tracking-tight font-medium text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-950/20 px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                    </svg>
                                    GitHub Code
                                </a>
                            )}
                        </div>
                    </FadeIn>
                )}
            </section>

            {/* Hero Banner Screenshot */}
            <FadeIn delay={500}>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-900 shadow-2xl bg-neutral-950/20">
                    <Image
                        src={project.heroImage}
                        alt={`${project.title} Hero View`}
                        fill
                        sizes="100vw"
                        className="object-cover object-top"
                        priority
                    />
                </div>
            </FadeIn>

            {/* Case Study Body */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                {/* Main Content Column */}
                <div className="lg:col-span-2 flex flex-col gap-16">
                    {/* The Problem */}
                    <FadeIn>
                        <section aria-labelledby="problem-heading">
                            <h2 id="problem-heading" className="text-xl font-bold tracking-tight text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-5 bg-accent rounded-full inline-block"></span>
                                The Problem Statement
                            </h2>
                            <div className="text-base sm:text-[17px] md:text-[18px] leading-loose text-neutral-200 font-mono space-y-6">
                                {project.problem.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </section>
                    </FadeIn>

                    {/* System Architecture */}
                    <FadeIn>
                        <section aria-labelledby="architecture-heading">
                            <h2 id="architecture-heading" className="text-xl font-bold tracking-tight text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-5 bg-accent rounded-full inline-block"></span>
                                System Architecture &amp; Strategy
                            </h2>
                            <div className="text-base sm:text-[17px] md:text-[18px] leading-loose text-neutral-200 font-mono space-y-6">
                                {project.architecture.split('\n\n').map((para, i) => (
                                    <p key={i} className="whitespace-pre-line">{para}</p>
                                ))}
                                
                                {/* ASCII Architecture Diagram */}
                                {project.architectureDiagram && (
                                    <div className="mt-8 p-6 bg-neutral-950/80 rounded-xl border border-neutral-900 overflow-x-auto select-none">
                                        <pre className="font-mono text-[11px] sm:text-xs leading-5 text-accent/80 antialiased font-medium">{project.architectureDiagram}</pre>
                                    </div>
                                )}
                            </div>
                        </section>
                    </FadeIn>

                    {/* Key Technical Decisions */}
                    <FadeIn>
                        <section aria-labelledby="decisions-heading">
                            <h2 id="decisions-heading" className="text-xl font-bold tracking-tight text-white mb-6 flex items-center gap-2 font-mono">
                                <span className="w-1.5 h-5 bg-accent rounded-full inline-block"></span>
                                Key Technical Decisions
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {project.keyDecisions.map((dec, i) => (
                                    <div
                                        key={i}
                                        className="p-5 rounded-xl border border-neutral-900 bg-neutral-950/30 flex flex-col gap-3 hover:border-accent/15 transition-colors duration-300"
                                    >
                                        <h3 className="text-sm sm:text-base font-bold text-white font-mono tracking-tight flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                            {dec.decision}
                                        </h3>
                                        <p className="text-neutral-400 text-xs sm:text-sm font-mono leading-relaxed pl-3">
                                            {dec.justification}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </FadeIn>

                    {/* Business & Product Outcomes */}
                    <FadeIn>
                        <section aria-labelledby="business-impact-heading">
                            <h2 id="business-impact-heading" className="text-xl font-bold tracking-tight text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-5 bg-accent rounded-full inline-block"></span>
                                Business &amp; Product Outcomes
                            </h2>
                            <div className="p-6 rounded-xl border border-neutral-900 bg-accent/5 flex flex-col gap-4">
                                <p className="text-[13px] sm:text-sm font-mono text-neutral-400">
                                    Startups and corporate units hire engineers to drive business value. Here is the direct positive product impact achieved through these specific technical implementations:
                                </p>
                                <ul className="flex flex-col gap-3 list-disc marker:text-accent font-mono text-neutral-200 text-[15px] sm:text-base leading-relaxed pl-5">
                                    {project.businessImpact.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Engineering Challenges & Solutions */}
                    <FadeIn>
                        <section aria-labelledby="challenges-heading">
                            <h2 id="challenges-heading" className="text-xl font-bold tracking-tight text-white mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-5 bg-accent rounded-full inline-block"></span>
                                Engineering Challenges &amp; Solutions
                            </h2>
                            <div className="flex flex-col gap-6">
                                {project.challenges.map((c, i) => (
                                    <div
                                        key={i}
                                        className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/30 flex flex-col gap-4 relative"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-[10px] font-bold mt-0.5">
                                                !
                                            </span>
                                            <h3 className="text-base sm:text-lg font-bold text-white font-mono tracking-tight leading-relaxed">
                                                {c.title}
                                            </h3>
                                        </div>
                                        <div className="pl-8 flex gap-3 text-sm sm:text-[15px] leading-relaxed text-neutral-300 font-mono border-l border-neutral-900 ml-2.5">
                                            <div>
                                                <span className="text-accent font-semibold block mb-1.5">Engineered Solution:</span>
                                                {c.solution}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </FadeIn>
                </div>

                {/* Sidebar Column */}
                <div className="flex flex-col gap-12">
                    {/* Tech Stack Visual Breakdown */}
                    <FadeIn>
                        <section aria-labelledby="stack-heading" className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/20">
                            <h2 id="stack-heading" className="text-xs font-bold tracking-tight text-white uppercase mb-4 flex items-center gap-2 font-mono">
                                Tech Stack Roles
                            </h2>
                            <ul className="flex flex-col gap-4 font-mono">
                                {project.stack.map((item, i) => (
                                    <li key={i} className="flex flex-col pb-4 border-b border-neutral-900 last:border-b-0 last:pb-0">
                                        <span className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                            {item.name}
                                        </span>
                                        <span className="text-[10px] text-neutral-400 leading-relaxed pl-3">
                                            {item.role}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </FadeIn>

                    {/* Impact & Performance Metrics */}
                    <FadeIn>
                        <section aria-labelledby="impact-heading" className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/20">
                            <h2 id="impact-heading" className="text-xs font-bold tracking-tight text-white uppercase mb-4 flex items-center gap-2 font-mono">
                                Technical Benchmarks
                            </h2>
                            <div className="flex flex-col gap-4">
                                {project.impact.map((metric, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-lg border border-neutral-900/60 bg-neutral-950/40 flex flex-col gap-1"
                                    >
                                        <span className="text-lg font-bold text-accent font-mono tracking-tight">
                                            {metric.value}
                                        </span>
                                        <span className="text-[10px] font-mono text-neutral-400">
                                            {metric.metric}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </div>

            {/* Screenshots Gallery Section */}
            {project.screenshots.length > 0 && (
                <section aria-labelledby="gallery-heading" className="border-t border-neutral-900 pt-16 mt-8">
                    <FadeIn>
                        <h2 id="gallery-heading" className="text-xl font-bold tracking-tight text-white mb-6 flex items-center gap-2 font-mono">
                            <span className="w-1.5 h-5 bg-accent rounded-full inline-block"></span>
                            Production Interface Walkthrough
                        </h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        {project.screenshots.map((screen, i) => (
                            <FadeIn key={i} delay={100 * (i + 1)} className="flex flex-col gap-3">
                                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-neutral-900 bg-neutral-950/20">
                                    <Image
                                        src={screen.src}
                                        alt={screen.alt}
                                        fill
                                        sizes="(max-w-768px) 100vw, 50vw"
                                        className="object-cover object-top hover:scale-102 transition-transform duration-500"
                                    />
                                </div>
                                <p className="text-xs font-mono leading-relaxed text-neutral-400 pl-2.5 border-l-2 border-accent">
                                    {screen.alt}
                                </p>
                            </FadeIn>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA Connect Section */}
            <FadeIn>
                <section aria-label="Call to Action" className="mt-12 p-8 md:p-10 rounded-2xl border border-neutral-900 bg-neutral-950/30 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-accent/25 transition-colors duration-300">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-white font-mono mb-2">
                            Interested in similar architecture challenges?
                        </h3>
                        <p className="text-neutral-400 text-xs sm:text-sm font-mono max-w-xl">
                            If your team is scaling systems and seeks senior engineer positioning with robust product-centric workflows, let&apos;s talk.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                        <a
                            href="mailto:sayed.5atab@gmail.com"
                            className="inline-flex items-center justify-center font-mono text-xs font-medium text-[#0a0a0a] bg-accent hover:bg-accent-hover px-5 py-3 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 select-none text-center"
                        >
                            Email Sayed
                        </a>
                        <a
                            href="https://linkedin.com/in/SayedEsmail"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center font-mono text-xs font-medium text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-950/20 px-5 py-3 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
                        >
                            View LinkedIn
                        </a>
                    </div>
                </section>
            </FadeIn>
        </div>
    );
}
