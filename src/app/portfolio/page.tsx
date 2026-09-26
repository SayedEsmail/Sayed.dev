import type { Metadata } from "next";
import Image from "next/image";
import { work, type WorkItem } from "@/data/work";
import DownloadLinks from "@/components/DownloadLinks";
import "./portfolio.css";

export const metadata: Metadata = { title: "Downloadable Portfolio", description: "A presentation of Sayed Esmail’s company work and freelance projects, available as a downloadable PDF." };

function Entry({ item, showImage = true }: { item: WorkItem; showImage?: boolean }) {
    return <article className="portfolio-entry">
        <div className="portfolio-entry-meta"><span>{item.role}</span><span>{item.period}</span></div>
        <h2>{item.title}</h2>
        {item.category === "company" && <p className="portfolio-employer">{item.employer}</p>}
        <p>{item.description}</p>
        {showImage && item.image && <figure><Image unoptimized src={item.image.src} alt={item.image.alt} width={1440} height={820} className="portfolio-image" />{item.imageCaption && <figcaption>{item.imageCaption}</figcaption>}</figure>}
        <h3>My contribution</h3><ul>{item.contributions.map(text => <li key={text}>{text}</li>)}</ul>
        <div className="portfolio-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="portfolio-entry-links">{item.liveUrl && <a href={item.liveUrl}>{item.liveUrl.replace("https://", "")}</a>}{item.caseStudy && <a href={`https://sayed5atab-gilt.vercel.app${item.caseStudy}`}>Read the full case study ↗</a>}</div>
    </article>;
}

export default function PortfolioPage() {
    const featured = work.filter(item => item.category === "company" && item.caseStudy);
    const otherCompanies = work.filter(item => item.category === "company" && !item.caseStudy);
    const freelance = work.filter(item => item.category === "freelance");
    const freelanceGroups = [freelance.slice(0, 1), freelance.slice(1, 2), freelance.slice(2, 3), freelance.slice(3, 5), freelance.slice(5)];
    return <div className="portfolio-preview">
        <div className="portfolio-toolbar"><p>Portfolio / PDF preview</p><DownloadLinks /></div>
        <div className="portfolio-document">
            <section className="portfolio-sheet portfolio-cover">
                <div className="portfolio-page-top"><span>SAYED ESMAIL</span><span>SELECTED WORK / 2026</span></div>
                <p className="portfolio-kicker">Senior Frontend Engineer</p><h1>Interfaces that<br />make complex<br /><em>products work.</em></h1>
                <p className="portfolio-summary">10+ years building frontend experiences across SaaS, logistics, education, commerce, and automation. Vue.js, React, TypeScript, and a focus on product delivery.</p>
                <div className="portfolio-cover-grid"><div><strong>Company work</strong><p>Schoolz / Routz<br />Untap · AutoTager · Botme<br />MoreCreative · Enjaz · MTC · Webdivs</p></div><div><strong>Freelance projects</strong><p>Zads · Yanfaa · Wellpal<br />FundSeer · Kadouscope · Movex</p></div></div>
                <div className="portfolio-cover-contact"><strong>Sayed Esmail · Cairo, Egypt</strong><a href="mailto:sayed.5atab@gmail.com">sayed.5atab@gmail.com</a><a href="https://linkedin.com/in/SayedEsmail">linkedin.com/in/SayedEsmail</a><a href="https://sayed5atab-gilt.vercel.app/">sayed5atab-gilt.vercel.app</a></div>
                <div className="portfolio-page-bottom"><span>Company experience · Freelance delivery · Product ownership</span><span>01</span></div>
            </section>
            {featured.map((item, index) => <section key={item.slug} className="portfolio-sheet"><div className="portfolio-page-top"><span>COMPANY WORK</span><span>SAYED ESMAIL</span></div><Entry item={item} /><div className="portfolio-page-bottom"><span>{item.title} / Selected work</span><span>{String(index + 2).padStart(2, "0")}</span></div></section>)}
            <section className="portfolio-sheet portfolio-compact"><div className="portfolio-page-top"><span>COMPANY EXPERIENCE</span><span>SAYED ESMAIL</span></div>{otherCompanies.map(item => <Entry key={item.slug} item={item} showImage={false} />)}<div className="portfolio-page-bottom"><span>Commerce, automation & agency work</span><span>04</span></div></section>
            {freelanceGroups.map((group, index) => <section className={index < 3 ? "portfolio-sheet" : "portfolio-sheet portfolio-compact"} key={index}><div className="portfolio-page-top"><span>FREELANCE PROJECTS</span><span>SAYED ESMAIL</span></div>{group.map(item => <Entry key={item.slug} item={item} />)}{index === 4 && <div className="portfolio-outro"><p className="portfolio-kicker">Let’s build what’s next.</p><h2>Thoughtful interfaces.<br />Reliable delivery.</h2><p>Available to discuss frontend engineering, product development, and technical leadership.</p><a href="mailto:sayed.5atab@gmail.com">sayed.5atab@gmail.com</a></div>}<div className="portfolio-page-bottom"><span>Independent products & client engagements</span><span>{String(index + 5).padStart(2, "0")}</span></div></section>)}
        </div>
    </div>;
}
