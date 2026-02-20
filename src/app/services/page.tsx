import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { ServicesSection } from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <Ticker />
      <ServicesSection />
    </main>
  );
}
