import { ExternalLink, Folder, Github } from "lucide-react";

import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.liveUrl || project.githubUrl;
  const hasLive = !!project.liveUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-border/40 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Top row: folder icon + link icons */}
      <div className="mb-5 flex items-center justify-between">
        <Folder className="h-9 w-9 text-primary" />
        <div className="flex items-center gap-3">
          {hasLive && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code`}
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
        {project.name}
      </h3>

      {/* Description */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Tech labels */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-primary/70">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </a>
  );
}
