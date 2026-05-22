import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import HeroSection from "@/components/site/HeroSection";
import AboutSection from "@/components/site/AboutSection";
import ServicesSection from "@/components/site/ServicesSection";
import WhyChooseUsSection from "@/components/site/WhyChooseUsSection";
import ProcessTimeline from "@/components/site/ProcessTimeline";
import TestimonialsSection from "@/components/site/TestimonialsSection";
import CTASection from "@/components/site/CTASection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
