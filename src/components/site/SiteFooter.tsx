import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT, NAV } from "./data";
import { BrandLogo } from "./BrandLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      {/* Main footer */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 sm:py-14 md:grid-cols-3 md:items-start">
        {/* Brand */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Link
            to="/"
            className="group flex shrink-0 items-center"
            aria-label="Mohammed — Software Engineer, back to top"
          >
            <BrandLogo className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-9 lg:h-10" />
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Engineering reliable, scalable and human-friendly digital solutions.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>

          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <Link
                  to="/"
                  hash={n.id}
                  className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Connect with me</h3>

          <div className="flex items-center gap-3">
            {[
              { h: CONTACT.github, I: Github, l: "GitHub" },
              { h: CONTACT.linkedin, I: Linkedin, l: "LinkedIn" },
              { h: `mailto:${CONTACT.email}`, I: Mail, l: "Email" },
            ].map(({ h, I, l }) => (
              <a
                key={l}
                href={h}
                aria-label={l}
                target={l === "Email" ? undefined : "_blank"}
                rel={l === "Email" ? undefined : "noreferrer"}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <I className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 Mohammed Hasen. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
