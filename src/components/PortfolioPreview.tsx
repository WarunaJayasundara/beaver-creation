"use client";

import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { ImageWithFallback } from "./ImageWithFallback";
import { PORTFOLIO_IMAGES, DUMMY_IMAGES } from "@/lib/images";

const items = [
  { href: "/portfolio", img: PORTFOLIO_IMAGES[0], category: "Game Dev", tag: "Interactive Experience", name: "Cyber Realm — Mobile Game", featured: true },
  { href: "/portfolio", img: PORTFOLIO_IMAGES[1], category: "3D Animation", tag: "Visual Storytelling", name: "Brand Cosmos — 3D Reel", featured: false },
  { href: "/portfolio", img: PORTFOLIO_IMAGES[2], category: "Engineering", tag: "Smart Solution", name: "Nexus IoT Platform", featured: false },
];

export function PortfolioPreview() {
  return (
    <section id="portfolio" className="bg-dark-soft py-24 md:py-[120px] px-5 md:px-12 lg:px-[60px]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
        <Reveal>
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-bebas font-bold text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.95] tracking-wide text-white">
            Where Creativity <span className="text-primary">Comes Alive</span>
          </h2>
        </Reveal>
        <Reveal>
          <Link
            href="/portfolio"
            className="inline-flex bg-primary text-white py-4 px-8 rounded-md font-syne font-bold text-[0.82rem] tracking-[2px] uppercase no-underline shrink-0 transition-all hover:bg-primary-hover hover:-translate-y-0.5"
          >
            View All Work
          </Link>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-8 rounded-lg overflow-hidden">
        {items.map((item, i) => (
          <Reveal key={i}>
            <Link
              href={item.href}
              className={`relative overflow-hidden group block ${
                item.featured ? "md:col-span-2 md:min-h-[300px]" : "aspect-[4/3]"
              }`}
            >
              <ImageWithFallback
                src={item.img}
                fallbackSrc={DUMMY_IMAGES.portfolio[i]}
                alt={item.name}
                fill
                sizes={item.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                className="object-cover grayscale-[25%] brightness-[0.75] group-hover:grayscale-0 group-hover:brightness-[0.55] group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-white py-1.5 px-3 rounded-md text-[0.65rem] font-syne font-bold tracking-wide uppercase shadow-lg">
                {item.category}
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-syne text-[0.65rem] font-bold tracking-[2px] uppercase text-primary mb-1.5">
                  {item.tag}
                </span>
                <span className="font-syne font-black text-base text-white">
                  {item.name}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
