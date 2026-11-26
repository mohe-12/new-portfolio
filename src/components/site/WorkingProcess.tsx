import { ChartNoAxesCombined, ClipboardCheck, Lightbulb, Play, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";

const processSteps = [
  {
    number: "01",
    title: "Business Planning",
    description:
      "We clarify your goals, audience and requirements to define a practical direction for the project.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design Strategy",
    description:
      "I shape the experience and system architecture, then turn the strategy into a focused design.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Grow Your Business",
    description:
      "I build, test and launch a polished solution that is reliable, scalable and ready to grow.",
    icon: ChartNoAxesCombined,
  },
];

function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 180 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 47C52 19 104 20 153 40"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M132 25L154 40L129 46"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WorkingProcess() {
  return (
    <section
      id="process"
      className="relative isolate scroll-mt-24 overflow-hidden bg-muted/40 px-4 py-20 sm:px-6 sm:py-28"
    >
      {/** <Play
        aria-hidden="true"
        className="absolute left-[8%] top-28 hidden h-14 w-14 -rotate-6 text-primary/25 lg:block"
        fill="none"
        strokeWidth={1.5}
      />
      <Sparkles
        aria-hidden="true"
        className="absolute right-[8%] top-24 hidden h-16 w-16 text-accent lg:block"
        strokeWidth={1.5}
      />**/}

      <div className="relative mx-auto max-w-6xl">
        <Reveal variant="right" delay={120}>
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <SectionEyebrow className="text-primary">Process</SectionEyebrow>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">My Working Process</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-5 lg:mt-16 lg:gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} variant="up" delay={index * 120} className="h-full">
                <article className="group relative flex h-full flex-col items-center text-center">
                  {index < processSteps.length - 1 && (
                    <CurvedArrow className="absolute -right-[40%] top-12 hidden w-40 text-accent sm:block lg:-right-[42%] lg:w-44" />
                  )}

                  <div className="grid h-28 w-28 place-items-center rounded-full border border-dashed border-primary/45 p-2">
                    <div className="relative grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon aria-hidden="true" className="h-9 w-9" strokeWidth={1.8} />
                      <span
                        aria-hidden="true"
                        className="animate-float absolute -right-2 -top-2 grid size-8 place-items-center rounded-full border-4 border-background bg-accent font-display text-xs font-bold text-accent-foreground shadow-sm"
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-bold tracking-tight lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground sm:max-w-[14rem] lg:max-w-xs">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
