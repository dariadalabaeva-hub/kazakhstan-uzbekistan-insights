import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { TeamSection } from "@/components/TeamSection";
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
        <PartnersSection />
        <TeamSection />
        <ActivitiesSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
