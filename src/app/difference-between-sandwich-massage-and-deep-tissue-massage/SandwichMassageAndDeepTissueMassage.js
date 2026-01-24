"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

    const faqs = [
  {
    question: "What is the difference between a Sandwich Massage and a Deep Tissue Massage?",
    answer:
      "The only difference is pressure and technique. Sandwich massage the pressure heavy and the light gentle relaxation soft in central to have. Deep tissue massage, on the other hand, applies deep pressure over a prolonged period of time on deeper muscle layers and chronic tension that may feel stronger.",
  },
  {
    question: "Which massage is best for chronic pain?",
    answer:
      "Deep tissue massage is commonly recommended for chronic pain issues due to it’s effectiveness on lower back pain, stiff neck and muscle knots. It gets deep into muscles to dissolve adhesions and chronic holding patterns, with more lasting pain relief than a lighter technique.",
  },
  {
    question: "Is Sandwich Massage suitable for stress-related pain?",
    answer:
      "Yes, a Sandwich massage is very beneficial for stress induced pain. It aids in relaxation of the nervous system, circulation and relieving gentle muscle tension making it perfect for headaches, stiff shoulders and pain from mental/emotion stress.",
  },
  {
    question: "Does Deep Tissue Massage hurt?",
    answer:
      "Deep tissue massage may be uncomfortable at times, but it is designed to reach beneath the superficial layers and work out knots or tightness in your muscles. Though it should never be painful. Most people feel better during the first treatment, though some experience soreness that dissipates after the session while others feel relief immediately or over the next couple of days.",
  },
  {
    question: "Can I switch between Sandwich Massage and Deep Tissue Massage?",
    answer:
      "Absolutely. It can be perfect for you to shift back and forth from the Sandwich massage to Deep tissue massage. Beginning with a Sandwich Massage aims to foster relief of the muscles/soreness, deep tissue-separated sessions can help address a more penetrating level of pain-management, which results in an effective balance.",
  },
];
export default function SandwichMassageAndDeepTissueMassage() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <main className="bg-[#faf7f3]">
      {/* BLOG HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/fpkdl.com_450_1757505385_young-woman-relaxing-back-massage-spa_151013-21109.jpg"
          alt="Luxury Spa in Gurgaon"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <span className="text-[#c9b37e] uppercase tracking-widest text-sm">
            Spa & Wellness
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            What is The Difference Between a Sandwich Massage and a Deep Tissue Massage?
          </h1>
          {/* <p className="mt-4 text-neutral-200">
            Published on Jan 10, 2026 • 6 min read
          </p> */}
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="py-5 px-6">
        
          
          {/* // */}
    <section className="w-full bg-white">
      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-16 space-y-16">

        {/* INTRO */}
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the most widespread reasons people seek out massage therapy is for pain relief. “When it comes to some of the aches and pains in life, whether it be chronic back pain, stiffness through muscles, technology stress — quite literally pain that many times comes from our devices or work volumes but still landed on your body in one way/shape/or form — or post workout recovery soreness: there is huge benefit to using the right massage technique. Sandwich Massage and Deep tissue massage as Pretty Beloved Body to body massage services. There are so many options out of the box that you can choose from as part of the massage service.
          </p>

          <p className="text-gray-700 leading-relaxed">
            But which is better for pain relief? The response is based on your body, the amount of pain, and essentially your own comfort. The following text provides a comparative analysis of the Sandwich massage vs Deep tissue massage, along with the procedures, advantages, and which type of person should opt for which therapy.
          </p>
        </div>

        {/* BENEFITS OF MASSAGE */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Understanding the Benefits of Massage for Pain Relief
          </h2>

          <p className="text-gray-700 mb-4">
            Massage works by manipulating soft tissues such as muscles, tendons, and fascia.
            This process helps the body in multiple ways:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Improves blood circulation</li>
            <li>Reduces muscle tension</li>
            <li>Releases built-up toxins</li>
            <li>Improves mobility and flexibility</li>
            <li>Calms the nervous system</li>
          </ul>
          <p className="text-gray-700 mb-4 mt-3">
            Various massage methods work to relieve pain in various ways. Some concentrate on relaxation, while others go deep, targeting muscle layers and addressing chronic pain or injuries.
          </p>
        </div>

        {/* SANDWICH MASSAGE */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              What Is a Sandwich Massage?
            </h2>

            <p className="text-gray-700 mb-4">
              A Sandwich massage is a very sensual body-to-body, holistic massage to offer the two of you melt away together with sensuous oil being applied by 2 ladies. The name is evocative of the form of the massage — light pressure at the beginning and end, heavier work in between.
            </p>

            <p className="text-gray-700 mb-4">
              This layered application also allows for the body to relax before extra deep muscle work begins, so it’s both comforting and productive.
            </p>

            <h3 className="font-semibold mb-2">Key Features of Sandwich Massage</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Begins with gentle, calming strokes</li>
              <li>Transitions into deeper muscle manipulation</li>
              <li>Ends with relaxing techniques</li>
              <li>Blends physical relief and mental relaxation</li>
            </ul>
          </div>

          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/fpkdl.com_750_1760611274_caucasian-woman-enjoying-relaxing-antistress-head-massage-quiescent_31965-325098.jpg"
              alt="Sandwich massage therapy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BENEFITS OF SANDWICH */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Benefits of Sandwich Massage
          </h3>
          <p className="text-gray-700 mb-4">
           Benefits: The effects of sandwich massage extend beyond relaxation. This is a great option for individuals who seek relief from pain without excruciating pain.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Pain relief without muscle shock</li>
            <li>Reduced muscle tension in painful areas</li>
            <li>Improved circulation and lymphatic drainage</li>
            <li>Stress and anxiety reduction</li>
            <li>Better sleep quality</li>
            <li>Enhanced mind-body relaxation</li>
          </ul>

          <p className="text-gray-700 mt-4">
           As pressure is applied slowly, the Sandwich massage is recommended for those who are new to massage therapy or have a low tolerance level.
          </p>
        </div>

        {/* DEEP TISSUE */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[300px] rounded-xl overflow-hidden md:order-1 order-2">
            <Image
              src="/images/fpkdl.com_960_1760598531_woman-is-being-massaged-by-woman_133748-19192.jpg"
              alt="Deep tissue massage therapy"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:order-2 order-1">
            <h2 className="text-2xl font-semibold mb-4">
              What Is Deep Tissue Massage?
            </h2>

            <p className="text-gray-700 mb-4">
              Deep tissue massage is a firmer therapeutic technique that focuses more on deeper layers of muscle and connective tissue. It employs slow, deep pressure to relieve muscle knots, scar tissue and chronic tension.
            </p>

            <h3 className="font-semibold mb-2">Key Features of Deep Tissue Massage</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Focuses on deep muscle layers</li>
              <li>Uses firm and sustained pressure</li>
              <li>Targets knots and pressure points</li>
              <li>Often feels intense but effective</li>
            </ul>
          </div>
        </div>

        {/* BENEFITS DEEP TISSUE */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Benefits of Deep Tissue Massage
          </h3>
          <p className="text-gray-700 mb-4">
            This type of bodywork is ideal for people with stiff backs, issues related to posture, sore shoulders and headaches, recovering from trauma/surgery.
            </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Relief from chronic muscle pain</li>
            <li>Breakdown of scar tissue</li>
            <li>Improved posture and mobility</li>
            <li>Reduced inflammation</li>
            <li>Faster muscle recovery</li>
            <li>Effective treatment for sports injuries</li>
          </ul>
          <p className="text-gray-700 mt-4">
            This type of massage is most effective to address pain that comes from deep muscle tissue or repetitive strain.
            </p>
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-4">
            Sandwich Massage vs Deep Tissue Massage: Similarities and Differences between Techniques
          </h2>

          <p className="text-gray-700 mb-4">
           Aspect Sandwich Massage Deep Tissue Massage Pressure Style Slowly layered Firm to intense Comfort Level High Low to moderate Focus Relaxation + some pain relief Chronic pain & muscle knots Pain During Session None can be uncomfortable and Best For Stress-related pain Muscle issues.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            Which Massage Is Better for Reducing Pain?
          </h2>
          <h2 className="text-2xl font-semibold mb-4">
            Choose Sandwich Massage If:
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Your pain is mild to moderate</li>
            <li>You experience stress-related muscle tension</li>
            <li>You prefer a relaxing experience</li>
            <li>You’re new to the world of massage therapy</li>
            <li>You want pain gone minus the hurt.</li>
          </ul>
          <p className="text-gray-700 mb-4 mt-3">
           Sandwich technique are most places on pain linked with tension, fatigue and emotional stress.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Choose Deep Tissue Massage If:
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>You have long-term, or chronic, pain</li>
            <li>You have trigger points or tense fascia</li>
            <li>You participate in strenuous physical activities or sports.</li>
            <li>You are recovering from injury</li>
            {/* <li>You want pain gone minus the hurt.</li> */}
          </ul>
          <p className="text-gray-700 mb-4 mt-3">
           Deep tissue massage is the best fit for pain that roils deep within muscle tissue.
          </p>
        </div>

        {/* ACUTE VS CHRONIC */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Pain Relief Results: Acute vs Chronic Pain
          </h2>

          <h3 className="font-semibold">Sandwich Massage (Short-Term Relief)</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
            <li>Immediate relaxation</li>
            <li>Reduced stress-induced pain</li>
            <li>Temporary muscle looseness</li>
          </ol>

          <h3 className="font-semibold">Deep Tissue Massage (Long-Term Relief)</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Lasting reduction in chronic pain</li>
            <li>Improved muscle alignment</li>
            <li>Long-term mobility improvements</li>
          </ol>
          <p className="text-gray-700 mt-4">
            If short-term pain reducing is your aim, then a Sandwich massage will just permanently solve your purpose. For chronic pain situations, deep tissue massage is the most suitable technique for lasting effects.
            </p>
        </div>

        {/* SAFETY */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safety and Side Effects
          </h2>

          <h3 className="font-semibold">Sandwich Massage</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
            <li>Very low risk</li>
            <li>Suitable for most people</li>
            <li>No post-massage soreness</li>
          </ol>

          <h3 className="font-semibold">Deep Tissue Massage</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Temporary soreness possible</li>
            <li>Mild bruising in some cases</li>
            <li>Requires hydration after session</li>
          </ol>
          <p className="text-gray-700 mt-4">
            As with any massage, make sure you tell your therapist about existing health conditions and pressure preferences.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-3">
            Combining Both for Optimal Results
          </h2>
          <p className="text-gray-700 mb-4">
            Many therapists advise utilizing both over time. For example:
            </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Begin with a Sandwich massage to loosen muscles</li>
            <li>Move on to deep tissue sessions for focused pain relief</li>
            <li>Pain level-based alternate sessions</li>
            {/* <li>You are recovering from injury</li> */}
            {/* <li>You want pain gone minus the hurt.</li> */}
          </ul>
          <p className="text-gray-700 mb-4 mt-3">
           A fusion of Sandwich massage and Deep tissue massage to deliver pain relief in a balanced manner.
          </p>
        </div>

        {/* FINAL */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Final Thoughts
          </h2>

          <p className="text-gray-700">
            So, when it comes to comparing Sandwich massage vs Deep tissue massage then there isn't one answer. Both methods have a different approach and help the pain in its own way.
          </p>
          <p className="text-gray-700">
            Sandwich Massage best for relaxing, also working for releasing stress and pain management.
          </p>
          <p className="text-gray-700">
            Deep tissue massage therapy is ideal for pain or discomfort due to chronic injuries and tension. 
          </p>
          <p className="text-gray-700">
            What’s right for you will depend on the type of pain, your tolerance, and your goals when it comes to wellness.
            </p>
        </div>

      </div>
    </section>

          {/* TAGS */}
          {/* <div className="mt-12 flex flex-wrap gap-3">
            {["Luxury Spa Gurgaon", "Body Massage", "Wellness", "Stress Relief"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[#f3efe8] text-sm text-gray-700"
                >
                  {tag}
                </span>
              )
            )}
          </div> */}

          {/* BACK BUTTON */}
          <div className="mt-14 text-center">
            <Link
              href="/blog"
              className="inline-block px-10 py-4 rounded-full bg-[#7b0f2b] text-white font-semibold hover:bg-[#681026] transition"
            >
              ← Back to Blog
            </Link>
          </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#7b0f2b] py-20 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
          Book a Luxury Spa in Gurgaon Today
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-200">
          Experience deep relaxation, professional therapies, and premium
          wellness services crafted for modern lifestyles.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-12 py-4 bg-[#c9b37e] text-black font-semibold rounded-full hover:bg-[#b8a066] transition"
        >
          Book Appointment
        </Link>
      </section>
      
    
    <section className="w-full bg-[#f7f3ef] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-rose-600 mb-2">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 pb-6 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
}
