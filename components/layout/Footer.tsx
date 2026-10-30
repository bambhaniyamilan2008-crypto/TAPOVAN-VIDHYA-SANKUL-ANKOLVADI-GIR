import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A2530] text-gray-300 pt-16 pb-8 border-t-4 border-school-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* "TVS" text ki jagah ye laga do */}
                <img 
                  src="/logo.png" 
                  alt="Tapovan Logo" 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain" 
                />
              <h2 className="text-white text-xl font-bold tracking-wide leading-tight">Tapovan Vidhya Sankul</h2>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Empowering minds and shaping futures. A premier educational institute offering holistic education in Gujarati and English mediums.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-blue transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-school-gold after:rounded-full">
              Explore
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/about" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> About Us</Link></li>
              <li><Link href="/academics" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Academics</Link></li>
              <li><Link href="/infrastructure" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Infrastructure</Link></li>
              <li><Link href="/faculty" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Our Faculty</Link></li>
              <li><Link href="/results" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Hall of Fame</Link></li>
              <li><Link href="/sports" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Sports & Athletics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-school-gold after:rounded-full">
              Information
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/admissions" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Apply For Admissions</Link></li>
              <li><Link href="/campuses" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Our Campuses</Link></li>
              <li><Link href="/gallery" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Photo Gallery</Link></li>
              <li><Link href="/news" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> News & Notices</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-school-gold transition-colors flex items-center gap-2"><span className="text-school-gold">›</span> Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-school-gold after:rounded-full">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-school-gold shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Tapovan Vidhya Sankul, Ankolvadi-Gir, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-school-gold shrink-0" size={18} />
                <span className="text-gray-400">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-school-gold shrink-0" size={18} />
                <span className="text-gray-400">info@tapovanvidhyasankul.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tapovan Vidhya Sankul Ankolvadi-Gir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}