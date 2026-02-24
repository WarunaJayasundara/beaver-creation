"use client";

import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-dark py-24 md:py-[120px] px-5 md:px-12 lg:px-[60px]">
      <SectionLabel>Get In Touch</SectionLabel>
      <h2 className="font-bebas font-bold text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.95] tracking-wide text-white mt-1">
        Ready to Create <span className="text-primary">Magic?</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 mt-14 items-start">
        <Reveal>
          <h3 className="font-bebas font-bold text-2xl md:text-[2.25rem] text-white mb-4 leading-none">
            We&apos;d love to hear your ideas and bring them to life.
          </h3>
          <p className="text-white/60 leading-relaxed mb-10 text-[0.95rem]">
            Tell us about your project and let&apos;s build something
            extraordinary together. From bold creative concepts to complex
            engineering challenges — we&apos;re here for it.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 border-b border-white/[0.08] pb-5">
              <div className="w-11 h-11 min-w-[44px] rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-lg">
                📧
              </div>
              <div>
                <span className="font-syne text-[0.68rem] font-bold tracking-wide uppercase text-muted block mb-0.5">
                  Email
                </span>
                <a
                  href="mailto:contact@beavercreation.com"
                  className="text-white no-underline text-[0.9rem] hover:text-primary transition-colors"
                >
                  contact@beavercreation.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-white/[0.08] pb-5">
              <div className="w-11 h-11 min-w-[44px] rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-lg">
                📞
              </div>
              <div>
                <span className="font-syne text-[0.68rem] font-bold tracking-wide uppercase text-muted block mb-0.5">
                  Phone
                </span>
                <a
                  href="tel:+123456789"
                  className="text-white no-underline text-[0.9rem] hover:text-primary transition-colors"
                >
                  +123 456 789
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            {["ig", "fb", "in", "𝕏"].map((label, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white/50 text-sm no-underline transition-colors hover:border-primary hover:text-primary hover:bg-primary/10"
                title={label}
              >
                {label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-syne text-[0.68rem] font-bold tracking-[1.5px] uppercase text-muted">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white font-sans text-[0.9rem] outline-none focus:border-primary focus:bg-primary/5 transition-colors w-full placeholder:text-white/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-syne text-[0.68rem] font-bold tracking-[1.5px] uppercase text-muted">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white font-sans text-[0.9rem] outline-none focus:border-primary focus:bg-primary/5 transition-colors w-full placeholder:text-white/30"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-syne text-[0.68rem] font-bold tracking-[1.5px] uppercase text-muted">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white font-sans text-[0.9rem] outline-none focus:border-primary focus:bg-primary/5 transition-colors w-full placeholder:text-white/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-syne text-[0.68rem] font-bold tracking-[1.5px] uppercase text-muted">
                Service Interested In
              </label>
              <select className="bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white font-sans text-[0.9rem] outline-none focus:border-primary focus:bg-primary/5 transition-colors w-full [&>option]:bg-dark">
                <option value="">Select a service…</option>
                <option>Creative Media Solutions</option>
                <option>Digital Platforms & Applications</option>
                <option>Smart Engineering & Automation</option>
                <option>R&D & Innovation</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-syne text-[0.68rem] font-bold tracking-[1.5px] uppercase text-muted">
                Your Message
              </label>
              <textarea
                placeholder="Tell us about your project…"
                rows={5}
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white font-sans text-[0.9rem] outline-none focus:border-primary focus:bg-primary/5 transition-colors w-full resize-y min-h-[120px] placeholder:text-white/30"
              />
            </div>
            <button
              type="submit"
              className="inline-flex bg-primary text-white py-4 px-8 rounded-md font-syne font-bold text-[0.82rem] tracking-[2px] uppercase cursor-pointer border-none transition-all hover:bg-primary-hover hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(49,187,149,0.3)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
            >
              Send Message →
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
