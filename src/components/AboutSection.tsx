"use client";

import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { ImageWithFallback } from "./ImageWithFallback";
import { IMAGES, DUMMY_IMAGES } from "@/lib/images";

export function AboutSection() {
  return (
    <section id="about" className="bg-cream py-24 md:py-[120px] px-5 md:px-12 lg:px-[60px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
        <Reveal>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src={IMAGES.about.team}
              fallbackSrc={DUMMY_IMAGES.about.team}
              alt="Beaver Creation team"
              fill
              className="object-cover grayscale-[15%] hover:grayscale-0 hover:scale-[1.02] transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/50 rounded-lg opacity-60" />
            <div className="absolute bottom-5 left-5 bg-primary text-white py-2.5 px-4 rounded-md font-syne font-bold text-[0.78rem] tracking-wide shadow-lg">
              Where Imagination Meets Technology
            </div>
          </div>
        </Reveal>
        <Reveal>
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="font-bebas font-bold text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.95] tracking-wide text-dark">
            We Build <span className="text-primary">Bold</span> Ideas
          </h2>
          <p className="mt-4 text-[0.95rem] text-muted leading-relaxed mb-8">
            Beaver Creation is a dynamic company where imagination meets
            technology. From digital creations such as audio production, game
            development, 3D & 2D animations, software & website development to
            R&D smart solutions, we transform bold ideas into innovative
            creations.
          </p>
          <div className="flex flex-col gap-5">
            <div className="border-l-[3px] border-primary pl-5 py-4 bg-primary/5 rounded-r-md">
              <h4 className="font-syne font-black text-[0.75rem] tracking-[2px] uppercase text-primary mb-1.5">
                Our Mission
              </h4>
              <p className="text-[0.9rem] leading-relaxed text-dark/80">
                To redefine creativity through innovation and deliver
                unparalleled experiences that inspire and captivate.
              </p>
            </div>
            <div className="border-l-[3px] border-primary pl-5 py-4 bg-primary/5 rounded-r-md">
              <h4 className="font-syne font-black text-[0.75rem] tracking-[2px] uppercase text-primary mb-1.5">
                Our Vision
              </h4>
              <p className="text-[0.9rem] leading-relaxed text-dark/80">
                Empowering brands, businesses, and individuals with solutions
                that merge art, technology, and storytelling.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
