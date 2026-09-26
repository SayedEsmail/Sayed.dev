import type { Metadata } from "next";
import { work } from "@/data/work";
import WorkCard from "@/components/WorkCard";
import DownloadLinks from "@/components/DownloadLinks";

export const metadata: Metadata = {
    title: "Company & Freelance Projects",
    description: "Explore Sayed Esmail’s company and freelance work: Routz, Untap, AutoTager, Botme, Yanfaa, Wellpal, FundSeer, Kadouscope, Movex, and his own product Zads.",
};

const sections = [
    { id: "company", label: "01 / Company work", title: "Products built with teams.", description: "Frontend engineering, product delivery, and technical leadership across SaaS, logistics, commerce, and automation." },
    { id: "freelance", label: "02 / Freelance projects", title: "Focused work. Lasting improvements.", description: "UI redesigns, storefronts, dashboards, and API integrations delivered for independent clients." },
    { id: "personal", label: "03 / Independent product", title: "From idea to working product.", description: "Zads is my own product, bringing together frontend engineering, backend development, and product decisions." },
] as const;

export default function ProjectsPage() {
    return (
        <div className="work-page max-w-6xl mx-auto px-6 py-12 md:py-20">
            <header className="work-intro">
                <p className="eyebrow">The work behind the experience</p>
                <h1>Company teams.<br /><span>Independent projects.</span></h1>
                <p>A selection of what I’ve built, the problems I worked on, and my contribution to each product.</p>
                <DownloadLinks />
            </header>
            <nav className="work-index" aria-label="Project categories">
                {sections.map(section => <a key={section.id} href={`#${section.id}`}><span>{section.id === "company" ? "Company work" : section.id === "freelance" ? "Freelance projects" : "My product"}</span><span className="work-count">{work.filter(item => item.category === section.id).length.toString().padStart(2, "0")}</span></a>)}
            </nav>
            {sections.map(section => <section key={section.id} id={section.id} className="work-section" aria-labelledby={`${section.id}-heading`}>
                <div className="work-section-heading"><p className="eyebrow">{section.label}</p><h2 id={`${section.id}-heading`}>{section.title}</h2><p>{section.description}</p></div>
                <div className="work-grid">{work.filter(item => item.category === section.id).map(item => <WorkCard key={item.slug} item={item} />)}</div>
            </section>)}
            <aside className="work-contact"><h2>Have a product in mind?</h2><p>Let’s talk about the interface, the users, and what needs to work better.</p><a href="mailto:sayed.5atab@gmail.com" className="text-link">sayed.5atab@gmail.com ↗</a></aside>
        </div>
    );
}
