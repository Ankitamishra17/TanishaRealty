import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import PropertySection from "@/components/home/PropertySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import Service from "@/components/home/ServiceSection";
import Blog from "@/components/home/Blog";
import Navbar from "@/Navbar";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="properties">
        <PropertySection />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="service">
        <Service />
      </div>

      <div id="testimonial">
        <TestimonialSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </>
  );
}
