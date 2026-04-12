import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { technologies } from "@/data/technologies";

export function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
        About
      </h2>
      <div className="max-w-4xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          Software Engineering grad from the{" "}
          <a
            href={profile.education.schoolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            University of Guelph
          </a>
          , currently an Automation Engineer at{" "}
          <a
            href="https://www.express-scripts.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            Express Scripts Canada
          </a>
          . I'm drawn to full-stack development and enjoy owning a feature
          end-to-end, from database schema to polished UI.
        </p>
        <p>
          My goal is to keep growing as a well-rounded software engineer —
          building products that solve real problems, deepening my understanding
          of system design and architecture, and working alongside people I can
          learn from.
        </p>
        <p>
          <span className="font-medium text-foreground">
            When I'm not in front of a screen
          </span>
          , you'll probably find me at the gym (meal prep game is serious),
          watching movies or anime, discovering new music, new food or new activities.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-md border-border px-3 py-1.5 text-sm font-normal transition-transform hover:scale-110"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
