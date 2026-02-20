"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useBackgroundImage } from "@/hooks/useBackgroundImage";
import { IMAGES, DUMMY_IMAGES } from "@/lib/images";

const divisions = [
  {
    title: "Automation Solutions",
    desc: "Streamlining workflows with tailored automation systems to boost efficiency.",
    icon: "⚙️",
  },
  {
    title: "IoT Solutions",
    desc: "Harnessing the power of connectivity with smart IoT integrations for homes and industries.",
    icon: "🔗",
  },
  {
    title: "Engineering Smart Solutions",
    desc: "Custom-engineered solutions to solve complex challenges with precision and innovation.",
    icon: "🛠️",
  },
];

export default function SmartEngineeringPage() {
  const bg = useBackgroundImage(IMAGES.services.smartEngineering, DUMMY_IMAGES.services.smartEngineering);
  return (
    <main className="pt-24">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-6 md:px-[60px] py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(13,13,13,0.7) 0%, var(--dark) 100%), url(${bg})`,
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-primary font-syne text-sm font-semibold tracking-wider uppercase mb-6 no-underline hover:gap-3 transition-all"
          >
            ← All Services
          </Link>
          <SectionLabel>Division 03</SectionLabel>
          <h1 className="font-bebas text-[clamp(3rem,6vw,5rem)] leading-[0.95] text-white mt-2">
            Smart Engineering & <span className="text-primary">Automation</span>
          </h1>
          <p className="text-xl text-white/75 mt-6 leading-relaxed">
            Revolutionizing operations with intelligent solutions and advanced
            automation.
          </p>
        </div>
      </section>
      <section className="py-[80px] px-6 md:px-[60px] bg-[#0a0a0a]">
        <div className="max-w-2xl mb-16">
          <SectionLabel>Divisions</SectionLabel>
          <h2 className="font-bebas text-[clamp(2rem,4vw,3.5rem)] text-white">
            What we offer
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {divisions.map((div) => (
            <Reveal key={div.title}>
              <div className="border border-[var(--border)] rounded-lg p-8 bg-[var(--card-bg)] hover:border-primary/30 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-primary/20 group-hover:border-primary transition-colors">
                  {div.icon}
                </div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">
                  {div.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {div.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex bg-primary text-white py-4 px-8 rounded-md font-syne font-bold text-[0.85rem] tracking-[2px] uppercase no-underline transition-all hover:bg-primary-hover hover:-translate-y-0.5"
          >
            Let&apos;s Create Together
          </Link>
        </div>
      </section>
    </main>
  );
}
