import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { TrifectaSection } from "@/components/home/TrifectaSection";
import { StatsStrip } from "@/components/home/StatsStrip";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { BusinessValueSection } from "@/components/home/BusinessValueSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <TrifectaSection />
        <StatsStrip />
        <ProblemSolutionSection />
        <SolutionsSection />
        <HowItWorksSection />
        <IndustriesSection />
        <BusinessValueSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
