import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WaiterSection from "./components/WaiterSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-cream min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* User's custom circle waiter component goes here */}
      <WaiterSection />
      
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-maroon-dark text-cream/70 py-12 border-t border-cream/10">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-6">
          <img src="/logo/logo-text.png" alt="Parshwanath Caterers" className="h-16 w-auto opacity-80" />
          <div className="text-center">
            <p>© {new Date().getFullYear()} Parshwanath Caterers. All rights reserved.</p>
            <p className="text-sm mt-2">Crafted with elegance.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
