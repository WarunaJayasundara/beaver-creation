"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { useBackgroundImage } from "@/hooks/useBackgroundImage";
import { IMAGES, DUMMY_IMAGES } from "@/lib/images";

const divisions = [
  {
    title: "Software Development",
    desc: "Tailored software solutions built to enhance functionality and productivity.",
    icon: "💻",
  },
  {
    title: "Mobile Application Development",
    desc: "User-friendly, feature-rich mobile apps that bring your ideas to the fingertips of your audience.",
    icon: "📱",
  },
  {
    title: "Website Development",
    desc: "Bespoke websites designed to tell your story, engage users, and achieve results.",
    icon: "🌐",
  },
];

export default function DigitalPlatformsPage() {
  const bg = useBackgroundImage(IMAGES.services.digitalPlatforms, DUMMY_IMAGES.services.digitalPlatforms);
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
          <SectionLabel>Division 02</SectionLabel>
          <h1 className="font-bebas text-[clamp(3rem,6vw,5rem)] leading-[0.95] text-white mt-2">
            Digital Platforms & <span className="text-primary">Applications</span>
          </h1>
          <p className="text-xl text-white/75 mt-6 leading-relaxed">
            Designing and building the digital tools to transform your vision
            into reality.
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
