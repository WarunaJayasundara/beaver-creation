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
    <>
      <footer className="bg-dark border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-6 md:px-12 lg:px-[60px] md:py-14">
        <div className="lg:col-span-2">
          <div className="font-bebas text-xl md:text-2xl tracking-[2px] text-white mb-4">
            BEAVER <span className="text-primary">CREATION</span>
          </div>
          <p className="text-[0.875rem] text-muted leading-relaxed max-w-[280px]">
            Turning creativity into reality through innovation, art, and
            technology. Every bold idea deserves a brilliant execution.
          </p>
        </div>
        <div>
          <h5 className="font-syne font-bold text-[0.7rem] tracking-[2px] uppercase text-muted mb-5">
            Services
          </h5>
          <ul className="flex flex-col gap-3 list-none">
            {services.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className="text-[0.875rem] text-white/70 no-underline transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-syne font-bold text-[0.7rem] tracking-[2px] uppercase text-muted mb-5">
            Company
          </h5>
          <ul className="flex flex-col gap-3 list-none">
            {company.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className="text-[0.875rem] text-white/70 no-underline transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-syne font-bold text-[0.7rem] tracking-[2px] uppercase text-muted mb-5">
            Connect
          </h5>
          <ul className="flex flex-col gap-3 list-none">
            {connect.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className="text-[0.875rem] text-white/70 no-underline transition-colors hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="bg-dark border-t border-white/[0.06] py-4 px-6 md:px-[60px] flex flex-col md:flex-row justify-between items-center gap-2 text-[0.75rem] text-muted">
        <p>© 2025 <span className="text-primary">Beaver Creation (Pvt) Ltd</span>. All rights reserved.</p>
        <p>Designed with creativity. Built with precision.</p>
      </div>
    </>
  );
}
