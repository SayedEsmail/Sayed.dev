import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import FadeIn from "@/components/FadeIn";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${article.title} | Engineering Guide`,
        description: article.subtitle,
        openGraph: {
            title: `${article.title} | Engineering Guide`,
            description: article.subtitle,
            type: "article",
            publishedTime: new Date(article.date).toISOString(),
            authors: ["Sayed Esmail"],
        },
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-10">
            {/* Back Navigation */}
            <FadeIn delay={100}>
                <Link
                    href="/articles"
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
                    Back to Articles
                </Link>
            </FadeIn>

            {/* Article Header */}
            <header className="border-b border-neutral-900 pb-8 flex flex-col gap-4">
                <FadeIn delay={200}>
                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                        <span>{article.date}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
                        <span>{article.readTime}</span>
                    </div>
                </FadeIn>
                <FadeIn delay={300}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight font-mono">
                        {article.title}
                    </h1>
                </FadeIn>
                <FadeIn delay={400}>
                    <p className="text-sm sm:text-base font-mono text-accent leading-relaxed">
                        {article.subtitle}
                    </p>
                </FadeIn>
            </header>

            {/* Article Prose Body */}
            <article className="prose prose-invert max-w-none text-neutral-300 font-mono text-sm sm:text-[15px] md:text-base leading-relaxed flex flex-col gap-6">
                <FadeIn delay={500}>
                    <div 
                        className="space-y-6 whitespace-pre-wrap select-text selection:bg-accent/20 selection:text-accent"
                        dangerouslySetInnerHTML={{
                            __html: formatMarkdownContent(article.content)
                        }}
                    />
                </FadeIn>
            </article>

            {/* Bottom Connect CTA */}
            <FadeIn>
                <section aria-label="Article Call to Action" className="border-t border-neutral-900 pt-12 mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                        <h4 className="text-base font-bold text-white font-mono mb-1">
                            Written by Sayed Esmail
                        </h4>
                        <p className="text-neutral-500 text-xs font-mono">
                            Senior Frontend Engineer specializing in Vue &amp; React SaaS architectures.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="mailto:sayed.5atab@gmail.com"
                            className="font-mono text-xs font-semibold text-center text-accent border border-accent/20 hover:border-accent bg-accent/5 px-4 py-2.5 rounded-md transition-all duration-300"
                        >
                            sayed.5atab@gmail.com
                        </a>
                        <a
                            href="https://linkedin.com/in/SayedEsmail"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center font-mono text-xs font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                            LinkedIn &rarr;
                        </a>
                    </div>
                </section>
            </FadeIn>
        </div>
    );
}

// Lightweight manual markdown formatter to support simple markdown elements safely
function formatMarkdownContent(markdown: string): string {
    let html = markdown;

    // Headings
    html = html.replace(/^### (.*?)$/gm, '<h3 class="text-xl font-bold text-white font-mono mt-6 mb-3 flex items-center gap-2"><span class="w-1 h-4 bg-accent rounded"></span>$1</h3>');
    html = html.replace(/^#### (.*?)$/gm, '<h4 class="text-lg font-semibold text-white font-mono mt-4 mb-2">$1</h4>');

    // Code Blocks (```)
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)\n```/g;
    html = html.replace(codeBlockRegex, (_, lang, code) => {
        const escapedCode = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        return `<pre class="p-5 rounded-xl border border-neutral-900 bg-neutral-950/70 text-xs sm:text-sm font-mono text-neutral-200 leading-relaxed overflow-x-auto my-5 select-text leading-5">${escapedCode}</pre>`;
    });

    // Inline Code (`)
    html = html.replace(/`([^`]+)`/g, '<code class="text-xs font-mono text-accent bg-accent/5 border border-accent/15 px-1.5 py-0.5 rounded">$1</code>');

    // Bold text (**)
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-white">$1</strong>');

    return html;
}
