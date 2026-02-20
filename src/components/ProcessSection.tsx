"use client";

import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Idea Exploration",
    desc: "We begin by thoroughly understanding your vision, ensuring clarity on goals and expectations.",
  },
  {
    num: "02",
    title: "Concept Design",
    desc: "Our team conceptualizes the idea, creating visual representations refined by your feedback.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Once the concept is approved, our developers initiate the build phase with precision.",
  },
  {
    num: "04",
    title: "Refinement",
    desc: "We continually refine and improve based on feedback to align perfectly with your vision.",
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Rigorous testing and a flawless final product — delivered on time, ready to launch.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-cream py-24 md:py-[120px] px-5 md:px-12 lg:px-[60px]">
      <div className="text-center max-w-[580px] mx-auto">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel>How We Work</SectionLabel>
          </div>
          <h2 className="font-bebas text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.95] tracking-wide text-dark mt-1">
            Our <span className="text-primary">Process</span>
          </h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 mt-14 relative">
        <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
        {steps.map((step) => (
          <Reveal key={step.num}>
            <div className="text-center p-4 relative group">
              <div className="w-14 h-14 mx-auto mb-4 border-2 border-primary/30 rounded-full flex items-center justify-center font-bebas text-xl text-muted bg-cream relative z-[1] group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                {step.num}
              </div>
              <div className="font-syne font-bold text-[0.85rem] text-dark mb-2">
                {step.title}
              </div>
              <div className="text-[0.8rem] text-muted leading-relaxed max-w-[200px] mx-auto">
                {step.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
