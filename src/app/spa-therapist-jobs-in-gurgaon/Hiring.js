'use client';

  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';
  import { Playfair_Display, Montserrat } from 'next/font/google';
  import Image from 'next/image';
  import { Check } from "lucide-react";
  // import WhatsappFloat from '../components/WhatsappFloat';
//   import WhatsappFloat from '../../components/WhatsappFloat';
  import { Briefcase, Sparkles, BadgeCheck, MapPin, Building2, IndianRupee, Gift, BusFront, GraduationCap, ShieldCheck } from "lucide-react";
  import { 
  FaSpa, 
  FaHandsHelping, 
  FaUserTie, 
  FaMapMarkerAlt, 
  FaStar,
  FaShieldAlt,
  FaMoneyBillWave,
  FaUsers,
  FaCertificate,
  FaPhoneAlt,
  
} from 'react-icons/fa';
import {  FaHotTub, FaBath, FaLeaf, FaHandSparkles, FaCrown, FaCheckCircle } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { FaHeart, FaFemale } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaRupeeSign, FaHotel, FaShuttleVan, FaChalkboardTeacher, FaBalanceScale } from 'react-icons/fa'
import { FaPaperPlane, FaFileAlt, FaLink, FaEnvelope, FaClipboardList } from 'react-icons/fa'



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

{/* End Our Process */}
const cities = [
{ name: 'DELHI', img: '/images/hotel3.webp' },
{ name: 'MUMBAI', img: '/images/lajpatnagahotel.avif' },
{ name: 'NOIDA', img: '/images/RoseateHouse.jpg' },
{ name: 'BANGALORE', img: '/images/paschimvihar.jpg' },
{ name: 'PUNE', img: '/images/JwMarriott_CP.jpg' },
{ name: 'AHMEDABAD', img: '/images/Andazhat.jpg' },
]

const features = [
    {
      id: 1,
      icon: <FaRupeeSign className="w-6 h-6" aria-hidden="true" />,
      title: 'Employment in 5 Star Hotels in Delhi NCR',
      desc: 'Get familiar with high-quality brands such as, JW Marriott, Lemon Tree and Novotel.'
    },
    {
      id: 2,
      icon: <FaHotel className="w-6 h-6" aria-hidden="true" />,
      title: 'High Salary and Incentives',
      desc: 'Competitive remuneration, tips, and performance commissions.'
    },
    {
      id: 3,
      icon: <FaShuttleVan className="w-6 h-6" aria-hidden="true" />,
      title: 'Friendly Work Environment to Females',
      desc: 'We are also recruiting spa therapist positions for females in Delhi with comfort, safety, and respect.'
    },
    {
      id: 4,
      icon: <FaChalkboardTeacher className="w-6 h-6" aria-hidden="true" />,
      title: 'Full-time and Part-Time positions will be offered',
      desc: 'Part-time spa positions in Delhi NCR include flexible schedules.'
    },
    {
      id: 5,
      icon: <FaBalanceScale className="w-6 h-6" aria-hidden="true" />,
      title: 'Develop as a Certified Massage Therapist',
      desc: 'Training courses and seminars to improve your knowledge.'
    },
    {
      id: 5,
      icon: <FaBalanceScale className="w-6 h-6" aria-hidden="true" />,
      title: 'Opportunities in Aerocity, Noida, and Delhi',
      desc: 'Search and apply to hotel spa vacancies in Noida, male to female spa vacancies in Aerocity or body spa vacancies in Mahipalpur.'
    }
  ]


  export default function Hiring({ email = 'info@luxuryspacare.in', website = '#', phone = '+91-XXXXXXXXXX' }) {

        const [activeIndex, setActiveIndex] = useState(null);
      
        const toggleFAQ = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
      
        const faqs = [
          {
            question: "How can I apply for Spa jobs in Delhi?",
            answer: "Apply from spa delhi official website. Send your CV with certifications and experience. Shortlisted candidates receive interview invites and practical assessments tailored to therapist, front-desk or housekeeping roles across outlets.",
            icon: <FaSpa className="text-teal-600" />
          },
          {
            question: "Do you hire foreign therapists in Delhi?",
            answer: "Yes, we recruit certified foreign therapists for our hotel outlets in Delhi. We focus on subject to work eligibility, documentation and local hiring regulations. International experience is valued for certain positions.",
            icon: <FaLeaf className="text-teal-600" />
          },
          {
            question: "Are part-time spa therapist jobs in Delhi available?",
            answer: " Yes, We offer part time spa jobs in Delhi or NCR regions. Specify preferred hours and location when applying to help our HR team match you with suitable shifts.",
            icon: <FaHotTub className="text-teal-600" />
          },
          {
            question: "What qualifications are required for spa therapist jobs?",
            answer: "We mention our requirements on the website. Check our criteria and apply from our career page for a spa job in Delhi. Hotel roles may require prior 5-star experience or specialized technique training.",
            icon: <FaLeaf className="text-teal-600" />
          },
          {
            question: "Is training provided for new hires?",
            answer: " Yes, we provide in-house training, assessments and mentorship. We ensure every new therapist meets our high service and hygiene standards before attending to clients.",
            icon: <FaSpa className="text-teal-600" />
          },
          {
            question: "May I ask a male or female therapist to see me?",
            answer: "Absolutely. You may make a therapist preference during the booking and we will take heed of your choice.",
            icon: <FaHandSparkles className="text-teal-600" />
          },   
        ];
    const hotels = [
"Lemon Tree",
"Novotel",
"Roseate House",
"Radisson",
"ITC",
"Taj",
];


const fadeUp = {
hidden: { opacity: 0, y: 20 },
show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

    return (
      <main>
      <div className="w-full">
        <section className="relative w-full h-[70vh] flex items-center justify-center">
                      {/* Background Image */}
                      <Image
                        src="/images/Heiringbanner.jpg" // apni spa banner image ka path
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
                        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                          About <span className="text-emerald-300">Our Hiring Process</span>
                        </h2>
                        <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow">
                          Discover the art of relaxation with our luxury spa treatments designed
                          to rejuvenate your body, mind, and soul.
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
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-rose-50">
  {/* Floating decorative elements */}
  <div className="absolute top-10 left-10 w-24 h-24 bg-rose-100 rounded-full opacity-20 animate-float"></div>
  <div className="absolute top-1/3 right-20 w-16 h-16 bg-emerald-100 rounded-full opacity-30 animate-float animation-delay-2000"></div>
  <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-100 rounded-full opacity-25 animate-float animation-delay-4000"></div>

  {/* Main content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24  gap-8 items-center">
    
    {/* Text content */}
    <div className="space-y-6 text-center lg:text-left">
      <div className="inline-flex items-center space-x-2 mb-6">
        <div className="w-12 h-px bg-emerald-600"></div>
        <span className="text-emerald-600 font-light tracking-widest">JOIN OUR TEAM</span>
        <div className="w-12 h-px bg-emerald-600"></div>
      </div>

      <h1 className="text-4xl md:text-5xl font-light text-gray-800">
        <span className="block font-serif text-5xl md:text-6xl mb-3 text-emerald-800">Spa Jobs in Delhi</span>
        – Join the Leading
        <span className="block mt-2 font-medium">Massage & Spa Team <span className="text-rose-600">at Spa Delhi NCR</span></span>
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
       Need a satisfying spa therapist position in Delhi? Spa Delhi provides luxury offices, good remuneration, and career development in leading 5-star hotels and spas in Delhi, Noida and more.
      </p>
      <h2 className="text-2xl md:text-3xl font-light text-gray-800"><span className="block mt-2 font-medium">Our Premium Massage Center in Delhi</span></h2>
      <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">In the Spa Delhi, there are 5-star hotels, spa and massage therapist employment opportunities in the most lavish places in Delhi. Start your trip with one of the most reliable brands of spa brands in the city.</p>


      <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Spa Therapist (Female)</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Massage Therapist (Male and Female)</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Body Spa Therapist</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Friendly & Safe Work Environment</span>
        </div>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-sm hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2">
          <span>Explore Locations</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <button className="px-6 py-3 bg-white text-emerald-800 rounded-sm border border-emerald-200 hover:bg-emerald-50 transition-colors duration-300 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Apply Now</span>
        </button>
      </div>
    </div>

    {/* Image section */}
    {/* <div className="relative h-80 md:h-96 lg:h-[450px]">
      <div className="absolute inset-0 border-4 border-white shadow-xl overflow-hidden">
        <Image width={800} height={600} src="/images/Hot Stone Massage.jpg"
          alt="Hot Stone Massage Spa"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="absolute -bottom-6 -right-6">
        <svg className="w-24 h-24 text-emerald-600/30" viewBox="0 0 100 100">
          <path
            fill="currentColor"
            d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z"
          />
        </svg>
      </div>

    
      <div className="absolute -left-4 bottom-8 bg-white p-4 shadow-md">
        <div className="text-center">
          <div className="text-2xl font-serif text-emerald-800">12+</div>
          <div className="text-xs text-gray-500 tracking-widest">YEARS</div>
        </div>
      </div>
    </div> */}
  </div>

  {/* Minimal wave divider */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <svg viewBox="0 0 1200 120" className="relative block w-full h-12">
      <path fill="white" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5"></path>
    </svg>
  </div>
</div>
      {/* End Banner */}
      {/* //// */}
      {/* Location */}
    <section className="py-12 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
   <motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-emerald-900 font-serif mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
     Our Premium Location
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-center text-emerald-800 max-w-3xl mx-auto mb-12 text-base md:text-lg font-medium"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Meet our diverse team of professionals who bring excellence and passion to every engagement.
    </motion.p>
  



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
href="#/cities"
className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
>
View All Cities
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>
    {/* End Location */}
      
    

      {/* //// */}
 <div className="bg-white text-gray-800">
      <section className="py-20 px-4">
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Hiring Spa Therapists <span className="text-emerald-600">– Build Your Future in Wellness</span>
          </motion.h2>
          <motion.p
            className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We are recruiting qualified and enthusiastic spa therapists (both male and female) to work in our luxury massage rooms located in Delhi and Noida, Aerocity, and Mahipalpur. But be it part time spa work in Delhi or full-time, we are offering all the vacancy that suits you.
          </motion.p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Responsibilities Card */}
          <motion.div
            className="bg-emerald-50 rounded-xl p-6 shadow-lg border border-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <FaHandsHelping className="text-emerald-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-800">Key Responsibilities</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Provide high-quality body massages and spa to the customers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Keep the highest level of hygiene and comfort of the clients.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Recommend appropriate treatments according to the needs of clients.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Always be private and professional.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Bookings and sessions to be handled responsibly and in a timely manner.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Create excellent branding of Represent Spa Delhi.</span>
              </li>
            </ul>
          </motion.div>

          {/* Requirements Card */}
          <motion.div
            className="bg-emerald-50 rounded-xl p-6 shadow-lg border border-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <FaUserTie className="text-emerald-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-800">Requirements</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span><strong>Experience:</strong> Experience in the spa or massage therapy during 1 to 3 years.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span><strong>Skills:</strong> SPA/massage therapy certification or diploma.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span><strong>Qualifications:</strong> Good communication and interpersonal skills.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span><strong>Gender:</strong> Both male and female spa therapists were welcome.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span><strong>Location:</strong> Candidates were favored in and around Delhi NCR.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span><strong>Hotel:</strong> Flexible hotel spa jobs in Mahipalpur, Noida or in Aerocity.</span>
              </li>
            </ul>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            className="bg-emerald-50 rounded-xl p-6 shadow-lg border border-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <FaStar className="text-emerald-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-800">Why Join Us?</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>High-end 5-star hotel sites.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Competitive compensation and rewards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Flexible employment (full time/ part-time).</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Career development programs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Training and grooming of professionals.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">•</span>
                <span>Supportive, respectful, and safe work culture.</span>
              </li>
            </ul>
          </motion.div>

          {/* Positions Card */}
          <motion.div
            className="bg-emerald-50 rounded-xl p-6 shadow-lg border border-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <FaSpa className="text-emerald-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-800">Available Positions</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Spa Delhi has vacancies in numerous types of luxury massage spa positions in Delhi and Noida, among them:
               <strong></strong>
            </p>
            <div className="bg-emerald-100 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Therapies We Offer</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="flex items-center">
                  <span className="text-emerald-600 mr-1">•</span> Couple Massage Therapist
                </span>
                <span className="flex items-center">
                  <span className="text-emerald-600 mr-1">•</span> Sandwich Massage Therapist
                </span>
                <span className="flex items-center">
                  <span className="text-emerald-600 mr-1">•</span> Full Body Massage Expert
                </span>
                <span className="flex items-center">
                  <span className="text-emerald-600 mr-1">•</span> Male Spa therapist to Female in Delhi.
                </span>
                <span className="flex items-center">
                  <span className="text-emerald-600 mr-1">•</span> B2B Therapy Specialist
                </span>
              </div>
            </div>
          </motion.div>

          {/* Locations Card */}
          <motion.div
            className="bg-emerald-50 rounded-xl p-6 shadow-lg border border-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-emerald-700 text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-800">Locations</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Positions available in top hotels across Delhi NCR including:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-emerald-600 mr-2">•</span> Lemon Tree
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-2">•</span> Novotel
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-2">•</span> Roseate House
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-2">•</span> Radisson
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-2">•</span> Aerocity
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-2">•</span> CP
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-2">•</span> Dwarka
              </li>
              <li className="flex items-center">
                <span className="text-emerald-600 mr-2">•</span> Noida
              </li>
            </ul>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="bg-emerald-800 text-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Apply Now</h3>
            <p className="mb-6">
              Send your resume and photo to start your journey with us
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-emerald-700 p-2 rounded-full mr-3">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-emerald-200 text-sm">Call or WhatsApp</p>
                  <p className="font-semibold">+91-XXXXXXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-emerald-700 p-2 rounded-full mr-3">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-emerald-200 text-sm">Email us at</p>
                  <p className="font-semibold">info@luxuryspacare.in</p>
                </div>
              </div>
            </div>
            
            <button className="mt-6 w-full bg-white text-emerald-800 py-3 rounded-lg font-semibold hover:bg-emerald-100 transition-colors">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
    <div className="bg-emerald-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 font-serif mb-4">
            Apply <span className="text-emerald-600">Today</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed">
            If youre looking for a spa job in Delhi, a spa job vacancy, or a therapist job in a luxury environment, we encourage you to apply.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-emerald-800 text-lg">
              We are particularly looking for dedicated and talented individuals for <span className="font-semibold">spa therapist jobs for females</span>, as well as <span className="font-semibold">male-to-female spa jobs</span> in our hotel spa outlets.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                <FaHeart className="text-emerald-600 mr-2" /> Why Choose Us?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span>Work in premium 5-star hotel environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span>Professional growth and skill development opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span>Supportive and respectful work culture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-1">•</span>
                  <span>Competitive compensation with regular incentives</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-emerald-100 p-6 rounded-xl border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                <FaHotel className="text-emerald-600 mr-2" /> Hotel Spa Outlets
              </h3>
              <p className="text-emerald-800 mb-4">
                Our spa outlets are located within prestigious hotels across Delhi NCR, offering you a premium work environment.
              </p>
              <div className="flex items-center text-sm text-emerald-700">
                <FaMapMarkerAlt className="mr-2" />
                <span>Multiple locations including Aerocity, CP, Dwarka, Noida, and more</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                <FaFemale className="text-emerald-600 mr-2" /> Positions Available
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-emerald-800">Female Therapists</h4>
                  <p className="text-sm text-emerald-700 mt-2">Full-time & Part-time</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-emerald-800">Male to Female</h4>
                  <p className="text-sm text-emerald-700 mt-2">Spa Positions</p>
                </div>
              </div>
            </div>

            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <p className="text-emerald-700 text-sm mt-4">
                Send your resume to: info@luxuryspacare.in
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
     {/* //////// */}
     <section className="bg-gradient-to-b from-emerald-50 via-white to-emerald-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-emerald-900"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="block">Why Choose <span className="text-emerald-600">Spa Delhi for Spa Therapist Jobs in Delhi Hotels?</span></span>
          </motion.h2>
          <motion.p
            className="mt-3 max-w-2xl mx-auto text-gray-700"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            In case of your desire to get employed in the top 5-star hotel spa in Delhi or Aerocity, then Spa Delhi presents you with the perfect platform to shine.
          </motion.p>
        </div>

        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {}
          }}
        >
          {features.map((f, i) => (
            <motion.article
              key={f.id}
              className="relative bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-transform transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.45 }}
              aria-labelledby={`feature-${f.id}-title`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-emerald-50 p-3 border border-emerald-100">
                  <div className="text-emerald-600">{f.icon}</div>
                </div>
                <div>
                  <h3 id={`feature-${f.id}-title`} className="text-lg font-semibold text-emerald-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
                </div>
              </div>

              {/* decorative accent */}
              <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-100 to-emerald-50 opacity-60 blur-xl pointer-events-none" aria-hidden="true" />
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href="mailto:info@luxuryspacare.in?subject=Application%20for%20Spa%20Therapist"
            className="inline-block px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-lg hover:brightness-95 transition"
            aria-label="Apply via email"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
        <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left: How to Apply steps */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-emerald-600 text-white p-3 rounded-lg">
              <FaPaperPlane className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-900">How to Apply for Spa Jobs in Delhi</h3>
              <p className="text-sm text-gray-700 mt-1">Be a part of a reliable and rapidly expanding brand that has been in the business of providing the best massage spa jobs in Delhi NCR.</p>
            </div>
          </div>

          <ol className="space-y-6 mt-6">
            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center font-semibold text-emerald-700">1</div>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-900">Submit Your Resume</h4>
                <p className="text-sm text-gray-700 mt-1">Send your revised resume with stating your desired place of work (Delhi, Noida, Aerocity).</p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center font-semibold text-emerald-700">2</div>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-900">Certification and Training</h4>
                <p className="text-sm text-gray-700 mt-1">Add your spa or massage certifications so that you are shortlisted quickly.</p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center font-semibold text-emerald-700">3</div>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-900">Send and Wait of Confirmation or Offer Letter</h4>
                <p className="text-sm text-gray-700 mt-1">After the review, you will be sent a confirmation of an interview or job offer in a couple of days.
Spa Delhi is now hiring for:</p>
              </div>
            </li>
          </ol>

          <div className="mt-6 bg-white p-4 rounded-lg border border-emerald-100">
  <p className="font-semibold text-gray-800 mb-2">💡 Pro Tips:</p>
  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
    <li>Delhi Hotels Jobs Massage Spa.</li>
    <li>Noida and Aerocity Body Spa Jobs.</li>
    <li>Mahipalpur Spa Male to Female Jobs.</li>
    <li>India, Delhi NCR Female spa Therapist Jobs.</li>
  </ul>
</div>

        </motion.div>

        {/* Right: Contact & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-emerald-800 text-white rounded-2xl p-8 shadow-lg"
          aria-labelledby="how-apply-contact"
        >
          <h3 id="how-apply-contact" className="text-2xl font-bold mb-2">Apply Now</h3>
          <p className="text-sm text-emerald-100 mb-6">We are excited to welcome talented individuals eager to contribute to our luxury spa services. Apply now and take the next step in your wellness career.</p>

          <div className="space-y-4">
            <a
              href={`mailto:${email}?subject=Application%20for%20Spa%20Therapist`}
              className="flex items-center gap-3 bg-white text-emerald-800 px-4 py-3 rounded-lg font-medium hover:brightness-95 transition"
              aria-label={`Email application to ${email}`}
            >
              <FaEnvelope className="w-4 h-4" aria-hidden="true" />
              <span>Send via Email</span>
            </a>

            <a
              href={website}
              className="flex items-center gap-3 border border-white px-4 py-3 rounded-lg font-medium hover:bg-white/10 transition"
              aria-label="Visit our website"
              target="_blank"
              rel="noreferrer"
            >
              <FaLink className="w-4 h-4" aria-hidden="true" />
              <span>Visit Website</span>
            </a>

            <a
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-3 bg-emerald-700 px-4 py-3 rounded-lg font-medium hover:brightness-110 transition"
              aria-label={`Call or WhatsApp ${phone}`}
            >
              <FaPaperPlane className="w-4 h-4" aria-hidden="true" />
              <span>Call / WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 bg-emerald-700/30 p-4 rounded-lg border border-emerald-700">
            <h4 className="font-semibold">Contact Us</h4>
            <p className="text-sm text-emerald-100 mt-2">For more information about available positions or to submit your application, contact us:</p>
            <ul className="mt-3 text-sm space-y-2">
              <li className="flex items-center gap-2"><FaEnvelope className="w-4 h-4 text-emerald-200" /> <span>{email}</span></li>
              <li className="flex items-center gap-2"><FaLink className="w-4 h-4 text-emerald-200" /> <a href={website} target="_blank" rel="noreferrer" className="underline">Visit our website</a></li>
              <li className="flex items-center gap-2"><FaClipboardList className="w-4 h-4 text-emerald-200" /> <span>Attach: Resume, Cover Letter, Certificates</span></li>
            </ul>
          </div>

          <p className="mt-6 text-xs text-emerald-200">Join us today and become part of a team dedicated to providing the ultimate luxury spa experience in the heart of Delhi NCR.</p>
        </motion.div>
      </div>
    </section>

     
   

    {/* F&Q Section */}
          <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
            <div className="max-w-5xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-14"
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <FaStar className="text-emerald-500" />
                  Questions? We’re here to help
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 font-serif mb-4">
                  Frequently Asked <span className="text-emerald-600">Questions</span>
                </h2>
                <p className="text-emerald-800 max-w-2xl mx-auto text-lg">
                  Everything you need to know about our luxurious spa services and how to book them.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                </div>
              </motion.div>
    
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
                        <div className="mt-1 p-2 bg-emerald-50 rounded-lg">
                          {faq.icon}
                        </div>
                        <h3 className="text-lg md:text-xl font-medium text-emerald-900 group-hover:text-emerald-700 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <svg
                          className={`w-6 h-6 text-emerald-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>
    
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-emerald-50">
                            <p className="text-emerald-700">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
    
              {/* CTA Box */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-14 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                <p className="mb-5 max-w-2xl mx-auto">
                  Our wellness team is here to assist you. Reach out and we’ll help you find the perfect treatment.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-6 py-3 bg-white text-emerald-700 font-medium rounded-full shadow-md hover:bg-emerald-100 transition-colors">
                    Contact Us
                  </button>
                  <button className="px-6 py-3 bg-emerald-800 bg-opacity-30 text-white font-medium rounded-full shadow-md border border-white border-opacity-30 hover:bg-opacity-40 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </motion.div> */}
            </div>
          </section>
        {/* End F&Q Section */}
 {/* <WhatsappFloat /> */}

      </div>
      
      </main>
      
    );
  }


