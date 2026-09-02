import ThaiMassageInGurgaon from "./ThaiMassageInGurgaon";

export const metadata = {
  title: "Thai Massage in Gurgaon | Book Now",
  description:
    "Book a Thai massage in Gurgaon at your hotel, home, or spa outlet. Trained therapists, simple stretches, and fair prices. Easy same-day booking today.",
  keywords: [
    "thai massage gurgaon",
    "thai massage near me",
    "traditional thai massage gurgaon",
    "thai stretching massage",
    "thai massage price gurgaon",
    "thai massage at home gurgaon",
    "thai massage hotel gurgaon",
    "book thai massage gurgaon",
  ],
  alternates: {
    canonical: "/thai-massage-in-gurgaon",
  },
  openGraph: {
    title: "Thai Massage in Gurgaon | Spa In Gurgaon",
    description:
      "Traditional Thai massage with stretching and gentle pressure, delivered to your hotel or home across Gurgaon, or book a session at our spa outlet.",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"],
  },
};

// ─── JSON-LD Schemas ───────────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": "https://www.spaingurgaon.com/thai-massage-in-gurgaon#business",
  name: "Spa In Gurgaon - Thai Massage",
  image: "https://www.spaingurgaon.com/images/banner.jpeg",
  url: "https://www.spaingurgaon.com/thai-massage-in-gurgaon",
  telephone: "+91-8448499173",
  email: "spaingurugram8826@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "442, Shankar Chowk Rd Phase II, Udyog Vihar, Sector 20",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122016",
    addressCountry: "IN",
  },
  areaServed: [
    "Gurugram",
    "Cyber City",
    "Golf Course Road",
    "Sohna Road",
    "DLF Phase 1",
    "MG Road",
    "Sector 29",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Thai Massage",
      description:
        "A traditional Thai massage using stretching, acupressure, and joint mobility work, done fully clothed with no oil, delivered at a spa outlet, hotel room, or home across Gurgaon.",
    },
    priceCurrency: "INR",
    price: "1999",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Thai massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thai massage is different from a normal oil massage. Your therapist stretches, pulls, and gently presses your body while you stay dressed on a soft mat.",
      },
    },
    {
      "@type": "Question",
      name: "Does Thai massage hurt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You may feel firm pressure and deep stretches at times. It should never feel like sharp pain. Tell your therapist any time, and they will go softer.",
      },
    },
    {
      "@type": "Question",
      name: "Do I keep my clothes on during Thai massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You wear loose, comfortable clothes for the whole session. We can lend you soft clothes if you need them. No oil touches your skin.",
      },
    },
    {
      "@type": "Question",
      name: "Is Thai massage the same as a normal massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, it is quite different. A normal massage uses oil and smooth strokes on bare skin. Thai massage uses stretching, pulling, and pressing through your clothes.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a Thai massage in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is easy. Message us on WhatsApp or call us at +91 8448499173. Tell us the time and place you want. We will confirm your booking right away.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get Thai massage at my hotel or home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We send a trained therapist to your hotel room or home, anywhere in Gurgaon. Just share your address when you book.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Thai massage cost in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prices start from ₹1999 at our spa outlet. Hotel and home visits cost a little more. Check our full price list for exact rates.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ThaiMassageInGurgaon />
    </>
  );
}
