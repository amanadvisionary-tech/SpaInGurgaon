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
export default function SpaBlogDetailPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <main className="bg-[#faf7f3]">
      {/* BLOG HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/image12.jpg"
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
            Sandwich Massage vs. Swedish Massage: Which one is better to relieve stress?
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
           When you’re already stressed out, a <a href="/sandwich-massage-in-gurgaon" className="text-[#7b0f2b] font-medium underline hover:no-underline">Sandwich massage</a> vs Swedish massage can seem like a confusing choice. Stress doesn’t always make an entrance: It accrues silently. You might start to feel tight in the shoulders, notice a stiff neck, or experience fitful sleep or a mind that just won’t stop racing. And since stress lives in the body as much as in the mind, it routinely manifests itself as a tension that you can feel. This is where massage comes in: It relaxes your muscles, soothes your nervous system, and ultimately, makes you feel more like yourself again. In the article below, we will compare a sandwich massage with a Swedish massage and explore the way they differ and how each one may be more suitable for some people.
          </p>

          {/* <p className="text-gray-700 leading-relaxed">
            But which is better for pain relief? The response is based on your body, the amount of pain, and essentially your own comfort. The following text provides a comparative analysis of the Sandwich massage vs Deep tissue massage, along with the procedures, advantages, and which type of person should opt for which therapy.
          </p> */}
        </div>

        {/* BENEFITS OF MASSAGE */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            How Stress Works: The Body and Mind Are Inseparable
          </h2>

          <p className="text-gray-700 mb-4">
           When we refer to stress, we are referring to the type of stress that impacts our body and mind. The mind and body connect in a sense. The body is influenced by what happens to the mind. What happens in the body can impact the mind.
          </p>
          {/* <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Improves blood circulation</li>
            <li>Reduces muscle tension</li>
            <li>Releases built-up toxins</li>
            <li>Improves mobility and flexibility</li>
            <li>Calms the nervous system</li>
          </ul> */}
          <p className="text-gray-700 mb-4 mt-3">
            The stress we experience is not only in our brain; it’s also, physically, in our body. Our body experiences stress as well.
          </p>
          <p className="text-gray-700 mb-4 mt-3">
           We have to recognize the mind-body connection and understand how stress impacts both.
          </p>
          <p className="text-gray-700 mb-4 mt-3">
           Stress is an issue that impacts our brain and body. The mind and body are. We need to treat the mind and body to manage stress.
          </p>
          <p className="text-gray-700 mb-4 mt-3">
           So, people can think of stress as something occurring in your mind.” When the reality is, “it’s happening all over your body:
          </p>
        </div>

        {/* SANDWICH MASSAGE */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Put your nervous system on high alert
            </h2>

            <p className="text-gray-700 mb-4">
             That’s why telling someone to simply calm down won’t cut it most of the time. It’s not so he acts of people saying to someone relax does not make them relaxed. The person instructed to relax will not, in fact, suddenly become unstressed. Telling them to calm down is not supportive. Pleasure is what people should be attempting to discover for themselves.
            </p>

            <h3 className="font-semibold mb-2">And massage is so great because it gives the body immediately what it wants to hear and feel:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>the skin</li>
              <li>the muscles</li>
              
            </ul>
            <p className="text-gray-700 mb-4 mt-3">
           Massage is such a wonderful thing for your body. The body likes massages. Massage helps the body to feel better. Massage accomplishes this by communicating with the body in terms it can understand. When the body gets a Massage it can relax. Massage is good for the body. The body does like a good Massage.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Pressure</li>
              <li>Rhythm</li>
              <li>Warmth</li>
              <li>Reassuring touch Sandwich</li>
            </ul>
            <p className="text-gray-700 mb-4 mt-3">
           The Sandwich massage and the Swedish massage are both built on this design. And they do so in very distinctive ways. Sandwich Massage and the Swedish massage are not the same.
          </p>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/spa-massage-concept-with-woman.jpg"
              alt="Sandwich massage therapy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BENEFITS OF SANDWICH */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            The Sandwich Massage Experience
          </h3>
          <p className="text-gray-700 mb-4">
          A Sandwich Massage You Must Try at Least Once. The truth is, a sandwich massage is almost impossible to come by unless you have one. You have to get a Massage I mean, just, you know. You just have to experience this to know what a Massage is.
          </p>
          <p className="text-gray-700 mb-4 mt-3">
           A Sandwich Massage is for those who are coming for a massage for the first time becausea sandwich massage is not a traditional massage. Regular massage is basically someone touching you and going around your body. A sandwich Massage means a person touches you all over the body at once. The touch sometimes even turns in different directions. It's all you feel is the touch, it's steady like a beat. It really grounds you deeply. There’s some sort of pressure (for the want of a better word) in a massage that is very rhythmic and balanced, and that is meditative.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-3">
            How It Feels
          </h3>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>It is a strange feeling. A weird, not-right feeling. I feel like something is off.</li>
            <li>They’re always discussing the feeling. It doesn’t really describe, they say.</li>
            <li>I believe a feeling is what separates us humans. That’s what makes life fun.</li>
            <li>By the way, it’s not always a bad feeling that I’m talking about. Sometimes it is good.</li>
            <li>Great, such as having a sensation when you are happy.</li>
           
          </ul>

          <p className="text-gray-700 mt-4">
           It is often said that the thing is:
          </p>
          <p className="text-gray-700 mb-4 mt-3">
           “Being wrapped in a big hug.”
          </p>
          <p className="text-gray-700 mb-4 mt-3">
           It feels really secure -Making the feeling of security is something that daily life rarely possesses. Although a great many things must tear you from her side to be overinfluential, it is nice for me as well as for bubbles to feel safe.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-3">
            Best For:
          </h3>
          <p className="text-gray-700 mt-4">
           Sandwich Massage is very effective for improving mental and emotional stress like:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Racing thoughts</li>
            <li>Overwhelm or burnout</li>
            <li>Anxiety</li>
            <li>Emotional exhaustion</li>
          </ul>
          <p className="text-gray-700 mt-4">
           This helps our nervous system a lot to go from that alert and on guard to calm a lot quicker than many other <a href="/massage-service-in-gurgaon" className="text-[#7b0f2b] font-medium underline hover:no-underline">types of massages</a>. The nervous system can toggle between mode and chill mode. It’s because the nervous system can go from really alert, very quickly to calm. And the nervous system and massages can team up to get this done.
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
              The Swedish Massage Experience
            </h2>

            <p className="text-gray-700 mb-4">
             The Swedish Massage is out there. One of the reasons a Swedish Massage is so effective.
            </p>
             <p className="text-gray-700 mb-4">
             It uses really well-flowing strokes, and it also uses gentle kneading, and steady pressure. The massage does not appear too suddenly. The body knows what the massage is about to do, and that allows people to relax really deeply. The massage is very predictable. That’s what makes so many of us feel more relaxed when, say, we get a massage.
            </p>

            <h3 className="font-semibold mb-2">How It Feels</h3>
             <p className="text-gray-700 mb-4">
             When you’re going through something it’s extremely difficult to express in words what it feels like.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>From the perspective of a Sensationalist, happiness is a sensation.</li>
              <li>Happiness feels incredible when you are happy.</li>
              <li>Happiness is the feeling, in the world sometimes.</li>
              <li>Everybody wants to feel happy.</li>
              <li>When you get the happy feeling, it feels good.</li>
            </ul>
          </div>
        </div>

        {/* BENEFITS DEEP TISSUE */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Sandwich Massage Works Best When:
          </h3>
          <p className="text-gray-700 mb-4">
            You feel really overwhelmed in your mind like it is completely packed with ideas, and you do not know what to think. Sometimes your brain just feels like it has too much to manage. Your mind is overwhelmed.
            </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>I can't get my brain to shut off.</li>
            <li>Emotional fatigue is high</li>
            
          </ul>
          <p className="text-gray-700 mt-4">
           You just do really need something to settle your system down fast, like something that you’re going to be able to help your nervous system feel more relaxed. Your body’s nervous system is how you feel calm and relaxed. When it is great, you are great. The nervous system is extremely important because, obviously, you want to be in the best possible state that you can be, and your nervous system plays a huge part of that.
            </p>
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-4">
            Swedish Massage Works Best When
          </h2>

          <p className="text-gray-700 mb-4">
          I get muscle tension when I am stressed. Stress always shows up in my body as tightness. It’s as if my muscles are informing me that stress is having an impact on my body. This muscle tightness, I can sense it, when stress is accumulating in me. It’s a form that stress takes in my body, as muscle tension.
          </p>
          <p className="text-gray-700 mb-4">
            Sometimes your body is going to feel really sore. It will feel stiff, as if the muscles in your body are too tight, and can be even somewhat painful for the body. It leaves your body feeling tight, uncomfortable and/or sore when you have done something that is difficult, on the body.
            </p>

          <h2 className="text-3xl font-semibold mb-4">
            Can We Use Both The Things At Time ?
          </h2>
          <p className="text-gray-700 mb-4">
            Certainly, The good news is massage works best when it is designed specifically for the recipient of the massage. That’s because the massage is custom-built to what that person needs. The massage therapy will be most beneficial when the masseur tries to understand what it is that the person would like out of the massage therapy. In fact, when it’s personalized, massage therapy can be really beneficial.
            </p>
          <h2 className="text-2xl font-semibold mb-4">
            A session may:
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Start with Swedish Massage to relax muscles and improve circulation.</li>
            <li>Integrate Sandwich Massage healing methods to promote 	relaxation and mental relief.</li>
          </ul>
          <p className="text-gray-700 mb-4 mt-3">
          This one is quite helpful for those who experience stress over a time and their body and brain are also affected in that process. It helps for people who are stressed up to a certain point, and it impacts their entire body and mind. The combination is useful for individuals who are dealing with long-term stress that impacts a person both body and mind.
          </p>
        </div>

        {/* FINAL */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Final Thoughts
          </h2>

          <p className="text-gray-700">
           Stress is unique to each individual, and you won’t find one massage that’s right for everyone. Stress looks different, for everyone.
          </p>
          <p className="text-gray-700">
            Sandwich Massage can reduce the body and mind stress. Sandwich Massage is very beneficial; it helps you to come out from the tension and stress, when this massage is used then your body gets indulge with this so that it helps you to feet better. The Massage can also do wonders for you if you are stressed and under too much pressure.
          </p>
          <p className="text-gray-700">
           The Sweden Massage is so relaxing when you are under stress. It hangs up, in your body Swedish Massage can help with that.
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
