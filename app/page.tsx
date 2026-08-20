import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MenuCarouselSection from "./components/MenuCarouselSection";
import HeritageSection from "./components/HeritageSection";
import GallerySection from "./components/GallerySection";
import TestimonialSection from "./components/TestimonialSection";
import WaiterSection from "./components/WaiterSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-cream min-h-screen">
      <Navbar />
      <HeroSection />

      {/* 3D Menu Carousel seamlessly continuing from the maroon hero background */}
      <MenuCarouselSection />

      {/* Heritage (About Us) Section */}
      <HeritageSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Client Love (Testimonials) Section */}
      <TestimonialSection />

      {/* Grand Finale (Booking Form) */}
      <ContactSection />

      <Footer />
    </main>
  );
}
