import type { Metadata } from "next";
import Link from "next/link";
import { work } from "@/data/work";
import DownloadLinks from "@/components/DownloadLinks";
import ContactLinks from "@/components/ContactLinks";

export const metadata: Metadata = { title: "About & Experience", description: "Sayed Esmail, Senior Frontend Engineer based in Cairo. More than ten years building Vue, React, SaaS, and commerce experiences." };

export default function AboutPage() {
    return <div className="work-page max-w-6xl mx-auto px-6 py-12 md:py-20">
        <header className="work-intro"><p className="eyebrow">Cairo, Egypt / Working since 2014</p><h1>Engineering interfaces.<br /><span>Understanding products.</span></h1><p>I’m Sayed Esmail, a Senior Frontend Engineer with 10+ years of experience. I build Vue and React applications, lead frontend teams, and turn complex product requirements into interfaces people can use.</p><DownloadLinks /></header>
        <section className="work-section" aria-labelledby="experience"><div className="work-section-heading"><p className="eyebrow">Career</p><h2 id="experience">Professional experience</h2><p>Company roles, from web and commerce development to SaaS architecture and team leadership.</p></div>
            <div className="experience-list">{work.filter(item => item.category === "company").map(item => <article key={item.slug}><p className="eyebrow">{item.period}</p><h3>{item.employer}</h3><p className="work-role">{item.role}</p><ul className="contribution-list">{item.contributions.map(text => <li key={text}>{text}</li>)}</ul><Link className="text-link" href={`/projects#${item.slug}`}>View work →</Link></article>)}</div>
        </section>
        <section className="work-section work-grid" aria-label="Independent work and background">
            <article className="about-panel"><p className="eyebrow">Alongside company work</p><h2>Independent projects</h2><p>I’m the founder and full-stack engineer behind Zads, a personal education product started in 2024. Explore Zads alongside Yanfaa, Wellpal, FundSeer, Kadouscope, and Movex in my freelance portfolio.</p><Link className="text-link" href="/projects#freelance">Explore freelance work →</Link></article>
            <article className="about-panel"><p className="eyebrow">Background</p><h2>Education & languages</h2><p>Bachelor of Arts, Philosophy<br />Damanhour University · 2009–2013</p><p>Arabic — Native<br />English — Full professional proficiency</p></article>
        </section>
        <section className="work-contact"><h2>Let’s work together.</h2><p>For frontend engineering, product interfaces, and team leadership.</p><a className="text-link" href="mailto:sayed.5atab@gmail.com">sayed.5atab@gmail.com ↗</a><ContactLinks className="mt-6" /></section>
    </div>;
}
