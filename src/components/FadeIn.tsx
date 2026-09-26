interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

/** CSS-only entrance animation keeps content readable without JavaScript. */
export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
    return <div className={`motion-safe:animate-fade-in-up ${className}`} style={{ animationDelay: `${Math.min(delay, 300)}ms` }}>{children}</div>;
}
