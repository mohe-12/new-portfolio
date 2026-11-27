import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
  Send,
  Server,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WorkingProcess } from "@/components/site/WorkingProcess";
import { CONTACT } from "@/components/site/data";
import { FadeImg, Reveal } from "@/components/site/Reveal";
const heroProfile = "/hero-profile.webp";
const aboutProfile = "/about-picture.webp";
import folioAsset from "@/assets/portfolio-snapshot.webp.asset.json";
const folio = folioAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Hasen | Portfolio" },
      {
        name: "description",
        content:
          "Mohammed Hasen turns real-world operational challenges into efficient, scalable and user-friendly software.",
      },
      { property: "og:title", content: "Mohammed Hasen — Full-Stack Developer & UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Projects, services and skills of Mohammed Hasen, full-stack developer from Ethiopia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroProfile,
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

const PROJECTS = [
  {
    n: "01",
    title: "Yetebabarut Beherawi Petroleum (YBP)",
    category: "Frontend",
    status: "Completed",
    img: "https://i.postimg.cc/JnS2b2nc/ybp.png",
    live: "https://ybp-website-mohe.vercel.app/",
    repo: "https://github.com/mohe-12",
    desc: "A responsive corporate website developed for a petroleum company in Bale Robe, Ethiopia. The platform presents the company's professional identity, services, and business information through a modern and accessible web experience.",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
  },
  {
    n: "02",
    title: "Employee Management System",
    category: "Full-Stack",
    status: "In Progress",
    img: "https://i.postimg.cc/gcK1nmFf/ems.png",
    repo: "https://github.com/mohe-12",
    desc: "A full-stack employee management platform developed for Bule Hora University to centralize staff administration, attendance tracking, leave workflows, departmental operations, and role-based user management.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    n: "03",
    title: "MoziBlog",
    category: "Full-Stack",
    status: "In Progress",
    img: "https://i.postimg.cc/W4rHjP7R/mozi.png",
    repo: "https://github.com/mohe-12",
    desc: "A multi-category content publishing platform designed to organize and present articles across technology, sports, and business. The project combines a modern frontend experience with a Laravel-powered backend.",
    stack: ["Next.js", "TypeScript", "Laravel", "PHP", "MySQL"],
  },
  {
    n: "04",
    title: "Personal Portfolio",
    category: "Portfolio",
    status: "Completed",
    img: "https://i.postimg.cc/YCNS878j/portfolio-(2).png",
    live: "https://mohammedhasen-new-portfolio.vercel.app/",
    repo: "https://github.com/mohe-12",
    desc: "A responsive personal portfolio platform developed to present professional experience, technical capabilities, software projects, and career-related information through a refined digital identity.",
    stack: ["React.js", "Next.js", "Tailwind CSS"],
  },
] as {
  n: string;
  title: string;
  category: string;
  status: string;
  img: string;
  live?: string;
  url?: string;
  repo?: string;
  desc: string;
  stack: string[];
}[];

const SERVICES = [
  {
    I: Layers,
    t: "Full-Stack Development",
    d: "End-to-end web applications, from interface to database, built to scale.",
  },
  {
    I: Server,
    t: "Backend Development",
    d: "Secure RESTful APIs, business logic and data models that stay maintainable.",
  },
  {
    I: Palette,
    t: "UI/UX & Responsive Web Design",
    d: "Wireframes, prototypes and pixel-tidy interfaces that work on every screen.",
  },
  {
    I: FileText,
    t: "CV & Resume Preparation",
    d: "Clear, well-structured CVs that present your experience with confidence.",
  },
];

const SKILLS: { g: string; items: [string, string | null][] }[] = [
  {
    g: "Frontend Development",
    items: [
      ["HTML5", "html5"],
      ["CSS3", "css"],
      ["JavaScript", "javascript"],
      ["TypeScript", "typescript"],
      ["React.js", "react"],
      ["Next.js", "nextdotjs"],
      ["Tailwind CSS", "tailwindcss"],
    ],
  },
  {
    g: "Backend Development",
    items: [
      ["Node.js", "nodedotjs"],
      ["Express.js", "express"],
      ["PHP", "php"],
      ["Laravel", "laravel"],
      ["RESTful APIs", null],
    ],
  },
  {
    g: "Database Management",
    items: [
      ["MongoDB", "mongodb"],
      ["MySQL", "mysql"],
    ],
  },
  {
    g: "Tools & Platforms",
    items: [
      ["Git", "git"],
      ["GitHub", "github"],
      ["VS Code", "vscodium"],
      ["Vercel", "vercel"],
    ],
  },
];

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden
      className={`pointer-events-none absolute h-14 w-28 stroke-current ${className}`}
    >
      <path
        d="M5 45 C 25 5, 40 5, 35 40 S 60 55, 70 20 S 95 10, 115 30"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-left sm:text-center">
      <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
        <span aria-hidden className="h-px w-10 shrink-0 bg-current opacity-40" />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function Index() {
  const [filter, setFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section id="home" className="bg-hero relative overflow-hidden text-primary-foreground">
          <div className="grid-dots absolute inset-0 opacity-60" />
          <Squiggle className="right-[8%] top-24 hidden text-primary-foreground/70 md:block" />
          <Squiggle className="left-[42%] top-40 hidden text-primary-foreground/50 md:block" />
          <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-5 pt-28 sm:px-6 sm:pt-32 md:grid-cols-2 md:pt-28">
            <div className="animate-rise pb-16 md:translate-y-4 md:pb-28">
              <p className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>{" "}
                Available for new opportunities
              </p>
              <h1 className="mt-6 text-[2.15rem] font-extrabold leading-tight sm:text-5xl md:text-[2.75rem] lg:text-5xl">
                Hello, I'm <span className="text-accent">Mohammed Hasen</span>{" "}
                <span className="whitespace-nowrap">Full-Stack</span> Developer
              </h1>
              <p className="mt-6 max-w-lg text-base text-primary-foreground/80 sm:text-lg">
                I enjoy transforming real-world operational challenges into efficient, scalable, and
                user-friendly software solutions.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <Link
                  to="/"
                  hash="projects"
                  className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent 
                   px-5 py-3.5 sm:px-7 font-semibold text-accent-foreground shadow-soft transition hover:-translate-y-0.5"
                >
                  View Projects{" "}
                  <ArrowRight className="hidden h-4 w-4 shrink-0 transition group-hover:translate-x-1 min-[380px]:block" />
                </Link>
                <Link
                  to="/"
                  hash="contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border 
                   border-primary-foreground/40 px-5 py-3.5 sm:px-7 font-semibold transition hover:bg-primary-foreground hover:text-primary"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="animate-fade-soft absolute bottom-0 h-[78%] w-[82%] rounded-t-full bg-accent" />
              <img
                src={heroProfile}
                alt="Mohammed Hasen"
                width={600}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="animate-rise-in relative w-[85%]  [animation-delay:150ms]"
              />
              <div className="glass animate-float absolute right-0 top-10 sm:right-2 sm:top-16 rounded-2xl px-4 py-3 text-foreground shadow-soft md:right-0">
                <p className="font-display text-2xl font-bold text-primary">4+</p>
                <p className="text-xs text-muted-foreground">Projects built</p>
              </div>
              <div className="glass animate-float absolute bottom-16 left-0 rounded-2xl px-4 py-3 text-foreground shadow-soft [animation-delay:1.5s]">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Code2 className="h-4 w-4 text-primary" /> Full-Stack
                </p>
                <p className="text-xs text-muted-foreground">React · Node · Next</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 overflow-x-clip px-6 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
            <Reveal variant="left" className="relative mx-auto w-full max-w-md">
              <div
                aria-hidden="true"
                className="absolute inset-10 rounded-full bg-primary/10 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-dashed border-primary/25"
              />
              <div
                aria-hidden="true"
                className="absolute inset-3 rounded-full border border-accent/35"
              />
              <motion.div
                aria-hidden="true"
                className="absolute inset-0"
                animate={shouldReduceMotion ? false : { rotate: 360 }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              >
                <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_4px_color-mix(in_oklab,var(--primary)_40%,transparent)]" />
              </motion.div>
              <motion.div
                aria-hidden="true"
                className="absolute inset-3"
                animate={shouldReduceMotion ? false : { rotate: -360 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              >
                <span className="absolute right-0 top-1/2 h-3 w-3 translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-background shadow-[0_0_14px_3px_color-mix(in_oklab,var(--accent)_40%,transparent)]" />
              </motion.div>
              <motion.div
                className="absolute inset-6 overflow-hidden rounded-full border-4 border-background bg-accent shadow-2xl shadow-primary/15"
                animate={shouldReduceMotion ? false : { y: [0, -5, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              >
                <FadeImg
                  src={aboutProfile}
                  alt="Mohammed Hasen"
                  width={800}
                  height={800}
                  className="absolute bottom-0 left-1/2 w-[90%] -translate-x-1/2"
                />
              </motion.div>
              <div className="aspect-square" />
            </Reveal>
            <Reveal variant="right" delay={120}>
              <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                <span aria-hidden className="h-px w-10 shrink-0 bg-current opacity-40" />
                About me
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Engineering solutions, not just <span className="text-primary">screens</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                I'm a <span className="font-semibold">software developer</span> with practical
                practical<span className="font-semibold"> full-stack experience </span>
                building real products for real organisations, from corporate websites to university
                management systems. I care about reliable digital solutions: scalable architecture,
                maintainable code and modern web technologies.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-2xl border border-accent/40 bg-accent/10 p-5">
                  <GraduationCap className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">B.Sc. in Computer Science and Engineering</p>
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> Bule Hora University, Ethiopia
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-2xl border border-primary/25 bg-secondary p-5">
                  <Layers className="h-6 w-6 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold">Practical full-stack development</p>
                    <p className="text-sm text-muted-foreground">
                      Interest in scalable architecture and maintainable code.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative scroll-mt-24 overflow-hidden px-6 py-24">
          <Squiggle className="right-[10%] top-12 text-primary" />
          <span className="absolute left-[8%] top-10 h-10 w-10 rounded-full border-4 border-accent/60" />
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Services" title="What I can do for you" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map(({ I, t, d }, i) => (
                <Reveal key={t} variant="zoom" delay={i * 100}>
                  <div
                    className={`group h-full rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-glow ${i === 1 ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border bg-card"}`}
                  >
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-2xl transition group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground ${i === 1 ? "bg-primary-foreground/15" : "bg-secondary text-primary"}`}
                    >
                      <I className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold">{t}</h3>
                    <p
                      className={`mt-2 text-sm group-hover:text-primary-foreground/80 ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      {d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="relative scroll-mt-24 overflow-hidden bg-muted px-6 py-24"
        >
          <Squiggle className="right-[12%] top-16 text-foreground/70" />
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Portfolio"
              title="Selected Projects"
              sub="Real products built for businesses, institutions and readers."
            />
            <ProjectTabs filter={filter} setFilter={setFilter} />
            <div className="grid gap-8 md:grid-cols-2">
              {PROJECTS.filter((p) => filter === "All" || p.category === filter).map((p, i) => (
                <Reveal key={`${filter}-${p.n}`} delay={(i % 2) * 120}>
                  <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                    <div className="relative overflow-hidden">
                      <FadeImg
                        src={p.img}
                        alt={`${p.title} preview`}
                        width={1200}
                        height={800}
                        className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span
                        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${p.status === "Completed" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}
                      >
                        ● {p.status}
                      </span>
                    </div>
                    <div className="p-5 sm:p-7">
                      <p className="font-display text-sm text-muted-foreground">Project {p.n}</p>
                      <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {p.live ? (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
                          >
                            Live Demo <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2.5 text-sm font-medium text-muted-foreground">
                            Live Demo
                          </span>
                        )}
                        {p.repo && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
                          >
                            <Github className="h-4 w-4" /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 bg-muted px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Toolkit" title="Technical Skills & Technologies" />
            <div className="grid gap-6 md:grid-cols-2">
              {SKILLS.map((g, gi) => (
                <Reveal
                  key={g.g}
                  delay={(gi % 2) * 120}
                  className="rounded-3xl border border-border bg-card p-7"
                >
                  <h3 className="font-semibold">{g.g}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {g.items.map(([name, slug]) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                      >
                        {slug ? (
                          <img
                            src={`https://cdn.simpleicons.org/${slug}`}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            width={16}
                            height={16}
                            className="h-4 w-4"
                          />
                        ) : (
                          <Server className="h-4 w-4 text-primary" />
                        )}
                        {name}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <WorkingProcess />
        <TalkBanner />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

function ProjectTabs({ filter, setFilter }: { filter: string; setFilter: (f: string) => void }) {
  return (
    <div className="-mt-6 mb-10 flex flex-wrap justify-center gap-2">
      {["All", "Frontend", "Full-Stack", "Portfolio"].map((f) => (
        <Button
          variant="ghost"
          aria-pressed={filter === f}
          key={f}
          onClick={() => setFilter(f)}
          className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary hover:text-primary"}`}
        >
          {f}
        </Button>
      ))}
    </div>
  );
}

function TalkBanner() {
  return (
    <section className="bg-hero relative overflow-hidden text-primary-foreground">
      <div className="grid-dots absolute inset-0 opacity-50" />
      <Squiggle className="left-[45%] top-1/2 hidden text-primary-foreground/70 md:block" />
      <Reveal className="relative mx-auto grid max-w-6xl items-end gap-6 px-6 pt-16 md:grid-cols-2">
        <div className="pb-16">
          <span className="mb-4 block h-3 w-3 rounded-full bg-accent" />
          <h2 className="text-3xl font-bold md:text-5xl">
            Got a project?
            <br />
            Let's talk
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/80">
            From a first idea to a finished product, I'd love to help you build it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/"
              hash="contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition hover:-translate-y-0.5 active:scale-[0.97] sm:w-auto"
            >
              Contact me
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="/mohammed-resume.pdf"
              download="mohammed-resume.pdf"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary active:scale-[0.97] sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative hidden justify-center md:flex">
          <div className="absolute bottom-0 h-[70%] w-[70%] rounded-t-full bg-primary-foreground/15" />
          <FadeImg src={heroProfile} alt="" width={600} height={800} className="relative w-72" />
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      "Project inquiry from " + form.name,
    )}&body=${body}`;
  };

  const input =
    "w-full rounded-xl border border-border bg-background/80 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10";

  return (
    <section id="contact" className="scroll-mt-24 overflow-x-clip px-4 py-16 sm:px-6 sm:py-24">
      <div className="bg-hero relative mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-[2rem] p-6 text-primary-foreground sm:rounded-[2.5rem] sm:p-10 md:grid-cols-2 md:items-center lg:p-14">
        {/* Background */}
        <div className="grid-dots absolute inset-0 opacity-40" />

        {/* Contact information */}
        <Reveal variant="left" className="relative">
          <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">
            <span aria-hidden className="h-px w-10 shrink-0 bg-current opacity-40" />
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Let's Create Something Amazing!
          </h2>

          <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/80">
            Have a project, a role or an idea? Send a message and I'll get back to you.
          </p>

          {/* Contact links */}
          <ul className="mt-8 space-y-4">
            {[
              { I: Mail, v: CONTACT.email, h: `mailto:${CONTACT.email}` },
              {
                I: Phone,
                v: CONTACT.phone,
                h: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
              },
              {
                I: Linkedin,
                v: "LinkedIn profile",
                h: CONTACT.linkedin,
              },
            ].map(({ I, v, h }) => (
              <li key={v}>
                <a
                  href={h}
                  target={h.startsWith("mailto:") || h.startsWith("tel:") ? undefined : "_blank"}
                  rel={h.startsWith("mailto:") || h.startsWith("tel:") ? undefined : "noreferrer"}
                  className="group flex min-w-0 items-center gap-3 font-medium transition-colors duration-300 hover:text-accent"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary-foreground/10 bg-primary-foreground/10 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                    <I className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 break-words">{v}</span>

                  <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Contact form */}
        <Reveal variant="right" delay={120} className="relative">
          <form
            onSubmit={onSubmit}
            className="relative space-y-5 overflow-hidden rounded-3xl border border-border/60 bg-card p-5 text-card-foreground shadow-soft sm:p-7 md:p-8"
          >
            {/* Form heading */}
            <div className="mb-2">
              <h3 className="mt-2 text-2xl font-bold tracking-tight">Send me a message</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fill out the form below and let's discuss your next project.
              </p>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm font-medium">
                Your name
              </label>

              <input
                id="contact-name"
                autoComplete="name"
                required
                placeholder="John Doe"
                className={input}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm font-medium">
                Email address
              </label>

              <input
                id="contact-email"
                autoComplete="email"
                required
                type="email"
                placeholder="you@example.com"
                className={input}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-medium">
                Project details
              </label>

              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Tell me about your project, goals, or ideas..."
                className={`${input} min-h-36 resize-y`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="group h-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Send message
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              Your message will open in your email application.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
