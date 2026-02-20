export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-syne text-[0.7rem] font-bold tracking-[3px] uppercase text-primary mb-3.5 flex items-center gap-2.5">
      <span className="w-6 h-px bg-primary" />
      {children}
    </div>
  );
}
