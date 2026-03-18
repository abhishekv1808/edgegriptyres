import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import BrandMarquee from "@/components/home/BrandMarquee";
import TrustBar from "@/components/home/TrustBar";
import ServicesSection from "@/components/home/ServicesSection";
import BrandsSection from "@/components/home/BrandsSection";
import TyreSizeFinder from "@/components/home/TyreSizeFinder";
import VideoSection from "@/components/home/VideoSection";
import WhySection from "@/components/home/WhySection";
import VideoTestimonials from "@/components/home/VideoTestimonials";
import LocationSection from "@/components/home/LocationSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandMarquee />
        <TrustBar />
        <TyreSizeFinder />
        <ServicesSection />
        <BrandsSection />
        <VideoSection />
        <WhySection />
        <VideoTestimonials />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
