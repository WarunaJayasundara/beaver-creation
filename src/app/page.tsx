import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <AboutSection />
      <ServicesSection />
      <PortfolioPreview />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
