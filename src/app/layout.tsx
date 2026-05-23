import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: "%s | Sayed Esmail",
        default: "Sayed Esmail | Senior Frontend Engineer & Full-Stack Developer",
    },
    description: "Senior Frontend Engineer specializing in highly responsive, interactive Vue & React application architectures, multi-tenant B2B/B2C SaaS, and performance optimization.",
    keywords: ["Senior Frontend Engineer", "Vue 3 Developer", "Next.js Portfolio", "Vuetify 3", "React Developer", "Cairo", "Software Architecture"],
    authors: [{ name: "Sayed Esmail" }],
    metadataBase: new URL("https://sayedesmail.dev"), // Fallback base URL for metadata
    openGraph: {
        title: "Sayed Esmail | Senior Frontend Engineer",
        description: "Senior Frontend Engineer specializing in highly responsive, interactive Vue & React application architectures, multi-tenant B2B/B2C SaaS, and performance optimization.",
        type: "website",
        locale: "en_US",
        siteName: "Sayed Esmail Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sayed Esmail | Senior Frontend Engineer",
        description: "Senior Frontend Engineer specializing in highly responsive, interactive Vue & React application architectures.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
        >
            <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/15 selection:text-accent font-sans">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
