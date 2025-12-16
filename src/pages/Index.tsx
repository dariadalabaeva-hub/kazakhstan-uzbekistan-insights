import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
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
        <TeamSection />
        <PublicationsSection />
        <ActivitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
