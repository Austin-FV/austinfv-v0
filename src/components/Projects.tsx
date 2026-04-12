import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

const VISIBLE_COUNT = 4;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const hasMore = projects.length > VISIBLE_COUNT;
  const visible = showAll ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
          Projects
        </h2>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {showAll ? "Show less" : "Show more"}
            {showAll ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}
