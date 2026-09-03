"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";
import { FaSpa, FaHotTub, FaLeaf, FaHandSparkles, FaHotel, FaCrown, FaCheckCircle, FaStar } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Hotel } from 'lucide-react';
import { Clock, CheckCircle2 } from "lucide-react";
import { Globe } from "lucide-react";



export default function HomeClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer at your Spa in Gurgaon?",
      answer: "Our Spa in Gurgaon offers Thai, full body, couple, sandwich, B2B, and aromatherapy treatments. All sessions are performed by certified therapists, include private rooms and premium oils, and can be customized to your needs for relaxation, pain relief, or special occasions.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "How long is a typical full body massage in Gurgaon?",
      answer: "A typical full body massage in Gurgaon lasts 60–90 minutes; 120-minute deep-therapy options are available. Sessions include consultation, personalized pressure, and optional post-massage shower. Choose duration based on desired depth of treatment and any add-ons like aromatherapy or extended relaxation time.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Do you provide B2B spa in Gurgaon options?",
      answer: "We offer professional, consensual B2B spa in Gurgaon sessions at select outlets. These are delivered by trained therapists in private rooms with strict hygiene and consent protocols. Availability and pricing vary by location, so confirm the outlet’s B2B schedule when booking.",
      icon: <FaHotTub className="text-teal-600" />
    },
    {
      question: "Do you offer spa home service in Gurgaon?",
      answer: "Yes — the spa home service in Gurgaon brings trained therapists with sanitized equipment, oils and fresh linens to your home. Bookings include a pre-visit consultation, secure payment options, and privacy protocols to ensure a professional, relaxing in-home experience.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Are foreign therapists available for massage in Gurgaon?",
      answer: " Yes — selected Gurgaon outlets schedule foreign therapists (e.g., Thai, Russian) to provide authentic techniques. Requesting a foreign therapist is possible during booking but subject to availability and scheduling; premium packages may include international therapist options.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "What makes your Gurgaon outlet different from others?",
      answer: " Our Luxury Spa in Gurgaon stands out for its 5-star ambience, certified foreign therapists, and transparent pricing. Whether you choose a couple massage, B2B session, or full-body therapy, you’ll experience unmatched quality, hygiene, and personalized care.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
  ];
  const features3 = [
    {
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      title: "Internationally Trained Therapists",
      desc: "Our therapists are trained in Thai, Balinese, Swedish, and Indian massage techniques, so you are not limited to one style of treatment. Each session is adapted to what your body actually needs that day, not a fixed routine.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
      title: "Transparent, Affordable Pricing",
      desc: "Every package is priced upfront with no hidden add-ons — sessions start at ₹1999. You will know exactly what you are paying for before you book.",
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Easy Booking on WhatsApp",
      desc: "Message us on WhatsApp or call to pick your location, treatment, and time slot. Most bookings are confirmed within minutes, with no app download required.",
    },
    {
      icon: <Hotel className="w-8 h-8 text-emerald-600" />,
      title: "12+ Spa Outlets in Gurgaon",
      desc: "With outlets across DLF Phase 1, Cyber City, MG Road, Golf Course Road, Sohna Road, and Sector 29, there is almost always a location close to your home, office, or hotel.",
    },



  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Thai Massage in Gurgaon",
      description: "Our Thai massage in Gurgaon is performed by therapists trained in traditional Thai technique — rhythmic pressing, acupressure and assisted stretching that works through tight muscles and restores movement. Most guests book this when regular oil massage feels too gentle for their level of stiffness.",
      icon: "🧘‍♀️",
      link: "/thai-massage-in-gurgaon",
    },
    {
      title: "Swedish Massage in Gurgaon",
      description: "Swedish massage in Gurgaon suits anyone dealing with desk-job stress. Long gliding strokes and gentle kneading improve circulation and ease tight shoulders and lower-back tension, without the deeper pressure of a Thai or deep-tissue session.",
      icon: "🕊️",
      link: "/sandwich-massage-vs-swedish-massage",
    },
    {
      title: "Full Body Massage in Gurgaon",
      description: "A full-body massage in Gurgaon covers head to toe in a single session, using proven strokes to loosen tight spots and get blood flowing evenly through your system. It's the option most first-time clients choose because it addresses general fatigue rather than one specific problem area.",
      icon: "🧖‍♀️",
      link: "/full-body-massage-in-gurgaon",
    },
    {
      title: "B2B Massage in Gurgaon",
      description: "Our body-to-body massage in Gurgaon is a consensual, therapist-led session delivered in a private room with strict hygiene protocols. It's built for deep relaxation rather than a standard oil massage, and every therapist is briefed on consent before the session starts.",
      icon: "🫂",
      link: "/b2b-massage-in-gurgaon",
    },
    {
      title: "Deep Tissue Massage in Gurgaon",
      description: "Deep tissue massage in Gurgaon uses firm, focused pressure on specific muscle groups and connective tissue. Choose this over a regular massage if you're dealing with chronic muscle soreness, a sports injury, or posture-related pain that hasn't responded to lighter treatment.",
      icon: "💆‍♂️",
      link: "/deep-tissue-massage-in-gurgaon",
    },
    {
      title: "Sandwich Massage in Gurgaon",
      description: "A sandwich massage in Gurgaon is performed by two therapists working in sync from either side of the table, doubling the pressure and cutting session time. It's the most requested treatment for guests who want a deep-relaxation experience in a single hotel or home visit.",
      icon: "🪷",
      link: "/sandwich-massage-in-gurgaon",
    },
  ];
  const pricingPlans = [
    {
      title: "Spa Outlet",
      price: "₹1999/-",
      description: "Perfect for individual relaxation sessions",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "60 min Consultation", "shower"],
      highlight: false,
      ctaLink: "https://wa.me/918448499173",
      icon: <FaSpa className="text-emerald-500" />
    },
    {
      title: "Hotel Outlet",
      price: "₹15000/-",
      description: "Premium experience with luxury amenities",
      features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
      highlight: true,
      ctaLink: "https://wa.me/918448499173",
      icon: <FaHotel className="text-emerald-500" />
    },
    {
      title: "5 Star Hotel Spa",
      price: "₹20000/-",
      description: "Comprehensive spa experience with added treatments",
      features: ["Foreigner Therapist", "5-Star Property", "Private Suite", "Aromatherapy", "120 min Session"],
      highlight: false,
      ctaLink: "https://wa.me/918448499173",
      icon: <FaCrown className="text-emerald-500" />
    }
  ];

  const services4 = [
    {
      title: "Shower",
      image: "/images/icons8-shower-64.png.webp",
    },
    {
      title: "Hammam",
      image: "/images/icons8-spa-care-64.png.webp",
    },
    {
      title: "Jacuzzi Bath",
      image: "/images/icons8-jacuzzi-64.png.webp",
    },
    {
      title: "Steam Bath",
      image: "/images/icons8-bathhouse-64.png.webp",
    },
    {
      title: "Sauna",
      image: "/images/icons8-sauna-64.png.webp",
    },
  ];
  const cities = [
    { name: 'DLF PHASE 1', img: '/images/hotel3.webp', link: '/spa-in-DLF-Phase-1' },
    { name: 'DLF PHASE 2', img: '/images/lajpatnagahotel.avif', link: '/spa-in-DLF-Phase-1' },
    { name: 'DLF PHASE 3', img: '/images/RoseateHouse.jpg', link: '/spa-in-gurgaon' },
    { name: 'DLF PHASE 4', img: '/images/paschimvihar.jpg', link: '/spa-in-gurgaon' },
    { name: 'DLF PHASE 5', img: '/images/fpkdl.com_960_1758981143_building-space_664434-7932.jpg', link: '/spa-in-gurgaon' },
    { name: 'GOLF COURSE ROAD', img: '/images/dlfimage.jpg', link: '/spa-in-golf-course-road' },
    { name: 'GOLF COURSE EXTENSION', img: '/images/best-western-merrion.jpg', link: '/spa-in-golf-course-road' },
    { name: 'SOHNA ROAD', img: '/images/tajmahalhotel_lajpatnagar.jpg', link: '/spa-in-sohna-road' },
    { name: 'CYBER CITY', img: '/images/paschimvihar.jpg', link: '/spa-in-cyber-city' },
    { name: 'MG ROAD', img: '/images/OIP.webp', link: '/spa-in-mg-road' },
    { name: 'SECTOR 29', img: '/images/OIP (2).webp', link: '/spa-in-sector-29' },
    { name: 'SUSHANT LOK', img: '/images/dwarkahotel.avif', link: '/spa-in-gurgaon' },
  ]
  const teamMembers = [
    {
      name: "Chelsea Foster",
      designation: "Spa Therapist",
      image: "/images/spamodel.jpg",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Lane Parsons",
      designation: "Spa Therapist",
      image: "/images/spaExper2.webp",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Haven West",
      designation: "Spa Therapist",
      image: "/images/spamodel2.jpg",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Avery Grace",
      designation: "Spa Therapist",
      image: "/images/spaExpert4.jpg",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  const cards = [
    {
      id: 1,
      title: 'The Leela Ambience\nGurgaon',
      desc:
        'Spa in Gurgaon operates inside The Leela Ambience hotel. The environment feels peaceful and looks beautiful. They have certified therapists who provide excellent massages. Every therapy makes you feel refreshed and calm.',
      cta: 'CHAT ON WHATSAPP',
      img: '/images/the-leela-ambience-gurgaon_image.jpg',
      badge: null,
    },
    {
      id: 2,
      title: 'Trident Hotel\nGurgaon',
      desc:
        'The Trident Hotel location offers Spa in Gurgaon best treatments. Therapists adjust each session based on what you need. They help blood circulation and reduce mental pressure. Your whole system feels balanced when you finish.',
      cta: 'CHAT ON WHATSAPP',
      img: '/images/Trident Gurgaon banner1920x1080.webp',
      badge: 'PREMIUM',
    },
    {
      id: 3,
      title: 'The Westin\n Gurgaon',
      desc:
        'At The Westin, Spa in Gurgaon provides complete wellness packages. The therapists use good products and proper skills. Every treatment delivers strong results. You get an experience that stands out from regular spas.',
      cta: 'CHAT ON WHATSAPP',
      img: '/images/the-hotel--v12572232.jpg',
      badge: 'PREMIUM',
    },
    {
      id: 4,
      title: 'JW Marriott\nGurgaon',
      desc:
        'Spa in Aerocity  created special massage options for ITC Grand Bharat guests. These treatments use luxury methods that refresh your entire body. You feel energized and calm at the same time. Balance returns to your life',
      cta: 'CHAT ON WHATSAPP',
      img: '/images/JwMarriott_CP.jpg',
      badge: 'PREMIUM',
    },
  ]
  return (
    <main className="bg-gradient-to-b from-emerald-50 to-white">
      <section className="relative min-h-[auto] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] font-sans overflow-hidden bg-black flex items-center">
        <div className="font-sans overflow-hidden w-full">
          {/* Floating Decorative Elements */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-emerald-400/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-emerald-600/10 blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-emerald-300/15 blur-3xl" />
          </div>

          {/* Hero Background */}
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <Image
                src="/images/spaa.jpg"
                alt="Luxury spa treatment room at Spa in Gurgaon"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent mix-blend-multiply" />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-8 sm:py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="z-10 text-center lg:text-left"
              >
                {/* <div className="inline-flex items-center gap-3 mb-4">
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur">
              Premium
            </span>
            <span className="text-sm text-white/80">Authentic Therapists • Organic Oils</span>
          </div> */}

                <h1 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-extrabold text-white leading-tight drop-shadow-lg">
                  Best Spa in Gurgaon —{" "}
                  <span className="text-amber-300">Full Body, Thai, Deep Tissue &amp; Couple Massage</span>{" "}
                  from ₹1999
                </h1>

                <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto lg:mx-0 drop-shadow">
                  12+ outlets across Gurgaon — book at an outlet near you, your hotel room, or your own home. Certified therapists, private rooms, and transparent pricing on every visit.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=918448499173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-semibold shadow-lg transition"
                    aria-label="Book a spa appointment in Gurgaon on WhatsApp"
                  >
                    Book Now
                  </a>

                  <a
                    href="/massage-service-in-gurgaon"
                    className="inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white px-5 py-3 font-medium text-slate-800 shadow-sm transition"
                    aria-label="Explore all massage services in Gurgaon"
                  >
                    Explore Services
                  </a>
                </div>

                <ul className="mt-8 flex flex-nowrap gap-1.5 overflow-x-auto no-scrollbar justify-start lg:justify-start py-1 -mx-1 px-1" aria-label="Spa in Gurgaon highlights">
                  <li className="flex items-center gap-1 shrink-0 bg-black/35 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-2.5 py-1.5 text-white text-[11px] sm:text-xs font-medium shadow-sm hover:border-amber-300/60 transition-colors">
                    <svg aria-hidden="true" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>From ₹1,999</span>
                  </li>

                  <li className="flex items-center gap-1 shrink-0 bg-black/35 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-2.5 py-1.5 text-white text-[11px] sm:text-xs font-medium shadow-sm hover:border-amber-300/60 transition-colors">
                    <svg aria-hidden="true" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18" />
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
                    </svg>
                    <span>Private rooms</span>
                  </li>

                  <li className="flex items-center gap-1 shrink-0 bg-black/35 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-2.5 py-1.5 text-white text-[11px] sm:text-xs font-medium shadow-sm hover:border-amber-300/60 transition-colors">
                    <svg aria-hidden="true" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Certified</span>
                  </li>
                  <li className="flex items-center gap-1 shrink-0 bg-black/35 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-2.5 py-1.5 text-white text-[11px] sm:text-xs font-medium shadow-sm hover:border-amber-300/60 transition-colors">
                    <svg aria-hidden="true" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
                    </svg>
                    <span>Foreign staff</span>
                  </li>
                </ul>
              </motion.div>

              {/* Right Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="z-10 flex items-center justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-md">
                  <div className="relative h-66 sm:h-64 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                    <Image
                      src="/images/Feelthedifference.jpeg"
                      alt="Therapist giving a relaxing full body massage at Spa in Gurgaon"
                      fill
                      sizes="(max-width: 640px) 90vw, 448px"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <div className="absolute left-4 bottom-4 text-white">
                      <div className="text-sm font-medium">First Visit Offer</div>
                      <div className="text-xs text-white/80 mt-1">45–60 min session · ₹1999</div>
                    </div>
                  </div>

                  <div className="absolute -left-5 -top-5 bg-white rounded-full p-3 shadow-xl">
                    <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 6.5 7 13 7 13s7-6.5 7-13c0-3.87-3.13-7-7-7z" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* /// */}
      <section className="bg-white pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-emerald-700 mb-3">
            Why Choose Our Massage Spa in Gurgaon?
          </h2>
          <p className="text-gray-600 mb-10">
            Spa in Gurgaon runs 12+ outlets across Delhi NCR, each staffed with trained therapists so you don't have to travel far for a proper massage. Whether you book a hotel visit, a home service, or walk into an outlet near your office, every location follows the same standards for hygiene, technique, and privacy.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { title: '12+ Premium Outlets', img: '/images/dlfimage.jpg' },
              { title: 'Foreigner Therapists', img: '/images/spaExpert4.jpg' },
              { title: 'Luxury Spa Rooms', img: '/images/fpkdl.com_960_1758980281_blissful-facial-treatment-session-raw-style_1077802-188111.jpg' },
              { title: 'Home Spa', img: '/images/✨ Time to Relax & Rejuvenate!.jpeg' },
              { title: 'Easy Booking', img: '/images/12 Romantic.jpeg' },
              { title: '5 Star Hotels Spa', img: '/images/Dragged.jpeg' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-48 h-70 rounded-full border-4 border-emerald-500 flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg transition">
                  <Image width={800} height={600} src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold font-serif text-emerald-700 group-hover:text-emerald-900 transition">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Content Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">


            <motion.h2
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Spa Center in Gurgaon <span className="relative">
                <span className="text-emerald-600 z-10 relative">Starting at ₹1999</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/60 z-0"></span>
              </span>
            </motion.h2>

            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                Quality massage therapy starts at just ₹1999 at{" "} <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                  Spa in Gurgaon
                </strong>. A low price does not mean a compromise on service — every treatment follows the same proven technique to improve blood flow and ease body aches, whichever package you book. Pick a shorter session or a full-body treatment, with therapists trained in both oil massage and deeper pressure work. The pricing stays transparent and affordable for everyone, the staff treats every client with the same care, and the space itself is kept calm and clean. You walk out feeling like you have just woken up from a proper night's sleep.
              </p>
            </motion.div>
            {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                    {title.split('\n').map((line, i) => (
                      <span key={i} className={i === 1 ? 'block mt-2' : 'block'}>{line}</span>
                    ))}
                  </h2> */}

            {/* <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-lg">
                    {subtitle}
                  </p> */}

            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="/spa-price-in-delhi-ncr"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                Out packages
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Polaroid-ish images */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-2xl relative">
              {/* Top image */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                transition={{ duration: 0.6 }}
                className="absolute right-0 -top-12 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2"
                style={{ transformOrigin: 'right center' }}
              >
                <div className="rounded-md overflow-hidden border-1 border-white">
                  <Image
                    src='/images/fpkdl.com_960_1758980558_relaxing-spa-room-with-candles_1187092-239475.jpg'
                    alt="Candlelit private massage room at our Gurgaon spa outlet"
                    width={900}
                    height={600}
                    className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
                  />
                </div>
              </motion.div>

              {/* Bottom image */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 6 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative mt-52 w-80 sm:w-96 lg:w-[30rem] shadow-2xl rounded-xl bg-white p-2 mx-auto"
                style={{ transformOrigin: 'left center' }}
              >
                <div className="rounded-md overflow-hidden border-1 border-white">
                  <Image
                    src='/images/ppp.jpeg'
                    alt="Comfortable relaxation lounge after a spa treatment in Gurgaon"
                    width={900}
                    height={600}
                    className="object-cover w-full h-64 sm:h-72 lg:h-[22rem]"
                  />
                </div>
              </motion.div>

              {/* Decorative subtle background circle */}
              <div className="hidden lg:block absolute -left-28 top-28 w-56 h-56 bg-white rounded-full opacity-30 filter blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      {/* End Content Hero Section */}
      {/* About Section */}
      <section className="py-15 px-4 md:px-8 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-50 to-transparent opacity-70"></div>
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-emerald-200/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-emerald-100/40 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            className="flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="mr-2">✦</span> About Our Luxury Spa
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Best Massage in Gurgaon for <span className="relative">
                <span className="text-emerald-600 z-10 relative">Relaxation, Stress Relief &amp; Complete Wellness</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/60 z-0"></span>
              </span>
            </motion.h2>

            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                Between long commutes and longer workdays, tension has a way of settling into your shoulders and lower back without you noticing. Our <a href="/spa-in-gurgaon" className="text-emerald-700 font-medium underline hover:text-emerald-800">massage in Gurgaon</a> is handled by certified therapists who mix traditional techniques with more targeted, modern methods depending on what your body actually needs that day. Every visit starts with a quick check-in about what's bothering you, so the session gets adjusted instead of following one fixed routine — and the rooms stay clean and quiet throughout.
              </p>
            </motion.div>

            {/* Feature Grid with Hover Effects */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { title: "Foreigner Therapist", icon: "🌏", desc: "Experts in global massage therapy" },
                { title: "Female To Male Massage", icon: "💆‍♂️", desc: "Professional, private, and refreshing massage in Gurgaon" },
                { title: "Best Body To Body Spa", icon: "✨", desc: "Relax together in a private setting" },
                { title: "Couple Massage", icon: "👩‍❤️‍👨", desc: "Sensual and healing touch" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-emerald-50 hover:border-emerald-100 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-emerald-100 text-emerald-700 p-2.5 rounded-xl text-lg mr-3 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-emerald-600 transition-colors">{feature.title}</h4>
                    <p className="text-gray-600 text-xs">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons with Animation */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/about-us"
                className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-all"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Learn More About Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </motion.a>

              <a
                href="https://api.whatsapp.com/send?phone=918448499173"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <FaWhatsapp className="text-xl mr-3" />
                Stay Updated on Whatsapp
              </a>
            </motion.div>
          </motion.div>

          {/* Left Image with Modern Frame & Parallax Effect */}
          <motion.div
            className="relative -mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group w-full h-[500px]">
              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                <Image
                  loading="lazy"
                  src="/images/Step into a world.jpeg"
                  alt="Interior of a luxury spa treatment room in Gurgaon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-[2.5rem] z-0"
                />

                <motion.div
                  className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-rose-300/20 blur-xl z-0"
                  animate={{
                    y: [0, 15, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* /////// */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Visual collage */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Big rounded promo card (bottom-left) */}
              <div className="w-[700px] h-[723px] bg-emerald-50 rounded-2xl shadow-lg p-6 transform lg:-translate-x-6 lg:translate-y-8">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <Image width={736} height={736} src="/images/cc8223d4-67a0-4b1e-bfba-c472cfd87144.jpeg"
                    alt="Spa In Gurgaon first visit offer at 1999 rupees"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* small text badge */}
                <div className="absolute left-8 bottom-8 bg-emerald-700 text-white text-xs px-3 py-1 rounded-full shadow">
                  1st Visit @1999
                </div>
              </div>

            </div>

            {/* RIGHT: Content */}
            <div>
              {/* <p className="text-sm text-emerald-800 font-semibold mb-4">HOME AND HOTEL SPA</p> */}

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Spa in Gurgaon is a Trusted
                {/* <br /> */}
                <span className="text-emerald-700"> Massage Parlour in Delhi NCR</span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl">
                Some days you just do not want to travel anywhere. That is why Spa in Gurgaon sends trained therapists straight to your home, or to your hotel room at properties across DLF Phase 1, Cyber City, MG Road, Golf Course Road, and Sohna Road. Our therapists at the<strong> massage parlour in Gurgaon </strong>carry everything they need for a complete session — oils, fresh linens, and sanitised equipment — so you get a proper spa experience without leaving your own space, on a schedule that suits you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href="https://api.whatsapp.com/send?phone=918448499173"
                  className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium shadow"
                >
                  Book Now
                </a>

                <a
                  href="tel:+918448499173"
                  className="inline-flex items-center gap-3 bg-white border border-emerald-200 text-emerald-700 px-5 py-3 rounded-lg shadow-sm hover:shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call +91 84484 99173
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-500 max-w-xl">
                We serve in <a href="/spa-in-aerocity" className="text-emerald-700 font-medium underline hover:text-emerald-800">Aerocity</a>, <a href="/spa-in-connaught-place" className="text-emerald-700 font-medium underline hover:text-emerald-800">Connaught Place</a>, <a href="/spa-in-lajpat-nagar" className="text-emerald-700 font-medium underline hover:text-emerald-800">Lajpat Nagar</a> and many more — hygienic, reliable and luxury spa experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-10 px-6 md:px-16 bg-gradient-to-b from-emerald-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.p
              className="text-emerald-500 uppercase font-semibold tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Luxury Massage Services
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Explore Our Premium <span className="text-emerald-500">Massage Services in Gurgaon</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-50 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="text-5xl mb-6 text-emerald-500">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href={service.link} className="text-emerald-600 font-medium flex items-center gap-2 group-hover:underline" aria-label={`Learn more about ${service.title}`}>Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Location */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-emerald-500" />
              Affordable Luxury
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Find The Most Trusted <span className="text-emerald-600">Massage Spa in Gurgaon Near You</span>
            </motion.h2>
            <motion.p
              className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Every Spa in Gurgaon outlet is designed to help you unwind the moment you walk in — clean, organized, and private, with each treatment room set up so you are never rushed or interrupted mid-session.
            </motion.p>
            <motion.div
              className="flex justify-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {cities.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.link}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group block rounded-2xl overflow-hidden shadow-lg relative transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="relative w-full h-44 sm:h-48 lg:h-52">
                  <Image
                    src={c.img}
                    alt={`Spa massage outlet in ${c.name.replace(/\b\w/g, (ch) => ch.toUpperCase())}, Gurgaon`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>


                <div className="absolute left-0 right-0 bottom-4 px-4 text-center">
                  <span className="text-white text-lg sm:text-xl font-semibold tracking-wider drop-shadow-lg uppercase">{c.name}</span>
                </div>
              </motion.a>
            ))}
          </div>


          <div className="flex justify-center mt-10">
            <a
              href="/spa-in-gurgaon"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
            >
              View All Outlets
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* End Location */}
      {/* hotel section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-emerald-500" />
              Luxury Treatments
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Hotel Spa in Gurgaon - <span className="text-emerald-600">Bringing The Best Spa Centre in Gurgaon</span>
            </motion.h2>
            <motion.p
              className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We send therapists directly to your hotel room at properties like The Leela Ambience, Trident, and The Westin — same treatment quality as our outlets, just delivered to wherever you're staying.
            </motion.p>
            <motion.div
              className="flex justify-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </motion.div>
          </div>




          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left card: image left, content right */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="flex flex-col md:flex-row items-stretch"
            >
              <div className="md:w-1/2 bg-white rounded-md shadow-lg overflow-hidden mr-0 md:mr-6">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={cards[0].img}
                    alt={cards[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:w-1/2 bg-white rounded-md shadow-md p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-600">Spa in <a href="/spa-in-cyber-city" className="text-emerald-700 underline hover:text-emerald-800">Cyber City</a> &amp; Udyog Vihar - For Quick De-stress After Office Hours</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-wrap">{cards[0].desc}</p>
                </div>

                <a href="https://api.whatsapp.com/send?phone=918448499173" className="mt-6 text-indigo-600 font-medium">
                  {cards[0].cta}
                </a>
              </div>
            </motion.div>

            {/* Right card: content right, image left with badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex flex-col md:flex-row-reverse items-stretch"
            >
              <div className="md:w-1/2 bg-white rounded-md shadow-md p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-600 whitespace-pre-line">Spa in <a href="/spa-in-DLF-Phase-1" className="text-emerald-700 underline hover:text-emerald-800">DLF Phase 1</a>, Phase 2 &amp; Sushant Lok - The Heart of Gurugram</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">{cards[1].desc}</p>
                </div>

                <a href="https://api.whatsapp.com/send?phone=918448499173" className="mt-6 text-indigo-600 font-medium">
                  {cards[1].cta}
                </a>
              </div>

              <div className="md:w-1/2 relative bg-white rounded-md shadow-lg overflow-hidden ml-0 md:ml-6">
                {/* Badge */}
                {cards[1].badge && (
                  <div className="absolute left-4 top-4 z-20">
                    <span className="px-3 py-1 rounded text-sm font-semibold bg-amber-400 text-white shadow">{cards[1].badge}</span>
                  </div>
                )}

                <div className="relative h-64 md:h-full">
                  <Image
                    src={cards[1].img}
                    alt={cards[1].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Left card: image left, content right */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="flex flex-col md:flex-row items-stretch"
            >
              <div className="md:w-1/2 bg-white rounded-md shadow-lg overflow-hidden mr-0 md:mr-6">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={cards[2].img}
                    alt={cards[2].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:w-1/2 bg-white rounded-md shadow-md p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-600">Spa in Sohna Road, Sector 45 &amp; Sector 20 - Affordable Luxury Near You</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-wrap">{cards[2].desc}</p>
                </div>

                <a href="https://api.whatsapp.com/send?phone=918448499173" className="mt-6 text-indigo-600 font-medium">
                  {cards[2].cta}
                </a>
              </div>
            </motion.div>

            {/* Right card: content right, image left with badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex flex-col md:flex-row-reverse items-stretch"
            >
              <div className="md:w-1/2 bg-white rounded-md shadow-md p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-600 whitespace-pre-line">More Than Just a Massage Parlour in Gurgaon - Affordable Luxury Wellness</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">{cards[3].desc}</p>
                </div>

                <a href="https://api.whatsapp.com/send?phone=918448499173" className="mt-6 text-indigo-600 font-medium">
                  {cards[3].cta}
                </a>
              </div>

              <div className="md:w-1/2 relative bg-white rounded-md shadow-lg overflow-hidden ml-0 md:ml-6">
                {/* Badge */}
                {cards[3].badge && (
                  <div className="absolute left-4 top-4 z-20">
                    <span className="px-3 py-1 rounded text-sm font-semibold bg-amber-400 text-white shadow">{cards[3].badge}</span>
                  </div>
                )}

                <div className="relative h-64 md:h-full">
                  <Image
                    src={cards[3].img}
                    alt={cards[3].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* end hotel section */}
      {/* Pricing Section */}
      <section id="Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-emerald-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-emerald-200 opacity-15 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-emerald-500" />
              Affordable Luxury
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Affordable Spa &amp; Massage Packages in Gurgaon – <span className="text-emerald-600">Transparent Pricing</span>
            </motion.h2>
            <motion.p
              className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Every package at Spa in Gurgaon is priced upfront — no hidden charges, no surprise add-ons at checkout. Sessions start at ₹1999, so quality wellness stays within reach whether you're booking a quick outlet visit or a full 5-star hotel package.
            </motion.p>
            <motion.div
              className="flex justify-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </motion.div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-3xl overflow-hidden ${plan.highlight ? "transform lg:-translate-y-4" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Featured badge */}
                {plan.highlight && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 rotate-12 shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className={`h-full flex flex-col border ${plan.highlight ? "border-emerald-500 shadow-xl" : "border-emerald-100 shadow-lg"} rounded-3xl overflow-hidden bg-white`}>
                  <div className={`p-8 pb-6 ${plan.highlight ? "bg-gradient-to-r from-emerald-600 to-emerald-700" : "bg-emerald-800"}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">
                        {plan.icon}
                      </div>
                      <h3 className={`text-2xl font-bold font-serif ${plan.highlight ? "text-white" : "text-emerald-100"}`}>
                        {plan.title}
                      </h3>
                    </div>
                    <p className={`text-lg ${plan.highlight ? "text-emerald-100" : "text-emerald-200"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="p-8 pt-12 pb-10 -mt-6 relative">
                    {/* Price circle */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">
                        {plan.price}
                      </span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-emerald-800">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      // href={plan.ctaLink}
                      href="https://api.whatsapp.com/send?phone=918448499173"
                      className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${plan.highlight
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-xl hover:from-emerald-600 hover:to-emerald-700"
                        : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                        }`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional information */}
          {/* <motion.div 
                    className="mt-16 bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-6 md:p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <div className="bg-emerald-200 w-16 h-16 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Flexible Booking Options</h3>
                        <p className="text-emerald-800 max-w-2xl">
                          All packages include free rescheduling up to 24 hours before your appointment. 
                          <span className="font-semibold"> Group discounts available for 3+ bookings!</span>
                        </p>
                      </div>
                    </div>
                  </motion.div> */}
        </div>
      </section>
      {/* End Pricing Section */}
      {/* //// */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-cursive text-4xl md:text-5xl text-emerald-800"
            style={{ fontFamily: '"Great Vibes", cursive' }}
          >
            100% Hygienic &amp; Professional Spa Centre in Gurgaon - Your Safety First
          </motion.h2>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base"
          >
            From a hot shower to a full steam bath, these are the small details that turn a massage into a complete spa visit.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 items-start justify-items-center">
            {services4.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center w-36"
              >
                <div className="rounded-full p-3 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2 bg-gray-50">
                  <Image width={800} height={600} src={s.image} alt={s.title} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="mt-4 text-lg font-serif text-gray-800">{s.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <a href="/massage-service-in-gurgaon" className="inline-block mt-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition">
              Explore All Services
            </a>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section (kept as-is) */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#faf7f2] to-[#fff]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 px-5 py-2 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-emerald-700 font-medium tracking-wider text-sm">PREMIUM SPA SERVICES</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 font-serif">
            What Makes Us Different From Every Other <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Spa Center in Gurgaon?</span>
          </h2>

          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8">
            <p className="text-emerald-800/80 text-lg md:text-xl leading-relaxed">
              What sets our spa in Gurgaon apart comes down to two things: therapists who are properly trained rather than picked up last-minute, and a treatment room that actually feels calm instead of rushed. We stick to techniques with real evidence behind them for stress relief and muscle recovery, so the benefits build up the more consistently you visit.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">{features3.map((feature, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}</div>
      </section>
      {/* 18+ Section and other sections continue... */}
      {/* ////// */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            {/* <h2 className="text-3xl font-semibold text-slate-800">Benefits</h2> */}
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 font-serif">
              Benefits of Professional Massage in Gurgaon <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">for Your Body &amp; Mind</span>
            </h2>
            <p className="text-slate-600 mt-2 text-lg">Physical &amp; spiritual benefits of our spa treatments</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Physical */}
            <div className="space-y-6">

              <h3 className="text-2xl font-medium text-slate-800">Physical Benefits</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  {/* small decorative svg */}
                  <div className="w-6 h-6 relative flex-shrink-0">
                    <Image
                      src="/images/physicalbenifits1.png"
                      alt="Muscle relief icon"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p className="text-slate-700">Relieves muscle tension — eases stiffness and soreness.</p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 relative flex-shrink-0">
                    <Image
                      src="/images/physicalbenifits2.png"
                      alt="Blood circulation icon"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p className="text-slate-700">Improves blood circulation — boosts oxygen flow.</p>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4 3-6 6.5-6 10a6 6 0 0012 0c0-3.5-2-7-6-10z" />
                  </svg>
                  <p className="text-slate-700">Detoxifies the body — helps flush out toxins via massage.</p>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z" />
                  </svg>
                  <p className="text-slate-700">Strengthens immunity — supports the body’s natural defenses.</p>
                </li>
              </ul>
            </div>

            {/* Right: Spiritual */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-slate-800">Spiritual Benefits</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 3c-2 0-4 1-5 3-1 2-1 4 0 6 1 2 3 4 5 4s4-2 5-4c1-2 1-4 0-6-1-2-3-3-5-3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-slate-700">Promotes inner peace — calms the mind and reduces emotional stress.</p>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 12a9 9 0 0 0 18 0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-slate-700">Balances energy flow — aligns chakras and harmonizes energy.</p>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 12a6 6 0 0 0-6-6H9a6 6 0 0 0-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-slate-700">Deepens meditation — prepares body and mind for spiritual practice.</p>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                    <path d="M12 2v2M12 20v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-slate-700">Cleanses negativity — releases stress and emotional buildup.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="https://api.whatsapp.com/send?phone=918448499173" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium shadow">
              Book Now
            </a>
          </div>
        </div>
      </section>
      {/* process Section */}
      <section className="bg-white/5 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 font-serif">
              Book Your Massage in Gurgaon <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">in 3 Simple Steps</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
              No long forms, no waiting on hold — just three steps between you and a proper massage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-emerald-700/10 to-transparent rounded-2xl p-5 flex flex-col items-start gap-4"
            >
              <div className="w-full flex items-center gap-4">
                <div className="flex-shrink-0 bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald">Book &amp; Consult</h3>
                  <p className="text-xs text-emerald/70">Message or call us with your preferred time. A specialist talks you through your options and helps you pick the treatment that matches what you actually need.</p>
                </div>
              </div>

              <div className="relative w-full h-44 rounded-lg overflow-hidden mt-2">
                <Image
                  src="/images/process1.jpeg"
                  alt="Booking and consultation"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>

              <div className="mt-auto text-sm text-emerald/80">Flexible time slots, personalized recommendations, and strict safety protocols on every visit.</div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-emerald-700/10 to-transparent rounded-2xl p-5 flex flex-col items-start gap-4"
            >
              <div className="w-full flex items-center gap-4">
                <div className="flex-shrink-0 bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald">Select Massage Session</h3>
                  <p className="text-xs text-emerald/70">Choose a session based on what you're dealing with — stress, poor circulation, or sore muscles — and we'll match you with the right style of massage for it.</p>
                </div>
              </div>

              <div className="relative w-full h-44 rounded-lg overflow-hidden mt-2">
                <Image
                  src="/images/process2.jpeg"
                  alt="Relaxing treatment"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>

              <div className="mt-auto text-sm text-emerald/80">Comfortable rooms, calming music, and therapy focused entirely on your needs.</div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-b from-emerald-700/10 to-transparent rounded-2xl p-5 flex flex-col items-start gap-4"
            >
              <div className="w-full flex items-center gap-4">
                <div className="flex-shrink-0 bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald">Get a Massage and Relax</h3>
                  <p className="text-xs text-emerald/70">Your therapist performs the session at your chosen location, and you leave feeling genuinely relaxed — not just for the rest of the day, but noticeably less tense for days after.</p>
                </div>
              </div>

              <div className="relative w-full h-44 rounded-lg overflow-hidden mt-2">
                <Image
                  src="/images/process3.jpeg"
                  alt="Aftercare and relax"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>

              <div className="mt-auto text-sm text-emerald/80">Personalized aftercare notes, plus a special discount on your next booking.</div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <a href="https://api.whatsapp.com/send?phone=918448499173" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
              Book Your Session
            </a>
          </div>
        </div>
      </section>
      {/* ENd process Section */}
      {/* Our Therapy Experts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <motion.p
              className="text-emerald-300 uppercase font-semibold tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Experts Therapy
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet Our Professional <span className="text-emerald-600">Massage Therapists in Gurgaon</span>
            </motion.h2>

            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              World-class therapists dedicated to your wellness.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden text-center relative group"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    loading="lazy"
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                    <h3 className="text-white text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-yellow-300">{member.designation}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4 pb-4">
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaFacebookF /></a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaInstagram /></a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaTwitter /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* End Our Therapy Experts */}
      {/* FAQ Section - fixed apostrophe here by using HTML entity */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-14"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-emerald-500" />
              Questions? We&apos;re here to help
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4">
              Frequently Asked Questions About <span className="text-emerald-600">Massage &amp; Spa Services in Gurgaon</span>
            </h2>
            <p className="text-emerald-800 max-w-2xl text-lg">
              Everything you need to know about our luxurious spa services and how to book them.
            </p>
            <div className="flex md:justify-start justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left Side FAQ Content */}
          <div>


            {/* FAQ Accordion */}
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 p-2 bg-emerald-50 rounded-lg">{faq.icon}</div>
                      <h3 className="text-lg md:text-xl font-medium text-emerald-900 group-hover:text-emerald-700 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-emerald-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-emerald-50">
                          <p className="text-emerald-700">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image width={736} height={1026} src="/images/Professional European.jpeg"
              alt="Spa In Gurgaon - frequently asked questions"
              className="rounded-2xl shadow-lg object-cover w-full max-h-[700px]"
            />
          </motion.div>
        </div>
      </section>
      {/* /// */}
      {/* <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
         
          <div>
            <      h3
              className="text-4xl font-semibold text-emerald-700 mb-6"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {items.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={openIndex === i}
                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {i + 1}. {f.q}
                    </span>

                    <span className="ml-4 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 transform transition-transform duration-200 ${
                          openIndex === i ? "rotate-45 text-emerald-700" : "text-gray-500"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[i] = el)}
                    style={{
                      maxHeight: "0px",
                      overflow: "hidden",
                      transition: "max-height 300ms ease",
                    }}
                    className="px-5 pb-4 text-gray-700"
                  >
                    <p className="text-sm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
              <Image width={735} height={557} src="/images/From soothing Swedish.jpeg" alt="Spa FAQ" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section> */}
      {/* Footer / CTA / Other components */}


    </main>

  );
}


