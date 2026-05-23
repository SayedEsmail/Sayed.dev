import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative rounded-xl border border-neutral-900 bg-neutral-950/40 overflow-hidden hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,170,0.05)] flex flex-col h-full">
            {/* Hover Accent Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Project Image Container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-neutral-950">
                <Image
                    src={project.heroImage}
                    alt={`${project.title} Screenshot`}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    priority={project.order === 1}
                />
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-colors duration-500" />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow relative z-10">
                {/* Role / Order indicator */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider font-semibold">
                        {project.role}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-600">
                        0{project.order}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    <Link href={`/projects/${project.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {project.title}
                    </Link>
                </h3>

                {/* Subtitle / Description */}
                <p className="text-neutral-400 text-xs font-mono leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-neutral-900/60">
                    {project.tags.slice(0, 4).map((tag) => (
                        <TechBadge key={tag} name={tag} />
                    ))}
                    {project.tags.length > 4 && (
                        <span className="text-[10px] text-neutral-500 font-mono self-center ml-1">
                            +{project.tags.length - 4} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
