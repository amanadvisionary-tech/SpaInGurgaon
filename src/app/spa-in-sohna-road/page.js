import SohnaRoad from "./SohnaRoad";

export const metadata = {
  title: "Best Spa in Sohna Road Gurgaon | In-Room Massage",
  description:
    "Premium in-room spa and massage on Sohna Road, Gurgaon for Vatika Business Park offices and nearby societies like Nirvana Country and South City II. Book today.",
  alternates: {
    canonical: "/spa-in-sohna-road",
  },
  openGraph: {
    title: "Luxury Spa & Massage on Sohna Road, Gurgaon",
    description:
      "Certified therapists deliver full body, sandwich and couple massage to hotels, offices and homes across the Sohna Road corridor in Gurgaon.",
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
  "@id": "https://www.spaingurgaon.com/spa-in-sohna-road#business",
  name: "Spa In Gurgaon - Sohna Road",
  image: "https://www.spaingurgaon.com/images/banner.jpeg",
  url: "https://www.spaingurgaon.com/spa-in-sohna-road",
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
    "Sohna Road",
    "Vatika Business Park",
    "Global Foyer Mall",
    "Nirvana Country",
    "South City II",
    "Vipul World",
    "Ansal Esencia",
    "Golf Course Extension Road",
    "Gurugram",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you send a therapist to hotels on Sohna Road?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We send a trained therapist to your hotel room or serviced apartment on Sohna Road, including the area near Vatika Business Park.",
      },
    },
    {
      "@type": "Question",
      name: "I work at Vatika Business Park. Can I book after office hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, of course. Many people from Vatika Business Park book their massage in the evening, right after work ends.",
      },
    },
    {
      "@type": "Question",
      name: "Do you come to Nirvana Country, South City II, Vipul World, or Ansal Esencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we do. We send therapists to homes in all of these Sohna Road societies. Just book early so we can find a free therapist for you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you also cover Golf Course Extension Road?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sohna Road leads straight into Golf Course Extension Road, so we can reach both areas fast.",
      },
    },
    {
      "@type": "Question",
      name: "Can my partner and I get a massage together near Global Foyer Mall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer couple massage for guests who live or stay near Global Foyer Mall and all along Sohna Road.",
      },
    },
    {
      "@type": "Question",
      name: "What are your hours, and how do I book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are open long hours, every day. Just message us on WhatsApp or call us, and we will confirm your Sohna Road booking.",
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
      <SohnaRoad />
    </>
  );
}
