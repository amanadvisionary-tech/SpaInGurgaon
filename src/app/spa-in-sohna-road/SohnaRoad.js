'use client';
import React, { useState } from 'react'

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaSpa, FaHome, FaCrown, FaStar, FaCheckCircle, FaTelegram } from 'react-icons/fa';
import { Leaf, HeartHandshake, Clock, Sparkles, ShieldCheck, UserCheck, Sliders, Smile, Building2, MapPinned, Users } from "lucide-react";

export default function SohnaRoad() {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Do you send a therapist to hotels on Sohna Road?",
            answer: "Yes. We send a trained therapist to your hotel room or serviced apartment on Sohna Road, including the area near Vatika Business Park.",
            icon: <FaSpa className="text-teal-600" />
        },
        {
            question: "I work at Vatika Business Park. Can I book after office hours?",
            answer: "Yes, of course. Many people from Vatika Business Park book their massage in the evening, right after work ends.",
            icon: <Building2 className="text-teal-600 w-5 h-5" />
        },
        {
            question: "Do you come to Nirvana Country, South City II, Vipul World, or Ansal Esencia?",
            answer: "Yes, we do. We send therapists to homes in all of these Sohna Road societies. Just book early so we can find a free therapist for you.",
            icon: <Users className="text-teal-600 w-5 h-5" />
        },
        {
            question: "Do you also cover Golf Course Extension Road?",
            answer: "Yes. Sohna Road leads straight into Golf Course Extension Road, so we can reach both areas fast.",
            icon: <MapPinned className="text-teal-600 w-5 h-5" />
        },
        {
            question: "Can my partner and I get a massage together near Global Foyer Mall?",
            answer: "Yes! We offer couple massage for guests who live or stay near Global Foyer Mall and all along Sohna Road.",
            icon: <FaHome className="text-teal-600" />
        },
        {
            question: "What are your hours, and how do I book?",
            answer: "We are open long hours, every day. Just message us on WhatsApp or call us, and we will confirm your Sohna Road booking.",
            icon: <FaStar className="text-teal-600" />
        },
    ];

    const benefits = [
        {
            id: 1,
            title: "Full Privacy",
            desc: "Your massage stays private and quiet. It does not matter if you are in a hotel room or at home in Ansal Esencia.",
            icon: <ShieldCheck className="w-6 h-6 text-emerald-800" />,
        },
        {
            id: 2,
            title: "Trained Therapists",
            desc: "Every therapist we send is trained and tested. They know many massage styles well.",
            icon: <UserCheck className="w-6 h-6 text-emerald-800" />,
        },
        {
            id: 3,
            title: "Made for You",
            desc: "We change the pressure, the oil, and the time to match what your body needs. Nothing is one-size-fits-all.",
            icon: <Sliders className="w-6 h-6 text-emerald-800" />,
        },
        {
            id: 4,
            title: "We Reach You Fast",
            desc: "Sohna Road connects straight to Golf Course Extension Road, so our therapist reaches you quickly.",
            icon: <Clock className="w-6 h-6 text-emerald-800" />,
        },
        {
            id: 5,
            title: "You Will Feel Lighter",
            desc: "We don't just give you a nice hour. You walk away with loose shoulders, a calm mind, and more energy.",
            icon: <Smile className="w-6 h-6 text-emerald-800" />,
        },
    ];

    const coverageAreas = [
        {
            title: "Vatika Business Park & Corporate Offices",
            image: "/images/sohna-road-office-park.webp",
            description:
                "Work late at Vatika Business Park? Book a therapist between meetings, or right after work ends. We fit into your day.",
        },
        {
            title: "Global Foyer Mall & the Commercial Belt",
            image: "/images/sohna-road-mall.webp",
            description:
                "Staying near Global Foyer Mall for work or shopping? We can reach your hotel or apartment fast, since it sits right on Sohna Road.",
        },
        {
            title: "Nirvana Country, South City II, Vipul World & Ansal Esencia",
            image: "/images/sohna-road-living-room.webp",
            description:
                "Live in one of these Sohna Road societies? Get your massage at home. It's simple, quiet, and no travel needed after a long week.",
        },
    ];

    const pricingPlans = [
        {
            title: "At-Home Session",
            price: "₹1999/-",
            description: "For Sohna Road residents who want to relax at home",
            features: ["Oil Massage", "Cream Massage", "Dry Massage", "30 min Consultation"],
            highlight: false,
            icon: <FaHome className="text-emerald-500" />
        },
        {
            title: "Hotel / Serviced Apartment",
            price: "₹15000/-",
            description: "For guests staying at hotels and serviced apartments on Sohna Road",
            features: ["Oil Massage", "Cream Massage", "Dry Massage", "Private Setup", "Complimentary Refreshments", "90 min Session"],
            highlight: true,
            icon: <FaSpa className="text-emerald-500" />
        },
        {
            title: "Extended Premium Session",
            price: "₹20000/-",
            description: "A longer session with extra treatments, for a full spa day feel",
            features: ["Foreigner Therapist (on request)", "Private Setup", "Aromatherapy", "Facial Session", "120 min Session"],
            highlight: false,
            icon: <FaCrown className="text-emerald-500" />
        }
    ];

    const services = [
        {
            title: "Full Body Massage",
            description: <>Feel good from head to toe with our <a href="/full-body-massage-in-gurgaon" className="text-emerald-700 font-medium underline hover:text-emerald-800">Full Body Massage</a> on Sohna Road. It helps wash away a long day of driving or meetings.</>,
            icon: "🌸",
            href: "/full-body-massage-in-gurgaon"
        },
        {
            title: "Sandwich Massage",
            description: "Two therapists work on you at the same time, one on each side. Many of our Sohna Road guests love this for a deeper, faster reset.",
            icon: "💆‍♂️",
            href: "/sandwich-massage-in-gurgaon"
        },
        {
            title: "Couple Massage",
            description: "You and your partner get massaged side by side, in the same room. Families in Nirvana Country and South City II love this one.",
            icon: "👫",
            href: "/couples-massage-in-gurgaon"
        },
        {
            title: "B2B Massage",
            description: "A special massage done by our trained female therapists. Available on request anywhere on Sohna Road.",
            icon: "🪷",
            href: "/b2b-massage-in-gurgaon"
        },
        {
            title: "Thai Massage",
            description: "This massage stretches your body and presses on tired points. Great if long drives on NH-48 have left you stiff.",
            icon: "🧘",
        },
        {
            title: "Hot Stone Massage",
            description: "Warm stones are placed on tight muscles. It's slow, deep, and very relaxing.",
            icon: "🔥",
        },
    ];

    const features = [
        { icon: Leaf, title: "Natural Oils", sub: "Skin-friendly oils & scrubs" },
        { icon: Clock, title: "Flexible Slots", sub: "Evenings & weekends available" },
        { icon: HeartHandshake, title: "In-Room & In-Home", sub: "Hotels, offices & societies" },
        { icon: Sparkles, title: "5-Step Hygiene", sub: "Sanitized & safe protocols" },
    ];

    return (
        <main className="overflow-x-hidden">
            <div className="text-gray-800">
                {/* Hero */}
                <section className="relative w-full h-[70vh] flex items-center justify-center">
                    <Image
                        src="/images/sohna-road-hero-massage.webp"
                        alt="Relaxing foot and leg massage session at a calm spa room, representing Spa in Gurgaon's Sohna Road service"
                        fill
                        priority
                        className="object-cover brightness-75"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative text-center px-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md leading-tight">
                            Luxury <span className="text-emerald-300">Spa &amp; Massage on Sohna Road</span>, Gurgaon
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow">
                            From busy Vatika Business Park to the quiet streets of Nirvana Country, we bring a hotel-style massage right to your door on Sohna Road.
                        </p>
                        <a
                            href="https://wa.me/918448499173"
                            className="inline-block mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
                        >
                            Chat on WhatsApp
                        </a>
                    </motion.div>
                </section>
                {/* End Hero */}

                {/* Banner / Intro */}
                <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-rose-50">
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute top-10 left-10 w-24 h-24 rounded-full bg-rose-100/30 blur-[1px]"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute top-1/3 right-20 w-16 h-16 rounded-full bg-emerald-100/50"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-teal-100/50"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -14, 0] }}
                        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1.2 }}
                    />

                    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:py-24 lg:grid-cols-2">
                        <div className="text-center lg:text-left">
                            <div className="mb-8 inline-flex items-center space-x-3" aria-hidden>
                                <span className="block h-px w-12 bg-emerald-600" />
                                <span className="text-sm font-light tracking-[0.25em] text-emerald-700">OUR SOHNA ROAD OUTLET</span>
                                <span className="block h-px w-12 bg-emerald-600" />
                            </div>

                            <h2 className="text-4xl font-light leading-tight text-gray-900 md:text-5xl mb-6">
                                <span className="font-serif text-5xl md:text-6xl text-emerald-900 font-medium">Premium Massage </span>
                                on <span className="font-medium">Sohna Road</span>, Gurgaon
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-600 lg:mx-0 text-lg">
                                Sohna Road is a busy road that joins the highway to Golf Course Extension Road. By evening, most people here are tired — office workers coming home from Vatika Business Park, and families settling down in Nirvana Country and South City II. That's where we step in. We send <a href="/about-us" className="text-emerald-700 font-medium underline hover:text-emerald-800">trained, verified therapists</a> straight to your hotel room, apartment, or home, with many kinds of relaxing massage to choose from.
                            </p>

                            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4 lg:mx-0" role="list" aria-label="Service areas">
                                {[
                                    {
                                        label: "Sohna Road", icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12l20-6-5 6 5 6-20-6z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        label: "Vatika Business Park", icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                            </svg>
                                        )
                                    },
                                    {
                                        label: "Nirvana Country", icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        label: "Golf Course Ext. Road", icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        )
                                    },
                                ].map(({ label, icon }) => (
                                    <div key={label} role="listitem" className="flex items-center space-x-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">{icon}</span>
                                        <span className="text-sm text-gray-800">{label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col items-center gap-4 pt-2 lg:flex-row lg:justify-start">
                                <a
                                    href="#services"
                                    className="inline-flex items-center space-x-2 rounded-sm bg-gradient-to-r from-emerald-600 to-emerald-800 px-6 py-3 text-white shadow-sm transition-opacity duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                    aria-label="View all services"
                                >
                                    <span>View All Services</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/918448499173" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 rounded-sm border border-emerald-200 bg-white px-6 py-3 text-emerald-800 transition-colors duration-300 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                    aria-label="Book appointment"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>Book Appointment</span>
                                </a>
                            </div>
                        </div>

                        <div className="relative h-80 md:h-96 lg:h-[450px]">
                            <div className="absolute inset-0 overflow-hidden rounded-xl border-4 border-white shadow-2xl">
                                <Image width={1000} height={1333} src="/images/sohna-road-relax-room.webp"
                                    alt="Comfortable hotel-style room ambience near Sohna Road, Gurgaon"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <motion.div
                                aria-hidden
                                className="absolute -bottom-6 -right-6"
                                initial={{ rotate: -6, opacity: 0.6 }}
                                animate={{ rotate: [-6, 6, -6], opacity: [0.6, 0.8, 0.6] }}
                                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                            >
                                <svg className="h-24 w-24 text-emerald-600/30" viewBox="0 0 100 100">
                                    <path fill="currentColor" d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z" />
                                </svg>
                            </motion.div>
                            <div className="absolute -left-4 bottom-8 rounded-md bg-white p-4 shadow-md">
                                <div className="text-center">
                                    <div className="font-serif text-2xl text-emerald-900">12+</div>
                                    <div className="text-[10px] tracking-[0.3em] text-gray-500">YEARS</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute bottom-0 left-0 w-full">
                        <svg viewBox="0 0 1200 120" className="relative block h-12 w-full" aria-hidden>
                            <path fill="white" opacity=".5" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
                        </svg>
                    </div>
                </section>
                {/* End Banner */}

                {/* Coverage Section */}
                <section className="w-full py-16 bg-gradient-to-b from-white to-emerald-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
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
                                <span className="text-emerald-700 font-medium tracking-wider">THE SOHNA ROAD CORRIDOR</span>
                            </motion.div>

                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-5xl font-bold text-emerald-900 mb-6 font-serif"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                One Call, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">We Cover the Whole Road</span>
                            </motion.h2>

                            <motion.p
                                className="text-emerald-800/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                From the office towers near Global Foyer Mall to the housing societies further down, we cover all of Sohna Road. It also joins straight into <a href="/spa-in-golf-course-road" className="text-emerald-700 font-medium underline hover:text-emerald-800">Golf Course Extension Road</a>, so guests on either side get the same great service.
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

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {coverageAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="relative h-48 w-full">
                                        <Image src={area.image} alt={area.title} fill className="object-cover" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg font-semibold text-emerald-800 font-serif mb-2">
                                            {area.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm flex-grow">
                                            {area.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* End Coverage Section */}

                {/* About Us Section */}
                <section className="w-full bg-gradient-to-b from-white to-yellow-50 py-16">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative isolate rounded-2xl border border-emerald-100/60 bg-white/70 p-8 shadow-[0_10px_30px_rgba(16,185,129,0.07)] backdrop-blur"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="mb-5 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700"
                            >
                                <span className="mr-2">✦</span> About Our Sohna Road Outlet
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="mb-4 text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-4xl"
                            >
                                Trusted Massage Therapy{" "}
                                <span className="relative ml-1 inline-block">
                                    <span className="relative z-10 text-emerald-600">on Sohna Road</span>
                                    <span aria-hidden className="absolute bottom-1 left-0 right-0 h-3 rounded-sm bg-emerald-200/60" />
                                </span>
                            </motion.h2>

                            <p className="mb-6 text-lg text-gray-700">
                                Spa in Gurgaon has worked across Gurugram for many years, and Sohna Road is one of our busiest areas. It has offices, shops, and homes, all close together. Whether you just left a long meeting at Vatika Business Park, or you are relaxing at home in Ansal Esencia after the kids are asleep, our therapist comes on time, sets up quietly, and gives you a proper massage. We keep it simple: good therapists, good oils, and full privacy — for you alone, for you and your partner, or for your whole team.
                            </p>

                            <ul className="grid gap-3 sm:grid-cols-2" role="list">
                                {[
                                    "Certified therapists on call",
                                    "In-room & in-home massage",
                                    "Flexible evening & weekend slots",
                                    "Corporate & couple booking options",
                                ].map((item) => (
                                    <li key={item} className="flex items-start space-x-3 text-gray-800">
                                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Quick chips */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    { label: "B2B Massage", href: "/b2b-massage-in-gurgaon" },
                                    { label: "Deep Tissue Guide", href: "/deep-tissue-massage-benefits" },
                                    { label: "Sandwich Massage", href: "/sandwich-massage-in-gurgaon" },
                                    { label: "Golf Course Road Outlet", href: "/spa-in-golf-course-road" },
                                    { label: "Sector 29 Outlet", href: "/spa-in-sector-29" },
                                    { label: "Spa in Gurgaon", href: "/spa-in-gurgaon" }
                                ].map((c) => (
                                    <Link key={c.label} href={c.href} className="rounded-full bg-[#f7efe7] px-3 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-200 transition-colors">
                                        {c.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="https://wa.me/918448499173" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-800 px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                >
                                    Book an Appointment
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center rounded-md border border-emerald-200 bg-white px-6 py-3 text-sm font-medium text-emerald-800 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                >
                                    Explore Services
                                </a>
                            </div>

                            <div aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" />
                            <div aria-hidden className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-yellow-200/40 blur-2xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative grid grid-cols-2 gap-4"
                        >
                            <motion.figure
                                initial={{ rotate: -2, y: 12, opacity: 0 }}
                                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="col-span-1 row-span-2 overflow-hidden rounded-2xl border border-emerald-100 shadow-xl"
                            >
                                <Image width={1000} height={1778} src="/images/sohna-road-treatment-room.webp"
                                    alt="Guest fully relaxed during a massage session on Sohna Road"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </motion.figure>

                            <motion.figure
                                initial={{ rotate: 2, y: 12, opacity: 0 }}
                                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="overflow-hidden rounded-2xl border border-emerald-100 shadow-xl"
                            >
                                <Image width={1200} height={800} src="/images/sohna-road-couple-massage.webp"
                                    alt="Expert therapist performing a relaxing massage for a Sohna Road client"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </motion.figure>

                            <motion.figure
                                initial={{ scale: 0.96, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative overflow-hidden rounded-2xl border border-emerald-100 shadow-xl"
                            >
                                <Image width={1000} height={1501} src="/images/sohna-road-spa-table.webp"
                                    alt="Aromatherapy setup used during Sohna Road home visits"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow">
                                    12+ Years of Care
                                </figcaption>
                            </motion.figure>

                            <motion.div
                                aria-hidden
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                viewport={{ once: true }}
                                className="pointer-events-none absolute -bottom-6 -right-6"
                            >
                                <svg className="h-20 w-20 text-emerald-600/25" viewBox="0 0 100 100">
                                    <path fill="currentColor" d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                {/* End About Us Section */}

                {/* Services Section */}
                <section id="services" className="relative bg-gradient-to-b from-emerald-50 to-white px-6 py-16 md:px-16">
                    <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-white/70 to-transparent" />

                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 text-center">
                            <motion.span
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-700"
                            >
                                <span className="h-1 w-6 rounded-full bg-emerald-500" /> Our Services on Sohna Road
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
                            >
                                Our Massage <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Services on Sohna Road</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-emerald-900/80 md:text-xl"
                            >
                                Every treatment on our <Link href="/massage-service-in-gurgaon" className="text-emerald-700 font-medium underline hover:text-emerald-800">full services menu</Link> comes to your home or hotel on Sohna Road. No need to drive into Gurgaon for a good massage.
                            </motion.p>
                        </div>

                        <div className="[-ms-overflow-style:none] [scrollbar-width:none] mb-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 lg:grid lg:grid-cols-12 lg:gap-8 lg:overflow-visible">
                            <style>{`.no-scrollbar::-webkit-scrollbar{display:none;}`}</style>

                            {services.map((s, i) => (
                                <motion.article
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: i * 0.06 }}
                                    className="group relative snap-center snap-always lg:col-span-4"
                                >
                                    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-emerald-200 via-emerald-100 to-transparent">
                                        <div className="relative h-full rounded-2xl bg-white/80 p-7 shadow-[0_12px_36px_rgba(16,185,129,0.08)] backdrop-blur">
                                            <div className="relative -mt-12 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 shadow-sm">
                                                <span className="text-3xl">{s.icon}</span>
                                            </div>

                                            <h3 className="font-serif text-xl font-bold text-gray-900">{s.title}</h3>
                                            <p className="mt-2 text-gray-600">{s.description}</p>

                                            <div className="mt-5 flex items-center gap-3">
                                                <Link
                                                    href={s.href || '#'}
                                                    className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:underline"
                                                    aria-label={`Learn more about ${s.title}`}
                                                >
                                                    Learn More
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1">
                                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </Link>
                                                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-100">Premium</span>
                                            </div>

                                            <div aria-hidden className="pointer-events-none absolute bottom-3 right-4 text-7xl font-black tracking-tighter text-emerald-100/60">{String(i + 1).padStart(2, '0')}</div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map(({ icon: Icon, title, sub }) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white/70 px-4 py-3 text-emerald-900/90 shadow-sm backdrop-blur"
                                >
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold">{title}</div>
                                        <div className="text-xs text-emerald-900/70">{sub}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur md:flex-row">
                            <p className="text-center text-sm text-emerald-900/80 md:text-left">Not sure which massage to pick? Just tell us if you&apos;re at Vatika Business Park or at home on Sohna Road, and we will suggest the right one for you.</p>
                            <a href="https://wa.me/918448499173" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                                Book a Consultation
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-2 h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </div>

                    <div aria-hidden className="pointer-events-none absolute -right-6 bottom-6 opacity-30">
                        <svg className="h-24 w-24 text-emerald-600/30" viewBox="0 0 100 100">
                            <path fill="currentColor" d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z" />
                        </svg>
                    </div>
                </section>
                {/* End Services Section */}

                {/* Signature Treatments */}
                <section className="relative bg-gradient-to-b from-emerald-50 to-white px-6 py-20 md:px-16">
                    <div className="mx-auto max-w-6xl">
                        <motion.header
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 text-center"
                        >
                            <span className="text-xs font-semibold tracking-[0.25em] text-emerald-700">SOHNA ROAD · GURGAON OUTLET</span>
                            <h2 className="font-serif text-4xl font-bold text-[#3a2e2a] md:text-5xl mt-3">
                                A Ritual for Every Kind of Sohna Road Day
                            </h2>
                            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-emerald-600" />
                            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                                Some days you just need a quick 45-minute break. Other days you want the full 90-minute wind-down. Either way, our Sohna Road therapist brings everything needed and sets up right where you are — hotel room, office, or home.
                            </p>
                        </motion.header>

                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative rounded-2xl border border-[#e8d5c9] bg-white/80 p-8 shadow-lg backdrop-blur-sm"
                            >
                                <div aria-hidden className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-emerald-200/40 blur-2xl" />

                                <h3 className="font-serif text-2xl font-semibold text-emerald-800">Rituals Built Around Your Schedule</h3>
                                <p className="mt-2 text-gray-600">
                                    From a calming aromatherapy massage after a hard drive, to a firm deep-tissue massage for tired shoulders, our Sohna Road menu is made for people whose plans change at the last minute.
                                </p>

                                <ul className="mt-6 grid gap-3 sm:grid-cols-2" role="list">
                                    {["On-Demand Booking", "Certified Therapists", "Evening & Late Slots", "Home & Hotel Setup"].map((t) => (
                                        <li key={t} className="flex items-start gap-3 text-emerald-900/90">
                                            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            </span>
                                            <span className="text-sm font-medium">{t}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href="https://wa.me/918448499173" target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                                    >
                                        Book Your Session
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </a>
                                    <a
                                        href="#services"
                                        className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                                    >
                                        View Menu
                                    </a>
                                </div>

                                <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                                    {[
                                        { n: "12+", l: "Years" },
                                        { n: "25K+", l: "Guests" },
                                        { n: "4.8", l: "Rating" },
                                    ].map((it) => (
                                        <div key={it.l} className="rounded-xl border border-emerald-100 bg-white/70 p-3 shadow-sm">
                                            <div className="font-serif text-2xl text-emerald-800">{it.n}</div>
                                            <div className="text-[11px] tracking-widest text-emerald-900/70">{it.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.05 }}
                                className="relative"
                            >
                                <div className="relative overflow-hidden rounded-2xl border border-[#e8d5c9] bg-white/70 shadow-2xl">
                                    <div className="relative h-[440px] w-full">
                                        <Image src="/images/sohna-road-massage-room.webp" alt="Signature massage ritual setting used for Sohna Road guests" fill className="object-cover" />
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f2937]/60 via-transparent to-transparent" />

                                    <div className="absolute left-4 top-4 rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                                        Sohna Road, Gurgaon
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4">
                                        <div>
                                            <div className="font-serif text-lg font-semibold text-white">Gurgaon · Sohna Road</div>
                                            <div className="text-xs text-white/80">Vatika Business Park · Global Foyer Mall · Nirvana Country</div>
                                        </div>
                                        <a
                                            href="https://wa.me/918448499173"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-emerald-700 shadow hover:bg-white"
                                        >
                                            WhatsApp
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M2 10a8 8 0 1115.546 2.917l1.087 3.26a1 1 0 01-1.265 1.265l-3.26-1.087A8 8 0 112 10zm6.803-1.58a.75.75 0 00-1.246.832c.46.691 1.13 1.44 2.006 2.053.898.631 1.817.986 2.585 1.1a.75.75 0 00.837-.653l.137-1.097a.75.75 0 00-.52-.81 5.5 5.5 0 01-1.265-.457c-.41-.2-.868-.508-1.27-.863-.328-.289-.604-.6-.797-.874a.75.75 0 00-.467-.331z" clipRule="evenodd" /></svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-3 gap-3">
                                    {[
                                        { src: "/images/sohna-road-aromatherapy.webp", alt: "Aromatherapy ritual set-up used on Sohna Road bookings" },
                                        { src: "/images/sohna-road-head-massage.webp", alt: "Head and shoulder massage focus session" },
                                        { src: "/images/sohna-road-unwind.webp", alt: "Relaxed guest unwinding after a Sohna Road home visit" },
                                    ].map((im) => (
                                        <div key={im.src} className="relative h-24 overflow-hidden rounded-xl border border-[#e8d5c9]">
                                            <Image src={im.src} alt={im.alt} fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div aria-hidden className="pointer-events-none absolute -right-6 bottom-6 opacity-30">
                        <svg className="h-24 w-24 text-emerald-600/30" viewBox="0 0 100 100">
                            <path fill="currentColor" d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z M50,25 C35,25 25,35 25,50 C25,65 35,75 50,75 C65,75 75,65 75,50 C75,35 65,25 50,25 Z" />
                        </svg>
                    </div>
                </section>
                {/* End Signature Treatments */}

                {/* Why Choose Us Section */}
                <section className="py-24 bg-gradient-to-b from-emerald-50 to-emerald-100">
                    <div className="container mx-auto px-6 md:px-10 xl:px-20">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-emerald-200 p-8 md:p-14"
                        >
                            <h2 className="text-center text-3xl md:text-5xl font-serif font-extrabold text-emerald-900 leading-tight mb-6">
                                Why Sohna Road Chooses Spa in Gurgaon
                            </h2>

                            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                                People from Vatika Business Park, and families in Nirvana Country, South City II, Vipul World, and Ansal Esencia, keep coming back to us. Here is why.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {benefits.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        whileHover={{ translateY: -6 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="group flex flex-col items-start gap-3 p-6 rounded-2xl border border-emerald-100 bg-white/70 hover:bg-emerald-50 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-200/70 text-emerald-900 shadow-inner group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-emerald-900">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-center gap-4 flex-wrap">
                                <motion.a
                                    whileTap={{ scale: 0.97 }}
                                    href="https://wa.me/918448499173" target="_blank" rel="noopener noreferrer"
                                    className="px-8 py-3 rounded-full bg-emerald-700 text-white font-medium shadow-md hover:shadow-lg hover:bg-emerald-800 transition"
                                >
                                    Book Now
                                </motion.a>
                                <motion.a
                                    whileTap={{ scale: 0.97 }}
                                    href="/contacts"
                                    className="px-8 py-3 rounded-full border border-emerald-300 text-emerald-900 font-medium bg-white/70 hover:bg-white transition"
                                >
                                    Contact Us
                                </motion.a>
                            </div>
                            <p className="text-xs text-gray-500 text-center mt-8">We serve all of Sohna Road, from Vatika Business Park to Ansal Esencia. Terms &amp; conditions apply.</p>
                        </motion.div>
                    </div>
                </section>
                {/* End Why Choose Us Section */}

                {/* Pricing Section */}
                <section id="Pricing" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
                    <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-emerald-100 opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-emerald-200 opacity-15 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto relative z-10">
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
                                Pricing <span className="text-emerald-600">for Sohna Road Bookings</span>
                            </motion.h2>
                            <motion.p
                                className="text-emerald-800 max-w-3xl mx-auto text-lg leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Here are our simple plans. For full details on every massage type and price, see our <a href="/spa-price-in-delhi-ncr" className="text-emerald-700 font-medium underline hover:text-emerald-800">Delhi NCR pricing guide</a>.
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
                                    {plan.highlight && (
                                        <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 rotate-12 shadow-lg">
                                            MOST POPULAR
                                        </div>
                                    )}

                                    <div className={`h-full flex flex-col border ${plan.highlight ? "border-emerald-500 shadow-xl" : "border-emerald-100 shadow-lg"} rounded-3xl overflow-hidden bg-white`}>
                                        <div className={`p-8 pb-6 ${plan.highlight ? "bg-gradient-to-r from-emerald-600 to-emerald-700" : "bg-emerald-800"}`}>
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="text-3xl">{plan.icon}</div>
                                                <h3 className={`text-2xl font-bold font-serif ${plan.highlight ? "text-white" : "text-emerald-100"}`}>
                                                    {plan.title}
                                                </h3>
                                            </div>
                                            <p className={`text-lg ${plan.highlight ? "text-emerald-100" : "text-emerald-200"}`}>
                                                {plan.description}
                                            </p>
                                        </div>

                                        <div className="p-8 pt-12 pb-10 -mt-6 relative">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                                                <span className="text-white text-xl font-bold">{plan.price}</span>
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
                                                href="https://wa.me/918448499173"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center transition-all shadow-lg"
                                            >
                                                <FaTelegram className="text-xl mr-3" />
                                                Chat With Our Team
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* End Pricing Section */}

                {/* FAQ Section */}
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
                                Here is what guests usually ask before booking a massage on Sohna Road.
                            </p>
                            <div className="flex md:justify-start justify-center mt-6">
                                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        <div>
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
                                                    className={`w-6 h-6 text-emerald-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
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

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <Image width={1000} height={667} src="/images/sohna-road-massage-oil.webp"
                                alt="Guest enjoying a relaxing spa treatment - frequently asked questions about our Sohna Road massage service"
                                className="rounded-2xl shadow-lg object-cover w-full max-h-[700px]"
                            />
                        </motion.div>
                    </div>
                </section>
                {/* End FAQ Section */}

                {/* Closing CTA Section */}
                <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
                        >
                            Book Your Sohna Road Massage Today
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto"
                        >
                            Had a long day at Vatika Business Park? Or want a cozy evening with your partner in Nirvana Country? We are ready. Call us, message us on WhatsApp, or use our <a href="/contacts" className="text-white underline font-medium hover:text-emerald-200">contact page</a>, and we will confirm your Sohna Road booking.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a
                                href="https://wa.me/918448499173" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-emerald-800 font-semibold shadow-lg hover:bg-emerald-50 transition"
                            >
                                Chat on WhatsApp
                            </a>
                            <a
                                href="tel:+918448499173"
                                className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
                            >
                                Call +91 8448499173
                            </a>
                        </motion.div>
                    </div>
                </section>
                {/* End Closing CTA Section */}
            </div>
        </main>
    );
}
