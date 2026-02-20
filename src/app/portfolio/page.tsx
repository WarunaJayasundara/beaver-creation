"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import clsx from "clsx";
import { PORTFOLIO_IMAGES, DUMMY_IMAGES } from "@/lib/images";

const filters = ["All", "Animation", "Game Dev", "Audio", "Web", "Engineering"];

const projects = [
  { id: 1, img: PORTFOLIO_IMAGES[0], category: "Game Dev", tag: "Interactive Experience", name: "Cyber Realm — Mobile Game", featured: true },
  { id: 2, img: PORTFOLIO_IMAGES[1], category: "3D Animation", tag: "Visual Storytelling", name: "Brand Cosmos — 3D Reel", featured: false },
  { id: 3, img: PORTFOLIO_IMAGES[2], category: "Engineering", tag: "Smart Solution", name: "Nexus IoT Platform", featured: false },
  { id: 4, img: PORTFOLIO_IMAGES[3], category: "Audio", tag: "Sound Design", name: "Soundtrack Series — Vol. I", featured: false },
  { id: 5, img: PORTFOLIO_IMAGES[4], category: "Web Dev", tag: "Digital Platform", name: "E-Commerce Portal", featured: false },
  { id: 6, img: PORTFOLIO_IMAGES[5], category: "R&D", tag: "Innovation", name: "Smart Automation Prototype", featured: false },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main className="pt-24">
      <section className="bg-[#0a0a0a] py-[120px] px-6 md:px-[60px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <Reveal>
            <SectionLabel>Our Work</SectionLabel>
            <h1 className="font-bebas text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.95] tracking-wide text-white">
              Where Creativity <span className="text-accent">Comes Alive</span>
            </h1>
          </Reveal>
        </div>
        <div className="flex gap-2 flex-wrap mt-6 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={clsx(
                "py-2 px-5 border rounded-full font-syne text-[0.75rem] font-bold tracking-wide uppercase cursor-pointer transition-all",
                activeFilter === f
                  ? "border-accent text-accent bg-accent/5"
                  : "border-[var(--border)] text-white/50 hover:border-accent hover:text-accent hover:bg-accent/5"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-8">
          {projects.map((item) => (
            <Reveal key={item.id}>
              <Link
                href={`/portfolio/${item.id}`}
                className={`relative overflow-hidden group block ${
                  item.featured ? "md:col-span-2 md:min-h-[320px]" : "aspect-[4/3]"
                }`}
              >
                <ImageWithFallback
                  src={item.img}
                  fallbackSrc={DUMMY_IMAGES.portfolio[item.id - 1]}
                  alt={item.name}
                  fill
                  sizes={
                    item.featured
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  className="object-cover grayscale-[30%] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-white py-1 px-3 rounded-full text-[0.65rem] font-syne font-bold tracking-wide uppercase">
                  {item.category}
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-syne text-[0.65rem] font-bold tracking-[2px] uppercase text-accent mb-1.5">
                    {item.tag}
                  </span>
                  <span className="font-syne font-extrabold text-base text-white">
                    {item.name}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
