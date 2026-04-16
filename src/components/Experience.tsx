import { useState } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { experience } from "@/data/experience";

const KEYWORDS = [
  "Java",
  "Selenium",
  "JUnit",
  "Cucumber",
  "Maven",
  "Oracle SQL",
  "REST",
  "Jira",
  "Zephyr",
  "SharePoint",
  "Excel",
  "BDD",
];

function highlightKeywords(text: string): ReactNode {
  const pattern = new RegExp(`(${KEYWORDS.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    KEYWORDS.includes(part) ? (
      <span key={i} className="font-medium text-foreground">{part}</span>
    ) : (
      part
    )
  );
}

export function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="py-12 md:py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-primary">
        Experience
      </h2>

      <div className="flex flex-col gap-6 md:flex-row md:gap-0">
        {/* Company tabs — vertical on desktop, horizontal scroll on mobile */}
        <div className="flex overflow-x-auto border-b border-border/40 md:w-52 md:shrink-0 md:flex-col md:overflow-x-visible md:border-b-0 md:border-l md:border-border/40">
          {experience.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => setActive(i)}
              className={cn(
                "px-5 py-3 text-left text-sm font-medium transition-colors",
                "border-b-2 md:border-b-0 md:border-l-2",
                "-ml-[2px]",
                i === active
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-transparent text-muted-foreground hover:bg-primary/5 hover:text-foreground"
              )}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Details panel — grid overlap: all panels in same cell, tallest sets height */}
        <div className="grid md:pl-8" style={{ flexGrow: 1 }}>
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              className={cn(
                "[grid-row:1] [grid-column:1]",
                i === active
                  ? "visible"
                  : "pointer-events-none invisible"
              )}
              aria-hidden={i !== active}
            >
              <h3 className="text-base font-semibold">
                {exp.role}{" "}
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors hover:text-primary/70"
                  >
                    @ {exp.company}
                  </a>
                ) : (
                  <span className="text-primary">@ {exp.company}</span>
                )}
              </h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-muted-foreground">
                {exp.start} – {exp.end}
              </p>
              <ul className="mt-5 space-y-3">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-baseline gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="shrink-0 text-primary">–</span>
                    <span>{highlightKeywords(bullet)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
