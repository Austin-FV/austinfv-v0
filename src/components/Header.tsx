import { useState } from "react";
import { FileText, Github, Linkedin, Mail, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const socialLinks = [
  {
    href: profile.githubUrl,
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: profile.linkedinUrl,
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: Mail,
    external: false,
  },
  {
    href: profile.resumePath,
    label: "Resume",
    icon: FileText,
    external: true,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-bold tracking-widest text-primary transition-colors hover:text-primary/80"
        >
          AFV
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <Separator orientation="vertical" className="mx-2 h-5" />
          {socialLinks.map(({ href, label, icon: Icon, external }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              aria-label={label}
              asChild
            >
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon />
              </a>
            </Button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile nav */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="mb-6">Menu</SheetTitle>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <Separator className="my-4" />
              <div className="flex items-center gap-1">
                {socialLinks.map(({ href, label, icon: Icon, external }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    aria-label={label}
                    asChild
                  >
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <Icon />
                    </a>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
