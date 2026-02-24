const items = [
  "Creative Media",
  "Game Development",
  "3D Animation",
  "Audio Production",
  "Smart Engineering",
  "IoT Solutions",
  "R&D Innovation",
  "Web Development",
  "Mobile Apps",
  "Automation",
];

export function Ticker() {
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex gap-0 animate-ticker-roll whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="px-8 font-bebas font-bold text-[0.95rem] tracking-[3px] text-white flex items-center gap-4"
          >
            {item}
            <span className="text-[0.5rem] text-primary-hover opacity-80">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
