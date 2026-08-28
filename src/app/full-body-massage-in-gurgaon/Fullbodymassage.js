'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Image from 'next/image';
import { Check } from "lucide-react";
// import WhatsappFloat from '../components/WhatsappFloat';
//   import WhatsappFloat from '../../components/WhatsappFloat';
import { Spa, SpaOutlined, SelfImprovement, HealthAndSafety, Air } from '@mui/icons-material';
import { ArrowRight } from 'lucide-react';
import { FaCrown } from 'react-icons/fa';
import { FaSpa, FaHotel, FaStar, FaCheckCircle, FaMapSigns, FaHeartbeat, FaRegSmile, } from "react-icons/fa";
import luxuryhotelpartners from '../components/LuxuryHotelPartners';
import LuxuryHotelShowcase from '../components/LuxuryHotelShowcase';
import { FaTelegram } from 'react-icons/fa';
import { FaLeaf, FaHotTub, FaHandSparkles } from "react-icons/fa";
import { AnimatePresence } from 'framer-motion';

import {
  FaHands,
  FaAward,
  FaTelegramPlane
} from 'react-icons/fa';

// Game icons (Gi)
import { GiLotus } from 'react-icons/gi';
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-montserrat'
});
const services = [
  {
    title: "Swedish Relaxation Therapy",
    image: "/images/fpkdl.com_960_1760598531_woman-is-being-massaged-by-woman_133748-19192.jpg",
    description: "This massage type at Spa in Gurgaon uses soft hand movements to make tight muscles loose. It helps blood move around your body better and makes you feel peaceful. This works great if you are trying massage for the first time or if you want something gentle on your body.",
    // duration: "60 min"
  },
  {
    title: "Deep Tissue Rejuvenation",
    image: "/images/cc.jpg",
    description: "This massage goes deep into your muscle layers to fix pain that has been there for a long time. Spa in Gurgaon therapists press on specific spots with the right amount of force. This helps your muscles heal and takes away stiffness that bothers you daily.",
    // duration: "90 min"
  },

  {
    title: "Aromatherapy Bliss",
    image: "/images/woman-spending-time-spa-getting-exfoliation-massage.jpg",
    description: "It is a service that combines special plant oils and massage movements. Spa in Gurgaon is selective about oils, touch techniques that suit you. This assists your body in relaxing, as well as giving your emotions a sense of balance and calmness.",
    // duration: "60 min"
  },
  {
    title: "Hot Stone Therapy",
    image: "/images/woman-giving-massage-another-woman-lying-down.jpg",
    description: "This massage performed by therapists at Spa in Gurgaon involves placing warm and flat stones on your body. They squash deep into your muscles and the heat penetrates your muscles. This eliminates the stress in your body and makes you feel absolutely at ease.",
    // duration: "60 min"
  }
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const journey = [
  {
    step: "1",
    title: "Book & Consult",
    text: "Call us or use our website to fix your appointment time. Talk to our therapists about what you want. They will help you pick the massage method that suits your body.",
    icon: <FaMapSigns className="w-6 h-6" />,
    img: "/images/fpkdl.com_750_1758980084_composition-various-objects-used-spa-treatments_138888-664.jpg",
  },
  {
    step: "2",
    title: "Select Massage Session",
    text: "Pick which type of full body massage you want. Decide how long you want the session to be. Choose where you want it - at our spa, at a hotel, or at your house. Make it exactly how you want it.",
    icon: <FaHeartbeat className="w-6 h-6" />,
    img: "/images/fpkdl.com_750_1758981403_modern-house-bed-room-interior-design_1143383-1039.jpg",
  },
  {
    step: "3",
    title: "Get Massage and Relax",
    text: "Our trained therapists will come to give you the massage. They work at spa locations, hotels, or your home. You will feel deeply relaxed and comfortable during the whole session.",
    icon: <FaRegSmile className="w-6 h-6" />,
    img: "/images/fpkdl.com_960_1758962771_young-relaxing-woman-getting-massage-with-cosmetic-oil-spa-salon-background_852367-2763.jpg",
  },
];
const cards3 = [
  {
    id: "intl",
    title: "International Therapists",
    subtitle: "Authentic techniques from around the world",
    bullets: [
      "Russian relaxation & meditation",
      "Thai herbal compress & rituals",
      "Uzbek deep-release techniques",
    ],
    duration: "60–90 min",
    price: "From ₹2,800",
    icon: <FaHands className="w-7 h-7" />,
    image: "/images/image12.jpg",
    accent: "bg-gradient-to-br from-purple-300 to-rose-200",
  },
  {
    id: "body",
    title: "Signature Bodywork",
    subtitle: "Precision + intuition for lasting relief",
    bullets: ["Deep tissue sculpting", "Lymphatic flow therapy", "Hot stone rituals"],
    duration: "75–90 min",
    price: "From ₹3,200",
    icon: <GiLotus className="w-7 h-7" />,
    image: "/images/Pedras de massagem de spa com velas e toalhas em tapete de bambu conceito de meditação _ imagem Premium gerada com IA.jpeg",
    accent: "bg-gradient-to-br from-amber-200 to-yellow-100",
  },
  {
    id: "eco",
    title: "Eco-Luxury Wellness",
    subtitle: "Sustainably sourced, planet-first",
    bullets: ["Zero-waste products", "Organic linens & extracts", "Carbon neutral operations"],
    duration: "60–120 min",
    price: "From ₹2,500",
    icon: <FaLeaf className="w-7 h-7" />,
    image: "/images/fpkdl.com_960_1758980524_tranquil-oasis-with-plush-massage-table-adorned-with_1126694-2523.jpg",
    accent: "bg-gradient-to-br from-emerald-200 to-green-100",
  },
  {
    id: "home",
    title: "Home & Hotel Experience",
    subtitle: "5-star service — wherever you are",
    bullets: ["Chef-trained therapists for hotels", "Private-event wellness", "Corporate packages"],
    duration: "3–6 hours",
    price: "From ₹8,500",
    icon: <FaHotel className="w-7 h-7" />,
    image: "/images/fpkdl.com_960_1758981740_exterior-view-bellagio-caesars-palace-hotel-las-vegas-nevada-march-6-2024_943860-2321.jpg",
    accent: "bg-gradient-to-br from-sky-200 to-indigo-100",
  },
];

{/* End Our Process */ }

export default function Fullbodymassage() {
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
      question: "How often should I book a full body massage in Gurgaon?",
      answer: "The frequency of massage will be determined by the level of stress, tightness of your muscles, and the health objectives. Spa in Gurgaon suggests getting a massage every week or every two weeks. This gives you the best relaxation and keeps you healthy.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Is full body massage safe for everyone?",
      answer: "Yes, it is safe. Spa in Gurgaon changes how hard we press and which technique we use based on your health problems. This makes the therapy safe and helpful for you.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Can I get full body massage at home in Gurgaon?",
      answer: "Yes, you definitely can. Spa in Gurgaon's spa home service brings trained therapists to your house. They bring all equipment and give you professional massage at your location.",
      icon: <FaHotTub className="text-teal-600" />
    },
    {
      question: "Does full body massage help with chronic pain?",
      answer: "Yes, it helps with pain that stays for a long time. The massage methods work on tight spots and remove stiffness. Your muscles feel less sore. When you get regular sessions, your body becomes more flexible and pain reduces.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "How long is a typical full body massage session?",
      answer: "A normal session can be anywhere from 60 minutes to 120 minutes long. Spa in Gurgaon makes each session the right length for you. This gives you complete relaxation and therapy that targets your problem areas.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Can full body massage improve sleep and energy?",
      answer: "Yes, the therapy at Spa in Gurgaon helps you sleep better. It makes stress go away. You feel more energetic and your mind can focus better on things.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
  ];

  const [activeHotel, setActiveHotel] = useState(1);
  const highlights = [
    {
      icon: <Spa className="text-emerald-600" />,
      title: "Traditional Technique",
      description: "Authentic Swedish methods using long gliding strokes"
    },
    {
      icon: <SelfImprovement className="text-emerald-600" />,
      title: "Deep Relaxation",
      description: "Reduces stress hormones by up to 30% in a single session"
    },
    {
      icon: <HealthAndSafety className="text-emerald-600" />,
      title: "Muscle Tension Relief",
      description: "Targets muscle knots and improves flexibility"
    },
    {
      icon: <Air className="text-emerald-600" />,
      title: "Improved Circulation",
      description: "Enhances blood flow and oxygen delivery to tissues"
    }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    {
      title: "Spa in Gurgaon: Best Massage Centre For Full Body Massage in Gurgaon",
      description1:
        "The best full body massage services are offered by spa in Gurgaon. We have well-trained therapists who are familiar with various styles of massage. Each session is personalized. Our style is Swedish, deep tissue, aromatherapy oil and hot stone. You may visit our outlets, have a massage at hotels or have spa home service at Gurgaon. Stress is released, muscles feel better, and clients are fully relaxed. We have beautiful places, treat our patients personally, and our therapists are experienced professionals. Any full body massage in Spa Gurgaon makes you feel refreshed, rejuvenated and particularly nurtured.",
      image: "/images/process1.jpeg",
    },
    // {
    //   title: "Ayurvedic Massage",
    //   description1:
    //     "Ayurvedic oil massage, also known as Abhyanga, uses herbal oils that balance the body's doshas—Vata, Pitta, and Kapha. The warm oil is massaged into the skin to energize vital points, improve blood circulation, and promote internal healing. This therapy not only revitalizes the skin but also clears toxins stored in deeper tissues.",
    //   description2:
    //     "Perfect for individuals suffering from stress, muscle pain, or hormonal imbalance, this massage harmonizes body rhythms and enhances immunity. The continuous motion and warm oil offer a meditative experience, calming the nervous system and stimulating marma points for rejuvenation and internal balance.",
    //   image: "/images/SpecializedTreatments.jpg",
    // },
    // {
    //   title: "Full Body Relief",
    //   description1:
    //     "Our full body oil massage is a holistic experience combining techniques like kneading, long strokes, and pressure point activation. It aims to release deep-seated tension, ease joint stiffness, and soothe sore muscles. This deeply immersive treatment melts away physical stress while reviving your body's natural healing process.",
    //   description2:
    //     "Whether you’ve had a long week or simply need a reset, this therapy will leave you feeling light, centered, and refreshed. Regular sessions can improve flexibility, deepen sleep, and support emotional stability. It's the ultimate way to recharge your energy and reconnect with inner peace.",
    //   image: "/images/2147816920.jpg",
    // },
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
      features: ["Foreigner Therapist", "5 Start Property", "Private Sweets", "Aromatherapy", "120 min Session"],
      highlight: false,
      ctaLink: "#",
      icon: <FaCrown className="text-emerald-500" />
    }
  ];


  return (
    <main>

      <div className="font-sans overflow-hidden">
        <section className="relative w-full h-[70vh] flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/images/women-posing-robes-spa.jpg" // apni spa banner image ka path
            alt="Luxury Body Spa"
            fill
            priority
            className="object-cover brightness-75"
          />

          {/* Overlay Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Full Body Massage in <span className="text-emerald-300">Gurgaon by Skilled Foreign Therapists</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow">
              Rejuvenate Fully with Full Body Massage in Gurgaon Today
            </p>

            <a
              href="#about-section"
              className="inline-block mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
            >
              Learn More
            </a>
          </motion.div>
        </section>
        {/* Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-50">
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-emerald-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-float animation-delay-4000"></div>

          {/* Main content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Text content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-12 h-px bg-emerald-600"></div>
                <span className="text-emerald-600 font-light tracking-widest">SIGNATURE TREATMENT</span>
                <div className="w-12 h-px bg-emerald-600"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-gray-800">
                <span className="block font-serif text-5xl md:text-6xl mb-3 text-emerald-800">Spa in Gurgaon:</span>
                Massage Centre for,
                <span className="block mt-2 font-medium">Full Body Massage <span className="text-rose-600">Service in Gurgaon</span></span>
              </h2>

              <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                At Spa in Gurgaon, you can get professional full body massage services that help your body feel better. Our trained therapists know how to reduce body pain, help blood move better through your body, and make you feel healthy again. They use different massage methods to help your muscles feel less tired, make your mind peaceful, and give you a complete relaxing time.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    {/* Hotel Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V3h18v18M9 21v-6h6v6" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Luxury Hotel Spa</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    {/* Oil / Spa Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C10.8954 2 10 2.89543 10 4V6H8C6.89543 6 6 6.89543 6 8V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V8C18 6.89543 17.1046 6 16 6H14V4C14 2.89543 13.1046 2 12 2ZM12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9Z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Warm Herbal Oils</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    {/* Muscle Relief / Healing Hand Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16c0-1.1.9-2 2-2h2v-5a2 2 0 114 0v5h2a2 2 0 110 4h-1l-1 3-1-3H6a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Deep Muscle Relief</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Romantic Spa Ambience</span>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
                  <span>Explore Full Body Massage</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button className=" text-blue-500 rounded-sm  hover:bg-emerald-50 transition-colors duration-300 flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <a
                    href="https://t.me/Tanuspa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                  >
                    <FaTelegram className="text-xl mr-3" />
                    Meet Our Team
                  </a>
                </button>
              </div>
            </div>

            {/* Image section */}
            <div className="relative h-80 md:h-96 lg:h-[450px]">
              <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
                <Image width={2500} height={2592} src="/images/OIP (1).webp"
                  alt="Full Body Massage Spa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating leaf decoration */}
              <div className="absolute -bottom-6 -right-6">
                <svg className="w-24 h-24 text-emerald-600/30" viewBox="0 0 100 100">
                  <path
                    fill="currentColor"
                    d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z"
                  />
                </svg>
              </div>

              {/* Minimalist stats */}
              <div className="absolute -left-4 bottom-8 bg-white p-4 shadow-md">
                <div className="text-center">
                  <div className="text-2xl font-serif text-emerald-800">12+</div>
                  <div className="text-xs text-gray-500 tracking-widest">YEARS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" className="relative block w-full h-12">
              <path fill="white" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5"></path>
            </svg>
          </div>
        </div>
        {/* End Banner */}
        {/* Our Signature Treatments */}
        <section className="w-full my-5 py-5 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-emerald-100 opacity-70 blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-emerald-200 opacity-50 blur-3xl"></div>

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
                <span className="text-emerald-700 font-medium tracking-wider">Relax & Rejuvenate</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 font-serif"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Your Perfect Destination <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">for Relaxation – Spa in Gurgaon</span>
              </motion.h2>

              <motion.p
                className="text-emerald-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Spa in Gurgaon has many types of full body massages that help you relax and feel fresh.
              </motion.p>

              <motion.div
                className="flex justify-center mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Services grid */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                >
                  <div className={`flex flex-col md:flex-row h-full ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Image */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className="relative h-64 md:h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                        <Image
                          src={service.image}
                          alt={service.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 z-20 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-8 flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-0.5 bg-emerald-600"></div>
                          <span className="text-emerald-600 font-medium">Treatment</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-emerald-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-emerald-800 mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div>
                        {/* <a 
                                     href="tel:+919211235800" 
                                     className="inline-flex items-center bg-gradient-to-r text-white rounded-full font-medium transition-all duration-300 hover:gap-3 hover:shadow-lg"
                                   >
                                     <a 
                                                     href="https://t.me/Tanuspa" 
                                                     target="_blank"
                                                     rel="noopener noreferrer"
                                                     className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                                                   >
                                                     <FaTelegram className="text-xl mr-3" />
                                                     Meet Our Team
                                                   </a>
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                     </svg>
                                   </a> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>
        {/* End Our Signature Treatments */}
        <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#fffaf8] to-[#f7f2ee]">
          <div className="max-w-7xl mx-auto">
            {/* Hero */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">Curated Experiences</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#2f2a27] leading-tight">Eliminate Stress with Best Full Body Massage Therapist in Gurgaon</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">The expert therapists at Spa in Gurgaon give full body massages that remove stress from your life. They help blood flow better in your body and make you feel deeply relaxed.</p>
            </motion.div>

            {/* cards + visual */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left column: stacked cards */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cards3.map((c, i) => (
                  <motion.article
                    key={c.id}
                    className={`relative rounded-2xl overflow-hidden p-0 bg-white shadow-xl border border-[#f1e9e3] transform hover:-translate-y-2 transition-transform`}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {/* image header */}
                    <div className="relative h-40 sm:h-32 md:h-36 lg:h-44 w-full">
                      <Image width={800} height={600} src={c.image} alt={c.title} className="object-cover w-full h-full brightness-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div>
                      <div className="absolute left-4 bottom-4 flex items-center gap-3">
                        <div className={`p-3 rounded-md ${c.accent} bg-opacity-80 backdrop-blur-md`}>{c.icon}</div>
                        <div className="text-white">
                          <h3 className="text-lg font-bold leading-tight">{c.title}</h3>
                          <p className="text-xs opacity-90">{c.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <ul className="mt-2 grid gap-2 text-sm text-gray-700">
                        {c.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1 w-3 h-3 rounded-full bg-emerald-700" />
                            <div>{b}</div>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm text-gray-600">{c.duration}</div>
                        <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">{c.price}</div>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <a href={`#book-${c.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-700 text-white font-semibold shadow hover:scale-105 transition-transform">
                          Book Now
                        </a>
                        <a href={`#learn-${c.id}`} className="text-sm text-emerald-700 font-medium">Learn more →</a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Right column: hero visual + CTA */}
              <motion.div
                className="rounded-2xl p-6 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white shadow-2xl flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-2xl font-bold">Personalized Full Body Massage Services Gurgaon</h4>
                      <p className="text-sm opacity-90 mt-2 max-w-xs">Spa in Gurgaon makes every massage session different based on what your body needs. The therapists change how hard they press, which method they use, and how long the session lasts. They concentrate on painful or tight body parts. This will ensure that your body and mind are rejuvenated. You can receive this soothing experience in our spa outlets, in hotels or in your house in Gurgaon by having the spa home service.</p>
                    </div>
                    <div className="w-28 h-28 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                      <Image width={960} height={639} src="/images/fpkdl.com_960_1758980177_natural-elements-spa-with-candles_23-2148199485.jpg" alt="Spa consultation room with natural elements and candles" className="object-cover w-full h-full" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">🏆</div>
                      <div>
                        <div className="text-sm font-semibold">98% Client Retention</div>
                        <div className="text-xs opacity-90">Trusted by thousands across Delhi NCR</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">🌱</div>
                      <div>
                        <div className="text-sm font-semibold">Eco-Luxury Practices</div>
                        <div className="text-xs opacity-90">Organic linens, recycled water & handcrafted oils</div>
                      </div>
                    </div>

                    <div className="mt-4 bg-white/10 rounded-lg p-3">
                      <div className="text-xs uppercase opacity-90">Featured partners</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">JW Marriott Aerocity</span>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">The Suryaa</span>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">The Park</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="https://t.me/Tanuspa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-emerald-700 font-semibold px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
                  >
                    <FaTelegramPlane />
                    Join Our Telegram
                  </a>

                  <div className="mt-4 text-xs opacity-90">Or call us at <span className="font-semibold">+91 8448499173</span> — Priority bookings & corporate queries</div>
                </div>
              </motion.div>
            </div>

            {/* bottom CTA strip */}
            <motion.div
              className="mt-12 rounded-xl p-6 bg-emerald-50 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-white shadow"> <FaAward className="text-emerald-700" /> </div>
                <div>
                  <div className="text-lg font-bold text-emerald-800">Build your bespoke program today</div>
                  <div className="text-sm text-gray-600">Complimentary 10-minute consultation with every first booking — limited slots per month.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a href="#book" className="inline-block bg-emerald-700 text-white px-5 py-3 rounded-full font-semibold shadow hover:opacity-95 transition">Book Now</a>
                <a href="#services" className="inline-block bg-white px-4 py-2 rounded-full font-medium">Explore Services</a>
              </div>
            </motion.div>

            {/* small image grid for visual richness */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Image width={5600} height={3200} src="/images/luxury-aromatherapy-spa-treatment-with-scented-candle-flame-generated-by-ai.jpg" alt="Luxury aromatherapy spa treatment with scented candles" className="w-full h-28 object-cover rounded-md shadow-sm" />
              <Image width={6067} height={3467} src="/images/modern-luxury-bedroom-design-illuminated-with-electric-lamps-generated-by-ai.jpg" alt="Modern luxury spa treatment room interior" className="w-full h-28 object-cover rounded-md shadow-sm" />
              <Image width={550} height={381} src="/images/RoseateHouse.jpg" alt="Roseate House hotel spa partner" className="w-full h-28 object-cover rounded-md shadow-sm" />
              <Image width={6067} height={3467} src="/images/room-with-massage-tables-wall-with-lights-it.jpg" alt="Spa room with massage tables and ambient lighting" className="w-full h-28 object-cover rounded-md shadow-sm" />
            </div>



            {/* NEW: Transformational Journey (unique section) */}
            <motion.section
              className="mt-12 rounded-3xl p-0 overflow-hidden bg-gradient-to-br from-[#f6fbf9] to-[#eef9f3] border border-[#e6f3ea] shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-6xl mx-auto p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="lg:w-1/2">
                    <h3 className="text-3xl font-extrabold text-[#114c3b]">Process to Book Full Body Massage in Gurgaon</h3>
                    <p className="mt-3 text-gray-700">It is easy to make an appointment of a full body massage at Spa in Gurgaon.</p>

                    <div className="mt-6 space-y-6">
                      {journey.map((j, idx) => (
                        <motion.div
                          key={j.step}
                          className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-md border border-[#f0f6f3]"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.12 }}
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-700 to-emerald-500 text-white flex items-center justify-center font-bold">{j.step}</div>
                          <div>
                            <div className="flex items-center gap-3">
                              <div className="text-emerald-700">{j.icon}</div>
                              <h4 className="text-lg font-semibold text-[#163a2f]">{j.title}</h4>
                            </div>
                            <p className="mt-1 text-gray-600 text-sm">{j.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-3">
                      <a href="#start-journey" className="inline-flex items-center gap-3 bg-emerald-700 text-white px-5 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform">Start Your Journey</a>
                      <a href="#faq" className="inline-flex items-center gap-2 border border-emerald-200 px-4 py-3 rounded-full font-medium">Read FAQ</a>
                    </div>

                    <div className="mt-6 text-xs text-gray-500">Average timeframe to visible results: 4–8 sessions. Personalized plans vary.</div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {journey.map((j) => (
                        <div key={`img-${j.step}`} className="rounded-xl overflow-hidden shadow-md bg-white">
                          <Image width={800} height={600} src={j.img} alt={j.title} className="object-cover w-full h-48" />
                          <div className="p-3">
                            <div className="text-sm font-semibold text-[#163a2f]">{j.title}</div>
                            <div className="text-xs text-gray-500 mt-1">{j.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 bg-gradient-to-r from-white to-emerald-50 rounded-xl p-4 border border-[#eef7f0]">
                      <div className="text-sm text-gray-700">Client highlight</div>
                      <div className="mt-2 text-sm text-[#163a2f] font-semibold">&quot;After 6 sessions my chronic neck pain reduced by 70% — and I sleep better.&quot;</div>
                      <div className="mt-2 text-xs text-gray-500">— A. Sharma</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </section>

        <luxuryhotelpartners />

        {/* Benefits Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Health Benefits of <span className="text-emerald-600">Full Body Massage Services Gurgaon</span>
              </motion.h2>
              <motion.p
                className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Spa in Gurgaon is full body massage sessions help you stay healthy and feel energetic.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Relieves Muscle Tension",
                  description: "The massage movements work on tight spots in your muscles. They remove hard knots and make your body more flexible. You will feel comfortable moving around after the session.",
                  icon: "💆‍♀️"
                },
                {
                  title: "Boosts Circulation",
                  description: "The massage methods help your blood move through your body faster. This brings oxygen and food to different body parts. Your whole body becomes healthier because of this.",
                  icon: "🧘‍♂️"
                },
                {
                  title: "Reduces Stress and Anxiety",
                  description: "The relaxing touch during massage makes your body produce less stress chemicals. Your nervous system calms down. You feel emotionally stable and peaceful.",
                  icon: "❤️"
                },
                {
                  title: "Enhances Sleep Quality",
                  description: "You sleep better at night when you regularly receive full body massage offered by Spa in Gurgaon. You sleep better and allow your body to have the required rest. You also become clearer in your mind.",
                  icon: "✨"
                },
                {
                  title: "Improves Immunity",
                  description: "With less stress and relaxed feelings, your body will be able to combat sickness. This enhances your immune system. You remain active and fit.",
                  icon: "🌿"
                },
                {
                  title: "Increases Energy and Focus",
                  description: "After your muscles and mind feel fresh, you become more alert. You have more energy throughout the day. You can do your daily work better.",
                  icon: "😴"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Section */}


        {/* Why Choose Us Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
          {/* Decorative elements */}
          <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-emerald-200 opacity-20 blur-3xl -z-0"></div>
          <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-emerald-300 opacity-15 blur-3xl -z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Premium Wellness Experience
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-6">
                  Why Choose <span className="text-emerald-600">Our Spa in Delhi?</span>
                </h2>
                <p className="text-emerald-800 text-lg md:text-xl leading-relaxed">
                  We stand apart through our commitment to authentic techniques, premium ingredients, and personalized care that revitalizes your mind, body and spirit.
                </p>
              </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Expert Therapists */}
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="bg-emerald-100 p-3 rounded-lg mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-emerald-800 font-serif mb-2">Expert Therapists</h3>
                        <p className="text-emerald-700">
                          Our therapists are trained in traditional Ayurvedic techniques with over 10 years of experience in therapeutic massage.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">
                      Oil therapy is a traditional wellness practice that uses warm, herb-infused oils tailored to your skin type and body condition.
                      This technique not only moisturizes and nourishes your skin but also stimulates deep tissue relaxation.
                      The calming aroma of essential oils adds a therapeutic layer, relieving stress and enhancing your overall sense of well-being. Regular sessions can improve flexibility, deepen sleep, and support emotional stability.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {['10+ Years Experience', 'Personalized Techniques', 'Deep Tissue Mastery'].map((item, index) => (
                        <div key={index} className="bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative h-96">
                    <Image
                      src="/images/fpkdl.com_960_1760613019_asian-woman-does-back-massage-with-herbal-bags-patient_175935-919.jpg"
                      alt="Expert therapist performing massage"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Premium Oils */}
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
                  <div className="relative h-96">
                    <Image
                      src="/images/fpkdl.com_750_1760611274_caucasian-woman-enjoying-relaxing-antistress-head-massage-quiescent_31965-325098.jpg"
                      alt="Premium spa oils"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="bg-emerald-100 p-3 rounded-lg mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-emerald-800 font-serif mb-2">Premium Oils & Blends</h3>
                        <p className="text-emerald-700">
                          We use only cold-pressed, organic oils blended with therapeutic-grade essential oils for maximum benefit.
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">
                      The calming aroma of essential oils adds a therapeutic layer, relieving stress and enhancing your overall sense of well-being.
                      Regular sessions can improve flexibility, deepen sleep, and support emotional stability.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-emerald-700 mb-3">Signature Oil Blends</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['Lavender Dream', 'Eucalyptus Renewal', 'Rosemary Harmony', 'Sandalwood Serenity', 'Jasmine Bliss', 'Frankincense Balance'].map((oil, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></div>
                            <span className="text-emerald-800">{oil}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Testimonial Section */}
            {/* <motion.div 
                                             className="mt-20 bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-3xl overflow-hidden shadow-2xl"
                                             initial={{ opacity: 0, y: 30 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             viewport={{ once: true }}
                                             transition={{ duration: 0.7 }}
                                           >
                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                               <div className="p-10 flex flex-col justify-center">
                                                 <div className="mb-6">
                                                   <div className="flex mb-4">
                                                     {[...Array(5)].map((_, i) => (
                                                       <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
                                                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                       </svg>
                                                     ))}
                                                   </div>
                                                   <blockquote className="text-2xl italic text-white leading-relaxed">
                                                     "The oil therapy treatment was transformative. I've never felt so deeply relaxed and rejuvenated. The therapist's expertise was evident in every movement."
                                                   </blockquote>
                                                 </div>
                                                 
                                                 <div className="flex items-center">
                                                   <div className="mr-4">
                                                     <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-300">
                                                       <Image 
                                                         src="/images/couple-bathrobes-posing-embraced.jpg"
                                                         alt="Client testimonial"
                                                         width={64}
                                                         height={64}
                                                         className="object-cover w-full h-full"
                                                       />
                                                     </div>
                                                   </div>
                                                   <div>
                                                     <h4 className="text-xl font-bold text-emerald-50">Priya Sharma</h4>
                                                     <p className="text-emerald-200">Regular Client since 2020</p>
                                                   </div>
                                                 </div>
                                               </div>
                                               
                                               <div className="relative h-full min-h-[400px]">
                                                 <Image 
                                                   src="/images/137.jpg"
                                                   alt="Spa treatment"
                                                   layout="fill"
                                                   objectFit="cover"
                                                   className="transition-transform duration-700 hover:scale-105"
                                                 />
                                                 <div className="absolute -top-6 -right-6 bg-emerald-100 p-6 rounded-full shadow-lg">
                                                   <span className="text-emerald-800 text-4xl font-serif">"</span>
                                                 </div>
                                               </div>
                                             </div>
                                           </motion.div> */}

            {/* Benefits Section */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-emerald-900 font-serif text-center mb-12">
                Our Full Body Massage Spa Services in Gurgaon
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Hotel Spa",
                    description: "Spa in Gurgaon brings high-quality full body massage to expensive hotels. You can relax and feel fresh in these comfortable places.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )
                  },
                  {
                    title: "Home Spa",
                    description: "You can book spa home service in Gurgaon and get massage at your house. Our certified therapists bring everything needed and give you professional massage at your doorstep.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Spa Outlet",
                    description: "Come to any Spa in Gurgaon outlet for your massage session. Our places are quiet, beautiful, and perfect for relaxation. You will get professional service in a peaceful setting.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 text-center"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-emerald-800 mb-3">{benefit.title}</h4>
                    <p className="text-emerald-700">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-bold py-5 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Book Your Rejuvenating Experience
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <p className="text-emerald-700 mt-4">
                Limited slots available. Reserve your session today.
              </p>
            </motion.div>
          </div>
        </section>
        {/* content section */}

        {/* About Oil Therapy Section */}
        {sections.map((section, index) => (
          <section
            key={index}
            className="relative py-24 bg-gradient-to-br from-emerald-50/70 to-white overflow-hidden"
          >

            <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-28 left-1/4 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">


                <div className={`relative h-96 md:h-[500px] group ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-yellow-300/10 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-all duration-500"></div>
                  <Image width={800} height={600} src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover rounded-3xl shadow-xl relative transform transition-all duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute -inset-4 rounded-3xl border-2 border-emerald-200/40 transform rotate-1 scale-[0.98] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                </div>


                <div className={`relative ${index % 2 !== 0 ? 'md:order-first' : ''}`}>
                  <div className="inline-block mb-6">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-3 relative inline-block">
                      {section.title}
                      <div className="absolute bottom-2 left-0 w-full h-2 bg-emerald-300/40 -z-10"></div>
                    </h2>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed font-light">{section.description1}</p>
                    <p className="text-gray-700 text-lg leading-relaxed font-light">{section.description2}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] transform">
                      Learn More
                    </button>
                    <button className="px-6 py-3 bg-white text-emerald-700 border border-emerald-300 font-medium rounded-full shadow-sm hover:shadow transition-all duration-300">
                      View Projects
                    </button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-3">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 border-2 border-white shadow-sm animate-[float_4s_ease-in-out_infinite]"
                          style={{ animationDelay: `${i * 0.5}s` }}
                        ></div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      Trusted by over{" "}
                      <span className="font-bold text-emerald-700 relative">
                        5,000 clients in Delhi
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400/50"></span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}



        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-emerald-800 opacity-5"></div>
          <div className="container mx-auto px-4 relative">

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
                <span className="text-emerald-700 font-medium tracking-wider">Specialty</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 font-serif"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Spa Centre for Best Full Body Massage in Gurgaon</span>
              </motion.h2>

              <motion.p
                className="text-emerald-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Spa in Gurgaon offers excellent full body massage that helps you relax, removes stress, and makes you feel completely fresh.
              </motion.p>

              <motion.div
                className="flex justify-center mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Certified Massage Therapists</h3>
                <p className="text-gray-700 mb-6">
                  The therapists at Spa in Gurgaon have learned massage techniques from around the world. They make each full body massage session special for you. They can control intensity of pressing, velocity of movements and the form of therapy. This provides total rest of both body and mind. Your blood is flowing more easily, and you receive long-lasting health benefits.

                </p>
                {/* Bullet Points instead of Image */}
                {/* <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Highly trained and certified therapists</li>
                            <li>Wide range of massage techniques</li>
                            <li>Focus on relaxation & stress relief</li>
                            <li>Customized treatments for every client</li>
                            <li>Professional and hygienic environment</li>
                          </ul> */}
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Personalized Wellness Experience</h3>
                <p className="text-gray-700 mb-6">
                  We customize each session to suit your needs. Spa in Gurgaon picks out the methods, oils, and timing of each individual. We target the parts of the body where you are tight or painful. Each client gets a special experience that helps both mind and body feel well.
                </p>
              </div>

              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
                  <Image width={960} height={639} src="/images/fpkdl.com_960_1760613019_asian-woman-does-back-massage-with-herbal-bags-patient_175935-919.jpg"
                    alt="Client Testimonial"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-emerald-100 p-6 rounded-full">
                  <span className="text-emerald-800 text-xl font-serif"></span>
                </div>
              </div>


              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <span className="font-semibold text-emerald-800 mb-4">Affordable Packages</span>
                <p className="text-gray-700 mb-6">
                  Getting luxury full body massage should not cost too much money. Spa in Gurgaon packages begin as low as ₹1999. You receive quality treatment, professional work, and a peaceful environment at a reasonable cost. We are straightforward and transparent in pricing so the relaxation can be enjoyed by everyone.
                </p>
                <span className="font-semibold text-emerald-800 mb-4">24+ Convenient Outlets</span>
                <p>
                  Spa in Gurgaon has more than 24 locations all over the city. This makes it easy to find a place near you for full body massage. Whether you come to our outlet, visit us at a hotel, or use home spa service in Gurgaon, the quality stays the same everywhere. You always get comfort and good service.
                </p>
                {/* <p>
                          Perfect for individuals suffering from stress, muscle pain, or hormonal imbalance, this massage harmonizes body rhythms and enhances immunity. The continuous motion and warm oil offer a meditative experience.
                        </p> */}
                <div className="flex mt-6">
                  {['Lavender', 'Eucalyptus', 'Rosemary', 'Sandalwood'].map((oil, index) => (
                    <div key={index} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm mr-2">
                      {oil}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
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
                Our Pricing Package for <span className="text-emerald-600">Full Body Massage in Gurgaon</span>
              </motion.h2>
              <motion.p
                className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Spa in Gurgaon has different package options for full body massage services that don not cost too much. Everyone can afford high-quality relaxation and health care.
              </motion.p>
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
        <LuxuryHotelShowcase />
        {/* Testimonials */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Client Reviews – <span className="text-emerald-600">Relaxation Stories from Our Spa in Gurgaon</span>
              </motion.h2>
              <motion.p
                className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                People who visit Spa in Gurgaon love our full body massage services. They feel relaxed and fresh after their sessions.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Shiv Sharma</h4>
                    <p className="text-sm text-gray-600">Regular Client</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  The full body massage at Spa in Gurgaon was incredible. My muscles feel relaxed, and I feel completely renewed
                </p>
                <div className="flex text-emerald-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Rahul Mehta</h4>
                    <p className="text-sm text-gray-600">Corporate Employee</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  Home spa service in Gurgaon was convenient and professional. I felt pampered and stress-free after every session.
                </p>
                <div className="flex text-emerald-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Ananya Verma</h4>
                    <p className="text-sm text-gray-600">First-time Visitor</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  Luxury spa experience with highly skilled therapists. Full body massage at Spa in Gurgaon is unmatched.
                </p>
                <div className="flex text-emerald-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Refresh Your Mind and Body at a Premium Body Spa in Gurgaon</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-10 text-lg">
              Come to Spa in Gurgaon for full body massage at our outlets, hotels, or your home. Make your mind and body feel relaxed, healthy, and full of energy today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://t.me/Tanuspa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <FaTelegram className="text-xl mr-3" />
                Chat On Telegram
              </a>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Call: +91 98765 43210
              </button>
            </div>
          </div>
        </section>

      </div>
      {/* Call to Action Section */}
      {/* <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50/80 to-rose-50/50 z-0"></div>
  <div className="absolute -bottom-32 -right-32 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-emerald-200/30 z-0"></div>
  <div className="absolute -top-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-emerald-100/40 z-0"></div>

  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4 leading-tight"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      Experience <span className="text-emerald-600">Ultimate Relaxation</span>
    </motion.h2>

    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
      Treat yourself to our premium Swedish massage – a journey to complete physical and mental rejuvenation. 
      Book now and receive a complimentary aromatherapy session.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <a href="https://api.whatsapp.com/send?phone=918448499173">
        <button className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
          Book Your Session
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </a>

      <a href="#Pricing">
        <button className="bg-white text-emerald-800 font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-full border-2 border-emerald-800 shadow-sm hover:shadow-md transition-all duration-300">
          View Packages
        </button>
      </a>
    </div>

    <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></div>
          <span className="text-gray-700 text-sm sm:text-base font-medium">No commitment required</span>
        </div>
      ))}
    </div>
  </div>
</section> */}
      {/* End Call to Action Section */}

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
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="text-emerald-800 max-w-2xl text-lg">
              Here are the answers to such questions that people frequently ask regarding the full body massage at Spa in Gurgaon.
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
              alt="Full body massage in Gurgaon - frequently asked questions"
              className="rounded-2xl shadow-lg object-cover w-full max-h-[700px]"
            />
          </motion.div>
        </div>
      </section>
      {/* /// */}

      {/* <WhatsappFloat /> */}
    </main>
  );
}
