import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BioSection from "@/components/BioSection";
import FullImageSection from "@/components/FullImageSection";
import ServicesSection from "@/components/ServicesSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BioSection />
      <FullImageSection />
      <ServicesSection />
      <SelectedWorkSection />
      <TestimonialsSection />
      <NewsSection />
      <FooterSection />
    </main>
  );
}
