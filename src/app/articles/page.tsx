import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
    title: "Technical Writing & Core Guidelines",
    description: "Read technical write-ups and architectural guidelines regarding real-time systems, multi-tenant B2B SaaS structure, and Vue 3 frontend performance optimization.",
};

export default function ArticlesPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
            {/* Header */}
            <div className="max-w-3xl">
                <FadeIn delay={100}>
                    <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-3 block">
                        Technical Writing
                    </span>
                </FadeIn>
                <FadeIn delay={200}>
                    <SectionHeading
                        title="Engineering Guides &amp; Lessons"
                        subtitle="A small catalog of technical guides authored to capture system architecture decisions, performance optimization bottlenecks, and frontend standards established on production apps."
                    />
                </FadeIn>
            </div>

            {/* Articles List */}
            <div className="flex flex-col gap-6 max-w-4xl mt-6">
                {articles.map((article, index) => (
                    <FadeIn key={article.slug} delay={100 * (index + 1)}>
                        <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/20 hover:border-accent/20 transition-all duration-300 relative group flex flex-col justify-between md:flex-row md:items-center gap-4">
                            <div className="flex-grow max-w-2xl">
                                <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-500 mb-2">
                                    <span>{article.date}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
                                    <span>{article.readTime}</span>
                                </div>
                                <h2 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-accent transition-colors duration-300">
                                    <Link href={`/articles/${article.slug}`}>
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {article.title}
                                    </Link>
                                </h2>
                                <p className="text-neutral-400 text-xs sm:text-sm font-mono leading-relaxed">
                                    {article.subtitle}
                                </p>
                            </div>
                            <div className="text-xs font-mono text-accent shrink-0 flex items-center gap-1.5 self-start md:self-center">
                                Read Article
                                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
