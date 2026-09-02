"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOutletOpen, setIsOutletOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOutletOpen, setMobileOutletOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let servicesTimeout, outletTimeout;

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout);
    setIsServicesOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimeout = setTimeout(() => setIsServicesOpen(false), 500);
  };

  const handleOutletEnter = () => {
    clearTimeout(outletTimeout);
    setIsOutletOpen(true);
  };
  const handleOutletLeave = () => {
    outletTimeout = setTimeout(() => setIsOutletOpen(false), 500);
  };

  const servicesDropdown = [
    { name: "Sandwich Massage", href: "/sandwich-massage-in-gurgaon" },
    { name: "Couple Massage", href: "/couples-massage-in-gurgaon" },
    { name: "B2B Massage", href: "/b2b-massage-in-gurgaon" },
    { name: "Full Body Massage", href: "/full-body-massage-in-gurgaon" },
    { name: "Deep Tissue Massage", href: "/deep-tissue-massage-in-gurgaon" },
    { name: "Thai Massage", href: "/thai-massage-in-gurgaon" },
    // { name: "We Are Hiring", href: "/spa-therapist-jobs-in-gurgaon" },
  ];

  const outletDropdown = [
    // { name: "Aerocity", href: "/spa-in-aerocity" },
    { name: "Cyber City", href: "/spa-in-cyber-city" },
    { name: "DLF Phase 1", href: "/spa-in-DLF-Phase-1" },
    // { name: "Connaught Place", href: "/spa-in-connaught-place" },
    // { name: "Lajpat Nagar", href: "/spa-in-lajpat-nagar" },
    // { name: "Gurugram", href: "/spa-in-gurgaon" },
    // { name: "Noida", href: "/spa-in-noida" },
    { name: "Golf Course Road", href: "/spa-in-golf-course-road" },
    { name: "MG Road", href: "/spa-in-mg-road" },
    // { name: "Sector 29", href: "/spa-in-sector-29" },
    { name: "Sohna Road", href: "/spa-in-sohna-road" },
  ];

  return (
    <>
      {/* Top Strip */}
      <div
        className="hidden md:flex justify-between items-center text-sm text-white px-6 py-2 shadow-sm z-50"
        style={{ backgroundColor: "#245cbdff" }}
      >
        <a href="tel:+918448499173" className="font-medium hover:text-emerald-200 transition-colors">📞 +91 8448499173</a>
        <p className="font-semibold">
          Book Your Appointment :  Gurgaon
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/918448499173"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`w-full py-1 px-6 md:px-16 sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] md:gap-6">
          {/* Logo */}
          <div className="w-50 h-15 relative">
            <Image
              src="/images/spaingurgaonlogo.png"
              alt="Delhi Body Spa Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center space-x-10 items-center">
            <a
              href="/"
              className="font-medium text-gray-800 hover:text-emerald-600 transition"
            >
              Home
            </a>


            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <a
                href="/massage-service-in-gurgaon"
                className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-600 transition"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-xl z-50 py-2">
                  {servicesDropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-2 text-[15px] font-medium text-gray-800 hover:bg-emerald-100 transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/spa-price-in-delhi-ncr"
              className="font-medium text-gray-800 hover:text-emerald-600 transition"
            >
              Pricing
            </a>

            {/* Outlet Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleOutletEnter}
              onMouseLeave={handleOutletLeave}
            >
              <a
                href="/spa-in-mahipalpur"
                className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-600 transition"
              >
                Outlet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-200 ${isOutletOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {isOutletOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-xl z-50 py-2">
                  {outletDropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-2 text-[15px] font-medium text-gray-800 hover:bg-emerald-100 transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/blog"
              className="font-medium text-gray-800 hover:text-emerald-600 transition"
            >
              Blog
            </a>
            <a
              href="/about-us"
              className="font-medium text-gray-800 hover:text-emerald-600 transition"
            >
              About
            </a>
            <a
              href="/contacts"
              className="font-medium text-gray-800 hover:text-emerald-600 transition"
            >
              Contact
            </a>
          </div>

          {/* Book Appointment CTA */}
          <div className="hidden md:flex justify-end">
            <a
              href="https://api.whatsapp.com/send?phone=918448499173"
              className="bg-emerald-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-emerald-700 transition shadow-md whitespace-nowrap"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-emerald-600 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 px-4 space-y-4 bg-white shadow-md py-4 rounded-b-xl">
            <a
              href="/"
              className="block text-gray-800 font-semibold hover:text-emerald-600"
            >
              Home
            </a>
            

            {/* Mobile Services */}
            <div className="flex justify-between items-center text-gray-800 font-semibold py-2">
              <a href="/massage-service-in-gurgaon" className="hover:text-emerald-600 w-full">
                Services
              </a>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-emerald-600 ml-2 focus:outline-none"
                aria-label="Toggle Services Dropdown"
              >
                {mobileServicesOpen ? "▲" : "▼"}
              </button>
            </div>
            {mobileServicesOpen && (
              <div className="mt-2 ml-4 space-y-2 border-l-2 border-emerald-600 pl-4">
                {servicesDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-gray-700 font-medium hover:text-emerald-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}

            <a
              href="/spa-price-in-delhi-ncr"
              className="block text-gray-800 font-semibold hover:text-emerald-600"
            >
              Pricing
            </a>

            {/* Mobile Outlet */}
            <div className="flex justify-between items-center text-gray-800 font-semibold py-2">
              <a href="/spa-in-mahipalpur" className="hover:text-emerald-600 w-full">
                Outlet
              </a>
              <button
                onClick={() => setMobileOutletOpen(!mobileOutletOpen)}
                className="text-emerald-600 ml-2 focus:outline-none"
                aria-label="Toggle Outlet Dropdown"
              >
                {mobileOutletOpen ? "▲" : "▼"}
              </button>
            </div>
            {mobileOutletOpen && (
              <div className="mt-2 ml-4 space-y-2 border-l-2 border-emerald-600 pl-4">
                {outletDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-gray-700 font-medium hover:text-emerald-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}

            <a
              href="/blog"
              className="block text-gray-800 font-semibold hover:text-emerald-600"
            >
              Blog
            </a>
            <a
              href="/about-us"
              className="block text-gray-800 font-semibold hover:text-emerald-600"
            >
              About
            </a>
            <a
              href="/contacts"
              className="block text-gray-800 font-semibold hover:text-emerald-600"
            >
              Contact
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=918448499173"
              className="block text-center bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-emerald-700 transition shadow-md"
            >
              Book Appointment
            </a>
          </div>
        )}
      </motion.nav>
    </>
  );
}
