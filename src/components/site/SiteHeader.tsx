import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { CONTACT, NAV } from "./data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);

      let current = "";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= 140) current = n.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const socials = [
    { href: CONTACT.github, Icon: Github, label: "GitHub" },
    { href: CONTACT.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${CONTACT.email}`, Icon: Mail, label: "Email" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress bar */}
      <div className="h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary via-primary-glow to-accent transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="px-3 pt-2.5 sm:px-4 sm:pt-3">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "glass py-1.5 shadow-soft ring-1 ring-primary/10"
              : "glass py-2 shadow-soft ring-1 ring-primary/10 lg:py-3 lg:bg-card/70 lg:backdrop-blur-xl lg:ring-border/60"
          }`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex shrink-0 items-center pl-1"
            aria-label="Mohammed — Software Engineer, back to top"
          >
            <BrandLogo className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-9 lg:h-10" />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <Link
                  to="/"
                  hash={n.id}
                  className={`group relative block whitespace-nowrap rounded-full px-3 py-2 text-sm xl:px-4 font-medium transition-colors duration-300 ${
                    active === n.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 xl:inset-x-4 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 ${
                      active === n.id
                        ? "opacity-100 scale-x-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/"
              hash="contact"
              className="group relative hidden items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-accent to-primary-glow px-5 py-2 text-sm font-semibold text-accent-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex whitespace-nowrap"
            >
              <Sparkles className="size-3.5" />
              Let's talk
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-foreground/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            {/* Animated hamburger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className={`relative grid size-10 place-items-center rounded-full transition-all duration-300 active:scale-95 lg:hidden ${
                open
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft"
              }`}
            >
              <span className="relative block h-3.5 w-4.5">
                <span
                  className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 rounded-full bg-current transition-all duration-300 ${
                    open ? "w-0 opacity-0" : "w-3/4 opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu backdrop */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 -z-10 bg-foreground/30 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu sheet */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        className={`absolute inset-x-3 top-[4.25rem] origin-top overflow-hidden rounded-[1.75rem] shadow-glow glass transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] sm:inset-x-auto sm:right-4 sm:w-[24rem] lg:hidden ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-3 scale-95 opacity-0"
        }`}
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary-glow/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 size-44 rounded-full bg-accent/25 blur-3xl" />

        <div className="relative max-h-[calc(100dvh-6rem)] overflow-y-auto p-3">
          <ul className="space-y-1">
            {NAV.map((n, i) => {
              const isActive = active === n.id;
              return (
                <li
                  key={n.id}
                  className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                >
                  <Link
                    to="/"
                    hash={n.id}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center gap-4 rounded-2xl px-3 py-3 transition-all duration-300 active:scale-[0.98] ${
                      isActive
                        ? "bg-gradient-to-r from-primary/15 to-primary-glow/5 text-primary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="min-w-0 flex-1 truncate font-display text-md font-semibold">
                      {n.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`mt-3 rounded-2xl border border-border/60 p-3 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${80 + NAV.length * 50}ms` : "0ms" }}
          >
            <Link
              to="/"
              hash="contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-primary-glow px-4 py-3 font-semibold text-accent-foreground shadow-soft transition active:scale-[0.98]"
            >
              <Sparkles className="size-4" />
              Let's talk
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
