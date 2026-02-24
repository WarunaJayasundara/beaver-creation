"use client";

import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

const services = [
  {
    href: "/services/creative-media",
    num: "01",
    icon: "🎨",
    title: "Creative Media Solutions",
    desc: "Where imagination meets innovation. We create captivating content and immersive experiences in advertising, audio, animation, and gaming.",
    tags: ["Digital Advertising", "Audio Production", "3D Animation", "Game Development"],
  },
  {
    href: "/services/digital-platforms",
    num: "02",
    icon: "💻",
    title: "Digital Platforms & Applications",
    desc: "Empowering your ideas with cutting-edge software, mobile applications, and website development to connect, engage, and grow.",
    tags: ["Software Development", "Mobile Apps", "Website Development"],
  },
  {
    href: "/services/smart-engineering",
    num: "03",
    icon: "⚙️",
    title: "Smart Engineering & Automation",
    desc: "Innovative engineering, IoT, and automation solutions designed to streamline processes and shape smarter futures.",
    tags: ["Automation Solutions", "IoT Solutions", "Smart Engineering"],
  },
  {
    href: "/services/rnd",
    num: "04",
    icon: "🔬",
    title: "R&D & Innovation",
    desc: "Pioneering research-driven solutions and engineering breakthroughs for today's challenges and tomorrow's possibilities.",
    tags: ["R&D Solutions", "Engineering Innovations", "Prototyping"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-dark py-24 md:py-[120px] px-5 md:px-12 lg:px-[60px]">
      <div className="max-w-[600px] mb-14">
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-bebas font-bold text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.95] tracking-wide text-white">
            Our <span className="text-primary">Four</span> Pillars
          </h2>
          <p className="mt-4 text-white/60 text-[0.95rem] leading-relaxed">
            Each division delivers specialized expertise — from storytelling and
            software to engineering and research — united by one creative force.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.08] rounded-lg overflow-hidden">
        {services.map((s) => (
          <Reveal key={s.href}>
            <Link
              href={s.href}
              className="block bg-dark-soft p-8 md:p-10 relative overflow-hidden group hover:bg-[#1a1a1a] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            >
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              <div className="font-bebas text-[3rem] text-white/5 leading-none mb-5">
                {s.num}
              </div>
              <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xl group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-syne font-black text-lg mb-3 text-white">
                {s.title}
              </h3>
              <p className="text-[0.875rem] leading-relaxed text-white/55 mb-5">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 text-white/45 py-1 px-2.5 rounded-md text-[0.68rem] font-syne group-hover:border-primary/30 group-hover:text-primary/90 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 font-syne font-bold text-[0.75rem] tracking-[1.5px] uppercase text-primary group-hover:gap-3 transition-all">
                Explore Division →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
