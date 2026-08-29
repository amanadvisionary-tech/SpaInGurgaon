"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { FaSpa, FaHotTub, FaBath, FaLeaf, FaHandSparkles, FaHotel, FaCrown, FaCheckCircle, FaStar, FaWhatsappSquare } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from 'react-icons/fa';
// import WhatsappFloat from './components/WhatsappFloat';
// import womanImage from '/images/spaExpert4.jpg';
import { FaTelegram } from 'react-icons/fa';
import { Building2 } from "lucide-react";
import { Star, MapPin, Sparkles, Hotel } from 'lucide-react';
import { Clock, CheckCircle2 } from "lucide-react";
import { Globe } from "lucide-react";



const specialFeatures = [
  "Private Room",
  "Jacuzzi Bath",
  "Steam Bath",

  "5 Star Hotels",
  "Female Therapist",
  "Foreigner Therapist",
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

const outlets = [
  {
    title: 'Hotel in Aerocity',
    description: 'We provide body massage service at 5-star hotels in Aerocity, like Lemon Tree, Andaz, IBIS and so on.',
    image: '/images/NovotelNewDelhiAerocity.jpeg',

    link: 'https://api.whatsapp.com/send?phone=918448499173',
  },
  {
    title: 'Hotel in NFC',
    description: 'Staying in a hotel in NFC and craving a massage? We provide B2B massage in delhi in hotels like The Suryaa and end all your days tiredness.',
    image: '/images/TheSuryaaNewDelhi(NFC).jpg',
    link: 'https://api.whatsapp.com/send?phone=918448499173',
  },
  {
    title: 'Hotel in Connaught Place',
    description: 'Our team of massage therapists visits your hotel in CP and provide best spa in CP to hotels like Radisson Blu, The Lalit, The Park and so on.',
    image: '/images/TheParkConnaughtPlace.jpg',
    link: 'https://api.whatsapp.com/send?phone=918448499173',
  },
  {
    title: 'Dwarka Hotel',
    description: 'Our team of expert massage therapists will visit your hotel room in Dwarka and provide an on-demand hotel spa in Dwarka.',
    image: '/images/TheGrandNewDelhi.jpg',
    link: 'https://api.whatsapp.com/send?phone=918448499173',
  },
];
{/* Our Process */ }
const processSteps = [
  {
    number: '01',
    title: 'Choose a Massage Service',
    description: 'Choose the type of massage service that suits your massage needs and requirements that fits your budget.',
    image: '/images/mmeeting.webp',
  },
  {
    number: '02',
    title: 'Appointment on Call or Telegram',
    description: 'Its easy to book and get quick confirmations via call or message us on Telegram with your massage needs.',
    image: '/images/spa-treatments.jpg',
  },
  {
    number: '03',
    title: 'Visit Us',
    description: 'At the time you choose, relax in one of our beautiful spa locations.',
    image: '/images/finalizing.avif',
  },
];
{/* End Our Process */ }

//   const ProcessSteps = [
//   {
//     number: '01',
//     title: 'Meeting',
//     description: 'Our spa meeting process ensures a seamless and soothing experience, from scheduling to consultation and relaxation.',
//     image: '/images/mmeeting.webp',
//   },
//   {
//     number: '02',
//     title: 'Treatment',
//     description: 'Relaxing spa treatment begins with consultation, followed by cleansing, massage, and rejuvenation steps.',
//     image: '/images/spa-treatments.jpg',
//   },
//   {
//     number: '03',
//     title: 'Finalizignng',
//     description: 'Confirm your appointment, choose your therapy, and relax, your spa journey is now set.',
//     image: '/images/finalizing.avif',
//   }, 
// ];
{/* End Our Process */ }



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
      title: "Global Massage Therapist",
      desc: "The therapists at Spa in Gurgaon learned techniques from different countries. They know methods from around the world. Each person gets individual attention and the treatments feel professional and effective. Customers usually walk away feeling completely different.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
      title: "Affordable Pricing",
      desc: "Spa in Gurgaon maintains a fair price to all. The standards are not compromised despite the cost remaining low. You receive high-quality care within your budget.",
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Easy Booking",
      desc: "It only requires a few minutes to make an appointment. In Gurgaon, spa allows you to select your location, treatment type, and time online. The website works simply. The app also makes scheduling quick. Nothing gets complicated.",
    },
    {
      icon: <Hotel className="w-8 h-8 text-emerald-600" />,
      title: "24+ Spa Outlets",
      desc: "More than 24 locations exist across Gurgaon for the Spa. You can find one near your home or office. Every outlet follows strict rules about cleanliness. The staff provides friendly and professional service everywhere. Luxury wellness sits close by no matter where you live.",
    },



  ];
  const features5 = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "24+ Spa Outlets",
      description: "We have 24+ luxury spa outlets available to provide you with the best body massage services across Delhi. From hotels and resorts to your private bungalow, we come to your place and bring the best spa experience."
    },
    {
      icon: <Clock className="w-8 h-8 text-white-600" />,
      title: "24/7 Support Available",
      description: "We are never off the mark, and our support team is available 24X7 to assist you with all your concerns and ease the booking process for you. At Spa Delhi, you can rest assured that you will get a complete range of full-body massage in Delhi."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: "Luxury Massage Available",
      description: "Our team of massage therapists is here to serve you with the best-in-class luxury spa in Delhi right at your doorstep. Get ready to experience a B2B spa in Delhi or any massage service that brings you peace."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Massage Therapists Across the Globe",
      description: "Our team of massage therapists comes across borders, including India, Russia, Afghanistan, and more. When you choose us, you will be surprised with a wide range of massage therapist options available to serve you with your preferred star massage services in Aerocity."
    }
  ];


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      title: "Best Massage Parlour in Delhi with Luxury Spa Experience!",
      link: "https://api.whatsapp.com/send?phone=918448499173",
      image: "/images/247484.jpg"

    },
    {
      title: "Best Massage Parlour in Delhi Awaits You",
      link: "https://api.whatsapp.com/send?phone=918448499173",
      image: "/images/fpkdl.com_450_1757505385_young-woman-relaxing-back-massage-spa_151013-21109.jpg"
    },
    {
      title: "Escape Stress with Luxury B2B Massage in Delhi",
      link: "https://api.whatsapp.com/send?phone=918448499173",
      image: "/images/woman-relaxing-spa.jpg"
    },
  ];

  const services = [
    {
      title: "Thai Massage in Gurgaon",
      description: "Thai massage in Gurgaon uses ancient healing techniques by native Thai therapists. The therapy combines rhythmic pressing, acupressure, and stretching to release tension and restore balance. Your muscles feel loose and your energy flows freely. Every session is deeply therapeutic and leaves you feeling completely renewed.",
      icon: "🧘‍♀️",
    },
    {
      title: "Swedish Massage in Gurgaon",
      description: "Our Swedish massage in Gurgaon offers deep stress relief, specially designed for corporate professionals. Long, gliding strokes and gentle kneading techniques improve blood circulation and ease muscle tension. After a long office day, this treatment helps your mind switch off completely and your body recover fast.",
      icon: "🕊️",
    },
    {
      title: "Full Body Massage in Gurgaon",
      description: "Our full-body massage in Gurgaon provides a complete head-to-toe relaxation experience. Trained therapists use proven methods to loosen tight spots and improve blood flow throughout your system. Afterward, you feel awake but calm. Stress disappears and your energy comes back stronger than ever.",
      icon: "🧖‍♀️",
    },
    {
      title: "B2B Massage in Gurgaon",
      description: "We offer deeply therapeutic body-to-body massage in Gurgaon where our skilled therapists provide the most soothing experience. Whether you want to go into deep sleep or reduce stress, our B2B massage services in Gurgaon are your go-to choice for complete wellness and relaxation.",
      icon: "🫂",
    },
    {
      title: "Deep Tissue Body Massage in Gurgaon",
      description: "Deep tissue massage in Gurgaon targets deep muscle tension and chronic pain with firm, focused pressure on specific muscle groups and connective tissues. This treatment is ideal for people with persistent muscle soreness, sports injuries, or postural problems. Leave feeling truly relieved and restored.",
      icon: "💆‍♂️",
    },
    {
      title: "Balinese Massage in Gurgaon",
      description: "Balinese massage in Gurgaon delivers full body rejuvenation using ancient Balinese techniques. Combining gentle stretches, acupressure, reflexology, and aromatherapy, this treatment stimulates blood flow, relieves muscle tension, and brings deep relaxation. Experience true Balinese wellness in the heart of Gurgaon.",
      icon: "🪷",
    },
  ];
  const services1 = [
    {
      title: "Foreigner Therapist",
      img: "/images/spaExpert4.jpg",
    },
    {
      title: "5 Star Hotels Spa",
      img: "/images/fpkdl.com_960_1758980281_blissful-facial-treatment-session-raw-style_1077802-188111.jpg",
    },
    {
      title: "Home Spa",
      img: "/images/12 Romantic.jpeg",
    },
    {
      title: "Thai Massage",
      img: "/images/✨ Time to Relax & Rejuvenate!.jpeg",
    },
    {
      title: "B2B Therapy",
      img: "/images/new5.jpeg",
    },
    {
      title: "Full Body Massage",
      img: "/images/Dragged.jpeg",
    },
  ];


  const testimonials1 = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      comment: "The best spa experience in Delhi! The therapists are highly skilled and the ambiance is so relaxing.",
    },
    {
      name: "Rajiv Mehta",
      role: "Corporate Client",
      comment: "I have been coming here monthly for over a year. The deep tissue massage works wonders for my back pain.",
    },
    {
      name: "Ananya Singh",
      role: "First-time Visitor",
      comment: "Perfect escape from the city chaos. The aromatherapy session transported me to another world!",
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Product Manager, TechCorp",
      content: "This service completely transformed our workflow. The teams attention to detail and innovative approach solved problems we did not even know we had!",
      date: "April 15, 2023",
      rating: 5,
      initials: "JD",
      gradient: "from-indigo-500 to-emerald-600"
    },
    {
      id: 2,
      name: "Sarah Anderson",
      role: "Marketing Director, GrowthLab",
      content: "The results have been outstanding. Our conversion rates increased by 45% in just two months. The platform is intuitive and the support team is incredibly responsive.",
      date: "May 3, 2023",
      rating: 5,
      initials: "SA",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      name: "Michael Roberts",
      role: "CTO, InnovateX",
      content: "As a tech company, we are always skeptical about new tools. But this solution has exceeded our expectations. The API integration was seamless and performance is rock solid.",
      date: "June 8, 2023",
      rating: 4,
      initials: "MR",
      gradient: "from-emerald-500 to-teal-600"
    }
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

  const features = [
    "Private Room",
    "Jacuzzi Bath",
    "Steam Bath",
    "Naturally Spa",
    "5 Star Hotels",
    "Female Therapist",
    "Foreigner Therapist",
  ];

  const locations = [
    {
      name: "Lajpat Nagar",
      image: "/images/TheSuryaaNewDelhi(NFC).jpg", // Replace with actual image URL
      description: "We have luxury massage outlets in Lajpat Nagar, so whenever you are in Lajpat Nagar want you can de-stress with a home and massage service. Reach out to us.",
      link: "https://wa.me/918448499173"
    },
    {
      name: "Aerocity",
      image: "/images/NovotelNewDelhiAerocity.jpeg",
      description: "Our team provide b2b massage in Aerocity most luxurious locations. Whenever you choose us for your massage service in Aerocity, we will never disappoint.",
      link: "https://wa.me/918448499173"
    },
    {
      name: "Paschim Vihar",
      image: "/images/TheParkConnaughtPlace.jpg",
      description: "Choose Spa Delhi to enjoy the best massage services in Paschim Vihar. Enjoy the most relaxing massage at an outlet with perfect ambience.",
      link: "https://wa.me/918448499173"
    },
    {
      name: "Rohini",
      image: "/images/TheGrandNewDelhi.jpg",
      description: "We have our massage outlet available at Rohini location. If you want to experience spa experience in Rohini, we can deliver the best spa services in Delhi.",
      link: "https://wa.me/918448499173"
    }
  ];
  const features2 = [
    {
      title: 'Hotel OutLet',
      icon: '/images/Group-42-1.png',
      description: 'Premium organic ingredients for radiant, healthy skin'
    },
    {
      title: '24+ Spa Outlets',
      icon: '/images/Group-48-1.png',
      description: 'Holistic treatments to melt away stress and tension'
    },
    {
      title: 'Thai Staff',
      icon: '/images/Group-47-1.png',
      description: 'Signature therapies tailored to your unique needs'
    },
    {
      title: '24*7 Service Available',
      icon: '/images/Group-45-1.png',
      description: 'Tranquil oasis designed for complete serenity'
    },

  ];
  // Physical Benefits Data
  const physicalBenefits = [
    {
      id: 1,
      title: "Muscle Relief",
      description: "Stimulates knotted muscles and relieves pain.",
      icon: "💆"
    },
    {
      id: 2,
      title: "Improved Circulation",
      description: "Increases blood circulation.",
      icon: "❤️"
    },
    {
      id: 3,
      title: "Detoxification",
      description: "Helps the body naturally eliminate toxins.",
      icon: "✨"
    },
    {
      id: 4,
      title: "Flexibility Boost",
      description: "Improves distribution of movement throughout the joints.",
      icon: "🧘"
    },
    {
      id: 5,
      title: "Pain Management",
      description: "Relieves acute and chronic pain.",
      icon: "🛡️"
    }
  ];

  // Spiritual Benefits Data
  const spiritualBenefits = [
    {
      id: 1,
      title: "Stress Reduction",
      description: "Helps to calm the mind and the nerves.",
      icon: "🧘‍♀️"
    },
    {
      id: 2,
      title: "Mental Clarity",
      description: "Helps you concentrate and relax.",
      icon: "⚖️"
    },
    {
      id: 3,
      title: "Emotional Balance",
      description: "It is calming for the mind and soul.",
      icon: "💡"
    },
    {
      id: 4,
      title: "Energy Flow",
      description: "Opens and revitalizes the body energy.",
      icon: "🕊️"
    },
    {
      id: 5,
      title: "Deep Relaxation",
      description: "Connects the body, the mind and the spirit.",
      icon: "🌀"
    }
  ];

  const outlets2 = [
    {
      name: "The Grand Plaza",
      desc: "Luxury spa at the heart of downtown with panoramic city views",
      rating: 5,
      tag: "Exclusive",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />
    },
    {
      name: "Marina Bay Resort",
      desc: "Beachfront sanctuary with ocean-inspired treatments",
      rating: 4.9,
      tag: "Waterfront",
      icon: <Hotel className="w-6 h-6 text-emerald-600" />
    },
    {
      name: "Skyline Tower",
      desc: "Rooftop wellness center with city skyline views",
      rating: 4.8,
      tag: "Panoramic",
      icon: <Building2 className="w-6 h-6 text-emerald-600" />
    },
    {
      name: "Royal Gardens",
      desc: "Historic mansion transformed into a luxury spa retreat",
      rating: 5,
      tag: "Heritage",
      icon: <MapPin className="w-6 h-6 text-emerald-600" />
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]); // store refs for each answer

  const items = [
    {
      q: "Where can I find a Russian massage in Delhi?",
      a: "We provide vetted Russian therapists across multiple Delhi locations including Aerocity, Lajpat Nagar, Connaught Place and more. Book via Telegram or call to confirm availability.",
    },
    {
      q: "Can I get a Nuru massage in Delhi?",
      a: "We offer a variety of authentic massage styles depending on therapist availability and client preference. Please check the service list or contact support for specific requests.",
    },
    {
      q: "How to book a Russian massage near me in Delhi?",
      a: "Booking is quick — choose your service, preferred time and location, then confirm via Telegram/phone. We will send therapist details and safety checks before arrival.",
    },
    {
      q: "Why choose your spa for Russian massage in Noida?",
      a: "All therapists are background-checked, trained and follow strict hygiene protocols. We bring a hotel-level experience to your home or hotel with guaranteed privacy and quality.",
    },
    {
      q: "Do Russian spas in Delhi offer services for corporate clients?",
      a: "Yes — we provide corporate wellness packages, on-site chair massages and event services. Contact our corporate bookings team for custom plans and pricing.",
    },
  ];

  function toggle(i) {
    const isOpen = openIndex === i;
    // close if already open
    if (isOpen) {
      // collapse the element
      const el = contentRefs.current[i];
      if (el) {
        el.style.maxHeight = "0px";
      }
      setOpenIndex(null);
    } else {
      // open new one: first collapse previously opened (if any)
      if (openIndex !== null) {
        const prev = contentRefs.current[openIndex];
        if (prev) prev.style.maxHeight = "0px";
      }
      // then expand current
      const el = contentRefs.current[i];
      if (el) {
        // set to scrollHeight so it expands exactly to content height
        el.style.maxHeight = el.scrollHeight + "px";
      }
      setOpenIndex(i);
    }
  }

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
      title: "Souna",
      image: "/images/icons8-sauna-64.png.webp",
    },
  ];
  const cities = [
    { name: 'DLF PHASE 1', img: '/images/hotel3.webp' },
    { name: 'DLF PHASE 2', img: '/images/lajpatnagahotel.avif' },
    { name: 'DLF PHASE 3', img: '/images/RoseateHouse.jpg' },
    { name: 'DLF PHASE 4', img: '/images/paschimvihar.jpg' },
    { name: 'DLF PHASE 5', img: '/images/fpkdl.com_960_1758981143_building-space_664434-7932.jpg' },
    { name: 'GOLF COURSE ROAD', img: '/images/dlfimage.jpg' },
    { name: 'GOLF COURSE EXTENSION', img: '/images/best-western-merrion.jpg' },
    { name: 'SOHNA ROAD', img: '/images/tajmahalhotel_lajpatnagar.jpg' },
    { name: 'CYBER CITY', img: '/images/paschimvihar.jpg' },
    { name: 'MG ROAD', img: '/images/OIP.webp' },
    { name: 'SECTOR 29', img: '/images/OIP (2).webp' },
    { name: 'SUSHANT LOK', img: '/images/dwarkahotel.avif' },
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
      cta: 'CHAT ON TELEGRAM',
      // replace with your image path or import
      img: '/images/the-leela-ambience-gurgaon_image.jpg',
      badge: null,
    },
    {
      id: 2,
      title: 'Trident Hotel\nGurgaon',
      desc:
        'The Trident Hotel location offers Spa in Gurgaon best treatments. Therapists adjust each session based on what you need. They help blood circulation and reduce mental pressure. Your whole system feels balanced when you finish.',
      cta: 'CHAT ON TELEGRAM',
      img: '/images/Trident Gurgaon banner1920x1080.webp',
      badge: 'PREMIUM',
    },
    {
      id: 3,
      title: 'The Westin\n Gurgaon',
      desc:
        'At The Westin, Spa in Gurgaon provides complete wellness packages. The therapists use good products and proper skills. Every treatment delivers strong results. You get an experience that stands out from regular spas.',
      cta: 'CHAT ON TELEGRAM',
      img: '/images/the-hotel--v12572232.jpg',
      badge: 'PREMIUM',
    },
    {
      id: 4,
      title: 'JW Marriott\nGurgaon',
      desc:
        'Spa in Aerocity  created special massage options for ITC Grand Bharat guests. These treatments use luxury methods that refresh your entire body. You feel energized and calm at the same time. Balance returns to your life',
      cta: 'CHAT ON TELEGRAM',
      img: '/images/JwMarriott_CP.jpg',
      badge: 'PREMIUM',
    },
  ]
  return (
    <main bg-gradient-to-b from-emerald-50 to-white>
      <section className="relative min-h-[50vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] font-sans overflow-hidden bg-black">
        <div className="font-sans overflow-hidden">
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
                src="/images/spa-hero-bg.jpg"
                alt="Luxury Spa in Gurgaon - Professional Massage Treatment Room"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent mix-blend-multiply" />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-10 sm:py-16 lg:py-20">
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

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                  Best Spa in Gurgaon - 12+ Luxury Spa Outlets for Hotel, Home & 5-Star Spa Services
                </h1>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=918448499173"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-semibold shadow-lg transition"
                  >
                    Book Now
                  </a>

                  <a
                    href="/massage-service-in-gurgaon"
                    className="inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white px-5 py-3 font-medium text-slate-800 shadow-sm transition"
                  >
                    Explore Services
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-2 text-white text-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Rs: 1,999 For 45–60 min sessions</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-2 text-white text-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18" />
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
                    </svg>
                    <span>Private rooms available</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-2 text-white text-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v4" />
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 6h8" />
                    </svg>
                    <span>Certified therapists</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-2 text-white text-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v4" />
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 6h8" />
                    </svg>
                    <span>Foreigner therapists</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="z-10 flex items-center justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-md">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                    <Image
                      src="/images/fpkdl.com_960_1757505385_young-woman-relaxing-back-massage-spa_151013-21109.jpg"
                      alt="spa treatment"
                      width={720}
                      height={480}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <div className="absolute left-4 bottom-4 text-white">
                      <div className="text-sm font-medium">5 Star Hotel Spa In Just</div>
                      <div className="text-xs text-white/80 mt-1">60 min · ₹14999</div>
                    </div>
                  </div>

                  <div className="absolute -left-5 -top-5 bg-white rounded-full p-3 shadow-xl">
                    <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 6.5 7 13 7 13s7-6.5 7-13c0-3.87-3.13-7-7-7z" strokeWidth="1.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* <div className="absolute -right-6 bottom-8 bg-white/90 rounded-3xl px-4 py-2 shadow-lg text-sm">
              <div className="font-medium">Amazing experience — total reset!</div>
              <div className="text-xs text-gray-600">— Priya</div>
            </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* /// */}
      <section className="mt-30 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-emerald-700 mb-3">
Why Choose Our Massage Spa in Gurgaon?
          </h2>
          <p className="text-gray-600 mb-10">
            Luxury Spa in Gurgaon has 12+ Outlets across Delhi NCR. Every location has trained therapists who know how to help you relax. You get quality care without traveling far. Luxury wellness is now available in your neighborhood. These outlets focus on making you feel better through proper massage and spa treatments.

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
                Quality massage therapy starts at ₹1999 at{" "} <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600 font-medium">
                  Spa in Gurgaon
                </strong> Gurgaon. The low price does not mean poor service. Every treatment follows proper methods that help blood flow better and reduce body aches. Your mind feels clearer after each session. You can choose short treatments or longer ones that cover your whole body. The therapists know different styles like using scented oils or pressing deep into muscles. Rich people and regular people can both afford these services. The staff treats everyone with respect and care. The place feels calm and looks nice. You walk out, feeling like you just woke up from a good sleep.
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
                    alt="property 1"
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
                    alt="property 2"
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
                Daily life creates stress that builds up over time. Spa in Gurgaon provides special massage treatments that help your entire system calm down. The therapists here have proper training and certificates. Our team provides <a href="/spa-in-gurgaon" className="text-emerald-700 font-medium underline hover:text-emerald-800">massage in Gurgaon</a>, combining traditional methods with modern ones to give you the best results. Each visit feels personal because they adjust everything to fit your needs. The rooms are clean and comfortable. You leave feeling lighter and more peaceful than when you arrived.

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
                { title: "Female To Male Massage", icon: "💆‍♂️", desc: "Professional, private, and refreshing massage in Delhi" },
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
                <a href="/about-us">
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More About Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>

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
                  alt="Spa Interior"
                  layout="fill"
                  objectFit="cover"
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
                Some days you do not want to go anywhere. Spa in Gurgaon is a hub of trained therapists ready to visit your home or provide a hotel spa in Karol Bagh, Paharganj, and other locations. You stay in your own space while getting professional treatment. Our therapists at the<strong> massage parlour in Gurgaon </strong>bring everything needed for a complete session. They work carefully and know exactly what to do. Your body responds well because you are already comfortable. This service works for any schedule. You decide when and where you want to relax.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href="https://api.whatsapp.com/send?phone=918448499173"
                  className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium shadow"
                >
                  Book Now
                </a>

                <a
                  href="https://t.me/yourchannel"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-white border border-emerald-200 text-emerald-700 px-5 py-3 rounded-lg shadow-sm hover:shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zM17.7 7.3l-1.8 8.1c-.1.5-.4.6-.8.6-.2 0-.3-.1-.5-.2l-2.2-1.7-1.1 1.1v0l.4 2.9c.1.5 0 .8-.3 1.1-.3.3-.6.3-1.1.2-1.2-.3-3.1-1.1-4.2-1.7-.9-.6-1-1.2-.6-2.1l3.9-7.2c.4-.9.9-1.2 1.8-.8L17.7 7.3z" />
                  </svg>
                  Chat on Telegram
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
                <p className="text-gray-600 mb-6">
                  {service.title === "Full Body Massage in Gurgaon" ? (
                    <>Our <a href="/full-body-massage-in-gurgaon" className="text-emerald-700 font-medium underline hover:text-emerald-800">full-body massage in Gurgaon</a> provides a complete head-to-toe relaxation experience. Trained therapists use proven methods to loosen tight spots and improve blood flow throughout your system. Afterward, you feel awake but calm. Stress disappears and your energy comes back stronger than ever.</>
                  ) : service.title === "B2B Massage in Gurgaon" ? (
                    <>We offer deeply therapeutic body-to-body massage in Gurgaon where our skilled therapists provide the most soothing experience. Whether you want to go into deep sleep or reduce stress, our <a href="/b2b-massage-in-gurgaon" className="text-emerald-700 font-medium underline hover:text-emerald-800">B2B massage services in Gurgaon</a> are your go-to choice for complete wellness and relaxation.</>
                  ) : service.description}
                </p>
                <a href="#" className="text-emerald-600 font-medium flex items-center gap-2 group-hover:underline">Learn More
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
              Each outlet from Spa in Gurgaon looks elegant and feels comfortable. The design helps you relax the moment you walk in. Everything stays clean and organized. You get complete privacy during treatments.
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
                href={`#/cities/${c.name.toLowerCase()}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group block rounded-2xl overflow-hidden shadow-lg relative transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="relative w-full h-44 sm:h-48 lg:h-52">
                  <Image
                    src={c.img}
                    alt={c.name}
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
              href="/spa-in-mahipalpur"
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
              Luxury Spa in Gurgaon works with top hotels in the city. You can book treatments at these fancy locations. The service quality remains consistent everywhere.
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

                <a href="#" className="mt-6 text-indigo-600 font-medium">
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

                <a href="#" className="mt-6 text-indigo-600 font-medium">
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

                <a href="#" className="mt-6 text-indigo-600 font-medium">
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

                <a href="#" className="mt-6 text-indigo-600 font-medium">
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
              All prices at Spa in Gurgaon are clear and easy to understand. Services begin at ₹1999 for everyone. High quality wellness does not cost too much here. Anyone can afford to take care of themselves.
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
            Spa in Gurgaon provides extra features that make your visit better. Every detail adds to your comfort.

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
            <a href="/spa-in-mahipalpur" className="inline-block mt-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition">
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
              The spa in Gurgaon is remarkable due to the trained professionals and pleasant environment. Each treatment is carried out with the help of more modern approaches. It remains focused on relieving stress and making you feel better. Your health improves with each visit.
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
                      src="/images/physicalbenifits1.png"   // put image in public/images/icons/
                      alt="booking icon"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p className="text-slate-700">Relieves muscle tension — eases stiffness and soreness.</p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 relative flex-shrink-0">
                    <Image
                      src="/images/physicalbenifits2.png"   // put image in public/images/icons/
                      alt="booking icon"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p className="text-slate-700">Improves blood circulation — boosts oxygen flow.</p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 relative flex-shrink-0">
                    <Image
                      src="/images/physicalbenifits3.png"   // put image in public/images/icons/
                      alt="booking icon"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p className="text-slate-700">Detoxifies the body — helps flush out toxins via massage.</p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 relative flex-shrink-0">
                    <Image
                      src="/images/physicalbenifits4.png"   // put image in public/images/icons/
                      alt="booking icon"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
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
              Getting an appointment with Spa in Gurgaon happens in simple steps. The system saves your time and guarantees good service.
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
                  <p className="text-xs text-emerald/70">First, you set up an appointment time. Then you talk with specialists about what you want to achieve. They help you pick treatments that match your goals.</p>
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

              <div className="mt-auto text-sm text-emerald/80">Flexible slots, personalized recommendations, aur safety protocols follow karte hain.</div>
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
                  <p className="text-xs text-emerald/70">Then you decide what kind of massage would suit you. Various solutions address stress or blood circulation or muscle issues. Each of them refreshes your body in a certain way.</p>
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

              <div className="mt-auto text-sm text-emerald/80">Comfortable rooms, calming music aur therapy focused on your needs.</div>
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
                  <p className="text-xs text-emerald/70">Finally, trained therapists perform your chosen treatment. You lie down and let them work. At the end of the session, you are totally relaxed and refreshed.</p>
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

              <div className="mt-auto text-sm text-emerald/80">Personalized notes aur next booking par special discount.</div>
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


