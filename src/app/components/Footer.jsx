"use client";

import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-serif text-white mb-6">SPA IN <span className="text-[#D4AF37]">GURGAON</span></h3>
          <p className="text-sm leading-relaxed mb-6">Luxury spa experiences for complete rejuvenation in the heart of Gurgaon.</p>
          {/* <ul className="space-y-2 text-sm">
            <li><Link href="/about-us" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Spa & Wellness Blog</Link></li>
            <li><Link href="/spa-therapist-jobs-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">We Are Hiring</Link></li>
          </ul> */}
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Our Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/massage-service-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">All Massage Services</Link></li>
            <li><Link href="/full-body-massage-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Full Body Massage</Link></li>
            <li><Link href="/sandwich-massage-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Sandwich Massage</Link></li>
            <li><Link href="/couples-massage-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Couples Massage</Link></li>
            <li><Link href="/spa-price-in-delhi-ncr" className="hover:text-[#D4AF37] transition-colors">Spa Price List</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">5-Star Hotel Spa Service</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/b2b-massage-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Roseate House</Link></li>
            <li><Link href="/b2b-massage-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">The Park</Link></li>
            <li><Link href="/b2b-massage-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Radisson Blu MBD</Link></li>
            <li><Link href="/b2b-massage-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">The Oberoi</Link></li>
            <li><Link href="/b2b-massage-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Radisson Blu Hotel</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Our Locations</h4>
          <ul className="space-y-2 text-sm grid grid-cols-1">
            <li><Link href="/spa-in-gurgaon" className="hover:text-[#D4AF37] transition-colors">Gurugram</Link></li>
            <li><Link href="/spa-in-DLF-Phase-1" className="hover:text-[#D4AF37] transition-colors">DLF Phase 1</Link></li>
            <li><Link href="/spa-in-cyber-city" className="hover:text-[#D4AF37] transition-colors">Cyber City</Link></li>
            <li><Link href="/spa-in-mg-road" className="hover:text-[#D4AF37] transition-colors">MG Road</Link></li>
            <li><Link href="/spa-in-golf-course-road" className="hover:text-[#D4AF37] transition-colors">Golf Course Road</Link></li>
            <li><Link href="/spa-in-sector-29" className="hover:text-[#D4AF37] transition-colors">Sector 29</Link></li>
            {/* <li><Link href="/spa-in-mahipalpur" className="hover:text-[#D4AF37] transition-colors">Mahipalpur</Link></li> */}
            {/* <li><Link href="/spa-in-aerocity" className="hover:text-[#D4AF37] transition-colors">Aerocity</Link></li> */}
            {/* <li><Link href="/spa-in-connaught-place" className="hover:text-[#D4AF37] transition-colors">Connaught Place</Link></li> */}
            {/* <li><Link href="/spa-in-lajpat-nagar" className="hover:text-[#D4AF37] transition-colors">Lajpat Nagar</Link></li> */}
            {/* <li><Link href="/spa-in-noida" className="hover:text-[#D4AF37] transition-colors">Noida</Link></li> */}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><FaPhoneAlt className="text-[#D4AF37]" /> <a href="tel:+918448499173" className="hover:text-[#D4AF37] transition-colors">+91 8448499173</a></li>
            <li className="flex items-center gap-3"><FaEnvelope className="text-[#D4AF37]" /> <a href="mailto:spaingurugram8826@gmail.com" className="hover:text-[#D4AF37] transition-colors">spaingurugram8826@gmail.com</a></li>
            <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-[#D4AF37] flex-shrink-0" /> <span>442, Shankar Chowk Rd Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana 122016</span></li>

          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Spa In Gurgaon. All Rights Reserved.
      </div>
    </footer>
  );
}
