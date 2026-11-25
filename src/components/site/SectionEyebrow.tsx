import type { ReactNode } from "react";

export function SectionEyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] ${className}`}
    >
      <span aria-hidden className="h-px w-10 shrink-0 bg-current opacity-40" />
      {children}
    </p>
  );
}