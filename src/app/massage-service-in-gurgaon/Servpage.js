  'use client';

  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import {  Montserrat } from 'next/font/google';
  import Image from 'next/image';
  import { Check } from "lucide-react";
  import { FaHotel, FaHome, FaMapMarkerAlt   } from "react-icons/fa";
  import { FaTelegram } from "react-icons/fa";
  import { FaHandSparkles, FaLeaf } from 'react-icons/fa';
  import { FaSpa, FaHotTub } from 'react-icons/fa';
  import { FaStar } from "react-icons/fa";
  import { AnimatePresence } from "framer-motion";
  import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Playfair_Display as PlayfairFont } from 'next/font/google';
const playfair = PlayfairFont({ subsets:['latin'], weight:['400'] });

import { Phone, Send, ListChecks, Sparkles, Home, Building2, ArrowRight } from "lucide-react";
import {   BadgeCheck, Wallet, CalendarCheck, MapPin, HandHeart } from "lucide-react";
//   import WhatsappFloat from '../../components/WhatsappFloat';

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

  const featuresData = [
  {
    title: "Helps to De-Stress",
    description:
      "Soothes your mind and body through calming massage techniques, relaxing aromas, and a peaceful ambiance, leaving you refreshed and tension-free.",
    image: "/images/HelpstoDe-Stress.webp",
  },
  {
    title: "Improves Blood Flow and Circulation",
    description:
      "Relaxes muscles, stimulates lymphatic drainage, and promotes oxygen-rich blood flow for vitality, healing, and deep relaxation.",
    image: "/images/improvebloodflow.webp",
  },
  {
    title: "Makes Skin More Radiant",
    description:
      "Detoxifies, hydrates, and nourishes your skin, leaving it softer, smoother, and naturally radiant.",
    image: "/images/SkinMoreRadiant.jpeg",
  },
];

  const services = [
    {
      title: "AromaTherapy",
      image: "/images/fpkdl.com_960_1760684372_close-up-hand-holding-ice-cream-table_1048944-25719661.jpg",
      description: "Spa in Gurgaon applies essential oils in the Aromatherapy sessions to produce a relaxing effect. The oils are carefully selected to help your skin and ease your mind. Each movement during the massage works to balance your body's natural energy. The smell of the oils stays with you afterward. Tiredness fades away and you feel genuinely peaceful.",
      duration: "60-90 min"
    },
    {
      title: "Stone Therapy",
      image: "/images/fpkdl.com_960_1760684770_relaxing-lower-back-massage-pain-relief-comfort_1365064-5792.jpg",
      description: "Stone Therapy in Spa in Gurgaon is done on hot basalt stones. The stones move smoothly over your muscles and release tightness that has built up over time. The warmth feels comforting and helps energy return to sore areas. This treatment improves blood flow and helps with stiff joints. You feel calm and centered when the session ends.",
      duration: "75 min"
    },
    {
      title: "Couple Massage",
      image: "/images/young-couple-relaxing-back-massage-health-spa-focus-is-young-woman.jpg",
      description: "<a href=\"/couples-massage-in-gurgaon\" class=\"text-emerald-700 font-medium underline hover:text-emerald-800\">Couple Massage</a> is provided by Spa in Gurgaon to couples who wish to have a joint massage. Two therapists work at the same time, matching their movements carefully. The room has soft lighting and pleasant scents. Both people receive soothing touches that reduce tension. It becomes a special moment that brings couples closer together.",
      duration: "90 min"
    },
    {
      title: "Sandwich Massage",
      image: "/images/sandwich.jpg",
      description: "The <a href=\"/sandwich-massage-in-gurgaon\" class=\"text-emerald-700 font-medium underline hover:text-emerald-800\">Sandwich Massage</a> at Spa in Gurgaon uses methods that work on both sides of your body at once. Different angled pressure is applied to release tight muscles. It is a good experience but powerful. Your body will be in balance once again and your mind will be clearer. Tired muscles get the relief they need. Not sure which treatment suits you? Compare it with a <a href=\"/difference-between-sandwich-massage-and-deep-tissue-massage\" class=\"text-emerald-700 font-medium underline hover:text-emerald-800\">deep tissue massage</a> or a <a href=\"/sandwich-massage-vs-swedish-massage\" class=\"text-emerald-700 font-medium underline hover:text-emerald-800\">Swedish massage</a> to decide.",
      duration: "60 min"
    },
    {
      title: "Thai Massage",
      image: "/images/fpkdl.com_960_1760685290_therapist-preparing-procedure_274689-24623.jpg",
      description: "Spa in Gurgaon provides Thai Massage using traditional methods from ancient practices. No oil is used during this treatment. Instead, pressure points are worked on and your body is gently stretched. Energy that was stuck starts moving freely again. Your joints feel more flexible and your whole body feels lighter. A sense of renewed energy stays with you after the session.",
      duration: "60 min"
    },
    // {
    //   title: "Erotic Massage",
    //   image: "/images/fpkdl.com_960_1760685386_woman-is-laying-bed-with-tree-background_133748-18821.jpg",
    //   description: "Our luxury spa in Delhi offers the ancient Indian technique known as Potli massage. This treatment uses herbal pouches, warmed up and filled with spices and herbs,.",
    //   duration: "60 min"
    // },
    {
      title: "Full-body Massage",
      image: "/images/fpkdl.com_960_1760685466_therapist-make-professional-hand-massage-back-shoulders-young-beautiful-woman_359031-29618.jpg",
      description: "A <a href=\"/full-body-massage-in-gurgaon\" class=\"text-emerald-700 font-medium underline hover:text-emerald-800\">Full Body Massage</a> from Spa in Gurgaon covers your entire body from top to bottom. It helps reduce tiredness and makes your skin look healthier. Blood circulation improves during the treatment. The pressure used is firm but gentle. Your body regains its natural energy and feels balanced again. The effects last well beyond the session.",
      duration: "60 min"
    },
    // {
    //   title: "Nuru Massage",
    //   image: "/images/woman-getting-back-massage-from-masseur.jpg",
    //   description: "While this is not all that can be had, a massage is the crown jewel at Luxury Spa in Delhi where we do have a variety of special treatments that can suit all your wellness needs.",
    //   duration: "60 min"
    // },
    {
      title: "B2B Massage",
      image: "/images/fpkdl.com_960_1760685075_woman-getting-back-massage-from-masseur_23-2150461404.jpg",
      description: "Office workers should be relieved of the pressure of day-to-day life. Spa in Gurgaon developed <a href=\"/b2b-massage-in-gurgaon\" class=\"text-emerald-700 font-medium underline hover:text-emerald-800\">B2B Massage</a> that targets busy professionals that are under constant stress. These meetings may occur in your working place. The stress is reduced, and the energy is restored. Employees who receive these treatments work better because their minds and bodies feel restored.",
      duration: "90-120 min"
    },
    {
      title: "Reflexology",
      image: "/images/fpkdl.com_960_1760685860_full-body-massage-spa-salon_926199-4238291.jpg",
      description: "Reflexology at Spa in Gurgaon works on specific points located on your feet and hands. Pressure on these points helps release tension throughout your entire body. Internal healing gets triggered by each touch. Blood flow improves, and your system finds better balance.",
      duration: "60 min"
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

  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500'],
    variable: '--font-montserrat'
  });

  {/* Our Process */}
  const processSteps = [
  {
    number: '01',
    title: 'Meeting',
    description: 'Step into our Gurgaon spa lounge, meet the manager, pick Thai, Swedish or aroma massage, choose your home-service slot, get the price, and lock the same-day booking in under five minutes.',
    image: '/images/OIP (1).webp',
  },
  {
    number: '02',
    title: 'Treatment',
    description: 'Confirm your Delhi or Gurgaon home-massage plan: date, time, male or female therapist, oil scent, session length; click the payment link, receive instant SMS confirmation, and relax until the doorbell rings.',
    image: '/images/fpkdl.com_960_1760684372_close-up-hand-holding-ice-cream-table_1048944-25719661.jpg',
  },
  {
    number: '03',
    title: 'Finalizing',
    description: 'The therapist arrives at your doorstep, sets up fresh linens, organic oils and soft candles; Thai stretches loosen tight joints, Swedish strokes calm the mind, and after 60–90 minutes your body feels light, fresh and pain-free.',
    image: '/images/new5.jpeg',
  },
];
const features2 = [
  { 
    title: 'Easy Booking', 
    icon: '/images/Group-42-1.png',
    description: 'Premium organic ingredients for radiant, healthy skin'
  },
  { 
    title: 'Luxury Oils', 
    icon: '/images/Group-48-1.png',
    description: 'Holistic treatments to melt away stress and tension'
  },
  { 
    title: 'Certified Therapists', 
    icon: '/images/Group-47-1.png',
    description: 'Signature therapies tailored to your unique needs'
  },
  { 
    title: 'Relaxation Guarantee', 
    icon: '/images/Group-45-1.png',
    description: 'Tranquil oasis designed for complete serenity'
  },

];
{/* End Our Process */}
const faqs = [
    
    {
      question: "What services are offered at your Spa in Gurgaon?",
      answer: " Our Spa service in Gurgaon includes Thai, couple, B2B, and full-body massages. Certified Indian and foreign therapists deliver each treatment in a calm, hygienic environment for a complete relaxation experience.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
      question: "Do you provide professional Massage Service in Delhi?",
      answer: "Yes — our massage service in Delhi covers Thai, aroma, and sandwich massages. Clients enjoy personalized sessions with trained therapists and premium oils for stress relief and total body rejuvenation.",
      icon: <FaHandSparkles className="text-teal-600" />
    },
    
    {
      question: " What makes your Spa in Connaught Place special?",
      answer: "The Spa in Connaught Place offers 5-star ambiance, skilled therapists, and a range of therapies. Conveniently located, it’s perfect for professionals seeking quick yet luxurious relaxation near central Delhi.",
      icon: <FaLeaf className="text-teal-600" />
    },
    {
      question: "Are there customized massage services available in Gurgaon?",
      answer: "Absolutely — our massage service in Gurgaon can be customized based on pressure preference, oil type, and relaxation goals. Book single or combo sessions as per your comfort.",
      icon: <FaSpa className="text-teal-600" />
    },
    {
          question: "Do you offer premium spa experiences in Greater Kailash?",
          answer: "Yes — our spa in Greater Kailash features Thai, couple, and body-to-body massages. The luxurious setup ensures privacy and tranquility, ideal for self-care and relaxation sessions.",
          icon: <FaHotTub className="text-teal-600" />
        },
        {
              question: "What are the benefits of a Thai Massage in Delhi?",
              answer: "Our Thai Massage in Delhi relieves muscle stiffness, boosts flexibility, and enhances circulation. Conducted by Thai-trained therapists, it’s ideal for both physical and mental rejuvenation.",
              icon: <FaSpa className="text-teal-600" />
            },
  ];

  export default function Servpage() {
    
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

    const Button = ({ href, children }) => (
      <a
        href={href}
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-emerald-500 text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-300"
      >
        {children}
      </a>
    );

    return (
      <main>
        {/* banner */}
               <div className="relative w-full h-[50vh] md:h-[70vh] min-h-[340px] flex items-center">
      {/* Background image - place your image at /public/images/hero-banner.jpg */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/image123.png"
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
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white"
            >
              Grab The <span className="text-emerald-300">Best Luxury Spa</span>
              <br /> Service in Gurgaon <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-300">With Certified Therapist</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 max-w-2xl text-white"
            >
              Luxury Spa in Gurgaon Offering Professional Massage and Wellness Therapies
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="https://api.whatsapp.com/send?phone=918448499173" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white px-6 py-3 rounded-full shadow-lg hover:scale-[1.02] transform transition">
                Book a Consultation
              </a>

              <a href="/massage-service-in-gurgaon" className="inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-gray-700 hover:shadow-md transition">
                View Services
              </a>
            </motion.div>

            {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white/80 rounded-xl shadow-md">
                <div className="text-emerald-500 text-2xl">✔️</div>
                <p className="mt-2 font-semibold">Verified Profiles</p>
                <p className="text-sm text-gray-500">Identity & background-checked</p>
              </div>

              <div className="p-4 bg-white/80 rounded-xl shadow-md">
                <div className="text-emerald-500 text-2xl">🔒</div>
                <p className="mt-2 font-semibold">Discreet Booking</p>
                <p className="text-sm text-gray-500">Secure & private handling</p>
              </div>

              <div className="p-4 bg-white/80 rounded-xl shadow-md">
                <div className="text-emerald-500 text-2xl">⭐</div>
                <p className="mt-2 font-semibold">Personal Concierge</p>
                <p className="text-sm text-gray-500">Tailored experiences & planning</p>
              </div>
            </div> */}
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
    </div>  
        {/* end banner */} 
      <div className="bg-gradient-to-b from-[#ecfdf5] to-[#d1fae5] w-full">
        
        
      {/* Services Section */}
      <section id="services-section" className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">

        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-emerald-200 mix-blend-multiply"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-emerald-100 mix-blend-multiply"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-emerald-300 mix-blend-multiply opacity-40"></div>
        </div>
        {/* Floral decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
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
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            >
              ✿
            </motion.div>
          ))}
        </div>
        {/* Gold geometric patterns */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-700/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-800/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-light text-center text-emerald-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
             Our Spa Services in Gurgaon 
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'center' }}
          ></motion.div>

          {/* Subheading */}
          <motion.p
            className="mt-10 text-center text-xl md:text-2xl text-emerald-800 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
           Wellness treatments designed to bring complete relaxation and restore your mind and body.
          </motion.p>
          
          {/* Services Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Service Card 1 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100"
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.25)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                    <FaHotel className="text-3xl text-emerald-600" />
                  </div>

                </div>
                <h3 className="text-2xl font-light text-emerald-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Hotel Spa</h3>
                <p className="text-emerald-700 mb-6 leading-relaxed">
                  Spa in Gurgaon offers hotel spa treatments that feel truly special. Each session uses quality oils and takes place in a comfortable setting. Trained professionals work to make your hotel stay more relaxing. You get to enjoy a peaceful break without leaving your accommodation.
                </p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-emerald-600 font-medium">60-90 min</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Service Card 2 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100"
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.25)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                    <FaHome className="text-3xl text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-light text-emerald-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Home Spa</h3>
                <p className="text-emerald-700 mb-6 leading-relaxed">
                  Get spa treatments at your own place. Spa in Gurgaon sends trained professionals to your home with everything needed. They give quality massage sessions at the most comfortable place. This is the choice that will provide you with complete privacy and the greatest relaxation.
                </p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-emerald-600 font-medium">75-120 min</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Service Card 3 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100"
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.25)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                    <FaMapMarkerAlt className="text-3xl text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-light text-emerald-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Spa OutLet</h3>
                <p className="text-emerald-700 mb-6 leading-relaxed">
                 We run several premium locations throughout <a href="/spa-in-gurgaon" className="text-emerald-700 font-medium underline hover:text-emerald-800">Gurgaon</a>. Each outlet provides a quiet environment focused on your comfort. The spaces are designed to help you relax fully. Visit any location for treatments that focus entirely on your wellbeing.
                </p>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-emerald-600 font-medium">90-150 min</span>
                  <button className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
              {/* Our Signature Treatments */}
              <section className="w-full my-5 py-5 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-emerald-100 opacity-70 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-emerald-200 opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium"
            >
              Relax & Rejuvenate
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-6"
            >
              Our Relaxing Massage Service in Gurgaon
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg text-emerald-800"
            >
              Premium treatments that will eliminate stress and make you feel better.
            </motion.p>
          </div>

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
                      <p className="text-emerald-800 mb-6" dangerouslySetInnerHTML={{ __html: service.description }} />
                    </div>
                    
                    <div>
                      <a 
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
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
              </section>
              {/* End Our Signature Treatments */}
              {/* icon section */}
              <section className="relative bg-gradient-to-br from-[#fcf7f4] to-[#f8f0eb] py-24 px-6 lg:px-16 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5e4d7] rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e8d1c5] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
                    
                    <div className="max-w-7xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Text and Features */}
                        <div className="relative z-10">
                          <div className="mb-10">
                            <motion.span 
                              className="text-lg font-medium text-emerald-800 tracking-widest"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              EXPERIENCE THE DIFFERENCE
                            </motion.span>
                            
                            <motion.h2 
                              className="text-4xl md:text-5xl font-bold text-[#3a2e2a] mt-2 mb-6 leading-tight"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                               Door to Door Relaxation: <span className="text-emerald-700">Book Massage at Home in Gurgaon</span>
                            </motion.h2>
                            
                            <motion.p 
                              className="text-lg text-[#5c4a42] max-w-xl mb-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              Spa in Gurgaon brings spa treatments directly to where you live. Trained professionals show up with all equipment and quality oils needed. The treatment happens in your own space where you feel safest. You can choose relaxing sessions or deeper therapeutic work. Complete privacy is guaranteed and you don not have to travel anywhere. 
                            </motion.p>
                          </div>
              
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {features2.map((item, index) => (
                              <motion.div 
                                key={index}
                                className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-5 border border-[#e8d5c9] shadow-sm hover:shadow-md transition-all"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                              >
                                <div className="flex items-start gap-4">
                                  <div className="bg-emerald-50 p-3 rounded-xl">
                                    <Image 
                                      src={item.icon} 
                                      alt={item.title} 
                                      width={36} 
                                      height={36} 
                                      className="object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold text-[#3a2e2a] mb-1">{item.title}</h3>
                                    <p className="text-sm text-[#7d6b62]">{item.description}</p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
              
                          <motion.div 
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                          >
                            <motion.button 
                              className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white px-8 py-3.5 rounded-full font-medium hover:shadow-lg transition-all"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                               <a
                        href="https://api.whatsapp.com/send?phone=918448499173"
                        
                      >
                        Book Your Spa Session
                      </a>
                             
                            </motion.button>
                            <motion.button 
                              className="border-2 border-emerald-700 text-emerald-700 px-8 py-3.5 rounded-full font-medium hover:bg-emerald-50 transition-all"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <a href="/spa-price-in-delhi-ncr" className="flex items-center gap-2">
                                 View packages
                              </a>
                              
                            </motion.button>
                          </motion.div>
                        </div>
              
                        {/* Right: Image */}
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image 
                              src="/images/spaExpert4.jpg"
                              alt="Luxury Spa Treatment"
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          {/* Decorative frame */}
                          <div className="absolute inset-0 border-8 border-white border-opacity-30 rounded-[2.5rem] pointer-events-none"></div>
                          
                          {/* Floating badge */}
                          <motion.div 
                            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-4 px-8 rounded-full shadow-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ 
                              delay: 0.8,
                              duration: 0.8,
                              type: "spring",
                              stiffness: 100
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-5 h-5 text-emerald-200" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="font-semibold">500+ 5-Star Reviews</span>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </section>
              {/* ENd icon section */}
              {/* About Section */}
                    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#fdf9f5] to-[#fefaf6] relative overflow-hidden">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-50 to-transparent opacity-70"></div>
                      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-emerald-200/30 blur-3xl"></div>
                      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-emerald-100/40 blur-3xl"></div>
              
                      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                        
                        
              
                        {/* Right Text Section with Enhanced Styling */}
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
                            className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            Luxury Spa in Gurgaon Offering <span className="relative">
                              <span className="text-emerald-600 z-10 relative">Professional Massage and Wellness Therapies</span>
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
                             Spa in Gurgaon combines expert talents with natural oil and relaxing environment. Each and every therapy makes your body and your mind feel good. Perhaps you had a hard week, or you simply wish to have a moment to yourself. Our professionals make sure you find that calm feeling your body needs. Clarity returns and stress disappears.
                            </p>
                            {/* <p className="text-gray-600 text-lg leading-relaxed">
                              Our expert therapists combine traditional healing methods with modern wellness practices to create custom treatments that will leave you feeling refreshed, balanced, and revitalized.
                            </p> */}
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
                              { title: "Foreigner Therapist", icon: "🌏" },
                              { title: "Female To Male Massage", icon: "💆‍♂️" },
                              { title: "Best Body To Body Spa", icon: "✨" },
                              { title: "Couple Massage", icon: "👩‍❤️‍👨" }
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
                                  <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-emerald-600 transition-colors">
                                    {feature.title}
                                  </h4>
                                  <p className="text-gray-600 text-xs">Luxurious and personalized treatments</p>
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
                              href="/spa-in-mahipalpur"
                              className="relative overflow-hidden px-8 py-4 rounded-full font-medium text-white group"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-all"></div>
                              <span className="relative z-10 flex items-center gap-2">
                                Visite Our Outlets
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </motion.a>
              
                            <motion.a
                              href="#"
                              className="px-8 py-4 rounded-full font-medium border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-colors relative overflow-hidden group"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <a href="/about-us" className="relative z-10 flex items-center gap-2 cursor-pointer">
                                About Our Journey
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 000-1.676.62C6.602" />
                                </svg>
                              </a>
                            </motion.a>
                          </motion.div>
                        </motion.div>
                        {/* Left Image with Modern Frame & Parallax Effect */}
                            <motion.div
                              className="relative"
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group w-full h-[500px]">
                                {/* Glass frame effect */}
                                {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border border-white/30 rounded-[2.5rem] z-20 pointer-events-none"></div> */}
                                
                                {/* Image container */}
                                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                                  {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/15 via-emerald-800/10 to-black/25 z-10"></div> */}
                                  {/* <div className="bg-gradient-to-tr from-emerald-200 to-rose-100 w-full h-full animate-pulse"></div> */}
                                  <Image
                                   loading="lazy"
                                    src="/images/fpkdl.com_960_1760686125_man-spa-salon_926199-2825304.jpg"
                                    alt="Spa Interior"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-[2.5rem] z-0"
                                  />
                                  {/* <video
                                      autoPlay
                                      loop
                                      muted
                                      playsInline
                                      className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] z-0"
                                    >
                                      <source src="/images/spavideo.mp4" type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video> */}
              
                                </div>
                                
                                {/* Floating decorative elements */}
                                {/* <motion.div
                                  className="absolute top-6 left-6 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl z-0"
                                  animate={{ 
                                    y: [0, -15, 0],
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, 0]
                                  }}
                                  transition={{ 
                                    duration: 8, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                  }}
                                /> */}
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
                              
                              {/* Floating testimonials */}
                              {/* <motion.div 
                                className="absolute -bottom-6 right-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 w-64 border border-white/50"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                viewport={{ once: true }}
                              >
                                <div className="flex items-center mb-2">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 24 24">
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                    </svg>
                                  ))}
                                </div>
                                <p className="text-gray-700 text-sm font-medium">"The most rejuvenating experience in Delhi. Truly exceptional therapists!"</p>
                                <div className="mt-2 flex items-center">
                                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
                                  <span className="text-xs font-medium text-emerald-700">Priya Sharma</span>
                                </div>
                              </motion.div> */}
                            </motion.div>
                      </div>
                    </section>
                    
              {/* ////// */}
                  <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50/60 py-16">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Unified card */}
        <div className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-[0_30px_100px_-40px_rgba(16,185,129,0.45)] backdrop-blur-md md:p-10">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100/80 px-3 py-1 text-sm text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> Premium Wellness
            </span>
            <h2 className="mt-4 font-serif text-4xl font-bold text-emerald-950 md:text-5xl">
              Spa & Massage Home Service Gurgaon
            </h2>
            <p className="mt-3 text-emerald-800/90 md:text-lg">
              <a href="/spa-in-lajpat-nagar" className="text-emerald-700 font-medium underline hover:text-emerald-800">Lajpat Nagar</a> • Karol Bagh
            </p>
          </div>

          {/* Collage + Content in one row (stacks on mobile) */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Images (edit the URLs) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/fpkdl.com_750_1758981740_exterior-view-bellagio-caesars-palace-hotel-las-vegas-nevada-march-6-2024_943860-2321.jpg" // TODO: replace with your image
                    alt="Spa image 1"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/fpkdl.com_960_1758980558_relaxing-spa-room-with-candles_1187092-239475.jpg" // TODO: replace with your image
                    alt="Spa image 2"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative col-span-2 aspect-[5/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/fpkdl.com_750_1760611274_caucasian-woman-enjoying-relaxing-antistress-head-massage-quiescent_31965-325098.jpg" // TODO: replace with your image
                    alt="Spa image 3"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Easy 200‑word content area */}
            <div className="lg:col-span-6">
              {/* TIP: paste your ~200 words below as one block; it stays readable. */}
              <div className="prose prose-emerald max-w-none prose-p:text-emerald-800">
                <p className="text-lg leading-relaxed md:text-xl">
                 Book kar lo—abhi same-day Thai, Swedish ya deep-tissue massage ghar pe. Connaught Place, Greater Kailash, Gurgaon—kahi bhi, ek call pe therapist pahuch jayega. Organic oil, fresh towel, light music aur candle smell ke saath poora spa set-up 20 minute mein ready. Delhi massage at home ya Gurgaon spa home service, fixed rate, no hidden charge, lady ya male therapist chun lo. Evening 9 baje tak slot milega, office stress, back pain ya weekend chill ke liye. Couple package, gift card aur repeat-customer discount bhi hai—abhi booking karo, kal se relax.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=918448499173" // TODO: replace with your booking link
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-2 h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 01-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <span className="text-sm text-emerald-700/90">Limited slots • Quick confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
                          {/* Why Choose Us Section */}
       
             {/* content section */}
                 <section className="py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-lg font-semibold text-emerald-700 tracking-widest uppercase">
        Our Signature Offerings
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mt-4 leading-snug">
        Why Choose Our Spa Centre for Best Massage Service in Gurgaon
      </h1>
      <div className="w-24 h-1 bg-emerald-600 mx-auto mt-5 rounded-full"></div>
    </motion.div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* LEFT SIDE */}
      <div className="space-y-10">
        {/* Foreigner Staff */}
        <motion.div
          className="bg-white border border-emerald-200 rounded-3xl shadow-md hover:shadow-xl transition-all p-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-emerald-800">Skilled and Certified Therapists</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-5">
            Spa in Gurgaon employs professionals who received training internationally. They have spent years practicing different techniques. Their knowledge covers everything from Thai methods to Aromatherapy treatments. Each client gets careful attention based on how the body works and how healing energy moves. Sessions are guided by real expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { title: 'Affordable Wellness for Everyone', desc: 'Everyone should be able to access quality spa treatments. Spa in Gurgaon keeps prices competitive while maintaining high standards. You can book a short session or spend the whole day. Premium massage services in Gurgaon do not have to cost too much. Quality and comfort never get reduced.' },
              { title: 'Hassle-Free Booking & Instant Appointments', desc: 'Booking with Spa in Gurgaon is simple. You can contact the support team by phone, WhatsApp, or Telegram. Time slots are flexible and prices are clear from the start. Service happens quickly. Everything runs smoothly from when y ou book until your treatment ends.' },
              // { title: 'Uzbeki Therapist', desc: 'Focused on energy flow & stress detox' }
            ].map((item, i) => (
              <div key={i} className="bg-[#f9f6f3] p-4 rounded-xl border border-emerald-200">
                <h3 className="font-bold text-emerald-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <span className="inline-block bg-emerald-100 text-emerald-800 py-1 px-4 rounded-full text-sm font-medium">
            60-90 min | From ₹2,800
          </span>
        </motion.div>

        {/* Why Go For Delhi Spa */}
        <motion.div
          className="bg-white border border-emerald-200 rounded-3xl shadow-md hover:shadow-xl transition-all p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-emerald-800">Get Personalized Massage Service Gurgaon With Best Massage Therapist</h2>
          </div>
          <p className="text-gray-600 mb-6">
           Every session at Spa in Gurgaon gets customized for your specific body. Certified therapists check where you hold tension and where stress builds up. They look for energy blockages before choosing which techniques to use. Perhaps, you require Thai, Full Body, or Aromatherapy. The outcome corresponds to your wellness objectives. You become lighter, more balanced and totally refreshed.
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-6">
            {['Our Process to Book Massage Service in Gurgaon', 'Call or Message on Telegram', 'Choose the Massage Service'].map((service, i) => (
              <li key={i} className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-emerald-700 rounded-full mr-2"></div> {service}
              </li>
            ))}
          </ul>
          <span className="inline-block bg-emerald-100 text-emerald-800 py-1 px-4 rounded-full text-sm font-medium">
            75-90 min | From ₹3,200
          </span>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-10">
        {/* Top Rated Services */}
        <motion.div
          className="bg-white border border-emerald-200 rounded-3xl shadow-md hover:shadow-xl transition-all p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-emerald-800">24+ Outlets and Expanding Presence</h2>
          </div>
          <p className="text-gray-600 mb-6">
           Spa in Gurgaon operates more than 24 locations throughout Gurgaon and Delhi NCR. You can find us wherever you are. Outlets are located in luxury hotels and private spaces. Every location maintains the same service standards. Staff members are certified, and the atmosphere stays peaceful at each outlet.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {['♻️ Zero-Waste', '🌱 Organic Linens', '💧 Water Recycling', '🌎 Carbon Offset'].map((item, i) => (
              <span key={i} className="bg-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
          <span className="inline-block bg-emerald-100 text-emerald-800 py-1 px-4 rounded-full text-sm font-medium">
            60-120 min | From ₹2,500
          </span>
        </motion.div>

        {/* Home & Hotel Spa */}
        <motion.div
          className="bg-white border border-emerald-200 rounded-3xl shadow-md hover:shadow-xl transition-all p-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-emerald-800">Home & Hotel Spa</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Get Personalized Massage Service Gurgaon With Best Massage Therapist
Every session at Spa in Gurgaon gets customized for your specific body. Certified therapists check where you hold tension and where stress builds up. They look for energy blockages before choosing which techniques to use. Perhaps, you require Thai, Full Body, or Aromatherapy. The outcome corresponds to your wellness objectives. You become lighter, more balanced and totally refreshed.

          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {['JW Marriott Aerocity', 'The Ashok Chanakyapuri', 'The Park CP', 'The Suryaa NFC'].map((loc, i) => (
              <span key={i} className="bg-[#f0eae3] text-emerald-800 px-4 py-2 rounded-full text-sm">
                🏨 {loc}
              </span>
            ))}
          </div>
          <span className="inline-block bg-emerald-100 text-emerald-800 py-1 px-4 rounded-full text-sm font-medium">
            3-6 Hours | From ₹8,500
          </span>
        </motion.div>
      </div>
    </div>

    {/* CTA Section */}
    {/* <motion.div
      className="mt-20 bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-3xl p-10 text-white text-center shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold mb-4">Personalized Spa Journeys Await You</h3>
      <p className="max-w-2xl mx-auto mb-8 opacity-90">
        Begin your wellness story with a one-on-one consultation. Our experts design experiences tailored to your lifestyle and needs.
      </p>
      <a
        href="https://t.me/Tanuspa"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all"
      >
        <FaTelegram className="text-xl mr-3" />
        Join Telegram Channel
      </a>
    </motion.div> */}
  </div>
</section>

                    {/* end */}
                    {/* /////// */}
                        {/* <section className="relative isolate overflow-hidden bg-emerald-50 text-emerald-900">
     
      <div className="pointer-events-none absolute -top-28 -right-16 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200">
            <Sparkles className="h-4 w-4" /> Luxury Spa · Gurgaon
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Best Massage Service in Gurgaon — Why Choose Us & How to Book
          </h2>
          <p className="mt-3 text-emerald-700">
            Premium therapists, transparent pricing, and instant booking—available at home or at our luxury outlets across Gurgaon & Delhi NCR.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+91XXXXXXXXXX"
              className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:translate-y-[-1px] hover:bg-emerald-700"
            >
              <Phone className="h-5 w-5" /> Call Booking Desk
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://t.me/yourTelegramHandle"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-emerald-700 ring-1 ring-emerald-200 shadow-sm transition hover:bg-emerald-50"
            >
              <Send className="h-5 w-5" /> Message on Telegram
            </a>
          </div>
        </motion.div>

        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
  
  <motion.article
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100"
  >
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        src="/images/fpkdl.com_960_1757505385_young-woman-relaxing-back-massage-spa_151013-21109.jpg"
        alt="Certified therapist providing professional massage"
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
    </div>
    <div className="flex items-start gap-3 p-5">
      <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700 shadow-sm">
        <BadgeCheck className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-base font-semibold">Skilled & Certified Therapists</h3>
        <p className="mt-1 text-emerald-700">
          Internationally trained professionals with years of practice—from Thai
          methods to Aromatherapy. Sessions are guided by real expertise and tailored
          to your body’s needs.
        </p>
      </div>
    </div>
  </motion.article>

 
  <motion.article
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100"
  >
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        src="/images/spa-candles-relax.jpg"
        alt="Relaxing spa ambience with candles"
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
    </div>
    <div className="flex items-start gap-3 p-5">
      <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700 shadow-sm">
        <Wallet className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-base font-semibold">Affordable Wellness for Everyone</h3>
        <p className="mt-1 text-emerald-700">
          Premium treatments at competitive prices—book a short escape or a
          full-day retreat without compromising on quality or comfort.
        </p>
      </div>
    </div>
  </motion.article>

  
  <motion.article
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100"
  >
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        src="/images/spa-map-location.jpg"
        alt="Map and location markers for spa outlets"
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
    </div>
    <div className="flex items-start gap-3 p-5">
      <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700 shadow-sm">
        <MapPin className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-base font-semibold">24+ Outlets Across NCR</h3>
        <p className="mt-1 text-emerald-700">
          Find us in luxury hotels and private spaces throughout Gurgaon & Delhi
          NCR—same serene atmosphere and certified standards at every location.
        </p>
      </div>
    </div>
  </motion.article>

  
  <motion.article
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100"
  >
    <div className="relative h-60 w-full overflow-hidden">
      <Image
        src="/images/spa-personalized-session.jpg"
        alt="Therapist consulting client before session"
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
    </div>
    <div className="flex items-start gap-3 p-5">
      <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700 shadow-sm">
        <HandHeart className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-base font-semibold">Personalized Massage, Tailored to You</h3>
        <p className="mt-1 text-emerald-700">
          We assess tension patterns and energy blocks, then choose the right
          techniques—Thai, Full Body, or Aromatherapy—to match your wellness goals.
        </p>
      </div>
    </div>
  </motion.article>
</div>


      </div>
    </section> */}
                    {/* //// */}
                        <div className="min-h-screen bg-emerald-50 text-emerald-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/60 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 shadow-sm">
              Luxury Spa · Gurgaon
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Process to Book Massage Service in Gurgaon
            </h2>
            <p className="mt-4 max-w-2xl text-emerald-700">
              Seamless booking, premium therapists, and a rejuvenating experience—at home or at our luxury outlets.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+91XXXXXXXXXX"
                className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:translate-y-[-1px] hover:bg-emerald-700"
              >
                <Phone className="h-5 w-5" /> Call Booking Desk
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://t.me/yourTelegramHandle"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-emerald-700 ring-1 ring-emerald-200 shadow-sm transition hover:bg-emerald-50"
              >
                <Send className="h-5 w-5" /> Message on Telegram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Call or Message on Telegram</h3>
            </div>
            <p className="mt-3 text-emerald-700">
              Get in touch with our Spa in Gurgaon via <span className="font-medium">Telegram</span> or by calling our <span className="font-medium">booking desk</span>. Book your desired spa or massage session at a time that suits you.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                <ListChecks className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Choose the Massage Service</h3>
            </div>
            <p className="mt-3 text-emerald-700">
              Pick from many available therapies—options include <span className="font-medium">Aromatherapy</span> and <span className="font-medium">Reflexology</span> among others. Choose your session <span className="font-medium">at home</span> <Home className="mx-1 inline h-4 w-4 align-[-2px]" /> or <span className="font-medium">at one of our outlets</span> <Building2 className="mx-1 inline h-4 w-4 align-[-2px]" />.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Get Best Massage Treatment</h3>
            </div>
            <p className="mt-3 text-emerald-700">
              A <span className="font-medium">certified therapist</span> arrives on time or greets you at our outlet. Your rejuvenating experience begins—designed to leave you relaxed and glowing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <motion.div
      className="mt-20 bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-3xl p-10 text-white text-center shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold mb-4">Personalized Spa Journeys Await You</h3>
      <p className="max-w-2xl mx-auto mb-8 opacity-90">
        Begin your wellness story with a one-on-one consultation. Our experts design experiences tailored to your lifestyle and needs.
      </p>
      <a
        href="https://t.me/Tanuspa"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all"
      >
        <FaTelegram className="text-xl mr-3" />
        Join Telegram Channel
      </a>
    </motion.div>

      
    </div>
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
                                   Our Process <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">for Spa Services</span>
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
                          Get massage service <span className="text-emerald-600"> in Delhi with Special Offer</span>
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
              {/* end Testimonials */}
              <section className="relative bg-white py-16 px-4 sm:px-10 md:px-16 lg:px-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-emerald-100 opacity-20 rounded-xl" />

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                    Grab Massage Service in Gurgaon 1st Visit Offer at Just ₹1999
                  </h2>

                  <p className="text-gray-600 text-base sm:text-lg mb-3">
                    Your first appointment with Spa in Gurgaon costs only ₹1999. This special price lets new clients try our services. You get trained therapists, quality oils, and a peaceful setting. The therapy cleanses your mind, body, and soul. Reserve your place and get to relax.
                  </p>

                  <p className="text-gray-600 text-base sm:text-lg mb-8">
                    CTA Title: Book Your Spa Experience in Gurgaon Now
                  </p>
                  <p className="text-gray-600 text-base sm:text-lg mb-8">
                    CTA Content: Reserve your session and feel the difference instantly.
                  </p>

                  <ul className="flex justify-center gap-6 flex-wrap text-gray-800 font-medium text-base mb-10">
                    {["4 Star Hotels", "5 Star Hotels", "7 Star Hotels"].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="text-green-500 w-5 h-5" /> {item}
                      </li>
                    ))}
                  </ul>

                  <a href="https://api.whatsapp.com/send?phone=918448499173" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-emerald-700 transition shadow-md">
              Book an Appointment
            </a>
                </div>
              </section>
 {/* Testimonials */}
              <section className="mt-20 py-18 px-16 md:px-16 bg-gradient-to-br from-emerald-900 to-emerald-700 relative overflow-hidden rounded-3xl shadow-xl">
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="pattern-dots pattern-emerald-500 pattern-bg-transparent pattern-opacity-100 pattern-size-4 w-full h-full"></div>
          </div>

          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Heading and Subheading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready for Your <span className="text-emerald-300">Spa Journey in Guegaon?</span>
            </motion.h2>

            <motion.p
              className="text-emerald-300 uppercase font-semibold tracking-wider mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our expert therapists are waiting to guide you through a next level wellness experience.
            </motion.p>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-3 gap-6 justify-center items-center">
              <a
                href="tel:+919211235800"
                className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold shadow-md hover:bg-emerald-100 transition-all duration-300"
              >
                📞 Call to Book: +91 92112 35800
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-white/10 transition-all duration-300"
              >
                ✉️ Send Inquiry
              </a>
              <a
                href="#services"
                className="bg-emerald-300 text-emerald-900 px-8 py-4 rounded-full font-bold shadow-md hover:bg-emerald-400 transition-all duration-300"
              >
                💆‍♀️ View Services
              </a>
            </div>
          </div>
              </section>
          {/* Call to Action */}
          {/* <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/30">
              View All Services
            </button>
            <p className="mt-6 text-emerald-700 max-w-xl mx-auto">
              Experience the difference of our premium spa treatments. Book a consultation today and discover your path to wellness.
            </p>
          </motion.div> */}
        
        
        {/* Corner decorative elements */}
        <div className="absolute top-6 left-6 w-10 h-10 z-10 border-t border-l border-emerald-400/50"></div>
        <div className="absolute top-6 right-6 w-10 h-10 z-10 border-t border-r border-emerald-400/50"></div>
        <div className="absolute bottom-6 left-6 w-10 h-10 z-10 border-b border-l border-emerald-400/50"></div>
        <div className="absolute bottom-6 right-6 w-10 h-10 z-10 border-b border-r border-emerald-400/50"></div>
      </section>
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
                            <Image width={736} height={1026} src="/images/Professional European.jpeg"
                              alt="Massage service in Gurgaon - frequently asked questions"
                              className="rounded-2xl shadow-lg object-cover w-full max-h-[700px]"
                            />
                          </motion.div>
                        </div>
                      </section>
      </div>


      </main>

    );
  }