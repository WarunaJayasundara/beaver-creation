"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { BeaverLogo } from "./BeaverLogo";
import { IMAGES } from "@/lib/images";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-5 md:px-12 lg:px-[60px] py-4 md:py-5 border-b transition-all duration-300",
        "bg-dark/90 backdrop-blur-xl border-white/[0.08]",
        scrolled && "py-3 shadow-lg shadow-black/10"
      )}
    >
      <Link
        href="/"
        className="font-bebas text-xl md:text-[1.75rem] tracking-[2px] text-white flex items-center gap-3 no-underline"
      >
        {logoError ? (
          <span className="text-primary">
            <BeaverLogo size={36} className="md:w-9 md:h-9" />
          </span>
        ) : (
          <span className="shrink-0 relative w-9 h-9">
            <Image
              src={IMAGES.logo}
              alt="Beaver Creation logo"
              width={36}
              height={36}
              className="object-contain rounded-md"
              priority
              unoptimized
              onError={() => setLogoError(true)}
            />
          </span>
        )}
        BEAVER <span className="text-primary">CREATION</span>
      </Link>

      <ul className="hidden md:flex gap-8 lg:gap-10 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={clsx(
                "font-syne text-[0.8rem] font-semibold tracking-[1.5px] uppercase no-underline transition-colors",
                pathname === href
                  ? "text-primary"
                  : "text-white/75 hover:text-primary"
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Link
          href="/#contact"
          className="hidden md:inline-flex bg-primary text-white py-2.5 px-5 rounded-md font-syne text-[0.78rem] font-bold tracking-[1.5px] uppercase no-underline transition-all hover:bg-primary-hover hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
        >
          Let&apos;s Create Together
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white focus:outline-none focus:ring-2 focus:ring-primary rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={clsx("w-6 h-0.5 bg-current transition-transform", mobileOpen && "rotate-45 translate-y-1")} />
          <span className={clsx("w-6 h-0.5 bg-current", mobileOpen && "opacity-0")} />
          <span className={clsx("w-6 h-0.5 bg-current transition-transform", mobileOpen && "-rotate-45 -translate-y-1")} />
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark border-b border-white/[0.08] p-6 flex flex-col gap-4 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-syne text-sm font-semibold tracking-wider uppercase text-white/85 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex bg-primary text-white py-3 px-6 rounded-md font-syne text-sm font-bold tracking-wider uppercase justify-center hover:bg-primary-hover transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Create Together
          </Link>
        </div>
      )}
    </nav>
  );
}
