import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT, NAV } from "./data";
import { BrandLogo } from "./BrandLogo";

export function SiteFooter() {
  function setOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex shrink-0 items-center pl-1"
            aria-label="Mohammed — Software Engineer, back to top"
          >
            <BrandLogo className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-9 lg:h-10" />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Engineering reliable, scalable and human-friendly digital solutions.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {NAV.map((n) => (
            <li key={n.id}>
              <Link to="/" hash={n.id} className="text-muted-foreground hover:text-primary">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 md:justify-end">
          {[
            { h: CONTACT.github, I: Github, l: "GitHub" },
            { h: CONTACT.linkedin, I: Linkedin, l: "LinkedIn" },
            { h: `mailto:${CONTACT.email}`, I: Mail, l: "Email" },
          ].map(({ h, I, l }) => (
            <a
              key={l}
              href={h}
              aria-label={l}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary transition hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
            >
              <I className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© 2026 Mohammed Hasen. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
