import Link from "next/link";

const services = [
  { href: "/services#creative-media", label: "Creative Media" },
  { href: "/services#digital-platforms", label: "Digital Platforms" },
  { href: "/services#smart-engineering", label: "Smart Engineering" },
  { href: "/services#rnd", label: "R&D & Innovation" },
];

const company = [
  { href: "/#about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

const connect = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "X (Twitter)" },
];

export function Footer() {
  return (
    <footer className="bg-dark border-t border-white/[0.08]" role="contentinfo">
      <div className="px-5 md:px-12 lg:px-[60px] py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-12 lg:gap-16 xl:gap-20 lg:items-start">
          {/* Brand */}
          <div className="min-w-0">
            <div className="font-bebas font-bold text-xl md:text-[1.75rem] tracking-[2px] text-white">
              BEAVER <span className="text-primary">CREATION</span>
            </div>
            <p className="mt-4 text-[0.875rem] text-muted leading-relaxed max-w-[280px]">
              Turning creativity into reality through innovation, art, and
              technology. Every bold idea deserves a brilliant execution.
            </p>
          </div>

          {/* Services · Company · Connect — same row, aligned with site padding */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 min-w-0">
            <div className="min-w-[120px]">
              <h3 className="font-syne font-bold text-[0.68rem] tracking-[1.5px] uppercase text-muted mb-5">
                Services
              </h3>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {services.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[0.875rem] text-white/75 no-underline transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
              <div className="min-w-[120px]">
                <h3 className="font-syne font-bold text-[0.68rem] tracking-[1.5px] uppercase text-muted mb-5">
                  Company
                </h3>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {company.map(({ href, label }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[0.875rem] text-white/75 no-underline transition-colors hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-[120px]">
                <h3 className="font-syne font-bold text-[0.68rem] tracking-[1.5px] uppercase text-muted mb-5">
                  Connect
                </h3>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {connect.map(({ href, label }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[0.875rem] text-white/75 no-underline transition-colors hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
      </div>

      {/* Copyright bar — same horizontal padding as Nav and sections */}
      <div className="border-t border-white/[0.06] px-5 md:px-12 lg:px-[60px] py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[0.75rem] text-muted text-center sm:text-left">
        <p className="m-0">
          © 2025 <span className="text-primary">Beaver Creation (Pvt) Ltd</span>. All rights reserved.
        </p>
        <p className="m-0">Designed with creativity. Built with precision.</p>
      </div>
    </footer>
  );
}
