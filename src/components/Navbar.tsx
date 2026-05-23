"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Articles", path: "/articles" },
    ];

    const isPathActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-900/50 py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Brand */}
                <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 group font-mono text-sm font-bold tracking-tight text-white"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-glow group-hover:scale-125 transition-transform duration-300"></span>
                    <span>SAYED.DEV</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`font-mono text-xs tracking-tight transition-colors duration-200 hover:text-accent relative py-1 ${
                                isPathActive(item.path)
                                    ? "text-accent font-medium"
                                    : "text-neutral-400"
                            }`}
                        >
                            {item.name}
                            {isPathActive(item.path) && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full animate-fade-in"></span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="/resume.pdf"
                        download="Sayed_Esmail_CV.pdf"
                        className="inline-flex items-center gap-2 font-mono text-[11px] tracking-tight font-medium text-[#0a0a0a] bg-accent hover:bg-accent-hover px-4 py-2 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 select-none shadow-[0_0_15px_rgba(0,212,170,0.15)] hover:shadow-[0_0_20px_rgba(0,212,170,0.3)]"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download CV
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                    className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                >
                    {mobileMenuOpen ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 border-b border-neutral-900 bg-[#0a0a0a]/95 backdrop-blur-lg animate-fade-in shadow-xl">
                    <div className="px-6 py-6 flex flex-col gap-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`font-mono text-sm tracking-tight py-2 border-b border-neutral-900/50 ${
                                    isPathActive(item.path) ? "text-accent" : "text-neutral-400"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            download="Sayed_Esmail_CV.pdf"
                            className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-tight font-medium text-[#0a0a0a] bg-accent hover:bg-accent-hover px-4 py-3 rounded-md transition-all duration-200 select-none w-full"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
