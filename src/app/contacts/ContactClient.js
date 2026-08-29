"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function ContactClient({ faqs }) {
  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    const text = `Hi, I'd like to book a spa appointment.%0AName: ${encodeURIComponent(
      name
    )}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(
      service
    )}%0AMessage: ${encodeURIComponent(message)}`;

    window.open(`https://wa.me/918448499173?text=${text}`, "_blank");
    form.reset();
  };

  const [openIndex, setOpenIndex] = useState(null);
  return (
    <main className="bg-[#faf7f3] text-gray-900">

      {/* HERO SECTION */}
      <section className="relative h-[55vh] flex items-center justify-center text-center">
        <Image
          src="/images/27203214.jpg"
          alt="Luxury Spa in Gurgaon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Contact Our Luxury Spa in Gurgaon
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            Book your body massage, <a href="/couples-massage-in-gurgaon" className="text-white underline hover:text-neutral-200">couple spa</a>, or wellness therapy today
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {[
            {
              icon: <FaMapMarkerAlt />,
              title: "Our Location",
              text: "DLF Phase 1, Golf Course Road, Gurgaon",
            },
            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              text: "+91 8448499173",
            },
            {
              icon: <FaWhatsapp />,
              title: "WhatsApp",
              text: "+91 8448499173",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              text: "spaingurugram8826@gmail.com",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="text-3xl text-[#7b0f2b] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-10">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Book Your Spa Session
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form and our spa expert will contact you shortly.
            </p>

            <form className="space-y-5" onSubmit={handleEnquirySubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#7b0f2b]"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Mobile Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#7b0f2b]"
              />
              <select name="service" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#7b0f2b]">
                <option>Body Massage</option>
                <option>Couple Massage</option>
                <option>Swedish Massage</option>
                <option>Deep Tissue Massage</option>
              </select>
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#7b0f2b]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#7b0f2b] text-white py-3 rounded-full font-semibold hover:bg-[#651024] transition"
              >
                Submit Enquiry via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps?q=Gurgaon&output=embed"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
            ></iframe>
          </motion.div>

        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="bg-[#7b0f2b] py-16 text-center px-6">
        <h3 className="text-3xl font-serif font-bold text-white">
          Instant Booking on WhatsApp
        </h3>
        <p className="mt-4 text-neutral-200">
          Get exclusive spa offers and quick appointment confirmation
        </p>
        <Link
          href="https://wa.me/918448499173"
          target="_blank"
          className="inline-flex items-center gap-3 mt-8 px-10 py-4 bg-[#25D366] text-black font-semibold rounded-full hover:scale-105 transition"
        >
          <FaWhatsapp className="text-2xl" />
          Chat on WhatsApp
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#faf7f3] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know before booking your spa session in <a href="/spa-in-gurgaon" className="text-[#7b0f2b] underline hover:text-[#651024]">Gurgaon</a>
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="text-[#7b0f2b]">
                  {openIndex === i ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    </main>
  );
}
