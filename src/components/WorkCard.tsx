import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/data/work";

export default function WorkCard({ item }: { item: WorkItem }) {
    return (
        <article id={item.slug} className="work-card">
            {item.image ? (
                <figure className="work-figure">
                    <div className="work-image"><Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover object-top" /></div>
                    {item.imageCaption && <figcaption>{item.imageCaption}</figcaption>}
                </figure>
            ) : (
                <div className="work-wordmark" aria-hidden="true"><span>{item.title}</span><span>{item.tags.slice(0, 2).join(" / ")}</span></div>
            )}
            <div className="work-card-body">
                <div className="work-meta"><span>{item.category === "personal" ? "Independent product" : item.category === "company" ? "Company work" : "Freelance"}</span>{item.period && <span>{item.period}</span>}</div>
                <h3>{item.title}</h3>
                <p className="work-role">{item.role}{item.category === "company" && item.employer !== item.title ? ` · ${item.employer}` : ""}</p>
                <p className="work-description">{item.description}</p>
                <h4>My contribution</h4>
                <ul className="contribution-list">{item.contributions.map(text => <li key={text}>{text}</li>)}</ul>
                <div className="work-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                {(item.caseStudy || item.liveUrl) && <div className="work-actions">
                    {item.caseStudy && <Link className="text-link" href={item.caseStudy}>Read case study <span aria-hidden="true">→</span></Link>}
                    {item.liveUrl && <a className="text-link" href={item.liveUrl} target="_blank" rel="noopener noreferrer">Visit website <span aria-hidden="true">↗</span></a>}
                </div>}
            </div>
        </article>
    );
}
