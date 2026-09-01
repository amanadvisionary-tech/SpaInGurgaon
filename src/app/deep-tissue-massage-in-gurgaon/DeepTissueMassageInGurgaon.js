"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaWhatsapp,
  FaHotel,
  FaHome,
  FaMapMarkerAlt,
  FaSpa,
  FaStar,
  FaCheckCircle,
  FaCrown,
  FaHandsHelping,
} from "react-icons/fa";
import { ChevronDown, ChevronUp, Phone, Clock, Sparkles } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const includedCards = [
  {
    title: "Firm, Slow Pressure",
    text: "Our therapists press slow and deep. They work on the tight spots in your muscles, layer by layer.",
    icon: <FaHandsHelping className="w-6 h-6" />,
  },
  {
    title: "Focus On Problem Areas",
    text: "Tell us where it hurts. We spend extra time on your back, neck, or shoulders — wherever you need it most.",
    icon: <FaCheckCircle className="w-6 h-6" />,
  },
  {
    title: "Warm Massage Oils",
    text: "We use warm oil so our hands glide smoothly. It also helps your muscles let go and relax faster.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Pressure You Control",
    text: "Too strong? Too soft? Just say so. Your therapist changes the pressure right away, every time.",
    icon: <FaStar className="w-6 h-6" />,
  },
];

const benefitsSnapshot = [
  { emoji: "💪", text: "Loosens tight, sore muscles" },
  { emoji: "😌", text: "Eases stress and helps you relax" },
  { emoji: "😴", text: "Helps you sleep better at night" },
  { emoji: "🔙", text: "Good for back and neck pain" },
];

const pricingPlans = [
  {
    title: "Spa Outlet",
    price: "₹1999/-",
    description: "Visit our spa in Gurgaon and relax in a calm, private room.",
    features: ["60–90 min session", "Warm oil massage", "Shower after session", "Quiet, clean rooms"],
    highlight: false,
    icon: <FaSpa className="text-emerald-500" />,
  },
  {
    title: "Home Service",
    price: "₹2999/-",
    description: "A therapist comes straight to your home, anywhere in Gurgaon.",
    features: ["Therapist travels to you", "All oils & towels included", "60–90 min session", "Flexible timing"],
    highlight: true,
    icon: <FaHome className="text-emerald-500" />,
  },
  {
    title: "Hotel Service",
    price: "₹3999/-",
    description: "Book a session in your hotel room, quick and completely private.",
    features: ["In-room service", "Trained, verified therapist", "60–90 min session", "Same-day slots"],
    highlight: false,
    icon: <FaHotel className="text-emerald-500" />,
  },
];

const areas = [
  { name: "Cyber City", href: "/spa-in-cyber-city" },
  { name: "Golf Course Road", href: "/spa-in-golf-course-road" },
  { name: "Sohna Road", href: "/spa-in-sohna-road" },
  { name: "DLF Phase 1", href: "/spa-in-DLF-Phase-1" },
  { name: "MG Road", href: "/spa-in-mg-road" },
  { name: "Sector 29", href: "/spa-in-sector-29" },
];

export const FAQ_DATA = [
  {
    q: "How do I book a deep tissue massage in Gurgaon?",
    a: "It is easy. Message us on WhatsApp or call us at +91 8448499173. Tell us the time and place you want. We will confirm your booking right away.",
  },
  {
    q: "Can I get a deep tissue massage at my hotel?",
    a: "Yes. We send a trained therapist straight to your hotel room anywhere in Gurgaon. Just share your hotel name and room number when you book.",
  },
  {
    q: "Do you send therapists to homes across Gurgaon?",
    a: "Yes, we do. Our home spa service covers all parts of Gurgaon. The therapist brings oils and everything else that is needed.",
  },
  {
    q: "Will the massage hurt?",
    a: "You may feel some pressure on tight spots. It should never feel like sharp pain. Tell your therapist any time, and they will press softer.",
  },
  {
    q: "How long does one session take?",
    a: "Most sessions last 60 to 90 minutes. You can also book a longer session if you want more time on a problem area.",
  },
  {
    q: "How much does a deep tissue massage cost in Gurgaon?",
    a: "Prices start from ₹1999 at our spa outlet. Hotel and home visits cost a little more. Check our full price list for exact rates.",
  },
  {
    q: "Can I choose a male or female therapist?",
    a: "Yes. Just tell us your preference when you book. We will match you with the right therapist for you.",
  },
];

// ─── FAQ Item ──────────────────────────────────────────────────────────────

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full p-6 text-left flex items-center justify-between focus:outline-none group"
      >
        <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700 transition-colors pr-4">
          {q}
        </h3>
        <div className="ml-4 flex-shrink-0">
          {open ? (
            <ChevronUp className="w-5 h-5 text-emerald-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-emerald-400" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 border-t border-emerald-50">
              <p className="text-emerald-700">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function DeepTissueMassageInGurgaon() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="font-sans overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <Image
          src="/images/dt-hero.webp"
          alt="Therapist massaging a client's lower back with oiled hands"
          fill
          priority
          className="object-cover brightness-75"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Deep Tissue Massage in <span className="text-emerald-300">Gurgaon</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow">
            Book a strong, deep massage today. Our therapists come to your hotel or home, or you can visit our spa in Gurgaon.
          </p>

          {/* Quick chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="bg-white/90 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full shadow">
              Home Service
            </span>
            <span className="bg-white/90 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full shadow">
              Hotel Service
            </span>
            <span className="bg-white/90 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full shadow">
              Same-Day Booking
            </span>
            <a
              href="/deep-tissue-massage-benefits"
              className="bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-emerald-700 transition"
            >
              Read The Full Guide
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918448499173"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
            >
              <FaWhatsapp className="text-xl" /> Book on WhatsApp
            </a>
            <a
              href="tel:+918448499173"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 font-medium px-6 py-3 rounded-full shadow-lg transition hover:bg-emerald-50"
            >
              <Phone className="w-4 h-4" /> Call +91 8448499173
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Intro / About ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-10 left-10 w-24 h-24 bg-emerald-100 rounded-full opacity-30 blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-200 rounded-full opacity-30 blur-2xl" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-emerald-600" />
              <span className="text-emerald-600 font-medium tracking-widest text-sm">BOOK TODAY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 font-serif mb-6">
              Book Deep Tissue Massage in Gurgaon Today
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Do your shoulders feel tight? Does your back hurt after a long day? A deep tissue massage can help. Our therapists use slow, firm hands. They press deep into your muscles. This melts away old knots and pain.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Spa in{" "}
              <a href="/spa-in-gurgaon" className="text-emerald-700 font-medium underline hover:text-emerald-800">
                Gurgaon
              </a>{" "}
              sends trained therapists to your hotel or home. You can also visit our spa outlet. This page is here to help you book. If you want to learn how this massage works and why it helps, read our{" "}
              <a
                href="/deep-tissue-massage-benefits"
                className="text-emerald-700 font-medium underline hover:text-emerald-800"
              >
                full guide on deep tissue massage benefits
              </a>
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We also offer many other{" "}
              <a
                href="/massage-service-in-gurgaon"
                className="text-emerald-700 font-medium underline hover:text-emerald-800"
              >
                massage services in Gurgaon
              </a>
              , so you can pick the one that fits you best.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-700">60–90 Min Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <FaHome className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-700">Home & Hotel Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <FaCheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-700">Trained Therapists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <FaStar className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-700">Fair, Simple Pricing</span>
              </div>
            </div>
          </div>

          <div className="relative h-80 md:h-[520px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/dt-back-massage.webp"
              alt="Therapist pressing thumbs into a client's lower back"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── What's Included ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              What&apos;s Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 font-serif mb-4">
              What You Get With Our Deep Tissue Massage
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Every session is built around you. Here is what is included, every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Technique banner */}
          <div className="mt-12 relative rounded-3xl overflow-hidden shadow-xl h-64 md:h-80">
            <Image
              src="/images/dt-technique-hands.webp"
              alt="Close-up of a therapist's hands pressing on a shoulder blade"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-8">
              <p className="text-white text-lg md:text-xl font-medium max-w-xl">
                Our hands work slowly and stay firm. We stop at every tight spot until it starts to let go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Area / Coverage ──────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/images/dt-hands-back.webp"
              alt="Overhead view of hands kneading a client's back"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 font-serif mb-6">
              We Come To You, Anywhere in Gurgaon
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You do not need to travel far. We send therapists to your hotel room or your home, all across the city. Or come relax at our spa outlet instead.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100 text-center">
                <FaHotel className="text-2xl text-emerald-600 mx-auto mb-2" />
                <p className="font-semibold text-emerald-900 text-sm">Hotel Spa</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100 text-center">
                <FaHome className="text-2xl text-emerald-600 mx-auto mb-2" />
                <p className="font-semibold text-emerald-900 text-sm">Home Spa</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100 text-center">
                <FaMapMarkerAlt className="text-2xl text-emerald-600 mx-auto mb-2" />
                <p className="font-semibold text-emerald-900 text-sm">Spa Outlet</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              We regularly serve guests and offices near:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {areas.map((a) => (
                <a
                  key={a.name}
                  href={a.href}
                  className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-200 transition"
                >
                  {a.name}
                </a>
              ))}
            </div>
            <p className="text-gray-700">
              Booking a therapist for your office or hotel group? See our{" "}
              <a
                href="/b2b-massage-in-gurgaon"
                className="text-emerald-700 font-medium underline hover:text-emerald-800"
              >
                B2B massage service
              </a>{" "}
              for corporate and hotel bookings.
            </p>
          </div>
        </div>
      </section>

      {/* ── Benefits Snapshot ────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-3">
            Why People Book This Massage
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-10">
            A quick look at what this massage can do for you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefitsSnapshot.map((b, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <div className="text-3xl mb-2">{b.emoji}</div>
                <p className="text-white text-sm font-medium">{b.text}</p>
              </div>
            ))}
          </div>
          <p className="text-emerald-100 mt-10">
            Want the full list of benefits?{" "}
            <a
              href="/deep-tissue-massage-benefits"
              className="text-white font-semibold underline hover:text-emerald-200"
            >
              Read our complete guide on deep tissue massage benefits
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium">
              <FaStar className="text-emerald-500" /> Simple Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 font-serif mb-4">
              Pricing for Deep Tissue Massage in Gurgaon
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We keep our prices fair and clear. Pick the option that suits you best. See our{" "}
              <a
                href="/spa-price-in-delhi-ncr"
                className="text-emerald-700 font-medium underline hover:text-emerald-800"
              >
                full price list
              </a>{" "}
              for every service we offer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-3xl overflow-hidden ${plan.highlight ? "md:-translate-y-4" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {plan.highlight && (
                  <div className="absolute top-6 right-6 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold z-20 shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <div
                  className={`h-full flex flex-col border ${plan.highlight ? "border-emerald-500 shadow-xl" : "border-emerald-100 shadow-lg"
                    } rounded-3xl overflow-hidden bg-white`}
                >
                  <div className={`p-8 pb-6 ${plan.highlight ? "bg-emerald-700" : "bg-emerald-900"}`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-2xl">{plan.icon}</div>
                      <h3 className="text-xl font-bold text-white font-serif">{plan.title}</h3>
                    </div>
                    <p className="text-emerald-100 text-sm">{plan.description}</p>
                  </div>
                  <div className="p-8 pt-10 pb-8 -mt-4 relative">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-lg font-bold px-5 py-2 rounded-full shadow-lg">
                      {plan.price}
                    </div>
                    <ul className="space-y-3 mb-6 mt-3">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                          <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/918448499173"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-3 px-6 rounded-full font-bold bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-all"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Why Book With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 font-serif mb-4">
              Why Choose Spa in Gurgaon
            </h2>
            <p className="text-gray-700 text-lg">
              A few simple reasons people keep coming back to us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-emerald-50 rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/images/dt-shoulder-tranquil.webp"
                  alt="Therapist's hand resting on a seated guest's shoulder in a candlelit spa room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">Skilled Therapists</h3>
                <p className="text-gray-700">
                  Our therapists train for years. They know how to find tight muscles and slowly release them. Meet the people behind every session on our{" "}
                  <a href="/about-us" className="text-emerald-700 font-medium underline hover:text-emerald-800">
                    about us page
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/images/dt-physio-back.webp"
                  alt="Hand pressing firmly on a client's back in a clinical, therapeutic style"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">More Than One Massage Style</h3>
                <p className="text-gray-700">
                  Deep tissue is not the only option we offer. Want a lighter touch? Try our{" "}
                  <a
                    href="/full-body-massage-in-gurgaon"
                    className="text-emerald-700 font-medium underline hover:text-emerald-800"
                  >
                    full body massage
                  </a>
                  . Booking with a partner? Try our{" "}
                  <a
                    href="/couples-massage-in-gurgaon"
                    className="text-emerald-700 font-medium underline hover:text-emerald-800"
                  >
                    couples massage
                  </a>
                  . Or feel two sets of hands at once with our{" "}
                  <a
                    href="/sandwich-massage-in-gurgaon"
                    className="text-emerald-700 font-medium underline hover:text-emerald-800"
                  >
                    sandwich massage
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 bg-emerald-100 rounded-full text-emerald-800 font-medium">
              <FaStar className="text-emerald-500" /> Questions? We&apos;re Here to Help
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 font-serif mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Simple answers about booking your deep tissue massage in Gurgaon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              {FAQ_DATA.map((faq, index) => (
                <FAQItem
                  key={index}
                  q={faq.q}
                  a={faq.a}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>

            <div className="relative h-[420px] md:h-[560px] rounded-3xl overflow-hidden shadow-xl hidden md:block">
              <Image
                src="/images/dt-hot-stone.webp"
                alt="Hands massaging a back with warm string-light ambiance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Book Your Deep Tissue Massage?
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-10 text-lg">
            Message us on WhatsApp or call now. We will find a time that works for you. You can also visit our{" "}
            <a href="/contacts" className="text-white underline font-semibold hover:text-emerald-200">
              contact page
            </a>{" "}
            for more ways to reach us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/918448499173"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-50 transition"
            >
              <FaWhatsapp className="text-xl" /> Chat on WhatsApp
            </a>
            <a
              href="tel:+918448499173"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition"
            >
              <Phone className="w-4 h-4" /> Call +91 8448499173
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
