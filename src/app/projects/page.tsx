import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
    title: "Engineering Case Studies",
    description: "Deep dive case studies for enterprise fleet tracking (Routz), multi-tenant SaaS innovation portal (Untap), and education marketplace monorepo (Zads).",
};

export default function ProjectsPage() {
    // Sort projects by order
    const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
            {/* Header */}
            <div className="max-w-3xl mb-12">
                <FadeIn delay={100}>
                    <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold mb-3 block">
                        Work Portfolio
                    </span>
                </FadeIn>
                <FadeIn delay={200}>
                    <SectionHeading
                        title="Engineering Case Studies"
                        subtitle="A curated selection of platforms I have built and scaled. These case studies focus on architectural decisions, performance benchmarks, and real-world system solutions."
                    />
                </FadeIn>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
                {sortedProjects.map((project, index) => (
                    <FadeIn key={project.slug} delay={100 * (index + 1)}>
                        <ProjectCard project={project} />
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
