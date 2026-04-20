import type { Project } from "@/types/project";

// Projects render in the order listed. First 4 are visible by default.
// Any beyond 4 are revealed with a "Show more" button.

export const projects: Project[] = [
  {
    name: "gimmit",
    description:
      "VS Code extension that generates clean, conventional commits from your changed files — with optional AI-powered descriptions from actual diffs.",
    githubUrl: "https://github.com/Austin-FV/gimmit",
    liveUrl:
      "https://marketplace.visualstudio.com/items?itemName=austinfv.gimmit",
    technologies: ["TypeScript", "VS Code API", "Anthropic", "OpenAI"],
  },
  {
    name: "austinfv.dev",
    description:
      "Personal portfolio site built from scratch — responsive single-page app with a dark/light theme, tabbed experience section, and project showcase.",
    githubUrl: "https://github.com/Austin-FV/austinfv-v0",
    liveUrl: "https://austinfv.dev",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    name: "touchline.ai",
    description:
      "SaaS platform for soccer coaches to manage players, training sessions, injuries, and team analytics — all in one place.",
    githubUrl: "https://github.com/Austin-FV/touchline",
    liveUrl: "",
    technologies: ["React", "Express", "PostgreSQL", "Supabase"],
  },
  {
    name: "AWS S3 Management Shell",
    description:
      "Python CLI that simplifies AWS S3 operations — upload, sync, copy, and manage cloud files from the terminal.",
    githubUrl: "https://github.com/Austin-FV/aws-s3-shell",
    technologies: ["Python", "Boto3", "AWS S3"],
  },
  {
    name: "UniSearch",
    description:
      "Search and compare 300+ university courses across multiple institutions with automated data scraping and fast querying.",
    githubUrl: "https://github.com/Austin-FV/unisearch",
    technologies: ["React", "Flask", "Python", "Playwright"],
  },
  {
    name: "GPX Parser Website",
    description:
      "Web app that parses GPX files with a native C-based engine, visualizing and storing hundreds of GPS routes.",
    githubUrl: "https://github.com/Austin-FV/gpx-parser",
    technologies: ["C", "Node.js", "Express", "MySQL"],
  },
];
