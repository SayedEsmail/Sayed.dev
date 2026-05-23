interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
    return (
        <div className={`mb-10 ${className}`}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent rounded-full inline-block"></span>
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted text-sm max-w-2xl font-mono tracking-tight leading-relaxed pl-4.5 border-l border-neutral-800">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
