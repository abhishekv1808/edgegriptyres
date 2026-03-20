import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import BrandMarquee from "@/components/home/BrandMarquee";
import TrustBar from "@/components/home/TrustBar";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedTyres from "@/components/home/FeaturedTyres";
import EquipmentShowcase from "@/components/home/EquipmentShowcase";
import ProcessVideoSection from "@/components/home/ProcessVideoSection";
import TyreSizeFinder from "@/components/home/TyreSizeFinder";
import VideoSection from "@/components/home/VideoSection";
import WhySection from "@/components/home/WhySection";
import VideoTestimonials from "@/components/home/VideoTestimonials";
import FAQSection from "@/components/home/FAQSection";
import BlogSection from "@/components/home/BlogSection";
import LocationSection from "@/components/home/LocationSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BrandElevation from "@/components/home/BrandElevation";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <BrandMarquee />
        <TrustBar />
        <TyreSizeFinder />
        <ServicesSection />
        <EquipmentShowcase />
        <ProcessVideoSection />
        <FeaturedTyres />
        <BrandElevation />
        <VideoSection />
        <VideoTestimonials />
        <FAQSection />
        <BlogSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
