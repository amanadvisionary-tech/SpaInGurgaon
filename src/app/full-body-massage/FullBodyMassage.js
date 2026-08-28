"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  Link2,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Clock,
  Calendar,
  Share2,
  CheckCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  List,
  Star,
  Eye,
  BookOpen,
} from "lucide-react";

// ─── Site Color Theme ──────────────────────────────────────────────────────────
// Primary:  #7b0f2b  (maroon / wine red — matches blog CTA)
// Accent:   #c9b37e  (warm gold — matches blog tags)
// Light bg: #fdf8f2  (warm cream)
// ──────────────────────────────────────────────────────────────────────────────

const ARTICLE_TITLE = "Full Body Massage: Benefits, Types, and Everything You Should Know";
const ARTICLE_URL = "https://www.spaingurgaon.com/full-body-massage";

const TOC_ITEMS = [
  { id: "what-is", title: "What Is a Full Body Massage?" },
  { id: "how-long", title: "How Long Does It Take?" },
  { id: "benefits", title: "Benefits of a Full Body Massage" },
  { id: "types", title: "Different Types" },
  { id: "during-session", title: "What Happens During a Session?" },
  { id: "who-can-get", title: "Who Can Get One?" },
  { id: "how-often", title: "How Often Should You Get One?" },
  { id: "is-it-safe", title: "Is It Safe?" },
  { id: "tips", title: "Tips Before Your First Massage" },
  { id: "final-thoughts", title: "Final Thoughts" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const FAQ_DATA = [
  {
    q: "Does a full body massage hurt?",
    a: "Most massages do not hurt. Some techniques, like deep tissue massage, may feel stronger, but you should always tell the therapist if the pressure is too much.",
  },
  {
    q: "What should I wear?",
    a: "You can wear comfortable clothes to the spa. The therapist will explain what to do before the session.",
  },
  {
    q: "Can I get a massage every week?",
    a: "Some people do, especially if they have muscle tension. Others choose once a month for relaxation.",
  },
  {
    q: "What should I do after a massage?",
    a: "Drink water, take it easy for a while, and enjoy the relaxed feeling.",
  },
];

const RELATED_ARTICLES = [
  {
    title: "What is The Difference Between a Sandwich Massage and a Deep Tissue Massage?",
    desc: "Understand the key differences between two popular massage styles and find out which one is best for your needs.",
    img: "/images/fpkdl.com_960_1758962771_young-relaxing-woman-getting-massage-with-cosmetic-oil-spa-salon-background_852367-2763.jpg",
    date: "12 Aug 2026", tag: "Wellness",
    href: "/difference-between-sandwich-massage-and-deep-tissue-massage",
  },
  {
    title: "Sandwich Massage vs. Swedish Massage: Which Is Better for Stress?",
    desc: "Compare two beloved massage therapies and discover which one is the right fit for stress relief and muscle relaxation.",
    img: "/images/fpkdl.com_960_1760685466_therapist-make-professional-hand-massage-back-shoulders-young-beautiful-woman_359031-29618.jpg",
    date: "05 Aug 2026", tag: "Massage",
    href: "/sandwich-massage-vs-swedish-massage",
  },
  {
    title: "Full Body Massage in Gurgaon: Benefits & Best Spa Options",
    desc: "Discover why a full body massage is one of the best investments for your overall health and wellness in Gurgaon.",
    img: "/images/fpkdl.com_960_1760685860_full-body-massage-spa-salon_926199-4238291.jpg",
    date: "29 Jul 2026", tag: "Luxury Spa",
    href: "/full-body-massage",
  },
];

const BENEFITS = [
  {
    num: "01", emoji: "🧘", title: "Helps You Feel Relaxed",
    body: "Life can be busy and stressful. A massage helps your body slow down and feel calm. Many people feel peaceful after their session."
  },
  {
    num: "02", emoji: "💪", title: "Reduces Muscle Pain",
    body: "If your muscles feel tight or sore, a massage can help loosen them. It may help with back pain, neck pain, shoulder pain, and leg pain."
  },
  {
    num: "03", emoji: "❤️", title: "Improves Blood Flow",
    body: "Massage helps your blood move better around your body. Good blood flow brings oxygen and nutrients to your muscles."
  },
  {
    num: "04", emoji: "😴", title: "Helps You Sleep Better",
    body: "Many people sleep more deeply after getting a massage. When your body feels relaxed, it is easier to fall asleep."
  },
  {
    num: "05", emoji: "🌱", title: "Lowers Stress",
    body: "Stress can make you feel tired and worried. A massage gives your body time to rest, which may help lower stress."
  },
  {
    num: "06", emoji: "✨", title: "Makes Your Body Feel Fresh",
    body: "After a massage, many people say they feel lighter and more comfortable. It can help you feel ready for a new day."
  },
];

const MASSAGE_TYPES = [
  {
    title: "Swedish Massage",
    desc: "This massage uses soft and gentle movements. It is a good choice if you want to relax.",
  },
  {
    title: "Deep Tissue Massage",
    desc: "This massage uses more pressure. It helps people who have tight muscles or muscle pain.",
  },
  {
    title: "Thai Massage",
    desc: "Thai massage includes gentle stretching along with pressure. It may help improve flexibility.",
  },
  {
    title: "Aromatherapy Massage",
    desc: "This massage uses essential oils with soft massage techniques. Many people enjoy the relaxing smell of the oils.",
  },
  {
    title: "Hot Stone Massage",
    desc: "Warm stones are placed on the body during the massage. The heat helps muscles relax.",
  },
];

// ─── Callout Box ───────────────────────────────────────────────────────────────
function Callout({ type = "info", title, children }) {
  const s = {
    info: { wrap: "bg-[#fdf5e8] border-[#c9b37e]", Icon: Info, ic: "text-[#c9b37e]", tc: "text-[#7b0f2b]" },
    tip: { wrap: "bg-green-50 border-green-400", Icon: Lightbulb, ic: "text-green-500", tc: "text-green-900" },
    warning: { wrap: "bg-amber-50 border-amber-400", Icon: AlertTriangle, ic: "text-amber-500", tc: "text-amber-900" },
    success: { wrap: "bg-[#fdf5e8] border-[#7b0f2b]", Icon: CheckCircle, ic: "text-[#7b0f2b]", tc: "text-[#7b0f2b]" },
  };
  const { wrap, Icon, ic, tc } = s[type] || s.info;
  return (
    <div className={`${wrap} border-l-4 rounded-r-2xl p-5 my-6`}>
      <div className="flex items-start gap-3">
        <Icon className={`${ic} w-5 h-5 mt-0.5 flex-shrink-0`} />
        <div>
          {title && <p className={`${tc} font-semibold mb-1.5 text-sm`}>{title}</p>}
          <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Table of Contents ─────────────────────────────────────────────────────────
function TOC({ activeId, onLinkClick }) {
  return (
    <nav aria-label="Table of Contents">
      <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
        <List className="w-3.5 h-3.5 text-[#7b0f2b]" />
        Table of Contents
      </h3>
      <ol className="space-y-0.5">
        {TOC_ITEMS.map((item, i) => {
          const active = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  onLinkClick?.();
                }}
                className={`flex items-center gap-2.5 text-sm py-1.5 px-3 rounded-lg transition-all duration-200 ${active
                  ? "bg-[#fdf5e8] text-[#7b0f2b] font-semibold border-l-2 border-[#7b0f2b]"
                  : "text-gray-600 hover:text-[#7b0f2b] hover:bg-[#fdf5e8]"
                  }`}
              >
                <span className={`text-[10px] w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 font-bold ${active ? "bg-[#7b0f2b] text-white" : "bg-gray-200 text-gray-500"
                  }`}>
                  {i + 1}
                </span>
                <span className="leading-snug">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// ─── Social Share ──────────────────────────────────────────────────────────────
function SocialShare({ layout = "horizontal" }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(typeof window !== "undefined" ? window.location.href : ARTICLE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (_) { }
  };
  const btns = [
    { Icon: FaFacebook, label: "Facebook", color: "bg-[#1877F2] hover:bg-[#166fe5]", href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(ARTICLE_URL)}` },
    { Icon: FaWhatsapp, label: "WhatsApp", color: "bg-[#25D366] hover:bg-[#20bd5b]", href: `https://wa.me/?text=${encodeURIComponent(ARTICLE_TITLE + " " + ARTICLE_URL)}` },
    { Icon: FaLinkedinIn, label: "LinkedIn", color: "bg-[#0A66C2] hover:bg-[#0959ab]", href: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(ARTICLE_URL)}` },
    { Icon: FaTwitter, label: "X/Twitter", color: "bg-gray-900 hover:bg-black", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(ARTICLE_URL)}&text=${encodeURIComponent(ARTICLE_TITLE)}` },
  ];
  if (layout === "vertical") {
    return (
      <div className="flex flex-col gap-2">
        {btns.map(({ Icon, label, color, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className={`${color} text-white w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-md`}
            aria-label={`Share on ${label}`} title={label}><Icon className="w-4 h-4" /></a>
        ))}
        <button onClick={handleCopy}
          className={`${copied ? "bg-green-600" : "bg-gray-500 hover:bg-gray-600"} text-white w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-md`}
          aria-label="Copy link" title={copied ? "Copied!" : "Copy link"}><Link2 className="w-4 h-4" /></button>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {btns.map(({ Icon, label, color, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
          className={`${color} text-white px-3 py-2 rounded-lg flex items-center gap-2 text-xs font-semibold transition-all hover:scale-105`}
          aria-label={`Share on ${label}`}>
          <Icon className="w-3.5 h-3.5" /><span className="hidden sm:inline">{label}</span>
        </a>
      ))}
      <button onClick={handleCopy}
        className={`${copied ? "bg-green-600" : "bg-gray-600 hover:bg-gray-700"} text-white px-3 py-2 rounded-lg flex items-center gap-2 text-xs font-semibold transition-all`}>
        <Link2 className="w-3.5 h-3.5" /><span className="hidden sm:inline">{copied ? "Copied!" : "Copy Link"}</span>
      </button>
    </div>
  );
}

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
      itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={onToggle} aria-expanded={open}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#fdf8f2] transition-colors">
        <span className="font-semibold text-gray-900 pr-4 leading-snug text-[15px]" itemProp="name">{q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 text-[#7b0f2b] flex-shrink-0" />
          : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="ans"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
            itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p className="px-5 pb-5 pt-3 text-gray-700 text-sm leading-relaxed border-t border-gray-100 bg-[#fdf8f2]" itemProp="text">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function FullBodyMassage() {
  const [scrollPct, setScrollPct] = useState(0);
  const [activeId, setActiveId] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [showToc, setShowToc] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: "-20% 0% -70% 0%" }
    );
    TOC_ITEMS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── Reading Progress Bar ─────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-100 z-[60]">
        <div className="h-full bg-gradient-to-r from-[#c9b37e] via-[#a8813e] to-[#7b0f2b] transition-all duration-75"
          style={{ width: `${scrollPct}%` }} role="progressbar"
          aria-valuenow={Math.round(scrollPct)} aria-valuemin={0} aria-valuemax={100} />
      </div>

      <article itemScope itemType="https://schema.org/Article" className="bg-white min-h-screen">

        {/* ── Hero / Header ────────────────────────────────────────────────── */}
        <header className="bg-gradient-to-b from-[#fdf8f2] to-white pt-8 pb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500 mb-6">
              {[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Massage", href: "/blog" }].map((c) => (
                <span key={c.href} className="flex items-center gap-1.5">
                  <a href={c.href} className="hover:text-[#7b0f2b] transition-colors">{c.label}</a>
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                </span>
              ))}
              <span className="text-[#7b0f2b] font-medium">Full Body Massage</span>
            </nav>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-[#f5ede0] text-[#7b0f2b] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Wellness
              </span>
              <span className="bg-[#f5ede0] text-[#7b0f2b] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Eye className="w-3 h-3" /> Beginner Friendly
              </span>
            </div>

            {/* H1 */}
            <h1 itemProp="headline" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl tracking-tight">
              Full Body Massage:{" "}
              <span className="text-[#7b0f2b]">Benefits, Types</span>, and Everything You Should Know
            </h1>

            {/* Description */}
            <p className="mt-5 text-lg text-gray-600 leading-[1.8] max-w-3xl">
              Learn what a full body massage is, its benefits, different types, what happens during a session, and how it helps your body and mind feel better.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 pb-6 border-b border-gray-100 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7b0f2b] to-[#c9b37e] rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0">SG</div>
                <span itemProp="author" className="font-medium text-gray-700">Spain Gurugram Team</span>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <time itemProp="datePublished" dateTime="2026-08-04">August 4, 2026</time>
              </span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />5 min read</span>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 py-4 flex-wrap">
              <span className="text-sm text-gray-500 font-semibold flex items-center gap-1.5">
                <Share2 className="w-4 h-4" /> Share:
              </span>
              <SocialShare layout="horizontal" />
            </div>
          </div>
        </header>



        {/* ── Two-Column Layout ─────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-32">
          <div className="lg:grid lg:grid-cols-[1fr_308px] xl:grid-cols-[1fr_328px] lg:gap-14 xl:gap-16">

            {/* ══════════ ARTICLE CONTENT ══════════ */}
            <div className="min-w-0">

              {/* ── Featured Image ────────────────────────────────────────────────── */}
              <figure className="mb-8">
                <div className="relative w-full max-w-3xl aspect-[16/9] mx-auto rounded-3xl overflow-hidden shadow-lg border border-[#c9b37e]/20">
                  <Image
                    src="/images/hero-acupuncture.jpg"
                    alt="Full body massage therapy session at a luxury spa"
                    fill className="object-cover object-center" priority
                    sizes="(max-width: 1024px) 100vw, 800px"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              </figure>

              {/* Mobile TOC */}
              <div className="lg:hidden mb-8 border border-[#c9b37e]/40 rounded-2xl overflow-hidden">
                <button onClick={() => setShowToc(!showToc)} aria-expanded={showToc}
                  className="w-full flex items-center justify-between px-5 py-4 bg-[#fdf8f2] text-[#7b0f2b] font-semibold text-sm">
                  <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" />Table of Contents</span>
                  {showToc ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence initial={false}>
                  {showToc && (
                    <motion.div key="toc" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-white">
                      <div className="p-5"><TOC activeId={activeId} onLinkClick={() => setShowToc(false)} /></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Intro text */}
              <p className="text-gray-700 leading-[1.95] mb-4">
                Many people feel tired after a busy day. Some have back pain. Some feel stress because of work or daily life. A full body massage is a simple way to help your body and mind feel better.
              </p>
              <p className="text-gray-700 leading-[1.95] mb-4">
                It is not only for luxury. Many people get a massage to relax, sleep better, and reduce body pain. In this guide, you will learn what a full body massage is, its benefits, different types, and what you can expect during your first session.
              </p>

              {/* ─── Section 1 ───────────────────────────────────────────── */}
              <section id="what-is" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  What Is a Full Body Massage?
                </h2>
                <p className="text-gray-700 leading-[1.95] mb-4">
                  A full body massage is a treatment where a trained massage therapist gently works on different parts of your body.
                </p>
                <p className="text-gray-700 leading-[1.95] mb-4">
                  The massage usually includes: Neck, Shoulders, Back, Arms, Hands, Legs, and Feet. Some massages may also include the head or face if you want.
                </p>
                <p className="text-gray-700 leading-[1.95] mb-4">
                  The therapist uses different hand movements to help relax your muscles and improve blood flow.
                </p>
              </section>

              {/* ─── Section 2 ───────────────────────────────────────────── */}
              <section id="how-long" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  How Long Does a Full Body Massage Take?
                </h2>
                <p className="text-gray-700 leading-[1.95] mb-4">
                  A normal session usually lasts:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>60 minutes</li>
                  <li>90 minutes</li>
                  <li>120 minutes</li>
                </ul>
                <Callout type="tip" title="First Time?">
                  If you are getting a massage for the first time, a 60-minute session is a good choice to start.
                </Callout>
              </section>

              {/* ─── Section 3 ───────────────────────────────────────────── */}
              <section id="benefits" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Benefits of a Full Body Massage
                </h2>
                <p className="text-gray-700 leading-[1.95] mb-6">
                  A full body massage offers many benefits for both your body and your mind.
                </p>
                <div className="space-y-7">
                  {BENEFITS.map((b) => (
                    <div key={b.num} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7b0f2b] group-hover:bg-[#6a0d25] text-white rounded-2xl flex items-center justify-center font-bold text-sm transition-colors shadow-sm">
                        {b.num}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-[15px] font-bold text-gray-900 mb-1.5">{b.emoji} {b.title}</h3>
                        <p className="text-gray-700 text-sm leading-[1.9]" dangerouslySetInnerHTML={{ __html: b.body }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Section 4 ───────────────────────────────────────────── */}
              <section id="types" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Different Types of Full Body Massage
                </h2>
                <p className="text-gray-700 leading-[1.95] mb-6">
                  Not every massage is the same. Here are some common types.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {MASSAGE_TYPES.map((type, i) => (
                    <div key={i} className="bg-[#fdf5e8] border border-[#c9b37e]/30 rounded-xl p-5">
                      <h3 className="font-bold text-[#7b0f2b] mb-2">{type.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Section 5 ───────────────────────────────────────────── */}
              <section id="during-session" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  What Happens During a Full Body Massage?
                </h2>
                <p className="text-gray-700 leading-[1.9] mb-5 text-sm">
                  If it is your first time, you may feel nervous. That is normal. A typical session looks like this:
                </p>
                <ol className="space-y-4 mb-5">
                  {[
                    { step: "1", desc: "You arrive at the spa." },
                    { step: "2", desc: "The therapist asks about your health and any pain." },
                    { step: "3", desc: "You are given privacy to get ready." },
                    { step: "4", desc: "The therapist explains the massage." },
                    { step: "5", desc: "The massage begins." },
                    { step: "6", desc: "After the session, you can relax for a few minutes and drink some water." },
                  ].map((item) => (
                    <li key={item.step} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#7b0f2b] text-white rounded-full flex items-center justify-center text-sm font-bold shadow">{item.step}</div>
                      <p className="font-medium text-gray-900 text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ol>
                <Callout type="info" title="Privacy and Comfort">
                  A good therapist always respects your comfort and privacy throughout the entire session.
                </Callout>
              </section>

              {/* ─── Section 6 ───────────────────────────────────────────── */}
              <section id="who-can-get" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Who Can Get a Full Body Massage?
                </h2>
                <p className="text-gray-700 leading-[1.9] mb-5 text-sm">
                  Many adults choose full body massage for relaxation and wellness. It may be helpful for people who:
                </p>
                <ul className="space-y-2 mb-6">
                  {["Sit at a desk for many hours", "Feel stressed", "Have tired muscles", "Exercise regularly", "Want time to relax"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c9b37e] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Callout type="warning" title="Medical Conditions">
                  If you have a medical condition, injury, or are pregnant, talk to your doctor before getting a massage.
                </Callout>
              </section>

              {/* ─── Section 7 ───────────────────────────────────────────── */}
              <section id="how-often" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  How Often Should You Get a Massage?
                </h2>
                <p className="text-gray-700 leading-[1.9] mb-5 text-sm">It depends on your needs.</p>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-5">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#7b0f2b] text-white">
                        <th className="text-left px-5 py-3.5 font-semibold">Goal</th>
                        <th className="text-left px-5 py-3.5 font-semibold">Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ["For relaxation", "Once every 3–4 weeks"],
                        ["For frequent muscle tension", "Every 1–2 weeks (if advised)"],
                        ["For general wellness", "Once a month"],
                      ].map(([goal, freq], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fdf8f2]"}>
                          <td className="px-5 py-3.5 text-gray-700">{goal}</td>
                          <td className="px-5 py-3.5 text-[#7b0f2b] font-semibold">{freq}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ─── Section 8 ───────────────────────────────────────────── */}
              <section id="is-it-safe" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Is a Full Body Massage Safe?
                </h2>
                <p className="text-gray-700 leading-[1.9] mb-5 text-sm">For most healthy adults, yes.</p>
                <p className="text-gray-700 leading-[1.9] mb-4 text-sm font-semibold">To make your experience better:</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#7b0f2b] mt-1 flex-shrink-0" /> Drink water before and after the massage.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#7b0f2b] mt-1 flex-shrink-0" /> Tell the therapist if something feels uncomfortable.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#7b0f2b] mt-1 flex-shrink-0" /> Avoid a heavy meal right before your appointment.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#7b0f2b] mt-1 flex-shrink-0" /> Choose a clean and professional spa.</li>
                </ul>
              </section>

              {/* ─── Section 9 ───────────────────────────────────────────── */}
              <section id="tips" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Tips Before Your First Massage
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[["👗", "Wear comfortable clothes"], ["⏰", "Arrive a little early"], ["🩺", "Share any health concerns with the therapist"], ["📵", "Turn your phone to silent mode"], ["🧘", "Relax and enjoy the experience"]].map(([icon, tip], i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#fdf5e8] border border-[#c9b37e]/20 rounded-xl px-4 py-3">
                      <span className="text-xl flex-shrink-0">{icon}</span>
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Final Thoughts ──────────────────────────────────────── */}
              <section id="final-thoughts" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">Final Thoughts</h2>
                <p className="text-gray-700 leading-[1.95] mb-4 text-sm">
                  A full body massage is more than just a way to relax. It can help reduce stress, ease muscle tension, improve blood flow, and leave you feeling refreshed.
                </p>
                <p className="text-gray-700 leading-[1.95] mb-4 text-sm">
                  Whether you choose a Swedish massage, deep tissue massage, Thai massage, or another style, the most important thing is to visit a clean spa with trained professionals and choose the type of massage that matches your needs.
                </p>
                <Callout type="success" title="Try It Out">
                  If you are trying a full body massage for the first time, start with a gentle session and let your therapist know what feels comfortable. A good massage should leave you feeling calm, refreshed, and ready to enjoy the rest of your day.
                </Callout>
              </section>

              {/* ─── FAQ ─────────────────────────────────────────────────── */}
              <section id="faq" className="scroll-mt-24 mt-14" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-l-4 border-[#c9b37e] pl-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {FAQ_DATA.map((faq, i) => (
                    <FAQItem key={i} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                  ))}
                </div>
              </section>

              {/* ─── CTA ─────────────────────────────────────────────────── */}
              <div className="mt-14 rounded-3xl overflow-hidden shadow-xl">
                <div className="relative bg-gradient-to-br from-[#7b0f2b] via-[#6a0d25] to-[#4a0a1c] text-white p-8 md:p-12 text-center">
                  <div className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: "url('/images/fpkdl.com_960_1758980857_inviting-spa-room-designed-ultimate-relaxation_1079150-61092.jpg')" }} />
                  <div className="relative z-10">
                    <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                      Premium Spa — Gurgaon
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Book Your Relaxing Massage Today 💆</h2>
                    <p className="text-red-100 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                      Experience the full benefits of professional deep tissue massage therapy. Our certified therapists are ready to help you feel your very best.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="/contacts" className="bg-[#c9b37e] text-[#4a0a1c] font-bold px-8 py-3.5 rounded-2xl hover:bg-[#d4c090] transition-all hover:scale-105 shadow-lg text-sm">
                        📅 Book Appointment
                      </a>
                      <a href="/contacts" className="border-2 border-[#c9b37e]/70 text-white font-semibold px-8 py-3.5 rounded-2xl hover:bg-white/10 transition-all text-sm">
                        📞 Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── Related Articles ─────────────────────────────────────── */}
              <div className="mt-14">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid sm:grid-cols-3 gap-5">
                  {RELATED_ARTICLES.map((art, i) => (
                    <motion.article key={i}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                      <div className="aspect-[3/2] overflow-hidden relative">
                        <Image src={art.img} alt={art.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 33vw" />
                        <span className="absolute top-3 left-3 bg-[#7b0f2b] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                          {art.tag}
                        </span>
                      </div>
                      <div className="p-4">
                        <p className="text-[11px] text-gray-400 mb-2 flex items-center gap-1"><Calendar className="w-3 h-3" />{art.date}</p>
                        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 line-clamp-2">{art.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{art.desc}</p>
                        <a href={art.href} className="text-[#7b0f2b] text-xs font-semibold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ChevronRight className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* ─── Author Card ──────────────────────────────────────────── */}
              <div className="mt-14 bg-gradient-to-br from-[#fdf8f2] to-[#fdf5e8] border border-[#c9b37e]/30 rounded-2xl p-6">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-5">Written By</p>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7b0f2b] to-[#c9b37e] flex items-center justify-center text-white font-extrabold text-xl shadow-md">SG</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-base">Spain Gurugram Wellness Team</h4>
                    <p className="text-[#7b0f2b] text-xs mb-3 font-semibold">Certified Spa & Massage Therapists — Gurgaon</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Our team of certified therapists and wellness experts brings years of hands-on experience in therapeutic massage and holistic health. We are committed to sharing accurate, practical information to help you make informed wellness decisions.</p>
                    <div className="flex gap-3 mt-4">
                      {[{ Icon: FaFacebook, href: "#", label: "Facebook", color: "text-blue-600" }, { Icon: FaTwitter, href: "#", label: "Twitter", color: "text-gray-700" }, { Icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "text-blue-700" }].map(({ Icon, href, label, color }) => (
                        <a key={label} href={href} aria-label={label} className={`${color} transition-colors hover:scale-110`}><Icon className="w-4 h-4" /></a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ══════════ STICKY SIDEBAR ══════════ */}
            <aside className="hidden lg:block" aria-label="Article sidebar">
              <div className="sticky top-24 space-y-5">

                {/* TOC */}
                <div className="bg-white border border-[#c9b37e]/30 rounded-2xl p-5 shadow-sm">
                  <TOC activeId={activeId} />
                </div>

                {/* Share */}
                <div className="bg-white border border-[#c9b37e]/30 rounded-2xl p-5 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Share2 className="w-3.5 h-3.5 text-[#7b0f2b]" />Share Article
                  </h3>
                  <SocialShare layout="horizontal" />
                </div>

                {/* Latest Articles */}
                <div className="bg-white border border-[#c9b37e]/30 rounded-2xl p-5 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#7b0f2b]" />Latest Articles
                  </h3>
                  <div className="space-y-4">
                    {RELATED_ARTICLES.map((art, i) => (
                      <a key={i} href={art.href} className="flex gap-3 group">
                        <div className="relative w-16 h-14 rounded-xl overflow-hidden flex-shrink-0">
                          <Image src={art.img} alt={art.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="64px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 mb-0.5">{art.date}</p>
                          <p className="text-xs font-semibold text-gray-900 group-hover:text-[#7b0f2b] transition-colors line-clamp-2 leading-snug">{art.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Sidebar CTA */}
                <div className="bg-gradient-to-br from-[#7b0f2b] to-[#4a0a1c] rounded-2xl p-5 text-white text-center shadow-lg">
                  <div className="text-3xl mb-2">💆</div>
                  <h3 className="font-extrabold text-base mb-1.5">Book a Massage</h3>
                  <p className="text-red-100 text-xs mb-4 leading-relaxed">Expert therapists. Premium spa.<br />Gurgaon's finest experience.</p>
                  <a href="/contacts" className="block bg-[#c9b37e] text-[#4a0a1c] font-bold py-2.5 rounded-xl text-sm hover:bg-[#d4c090] transition-colors shadow">
                    Book Now →
                  </a>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
