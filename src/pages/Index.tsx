import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { TeamSection } from "@/components/TeamSection";
import { ResearchCasesSection } from "@/components/ResearchCasesSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TeamSection />
        <ResearchCasesSection />
        <ActivitiesSection />
        <PublicationsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
