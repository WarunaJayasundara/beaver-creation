"use client";

import Link from "next/link";
import { IMAGES, DUMMY_IMAGES } from "@/lib/images";
import { useBackgroundImage } from "@/hooks/useBackgroundImage";

export function Hero() {
  const heroBg = useBackgroundImage(IMAGES.hero.background, DUMMY_IMAGES.hero.background);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center animate-[panBg_20s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(49,187,149,0.12) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.88) 100%),
            url(${heroBg})
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute top-[10%] right-[5%] w-[380px] h-[380px] rounded-full bg-primary/15 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[15%] w-[280px] h-[280px] rounded-full bg-primary-hover/10 blur-[70px] pointer-events-none" />

      <div className="relative z-[2] px-5 md:px-12 lg:px-[60px] max-w-[880px]">
        <div className="inline-flex items-center gap-2 border border-primary/60 text-primary py-2 px-4 rounded-full font-syne text-[0.7rem] font-bold tracking-[2px] uppercase mb-8">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Creative Tech Studio · Est. 2024
        </div>
        <h1 className="font-bebas text-[clamp(3.5rem,8.5vw,8rem)] leading-[0.96] tracking-[2px] text-white drop-shadow-xl">
          Turning
          <br />
          <span className="text-primary">Creativity</span>
          <br />
          into Reality
        </h1>
        <p className="mt-6 text-[1.05rem] leading-[1.75] text-white/70 max-w-[540px] font-light">
          At Beaver Creation, we craft unforgettable experiences and
          cutting-edge solutions in music, gaming, animation, tech, and beyond.
        </p>
        <div className="mt-11 flex gap-4 flex-wrap">
          <Link
            href="/#contact"
            className="inline-flex bg-primary text-white py-4 px-8 rounded-md font-syne font-bold text-[0.82rem] tracking-[2px] uppercase no-underline transition-all hover:bg-primary-hover hover:-translate-y-0.5 shadow-[0_8px_28px_rgba(49,187,149,0.35)] hover:shadow-[0_12px_36px_rgba(49,187,149,0.4)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
          >
            Let&apos;s Create Together
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex border border-white/30 text-white py-4 px-8 rounded-md font-syne font-bold text-[0.82rem] tracking-[2px] uppercase no-underline transition-all hover:border-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
          >
            View Our Work
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-5 md:left-[60px] flex items-center gap-3 text-white/50 text-[0.7rem] font-syne tracking-[2px] uppercase">
        <div className="w-12 h-px bg-white/25 relative overflow-hidden">
          <span
            className="absolute inset-y-0 left-0 w-full bg-primary animate-[scrollSlide_2s_infinite]"
            style={{ left: "-100%" }}
          />
        </div>
        Scroll Down
      </div>

      <div className="absolute right-5 md:right-[60px] bottom-14 z-[2] hidden md:flex gap-12">
        <div className="text-center">
          <div className="font-bebas text-[2.6rem] text-primary leading-none">50+</div>
          <div className="text-[0.68rem] text-white/45 font-syne tracking-[1.5px] uppercase mt-1">Projects</div>
        </div>
        <div className="text-center">
          <div className="font-bebas text-[2.6rem] text-primary leading-none">4</div>
          <div className="text-[0.68rem] text-white/45 font-syne tracking-[1.5px] uppercase mt-1">Divisions</div>
        </div>
        <div className="text-center">
          <div className="font-bebas text-[2.6rem] text-primary leading-none">∞</div>
          <div className="text-[0.68rem] text-white/45 font-syne tracking-[1.5px] uppercase mt-1">Ideas</div>
        </div>
      </div>
    </section>
  );
}
