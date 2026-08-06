'use client';

import React, { useState, useEffect } from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import { FaSpa, FaHotel, FaCrown, FaCheckCircle, FaStar,FaHotTub } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
  import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
  import { AnimatePresence } from "framer-motion";
  import { FaTelegram } from 'react-icons/fa';
  import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
  import { Sparkles } from 'lucide-react';
  import { Camera } from "lucide-react";
  import { MapPin } from 'lucide-react';
  import { Flower2, Bath, HeartHandshake } from "lucide-react";
  
 


// ✅ Load Google Fonts
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
export default function Pricpage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
            setIsVisible(true);
          }, []);
        
        const [activeIndex, setActiveIndex] = useState(null);
          const toggleFAQ = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-section');
      if (element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const faqs = [
      
      {
        question: "What is your first-visit spa offer in Delhi?",
        answer: "Our first-visit special starts at ₹1499, which includes a relaxing full-body massage and shower. This limited offer is available across all outlets and designed for guests who want premium service at an affordable spa price in Delhi.",
        icon: <FaSpa className="text-teal-600" />
      },
      {
        question: "Do you provide luxury packages at your Spa in Gurgaon?",
        answer: " Yes — our Luxury Spa in Gurgaon features exclusive packages from ₹2999 onwards, including aromatherapy, couple massages, and B2B sessions. All services are delivered by certified therapists in a 5-star ambience.",
        icon: <FaHandSparkles className="text-teal-600" />
      },
      
      {
        question: "What are your Thai Massage prices in Delhi?",
        answer: "Authentic Thai massage price in Delhi begins from ₹2299. Conducted by trained Thai therapists, this therapy relieves deep muscle tension and promotes flexibility. Premium versions with herbal compress add-ons are also available.",
        icon: <FaLeaf className="text-teal-600" />
      },
      {
        question: "What are your prices for Body Spa in Paharganj?",
        answer: "The Body Spa in Paharganj offers first-visit deals from ₹1499 and regular sessions starting ₹1999. Treatments include Thai, full-body, and aroma therapies performed by skilled Indian and foreign therapists.",
        icon: <FaSpa className="text-teal-600" />
      },
      {
            question: "Do prices vary between Delhi and Gurgaon outlets?",
            answer: "Slightly — Delhi spa prices start from ₹1499, while Gurgaon packages may vary depending on the location, therapist type, and duration. Both ensure the same premium quality and hygiene standards.",
            icon: <FaHotTub className="text-teal-600" />
          },
          {
                question: "What is your first-visit spa offer in Delhi?",
                answer: "Our first-visit special starts at ₹1499, which includes a relaxing full-body massage and shower. This limited offer is available across all outlets and designed for guests who want premium service at an affordable spa price in Delhi.",
                icon: <FaSpa className="text-teal-600" />
              },
    ];

  const pricingPlans = [
      {
        title: "Spa Outlet",
        price: "₹1999/-",
        description: "Perfect for individual relaxation sessions",
        features: ["Oil Massage", "Cream Massage", "Dry Massage", "30 min Consultation"],
        highlight: false,
        ctaLink: "http://wa.link/njldxn",
        icon: <FaSpa className="text-emerald-500" />
      },
      {
        title: "Hotel Outlet",
        price: "₹13999/-",
        description: "Premium experience with luxury amenities",
        features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Suite", "Complimentary Refreshments", "90 min Session"],
        highlight: true,
        ctaLink: "http://wa.link/u061wi",
        icon: <FaHotel className="text-emerald-500" />
      },
      {
        title: "Premium Package",
        price: "₹4999/-",
        description: "Comprehensive spa experience with added treatments",
        features: ["Massage + Steam", "Aromatherapy", "Facial Session", "60 min Session"],
        highlight: false,
        ctaLink: "#",
        icon: <FaCrown className="text-emerald-500" />
      }
    ];
    const outlets = [
  {
    title: 'Aerocity',
    description: 'Get five-star comfort with Spa in Gurgaon with the therapists in the best hotels in Aerocity who provide high-quality massage to the travelers to get immediate rejuvenation.',
    image: '/images/RoseateHouse.jpg',
    link: 'https://api.whatsapp.com/send?phone=918448499173',
  },
  {
    title: 'New Friends Colony (NFC)',
    description: 'The NFC outlet of Spa in Gurgaon provides a personalized, relaxing experience to clients in search of relaxing but at low-cost massage services in South Delhi.',
    image: '/images/hotel2.jpg',
    link: 'https://api.whatsapp.com/send?phone=918448499173',
  },
  {
    title: 'Connaught Place',
    description: 'Our Connaught Place team offers full-body and Thai massage in the very center of Delhi at reasonable prices without reaching out to luxury.',
    image: '/images/hotel3.webp',
    link: 'https://api.whatsapp.com/send?phone=918448499173',
  },
  {
    title: 'Grand Vasant Kunj',
    description: 'Relax in our superb spa treatments at Vasant Kunj. Any treatment is a sign of classiness, comfort, and affordable luxury among contemporary adults.',
    image: '/images/Radisson_Blu_MBD_Hotel,_Noida.jpg',
    link: 'https://api.whatsapp.com/send?phone=918448499173',
  },
];
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
{/* Our Process */}
  const processSteps = [
  {
    number: '01',
    title: 'Quick Online Booking',
    description: 'You can book your spa in minutes via our online system or using WhatsApp. On-site verification, hassle-free payment, and time-bending.',
    image: '/images/fpkdl.com_960_1760684372_close-up-hand-holding-ice-cream-table_1048944-25719661.jpg',
  },
  {
    number: '02',
    title: 'Choose Your Therapist',
    description: 'Choose among our options of licensed professionals who specialize in Thai, full body, and aromatherapy massage in the city of Delhi NCR.',
    image: '/images/OIP (1).webp',
  },
  {
    number: '03',
    title: 'Confirm & Relax',
    description: 'After verification, spend your time in your favorite spa outlet, hotel or home. Pure relaxation made simple.',
    image: '/images/fpkdl.com_960_1758980912_relaxing-spa-area-with-lounge-chairs-pool-waterfall_1189569-10802.jpg',
  },
];
{/* End Our Process */}

  return (
    
    <main>
    {/* Banner */}
   {/* banner */}
                  <header className="relative w-full h-[50vh] md:h-[70vh] min-h-[340px] flex items-center">
         {/* Background image - place your image at /public/images/hero-banner.jpg */}
         <div className="absolute inset-0 -z-20">
           <Image
             src="/images/image876.png"
             alt="Luxury spa background"
             fill
             sizes="(max-width: 1024px) 100vw, 50vw"
             style={{ objectFit: 'cover', objectPosition: 'center' }}
             priority
           />
           {/* dark overlay to keep text readable */}
           <div className="absolute inset-0 bg-black/35 backdrop-blur-sm -z-10" />
           {/* soft gradient vignette */}
           <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/30" />
         </div>
   
         <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
           <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
             {/* Left content */}
             <div className="lg:col-span-7">
               <motion.h1
                 initial={{ opacity: 0, y: -12 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
               >
                 Enjoy Luxury <span className="text-emerald-300">Massage at Affordable</span>
                 <br /> Spa Price in <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-500">Delhi NCR</span>
               </motion.h1>
   
               <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.2, duration: 0.6 }}
                 className="mt-6 max-w-2xl text-white"
               >
                 Enjoy the luxuries of the world without straining the budget. Spa in Gurgaon provides high-quality massage options at reasonable prices of spa in the region of Delhi NCR.
               </motion.p>
   
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 className="mt-8 flex flex-wrap gap-4"
               >
                 <a href="#book" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white px-6 py-3 rounded-full shadow-lg hover:scale-[1.02] transform transition">
                   Book a Consultation
                 </a>
   
                 <a href="#services" className="inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-gray-700 hover:shadow-md transition">
                   View Services
                 </a>
               </motion.div>
   
               
             </div>
   
             {/* Decorative right panel with card stack - purely visual on banner */}
             <div className="lg:col-span-5 hidden lg:block">
               <motion.div
                 initial={{ opacity: 0, scale: 0.98 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6 }}
                 className="relative w-full max-w-[360px] ml-auto"
               >
                 <div className="absolute -right-8 -top-8 w-72 h-44 rounded-2xl bg-white/6 border border-white/10 backdrop-blur-sm shadow-xl transform rotate-3" />
                 <div className="absolute -right-4 top-6 w-72 h-44 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-sm shadow-2xl transform -rotate-2" />
   
                 <div className="relative z-10 bg-white/95 rounded-2xl shadow-2xl p-4">
                   <div className="w-full h-44 rounded-lg overflow-hidden bg-gray-100">
                     {/* replace with small preview image if you want */}
                     {/* <div className="w-full h-full flex items-center justify-center text-gray-300">Profile Preview</div> */}
                     <Image
             src="/images/process3.jpeg"
             alt="Luxury spa background"
             fill
             sizes="(max-width: 1024px) 100vw, 50vw"
             style={{ objectFit: 'cover', objectPosition: 'center' }}
             priority
           />
                   </div>
   
                   <div className="mt-3">
                     <div className="text-sm font-semibold text-gray-800">Ari • 26</div>
                     <div className="text-xs text-gray-500 mt-1">Events • Travel • Dining</div>
                     <div className="mt-3 flex gap-2">
                       <button className="flex-1 rounded-full py-2 text-sm bg-gradient-to-r from-emerald-500 to-emerald-500 text-white">Request</button>
                       <button className="rounded-full py-2 px-4 text-sm bg-gray-100 text-gray-700">Details</button>
                     </div>
                   </div>
                 </div>
               </motion.div>
             </div>
           </div>
         </div>
   
         {/* subtle bottom wave divider */}
         <div className="absolute left-0 right-0 bottom-0 -mb-1">
           <svg viewBox="0 0 1440 60" className="w-full h-12 block" preserveAspectRatio="none">
             <path d="M0,20 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="rgba(255,255,255,0.9)" />
           </svg>
         </div>
       </header>  
           {/* end banner */} 
    <div className="w-full overflow-x-hidden bg-white relative">
      {/* End Banner */}

    <section id="services-section" className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-emerald-50 to-white" >
      
      {/* Decorative Background (applies to full page) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-emerald-200 mix-blend-multiply"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-emerald-100 mix-blend-multiply"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-emerald-300 mix-blend-multiply opacity-40"></div>
      </div>
      {/* Floating ✿ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-200"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 16}px`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, 40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ✿
          </motion.div>
        ))}
      </div>

      {/* Amber Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-700/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-800/5 to-transparent"></div>
      </div>
{/* Section Title */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center text-emerald-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
         Our Spa Price in Gurgaon
        </motion.h2>
        <motion.div
          className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transformOrigin: 'center' }}
        ></motion.div>
        <motion.p
          className="mt-10 text-center text-xl md:text-2xl text-emerald-800 font-light leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Spa in Gurgaon offers luxurious spa services in Gurgaon at affordable rates tailored to all the relaxation requirements and lifestyle.
        </motion.p>
        {/* Price List Section */}
        <section className="relative z-10 mt-16 max-w-3xl mx-auto px-4">
          <motion.ul
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { title: "B2B Therapy", price: "₹1999", duration: "60 Minutes" },
              { title: "Ayurvedic Massage", price: "₹1999", duration: "60 Minutes" },
              { title: "Traditional Thai Massage", price: "₹1499", duration: "60 Minutes" },
              { title: "Sandwich Massage", price: "₹1999", duration: "60 Minutes" },
              { title: "Hotel Spa", price: "₹15999", duration: "60 Minutes" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-emerald-200 pb-4"
              >
                <div>
                  <h4 className="text-xl font-semibold text-emerald-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-emerald-700 font-light mt-1">{item.duration}</p>
                </div>
                <span className="text-emerald-600 text-lg font-medium mt-2 md:mt-0">{item.price}</span>
              </li>
            ))}
          </motion.ul>
        </section>
        {/* End Price List Section */}
        {/* CTA Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/30">
            View All Services
          </button>
          <p className="mt-6 text-emerald-700 max-w-xl mx-auto">
            Book personalized massage sessions, designed treatments, and a relaxation atmosphere at a price that makes wellness an unchallenged daily indulgence.
          </p>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-10 h-10 z-10 border-t border-l border-emerald-400/50"></div>
      <div className="absolute top-6 right-6 w-10 h-10 z-10 border-t border-r border-emerald-400/50"></div>
      <div className="absolute bottom-6 left-6 w-10 h-10 z-10 border-b border-l border-emerald-400/50"></div>
      <div className="absolute bottom-6 right-6 w-10 h-10 z-10 border-b border-r border-emerald-400/50"></div>
    </section>  
    </div>
    {/* Pricing Section */}
                <section id= "Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
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
                      Our Package for Spa <span className="text-emerald-600">Price in Gurgaon for Every Outlet</span>
                    </motion.h2>
                    <motion.p
                      className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                     The Gurgaon outlets of each Spa have individualized packages that unite solace, attention, and low cost all in a singular relaxing moment.
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
                              href={plan.ctaLink}
                              className={`mt-auto block text-center py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                                plan.highlight 
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
      {/* content */}
            <section className="bg-gradient-to-br from-emerald-50 to-stone-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 opacity-10">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path d="M50,15 C65,15 80,25 85,40 C90,55 85,70 70,85 C55,90 40,85 25,70 C15,55 15,40 25,25 C30,20 40,15 50,15 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="absolute bottom-20 right-10 opacity-10 rotate-45">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <path d="M40,10 C50,10 60,15 65,25 C70,35 65,45 55,55 C45,60 35,65 25,55 C15,45 15,35 25,25 C30,20 35,15 40,10 Z" fill="none" stroke="#4a5a5a" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="max-w-[95%] mx-auto">
              {/* Section header */}
              <div className="text-center mb-16">
                <motion.div
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 px-5 py-2 rounded-full mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-emerald-700 font-medium tracking-wider">PREMIUM EXPERIENCE</span>
                          </motion.div>
                          
                          <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 font-serif"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            Enjoy Full Body Massage <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">at Affordable Massage Price in Gurgaon</span>
                          </motion.h2>
                <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
              </div>
              
      
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Image & Content */}
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl z-10">
                    <div className="bg-gradient-to-br from-stone-50 to-emerald-50 p-1 rounded-2xl">
                      <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                          <img
                              src="/images/fpkdl.com_960_1757505385_young-woman-relaxing-back-massage-spa_151013-21109.jpg" // Change path accordingly
                              alt="Premium Body Spa"
                              className="w-full h-full object-cover rounded-xl"
                            />
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                          <div className="absolute top-4 right-4 bg-emerald-700 text-white text-sm px-3 py-1 rounded-full">
                            Most Popular
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-serif font-bold text-stone-800">Premium Body Spa</h3>
                            <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                              <span className="font-bold">₹1999</span> First Visit
                            </div>
                          </div>
                          
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                              <span className="text-emerald-600 mr-2">✓</span>
                              <span className="text-stone-700">Couple Massage</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-emerald-600 mr-2">✓</span>
                              <span className="text-stone-700">Jacuzzi Bath</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-emerald-600 mr-2">✓</span>
                              <span className="text-stone-700">Private Room</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-emerald-600 mr-2">✓</span>
                              <span className="text-stone-700">Oil & Cream Massage</span>
                            </li>
                            <li className="flex items-center">
                              <span className="text-emerald-600 mr-2">✓</span>
                              <span className="text-stone-700">Aromatherapy</span>
                            </li>
                          </ul>
                          
                          <button className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full z-0"></div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-stone-200 rounded-full z-0"></div>
                </motion.div>
      
                {/* Right Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="max-w-lg">
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                     Spa in Gurgaon provides Gurgaon full body massage luxurious and at affordable prices, it brings serenity, peace and comfort to your well being routine. Our licensed massage practitioners apply high quality oils, low pressure, and stroking movements to tighten the muscles and increase blood circulation. Every session is customized so that it suits your needs as a body, whereby you are fully relaxed and satisfied. Using flexible timings, trained experts and exquisite locations, we render good quality spa to all in Gurgaon without losing quality and services.
                    </p>
                    
                    
                    
                    <p className="text-stone-600 mb-6 leading-relaxed">
                      We specialize in world-class therapies including <span className="font-medium text-stone-800">hot stone massage</span>, 
                      <span className="font-medium text-stone-800"> couple experiences</span>, <span className="font-medium text-stone-800">Thai techniques</span>, 
                      and <span className="font-medium text-stone-800">signature oil treatments</span> - all delivered in beautifully 
                      designed private sanctuaries.Escape the city&apos;s hustle and indulge in a tranquil haven where serenity meets sophistication. 
                      Our premium spa is nestled within Aerocity&apos;s most luxurious 5-star hotels, offering an oasis 
                      of calm in the heart of Delhi.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-emerald-600 text-2xl mb-2">★</div>
                        <h4 className="font-medium text-stone-800">starting At 1999</h4>
                        <p className="text-sm text-stone-600 mt-1">5-star rated luxury spa</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-emerald-600 text-2xl mb-2">🙎🏼‍♀️</div>
                        <h4 className="font-medium text-stone-800">Foreigner Therapist</h4>
                        <p className="text-sm text-stone-600 mt-1">Steam, sauna & jacuzzi</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-emerald-600 text-2xl mb-2">👩🏻‍❤️‍💋‍👨🏼</div>
                        <h4 className="font-medium text-stone-800">Couples Welcome</h4>
                        <p className="text-sm text-stone-600 mt-1">Private couple suites</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                        <div className="text-emerald-600 text-2xl mb-2">🌿</div>
                        <h4 className="font-medium text-stone-800">Organic Products</h4>
                        <p className="text-sm text-stone-600 mt-1">Natural & sustainable</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-gradient-to-r from-stone-800 to-stone-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        View Treatments
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Book Appointment
                      </button>
                    </div>
                  
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
            {/* end content */}
            
            {/* //// */}
     <section className="bg-gradient-to-br from-emerald-50 to-stone-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
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
                      Experience the Luxury <span className="text-emerald-600">at Cost-Effective Spa Price in Gurgaon</span>
                    </motion.h2>
                    <motion.p
                      className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      valuable wellness treatments at prices that can be afforded at any spa.
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
        {/* Heading */}
       

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center text-center bg-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <Flower2 className="w-12 h-12 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">Aroma Therapy</h3>
            <p className="text-gray-900">
             Envelop yourself in calming perfumes and soft feel. Our aromatherapy massage will be performed using essential oils that relax your mind, relieve stress, and improve mood and refresh your senses in true relaxation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <Bath className="w-12 h-12 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">Luxury Spa Bath</h3>
            <p className="text-gray-900">
             Incidentally enjoy a refreshing spa bath. Warm water, natural salts and aromatic formulas clean your skin and make it soft, moist and shiny.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-emerald-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <HeartHandshake className="w-12 h-12 text-emerald-600 mb-3" />
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">Healing Massage</h3>
            <p className="text-gray-900">
             Experience tension this way by having our therapists attend to areas of fatigue. Healing Massage improves the flexibility, regains the balance and replenishes your own natural energy of the body.
            </p>
          </div>

        </div>
      </div>
    </section>
            {/* //// */}
      
            {/* /////? */}
    <section className="relative bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 leading-tight">
            Best Massage Centre for <span className="text-emerald-600">Affordable Thai Massage Price in Gurgaon</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Spa in Gurgaon provides natural Thai massage at reasonable rates and in Gurgaon to individuals who want to experience pure relaxation and body adjustment. The use of traditional Thai stretching and acupressure techniques by our experienced therapists helps alleviate muscle tightness, increase blood flow, and improve flexibility. Each Thai session is tailored to your beat and your level of comfort.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            The relaxing atmosphere, sweet oils, and professional attitude make it a full-time mind-body revitalization treatment at a reasonable cost. It does not have to be an expensive affair to relax; hence, it is just right at the Spa in Gurgaon.
          </p>
          {/* <p className="text-gray-600 text-lg leading-relaxed">
            A Delhi Girl is more than just a style icon — she’s the perfect
            blend of elegance and boldness. From morning coffee dates in Khan
            Market ☕ to vibrant nightlife in Hauz Khas ✨, she knows how to own
            every moment. Her lifestyle is a mix of fashion, culture, and
            unstoppable confidence.
            
          </p> */}

          {/* Highlights */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
  <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    <Flower2 className="w-10 h-10 text-emerald-600 mb-2" />
    <p className="font-semibold text-gray-800">Relaxing Aroma</p>
  </div>

  <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    <Bath className="w-10 h-10 text-emerald-600 mb-2" />
    <p className="font-semibold text-gray-800">Luxury Spa</p>
  </div>

  <div className="flex flex-col items-center text-center bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    <HeartHandshake className="w-10 h-10 text-emerald-600 mb-2" />
    <p className="font-semibold text-gray-800">Healing Touch</p>
  </div>
</div> */}
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/fpkdl.com_750_1758980857_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg" // apni image ka path daalna
              alt="Delhi Girl Lifestyle"
              width={600}
              height={600}
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
            #DelhiVibes
          </div>
        </motion.div>
      </div>
    </section>
    
            {/* Our Process */}
               <section className="w-full py-10 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 px-5 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-emerald-700 font-medium tracking-wider">Process</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Book  Massage Session <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">at an Affordable Massage Price in Delhi</span>
          </motion.h2>
          
          {/* <motion.p
            className="text-emerald-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Located in premium 5-star properties across Delhi – enjoy serenity, comfort, and personalized spa experiences at every outlet.
          </motion.p> */}
          
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
          </motion.div>
        </motion.div>
              
                  {/* Process Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="relative bg-white shadow-lg rounded-2xl px-6 pt-24 pb-10 text-center hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        {/* Step Number */}
                        <div className="absolute top-4 left-4 text-3xl font-bold text-emerald-300 opacity-30 z-0">
                          {step.number}
                        </div>
              
                        {/* Image */}
                        <div className="relative w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-tr from-rose-200 via-emerald-100 to-rose-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                          <Image
                            src={step.image}
                            alt={step.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>

              
                        {/* Title */}
                        <h4 className="text-2xl font-semibold text-emerald-800 mb-4 font-serif">
                          {step.title}
                        </h4>
              
                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-base">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
               </section>
             {/* End Our Process */}
             {/* About Us Section */}
            <section className="w-full py-16 bg-gradient-to-b from-white to-yellow-50">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 font-serif">
                   Massage with Full Service Price in Delhi. Get All-in-One Relaxation at an 
                  Affordable Price

                  </h2>
                  <p className="text-gray-700 text-lg">
                    Step into a world of peace at our Delhi body spa, where luxury meets comfort. From calming interiors to soothing treatments, every detail is designed to relax your body and refresh your mind.
                     From full-body massages to specialized therapies, each session is designed to relax the mind, soothe the body, and uplift the spirit.
                     Step into a world of peace at our Delhi body spa, where luxury meets comfort.
                  </p>
                  
                  <p className="text-gray-700 text-lg">
                    Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
                     From full-body massages to specialized therapies, each session is designed to relax the mind, soothe the body, and uplift the spirit.
                     Whether you seek relaxation, stress relief, or wellness therapy, Luxury Body Spa is your ultimate destination for holistic care and comfort.
                  </p>
                </motion.div>
      
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/new5.jpeg" alt="Luxury Spa Room" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/spaExper2.webp" alt="Massage Session" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
            </section>
            {/* outlate */}
            <section className="py-10 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Luxury Outlets to <span className="text-emerald-600">Claim a Massage at an Affordable Spa Price in Gurgaon</span>
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Discover our high-end spa in the most upscale areas of Delhi NCR - at your favorite places of rest.
                  </motion.p>
                </div>
            
                {/* Grid Layout - 2 per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {outlets.map((outlet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-3xl shadow-xl overflow-hidden group"
                    >
                      <div className="relative">
                        <Image
                          src={outlet.image}
                          alt={outlet.title}
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10"></div>
                      </div>
            
                      <div className="p-6 text-center">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-2 font-serif">
                          {outlet.title}
                        </h3>
                        <p className="text-gray-700 text-base mb-4">
                          {outlet.description}
                        </p>
                        <a 
                        href="https://t.me/Tanuspa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                      >
                        <FaTelegram className="text-xl mr-3" />
                        Chat On Telegram
                      </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            {/* End outlate */}
            {/* Our Therapy Experts */}
                  <section className="py-16 px-4 bg-gradient-to-br from-[#FFF9F0] via-[#fcf5e9] to-[#f9f1e2]">
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
                        International<span className="text-emerald-600"> Therapists at affordable Price</span>
                      </motion.h2>
                      
                      <motion.p
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                         Meet our certified spa professionals dedicated to your relaxation and rejuvenation.
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
     {/* F&Q Section */}
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
                Frequently Asked <span className="text-emerald-600">Questions</span>
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
                        className={`w-6 h-6 text-emerald-500 transition-transform duration-300 ${
                          activeIndex === index ? "rotate-180" : ""
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
            <img
              src="/images/Professional European.jpeg"
              alt="Spa FAQ Illustration"
              className="rounded-2xl shadow-lg object-cover w-full max-h-[700px]"
            />
          </motion.div>
        </div>
      </section>   
    
    </main>
  );
}