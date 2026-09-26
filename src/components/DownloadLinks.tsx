import Link from "next/link";

export default function DownloadLinks() {
    return (
        <div className="download-links">
            <a className="button-primary" href="/Sayed_Esmail_Portfolio.pdf" download>Download portfolio PDF <span aria-hidden="true">↓</span></a>
            <a className="button-secondary" href="/Sayed_Esmail_Resume.pdf" download>Download CV</a>
            <Link className="text-link" href="/portfolio">Preview portfolio <span aria-hidden="true">↗</span></Link>
        </div>
    );
}
