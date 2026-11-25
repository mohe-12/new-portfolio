import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Legal</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>
        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground">
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
