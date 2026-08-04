"use client";

import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-serif text-white mb-6">SPA IN <span className="text-[#D4AF37]">GURGAON</span></h3>
          <p className="text-sm leading-relaxed mb-6">Luxury spa experiences for complete rejuvenation in the heart of Gurgaon.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">5-Star Hotels</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/Outlet" className="hover:text-[#D4AF37] transition-colors">Roseate House</Link></li>
            <li><Link href="/Outlet" className="hover:text-[#D4AF37] transition-colors">The Park</Link></li>
            <li><Link href="/Outlet" className="hover:text-[#D4AF37] transition-colors">Radisson Blu MBD</Link></li>
            <li><Link href="/Outlet" className="hover:text-[#D4AF37] transition-colors">The Oberoi</Link></li>
            <li><Link href="/Outlet" className="hover:text-[#D4AF37] transition-colors">Radisson Blu Hotel</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Our Locations</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/spa-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">DLF Phase 1</Link></li>
            <li><Link href="/spa-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Cyber City</Link></li>
            <li><Link href="/spa-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">MG Road</Link></li>
            <li><Link href="/spa-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Sector 29</Link></li>
            <li><Link href="/spa-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Gurugram</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><FaPhoneAlt className="text-[#D4AF37]" /> +91 8448499173</li>
            <li className="flex items-center gap-3"><FaEnvelope className="text-[#D4AF37]" /> spaingurugram8826@gmail.com</li>
            <li className="flex items-center gap-3"><FaAddress className="text-[#D4AF37]" />442, Shankar Chowk RdPhase II, Udyog Vihar, Sector 20, Gurugram, Haryana 122016</li>

          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Spa In Gurgaon. All Rights Reserved.
      </div>
    </footer>
  );
}
