import { FileText, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="py-20 md:py-28">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {profile.tagline}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Developer passionate about creating, exploring, and growing with every
          project. I care about clean code and intuitive interfaces.
        </p>
        <div className="mt-1 flex flex-wrap gap-3">
          <Button asChild>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText />
              Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
