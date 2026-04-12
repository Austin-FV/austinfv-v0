import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-5xl px-4 text-sm text-muted-foreground md:px-6">
        <p>
          © {year} {profile.name}{" "}
          <span className="mx-1.5">·</span>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <span className="mx-1.5">·</span>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <span className="mx-1.5">·</span>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
