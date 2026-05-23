import ContactLinks from "./ContactLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-900 bg-background/50 backdrop-blur-md py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <p className="text-sm text-neutral-500 font-mono tracking-tight">
                        &copy; {currentYear} Sayed Esmail. All rights reserved.
                    </p>
                    <p className="text-xs text-neutral-600 font-mono tracking-tight mt-1">
                        Built with Next.js & Tailwind CSS. Proof of architecture & engineering.
                    </p>
                </div>
                <ContactLinks iconClassName="w-9 h-9" />
            </div>
        </footer>
    );
}
