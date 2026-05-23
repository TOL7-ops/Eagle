import AboutSection from "@/components/site/AboutSection";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import HeroSection from "@/components/site/HeroSection";
import Navbar from "@/components/site/Navbar";
import ProcessTimeline from "@/components/site/ProcessTimeline";
import ServicesSection from "@/components/site/ServicesSection";
import TestimonialsSection from "@/components/site/TestimonialsSection";
import WhyChooseUsSection from "@/components/site/WhyChooseUsSection";
import { Toaster } from "@/components/ui/sonner";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <Toaster richColors position="top-right" />
    </main>
  );
}
