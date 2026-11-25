import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { CONTACT, NAV } from "./data";

export function SiteHeader() {
  const isHome = useRouterState({ select: (state) => state.location.pathname === "/" });
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

      <div className="px-4 pt-3">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 transition-all duration-300 ${
            scrolled
              ? "glass border-border/60 py-2 shadow-soft"
              : "border-transparent bg-transparent py-3.5"
          }`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex shrink-0 items-center pl-1"
            aria-label="Mohammed — Software Engineer, back to top"
          >
            <BrandLogo
              tone={isHome && !scrolled ? "inverse" : "default"}
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-9 lg:h-10"
            />
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-border/50 bg-secondary/40 p-1 backdrop-blur lg:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <Link
                  to="/"
                  hash={n.id}
                  className={`relative block rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                    active === n.id
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/"
              hash="contact"
              className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-primary-glow px-5 py-2 text-sm font-semibold text-accent-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex"
            >
              Let's talk
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="relative grid size-10 place-items-center rounded-full border border-border/60 bg-secondary/50 text-foreground backdrop-blur transition hover:bg-secondary active:scale-95 lg:hidden"
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
        className={`fixed inset-0 -z-10 bg-background/80 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
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
        className={`mx-4 mt-2 overflow-hidden rounded-3xl border border-border/60 glass shadow-soft transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[26rem] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto p-3">
          <ul>
            {NAV.map((n, i) => {
              const isActive = active === n.id;
              return (
                <li
                  key={n.id}
                  className={`transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  <Link
                    to="/"
                    hash={n.id}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 font-medium transition ${
                      isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {n.label}
                    <ArrowUpRight className="size-4 text-muted-foreground" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-2 border-t border-border/60 pt-3">
            <Link
              to="/"
              hash="contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-accent to-primary-glow px-4 py-3 font-semibold text-accent-foreground"
            >
              Let's talk
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
