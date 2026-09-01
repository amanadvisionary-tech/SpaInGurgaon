import DeepTissueMassageInGurgaon from "./DeepTissueMassageInGurgaon";

export const metadata = {
  title: "Deep Tissue Massage in Gurgaon | Book Now",
  description:
    "Book a deep tissue massage in Gurgaon at your hotel, home, or spa outlet. Trained therapists, clear pricing, and same-day booking slots available now.",
  keywords: [
    "deep tissue massage gurgaon",
    "deep tissue massage near me",
    "book deep tissue massage",
    "deep tissue massage home service",
    "deep tissue massage hotel gurgaon",
    "deep tissue massage price gurgaon",
  ],
  alternates: {
    canonical: "/deep-tissue-massage-in-gurgaon",
  },
  openGraph: {
    title: "Deep Tissue Massage in Gurgaon | Spa In Gurgaon",
    description:
      "Firm, slow-pressure deep tissue massage delivered to your hotel or home across Gurgaon, or book a session at our spa outlet.",
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
  "@id": "https://www.spaingurgaon.com/deep-tissue-massage-in-gurgaon#business",
  name: "Spa In Gurgaon - Deep Tissue Massage",
  image: "https://www.spaingurgaon.com/images/banner.jpeg",
  url: "https://www.spaingurgaon.com/deep-tissue-massage-in-gurgaon",
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
      name: "Deep Tissue Massage",
      description:
        "A firm, slow-pressure massage that works on deep muscle layers, delivered at a spa outlet, hotel room, or home across Gurgaon.",
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
      name: "How do I book a deep tissue massage in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is easy. Message us on WhatsApp or call us at +91 8448499173. Tell us the time and place you want. We will confirm your booking right away.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a deep tissue massage at my hotel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We send a trained therapist straight to your hotel room anywhere in Gurgaon. Just share your hotel name and room number when you book.",
      },
    },
    {
      "@type": "Question",
      name: "Do you send therapists to homes across Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we do. Our home spa service covers all parts of Gurgaon. The therapist brings oils and everything else that is needed.",
      },
    },
    {
      "@type": "Question",
      name: "Will the massage hurt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You may feel some pressure on tight spots. It should never feel like sharp pain. Tell your therapist any time, and they will press softer.",
      },
    },
    {
      "@type": "Question",
      name: "How long does one session take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most sessions last 60 to 90 minutes. You can also book a longer session if you want more time on a problem area.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a deep tissue massage cost in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prices start from ₹1999 at our spa outlet. Hotel and home visits cost a little more. Check our full price list for exact rates.",
      },
    },
    {
      "@type": "Question",
      name: "Can I choose a male or female therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Just tell us your preference when you book. We will match you with the right therapist for you.",
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
      <DeepTissueMassageInGurgaon />
    </>
  );
}
