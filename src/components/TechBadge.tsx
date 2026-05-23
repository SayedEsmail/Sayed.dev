interface TechBadgeProps {
    name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
    return (
        <span className="inline-block text-[11px] font-mono tracking-tight px-2.5 py-1 rounded-md border border-neutral-800 bg-neutral-900/40 text-neutral-300 transition-colors duration-200 hover:border-accent hover:text-accent select-none">
            {name}
        </span>
    );
}
