import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#120508] text-cream/70 pt-20 pb-10 border-t border-gold/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1 space-y-6">
            {/* If the logo is dark text, invert it to white or brightness-200 */}
            <img 
              src="/logo/logo-text.png" 
              alt="Parshwanath Caterers" 
              className="h-12 w-auto brightness-0 invert opacity-90" 
            />
            <p className="text-sm leading-relaxed">
              Elevating events with pure vegetarian luxury. From grand destination weddings to intimate private galas, we deliver impeccable hospitality and unforgettable flavors.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/parshwanath_caterer_and_events?igsi=OXdtbXl4eDZ3djNv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold/10 hover:text-gold transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/share/1HUyoMMPJp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold/10 hover:text-gold transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold/10 hover:text-gold transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 lg:pl-10">
            <h4 className="text-gold font-bold tracking-widest uppercase text-sm">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-gold transition-colors">Our Heritage</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Event Expertise</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">The Gallery</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Client Love</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Request a Tasting</Link></li>
            </ul>
          </div>

          {/* Column 3: Event Types */}
          <div className="space-y-6">
            <h4 className="text-gold font-bold tracking-widest uppercase text-sm">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-gold transition-colors">Grand Weddings</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Corporate Galas</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Destination Events</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Private Soirees</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Live Counters</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-gold font-bold tracking-widest uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>123 Luxury Lane, Royal Banquet Street,<br />City, State 123456</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 99823 10686</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>hello@parshwanathcaterers.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="border-t border-cream/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
          <div className="text-cream/50 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Parshwanath Traders. All rights reserved.</p>
          </div>
          
          <div className="text-cream/50 text-center md:text-right flex items-center gap-1">
            <span>Designed by</span>
            <a 
              href="https://dhonidev-ai.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold font-semibold hover:text-cream transition-colors"
            >
              DhoniDev-Ai
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
