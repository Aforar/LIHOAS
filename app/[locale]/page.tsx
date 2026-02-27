import { HeroContent } from "@/components/hero/HeroContent";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans relative">
      <HeroContent />
      <ConceptSection />
      <InvestmentSection />
      <LocationSection />
      <CTASection />
    </main>
  );
}
