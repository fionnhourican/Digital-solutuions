import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import GoalsSection from "@/components/GoalsSection";
import VencoraSection from "@/components/VencoraSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <CaseStudiesSection />
      <GoalsSection />
      <VencoraSection />
      <FooterSection />
    </div>
  );
};

export default Index;
