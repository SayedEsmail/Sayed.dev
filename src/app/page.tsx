import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ContactLinks from "@/components/ContactLinks";
import FadeIn from "@/components/FadeIn";

export default function Home() {
    const featuredProjects = getFeaturedProjects();

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-24 md:gap-32">
            {/* Hero Section */}
            <section aria-label="Introduction" className="min-h-[60vh] flex flex-col justify-center max-w-3xl">
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
                    <p className="text-lg sm:text-xl font-mono tracking-tight text-neutral-400 leading-relaxed mb-8">
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
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Sayed_Esmail_CV.pdf"
                            className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-tight font-medium text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-950/20 px-6 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Resume (PDF)
                        </a>
                    </div>
                </FadeIn>
            </section>

            {/* Featured Projects Section */}
            <section id="featured-projects" aria-labelledby="featured-projects-title">
                <FadeIn>
                    <SectionHeading
                        title="Featured Case Studies"
                        subtitle="Detailed write-ups detailing the problem statements, database schemas, frontend architecture choices, and custom algorithms built to solve complex production bottlenecks."
                    />
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
                    {featuredProjects.map((project, index) => (
                        <FadeIn key={project.slug} delay={150 * (index + 1)}>
                            <ProjectCard project={project} />
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Contact Callout Section */}
            <section aria-labelledby="contact-title" className="border-t border-neutral-900 pt-16 pb-8">
                <FadeIn className="grid md:grid-cols-3 gap-10 items-center">
                    <div className="md:col-span-2">
                        <h2 id="contact-title" className="text-2xl font-bold tracking-tight text-white mb-3">
                            Let&apos;s build something exceptional
                        </h2>
                        <p className="text-neutral-400 text-sm font-mono leading-relaxed max-w-xl">
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
