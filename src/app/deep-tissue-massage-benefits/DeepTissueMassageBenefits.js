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
  ArrowUp,
  CheckCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  Send,
  MessageSquare,
  Mail,
  BookOpen,
  List,
  Star,
  Eye,
} from "lucide-react";

// ─── Site Color Theme ──────────────────────────────────────────────────────────
// Primary:  #7b0f2b  (maroon / wine red — matches blog CTA)
// Accent:   #c9b37e  (warm gold — matches blog tags)
// Light bg: #fdf8f2  (warm cream)
// ──────────────────────────────────────────────────────────────────────────────

const ARTICLE_TITLE = "Deep Tissue Massage Benefits: A Simple Guide for Everyone";
const ARTICLE_URL = "https://www.spaingurgaon.com/deep-tissue-massage-benefits";

const TOC_ITEMS = [
  { id: "what-is", title: "What Is a Deep Tissue Massage?" },
  { id: "top-benefits", title: "Top Deep Tissue Massage Benefits" },
  { id: "who-should-get", title: "Who Should Get One?" },
  { id: "who-should-avoid", title: "Who Should Avoid It?" },
  { id: "during-session", title: "What Happens During a Session?" },
  { id: "is-it-painful", title: "Is Deep Tissue Massage Painful?" },
  { id: "how-often", title: "How Often Should You Get One?" },
  { id: "tips-before", title: "Tips Before Your Massage" },
  { id: "tips-after", title: "Tips After Your Massage" },
  { id: "final-thoughts", title: "Final Thoughts" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const FAQ_DATA = [
  {
    q: "What is a deep tissue massage?",
    a: "A deep tissue massage is a massage that uses firm, sustained pressure to work on the deeper muscle layers and connective tissue, helping to reduce chronic pain, stiffness, and muscle tension.",
  },
  {
    q: "What are the benefits of deep tissue massage?",
    a: "It can help reduce muscle pain, improve blood circulation, lower stress hormones, improve flexibility, help you sleep better, and speed up recovery after exercise.",
  },
  {
    q: "Is deep tissue massage good for back pain?",
    a: "Yes. Many people choose deep tissue massage specifically because it helps relax tight back muscles, release tension knots, and reduce chronic stiffness — especially in the lower and upper back.",
  },
  {
    q: "How long does a deep tissue massage last?",
    a: "Most sessions last between 60 and 90 minutes. The duration can be adjusted based on your specific needs and the areas being treated.",
  },
  {
    q: "Is deep tissue massage safe?",
    a: "It is safe for most healthy adults. If you have a medical condition, recent surgery, a blood disorder, or an injury, always consult your doctor before booking a session.",
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
    href: "/full-body-massage-in-gurgaon",
  },
];

const BENEFITS = [
  {
    num: "01", emoji: "💪", title: "Helps Reduce Muscle Pain",
    body: "One of the biggest <strong>benefits of deep tissue massage</strong> is targeted pain relief. The firm pressure breaks down adhesions — tight bands of tissue that cause pain and limit mobility. Many people feel noticeably lighter and more comfortable immediately after their session."
  },
  {
    num: "02", emoji: "🔙", title: "Helps with Back Pain",
    body: "<strong>Deep tissue massage for back pain</strong> is one of the most popular use cases. Office workers who sit for long hours often develop chronic lower back tightness. Targeted massage relaxes these muscles, reduces stiffness, and restores comfortable range of motion."
  },
  {
    num: "03", emoji: "🧘", title: "Reduces Stress and Anxiety",
    body: "Stress doesn't only live in the mind — it shows up in your body as tight shoulders, a stiff neck, and shallow breathing. Deep tissue massage lowers cortisol levels and boosts serotonin and dopamine, leaving you calmer, more peaceful, and ready for deep sleep."
  },
  {
    num: "04", emoji: "❤️", title: "Improves Blood Circulation",
    body: "Firm massage strokes stimulate blood flow through congested areas, delivering oxygen and nutrients to muscles while clearing away metabolic waste products. Better circulation means faster recovery and more energy throughout the day."
  },
  {
    num: "05", emoji: "🏃", title: "Reduces Muscle Tightness",
    body: "Muscles can become chronically tight due to exercise, poor posture, or repetitive work movements. Deep tissue massage breaks up adhesions and realigns muscle fibers, making movement easier, more comfortable, and more efficient."
  },
  {
    num: "06", emoji: "🏋️", title: "Speeds Up Exercise Recovery",
    body: "Athletes and gym-goers often choose <strong><a href='/full-body-massage-in-gurgaon' class='text-[#7b0f2b] underline'>full body deep tissue massage</a></strong> because it flushes out lactic acid, reduces DOMS (Delayed Onset Muscle Soreness), and accelerates muscle repair — so you can train harder and more consistently."
  },
  {
    num: "07", emoji: "🤸", title: "Improves Flexibility",
    body: "Tight muscles restrict your natural range of motion, making everyday activities harder and increasing injury risk. By releasing chronic muscle tension, deep tissue massage restores flexibility — bending, stretching, and reaching feel easier."
  },
  {
    num: "08", emoji: "🪑", title: "Helps Improve Posture",
    body: "Bad posture is often caused by tight muscles pulling your spine and joints out of alignment. <a href='/massage-service-in-gurgaon' class='text-[#7b0f2b] underline'>Regular massage</a> targets the muscles responsible — releasing the tension that rounds your shoulders forward or juts your neck out."
  },
  {
    num: "09", emoji: "😴", title: "Helps You Sleep Better",
    body: "When your body is free from pain and tension, falling asleep — and staying asleep — becomes far easier. The relaxation response triggered by massage also promotes melatonin release, your body's natural sleep hormone."
  },
  {
    num: "10", emoji: "✨", title: "Makes You Feel Refreshed",
    body: "The combination of improved circulation, reduced tension, lower stress hormones, and a deeply relaxed nervous system leaves most people feeling lighter, calmer, and more energetic — making regular massage a wellness cornerstone."
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
          : <ChevronDown className="w-5 h-5 text-gray-400  flex-shrink-0" />}
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
export default function DeepTissueMassageBenefits() {
  const [scrollPct, setScrollPct] = useState(0);
  const [activeId, setActiveId] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [showToc, setShowToc] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [commentForm, setCommentForm] = useState({ name: "", email: "", comment: "" });
  const [commentSent, setCommentSent] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
      setShowScrollTop(window.scrollY > 500);
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

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
              <span className="text-[#7b0f2b] font-medium">Deep Tissue Massage Benefits</span>
            </nav>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-[#f5ede0] text-[#7b0f2b] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Massage Therapy
              </span>
              <span className="bg-[#f5ede0] text-[#7b0f2b] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Eye className="w-3 h-3" /> Beginner Friendly
              </span>
            </div>

            {/* H1 */}
            <h1 itemProp="headline" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl tracking-tight">
              Deep Tissue Massage Benefits:{" "}
              <span className="text-[#7b0f2b]">A Simple Guide</span> for Everyone
            </h1>

            {/* Description */}
            <p className="mt-5 text-lg text-gray-600 leading-[1.8] max-w-3xl">
              Learn the top deep tissue massage benefits, how it works, who should get it,
              and why it helps reduce pain, stress, and muscle tension naturally.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 pb-6 border-b border-gray-100 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7b0f2b] to-[#c9b37e] rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0">SG</div>
                <span itemProp="author" className="font-medium text-gray-700">Spain Gurugram Team</span>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <time itemProp="datePublished" dateTime="2026-08-03">August 3, 2026</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <time itemProp="dateModified" dateTime="2026-08-03">Updated: Aug 3, 2026</time>
              </span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />8 min read</span>
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

        {/* ── Featured Image ────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <figure>
            {/* aspect-video = 16:9 — prevents "fat" stretching on all screen sizes */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg"
                alt="Professional deep tissue massage therapy session at a luxury spa"
                fill className="object-cover" priority
                sizes="(max-width: 768px) 100vw, 1200px"
                itemProp="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
            <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
              Professional deep tissue massage therapy — Spain Gurugram Spa, <a href="/spa-in-gurgaon" className="text-[#7b0f2b] font-medium underline hover:no-underline">Gurgaon</a>
            </figcaption>
          </figure>
        </div>

        {/* ── Two-Column Layout ─────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-32">
          <div className="lg:grid lg:grid-cols-[1fr_308px] xl:grid-cols-[1fr_328px] lg:gap-14 xl:gap-16">

            {/* ══════════ ARTICLE CONTENT ══════════ */}
            <div className="min-w-0">

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

              {/* Key Takeaways */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#fdf5e8] to-[#fdf8f2] border border-[#c9b37e]/40 rounded-2xl p-6 mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-[#c9b37e]" fill="currentColor" />
                  <h2 className="font-extrabold text-[#7b0f2b] text-lg tracking-tight">Key Takeaways</h2>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Deep tissue massage targets deep muscle layers using firm, slow pressure",
                    "Highly effective for chronic back pain, neck pain, and muscle stiffness",
                    "Reduces cortisol (stress hormone) and promotes better, deeper sleep",
                    "Improves blood circulation — delivering oxygen and nutrients to tired muscles",
                    "Helps athletes recover faster after intense workouts and sports",
                    "Sessions typically last 60–90 minutes and are customizable to your needs",
                    "Safe for most healthy adults — consult a doctor if you have injuries or conditions",
                    "Regular sessions (monthly or bi-weekly) provide the best long-term results",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#7b0f2b] mt-0.5 flex-shrink-0" />{point}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* ─── Section 1 ───────────────────────────────────────────── */}
              <section id="what-is" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4 mt-4 border-l-4 border-[#c9b37e] pl-4">
                  What Is a Deep Tissue Massage?
                </h2>
                <p className="text-gray-700 leading-[1.95] mb-4">
                  A <strong>deep tissue massage</strong> is a type of massage that works on the deeper muscles and connective tissue of your body. Unlike a gentle relaxation massage, it uses <strong>slow and firm pressure</strong> to release tight knots buried deep within your muscle layers.
                </p>
                <p className="text-gray-700 leading-[1.95] mb-4">
                  The therapist uses their fingers, thumbs, elbows, and forearms to apply sustained pressure — physically breaking up scar tissue and muscle adhesions that cause pain, restrict movement, and reduce circulation.
                </p>
                <p className="text-gray-700 leading-[1.95] mb-4">
                  Many people choose <strong>deep tissue massage therapy</strong> when they have persistent body pain, chronic muscle tension, or stiffness that a regular massage simply cannot reach.
                </p>
                <Callout type="info" title="Deep Tissue vs. Swedish Massage">
                  While a Swedish massage is gentle and focused on overall relaxation, a deep tissue massage uses deeper, more targeted pressure to treat specific muscle pain. Both have their place — deep tissue is ideal when you have a specific pain or tension goal in mind.
                </Callout>
              </section>

              {/* ─── Section 2: Benefits ─────────────────────────────────── */}
              <section id="top-benefits" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Top Deep Tissue Massage Benefits
                </h2>
                <div className="space-y-7">
                  {BENEFITS.slice(0, 5).map((b) => (
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

                {/* Mid-article image 1 — aspect-video prevents stretching */}
                <figure className="my-10">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/fpkdl.com_960_1760685466_therapist-make-professional-hand-massage-back-shoulders-young-beautiful-woman_359031-29618.jpg"
                      alt="Therapist performing deep tissue massage on client's back and shoulders"
                      fill className="object-cover"
                      sizes="(max-width: 768px) 100vw, 760px"
                    />
                  </div>
                  <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                    A professional therapist applying targeted deep tissue pressure on the back and shoulders
                  </figcaption>
                </figure>

                <div className="space-y-7">
                  {BENEFITS.slice(5).map((b) => (
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

              {/* ─── Section 3: Who Should Get ───────────────────────────── */}
              <section id="who-should-get" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Who Should Get a Deep Tissue Massage?
                </h2>
                <p className="text-gray-700 leading-[1.9] mb-5 text-sm">A <strong>deep tissue massage</strong> may be especially helpful for people who:</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {["Have chronic back or neck pain", "Sit at a desk for long hours each day", "Go to the gym or play sports regularly", "Feel persistent muscle stiffness or tightness", "Experience high stress or anxiety", "Work in physically demanding jobs", "Have postural problems or imbalances", "Want deeper relaxation than a regular massage", "Are recovering from a muscle strain", "Experience tension headaches"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#fdf5e8] border border-[#c9b37e]/30 rounded-xl px-4 py-2.5">
                      <CheckCircle className="w-4 h-4 text-[#7b0f2b] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Section 4: Who Should Avoid ─────────────────────────── */}
              <section id="who-should-avoid" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Who Should Avoid It?
                </h2>
                <p className="text-gray-700 leading-[1.9] mb-5 text-sm">While generally safe, some people should speak with a doctor before booking:</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {["People with a recent injury or fracture", "Those with blood clotting disorders", "People who have had recent surgery", "Pregnant women (unless doctor-approved)", "Those with active skin infections or rashes", "People with osteoporosis", "Those on blood-thinning medication", "Anyone with an undiagnosed lump"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Callout type="warning" title="Always Consult Your Doctor First">
                  If you are unsure whether deep tissue massage is right for you, please speak with your doctor or a qualified physiotherapist <a href="/contacts" className="text-[#7b0f2b] font-medium underline hover:no-underline">before booking</a>. Your health and safety always come first.
                </Callout>
              </section>

              {/* Mid-article image 2 */}
              <figure className="my-10">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/fpkdl.com_960_1760684770_relaxing-lower-back-massage-pain-relief-comfort_1365064-5792.jpg"
                    alt="Relaxing lower back massage for pain relief and comfort"
                    fill className="object-cover"
                    sizes="(max-width: 768px) 100vw, 760px"
                  />
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                  Targeted lower back massage — one of the most common reasons people seek deep tissue therapy
                </figcaption>
              </figure>

              {/* ─── Section 5: During Session ───────────────────────────── */}
              <section id="during-session" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  What Happens During a Session?
                </h2>
                <p className="text-gray-700 leading-[1.9] mb-5 text-sm">A typical session lasts <strong>60–90 minutes</strong>. Here is what you can expect:</p>
                <ol className="space-y-4 mb-5">
                  {[
                    { step: "1", title: "Consultation", desc: "Your therapist asks about areas of pain, your health history, and your session goals." },
                    { step: "2", title: "Getting Settled", desc: "You lie on a comfortable padded table. Only the area being worked on is exposed — everything else is draped with a sheet." },
                    { step: "3", title: "Warm-Up", desc: "The therapist starts with lighter pressure to warm up the muscles and increase circulation before going deeper." },
                    { step: "4", title: "Deep Work", desc: "Slow, firm strokes target the deeper muscle layers and connective tissue. You may feel mild discomfort in tight areas — this is normal and therapeutic." },
                    { step: "5", title: "Cool Down", desc: "The session ends with lighter strokes to calm the muscles. Your therapist may suggest hydration and rest as aftercare." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#7b0f2b] text-white rounded-full flex items-center justify-center text-sm font-bold shadow">{item.step}</div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* ─── Section 6: Is It Painful ────────────────────────────── */}
              <section id="is-it-painful" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Is Deep Tissue Massage Painful?
                </h2>
                <p className="text-gray-700 leading-[1.9] mb-4 text-sm">Some pressure and mild discomfort is <strong>completely normal</strong> — but it should never be unbearable. Most people describe it as <em>"good pain"</em>: a therapeutic intensity that feels productive rather than harmful.</p>
                <p className="text-gray-700 leading-[1.9] mb-4 text-sm">It is also normal to feel slight muscle soreness for 24–48 hours after your first session, similar to post-workout soreness — this fades quickly.</p>
                <Callout type="tip" title="Always Communicate with Your Therapist">
                  Tell your therapist immediately if the pressure feels too strong. A good therapist will adjust without hesitation. The goal is therapeutic relief — not pain.
                </Callout>
              </section>

              {/* ─── Section 7: How Often ─────────────────────────────────── */}
              <section id="how-often" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  How Often Should You Get One?
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-5">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#7b0f2b] text-white">
                        <th className="text-left px-5 py-3.5 font-semibold">Goal</th>
                        <th className="text-left px-5 py-3.5 font-semibold">Recommended Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ["General wellness & relaxation", "Once a month"],
                        ["Chronic muscle tension or stress", "Every 2–3 weeks"],
                        ["Sports recovery / active training", "Weekly or bi-weekly"],
                        ["Acute pain or injury recovery", "As recommended by therapist/doctor"],
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

              {/* Mid-article image 3 */}
              <figure className="my-10">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/fpkdl.com_960_1758980524_tranquil-oasis-with-plush-massage-table-adorned-with_1126694-2523.jpg"
                    alt="Tranquil spa massage room set up for a deep tissue massage session"
                    fill className="object-cover"
                    sizes="(max-width: 768px) 100vw, 760px"
                  />
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                  A beautifully prepared massage room — the ideal environment for deep tissue therapy
                </figcaption>
              </figure>

              {/* ─── Section 8: Tips Before ──────────────────────────────── */}
              <section id="tips-before" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Tips Before Your Massage
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[["💧", "Drink enough water before your session"], ["👗", "Wear loose, comfortable clothing"], ["⏰", "Arrive 5–10 minutes early to relax"], ["🩺", "Tell your therapist about any pain or injuries"], ["🍽️", "Eat a light meal — avoid heavy food beforehand"], ["📵", "Put your phone on silent for full relaxation"]].map(([icon, tip], i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#fdf5e8] border border-[#c9b37e]/20 rounded-xl px-4 py-3">
                      <span className="text-xl flex-shrink-0">{icon}</span>
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Section 9: Tips After ───────────────────────────────── */}
              <section id="tips-after" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">
                  Tips After Your Massage
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[["💧", "Drink plenty of water to flush out toxins"], ["🛌", "Rest if your body feels tired or sore"], ["🏃", "Avoid heavy exercise for the rest of the day"], ["🛁", "Take a warm bath to help muscles relax further"], ["⏳", "Give your body 24–48 hours to fully recover"], ["📋", "Note any areas of improvement to share next time"]].map(([icon, tip], i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#fdf5e8] border border-[#c9b37e]/20 rounded-xl px-4 py-3">
                      <span className="text-xl flex-shrink-0">{icon}</span>
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Section 10: Final Thoughts ──────────────────────────── */}
              <section id="final-thoughts" className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 mt-14 border-l-4 border-[#c9b37e] pl-4">Final Thoughts</h2>
                <p className="text-gray-700 leading-[1.95] mb-4 text-sm"><strong>Deep tissue massage</strong> is a powerful therapeutic tool for anyone dealing with chronic muscle pain, tension, stress, or restricted mobility. Unlike quick-fix solutions, regular massage therapy works with your body's natural healing systems to provide lasting, meaningful relief.</p>
                <p className="text-gray-700 leading-[1.95] mb-4 text-sm">Whether you are an office worker with a stiff back, an athlete recovering from training, or simply someone investing in their long-term wellbeing — <strong>deep tissue massage therapy</strong> can make a real difference in how your body feels every day.</p>
                <Callout type="success" title="Ready to Experience the Benefits?">
                  Book your deep tissue massage session at Spain Gurugram Spa today. Our certified therapists customize every session to your specific needs and comfort level — leaving you refreshed, pain-free, and ready to take on life.
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
                    <p className="text-gray-600 text-sm leading-relaxed">Our <a href="/about-us" className="text-[#7b0f2b] font-medium underline hover:no-underline">team of certified therapists</a> and wellness experts brings years of hands-on experience in therapeutic massage and holistic health. We are committed to sharing accurate, practical information to help you make informed wellness decisions.</p>
                    <div className="flex gap-3 mt-4">
                      {[{ Icon: FaFacebook, href: "#", label: "Facebook", color: "text-blue-600" }, { Icon: FaTwitter, href: "#", label: "Twitter", color: "text-gray-700" }, { Icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "text-blue-700" }].map(({ Icon, href, label, color }) => (
                        <a key={label} href={href} aria-label={label} className={`${color} transition-colors hover:scale-110`}><Icon className="w-4 h-4" /></a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── Bottom Share ─────────────────────────────────────────── */}
              {/* <div className="mt-10 p-5 bg-[#fdf8f2] rounded-2xl border border-[#c9b37e]/20 flex flex-wrap items-center gap-4">
                <p className="text-sm font-semibold text-gray-700 flex items-center gap-2"><Share2 className="w-4 h-4" />Found this helpful? Share it!</p>
                <SocialShare layout="horizontal" />
              </div> */}

              {/* ─── Newsletter ───────────────────────────────────────────── */}




            </div>
            {/* ══════════ END ARTICLE ══════════ */}

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


        {/* Mobile bottom share bar */}
        <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/95 backdrop-blur-sm border-t border-[#c9b37e]/30 px-4 py-2.5 z-40 flex items-center justify-center gap-2 shadow-2xl">
          <span className="text-[11px] text-gray-500 font-semibold mr-1">Share:</span>
          <SocialShare layout="horizontal" />
        </div>

        {/* Floating share — desktop */}
        <div className="fixed left-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 z-40">
          <SocialShare layout="vertical" />
        </div>

      </article>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}
            onClick={scrollTop}
            className="fixed bottom-20 right-4 lg:bottom-8 lg:right-6 w-11 h-11 bg-[#7b0f2b] hover:bg-[#6a0d25] text-white rounded-full shadow-xl flex items-center justify-center z-50 transition-colors"
            aria-label="Scroll to top">
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
