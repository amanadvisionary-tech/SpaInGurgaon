import HomeClient from "./HomeClient";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa in Gurgaon | First Visit Offer @1999",
  description: "Book a spa in Gurgaon and experience one of the best massages by well-trained female therapists — soothing ambience, organic oils, professional care.",
  keywords: [
    "spa in gurgaon",
    "massage in gurgaon",
    "best spa in gurgaon",
    "full body massage gurgaon",
    "couple massage gurgaon",
    "sandwich massage gurgaon",
    "luxury spa gurgaon",
    "spa near me",
    "spa in gurgaon home service",
    "spa in gurgaon with foreign therapists",
    "b2b spa in gurgaon",
    "spa in gurgaon first visit offer 1999",
    "hotel spa service gurgaon",
    "5 star spa in gurgaon",
    "affordable spa in gurgaon",
    "spa in gurgaon for couples",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Book Spa in Gurgaon By Certified Therapists | First Visit Offer @1999",
    description: "Book spa in gurgaon and experience one of the best massages in gurgaon by well trained female therapists. soothing ambience, organic oils, and professional therapists.",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"]
  }
};

// ─── FAQPage schema — must mirror the visible FAQ accordion in HomeClient.js word-for-word ───
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services do you offer at your Spa in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Spa in Gurgaon offers Thai, full body, couple, sandwich, B2B, and aromatherapy treatments. All sessions are performed by certified therapists, include private rooms and premium oils, and can be customized to your needs for relaxation, pain relief, or special occasions.",
      },
    },
    {
      "@type": "Question",
      name: "How long is a typical full body massage in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical full body massage in Gurgaon lasts 60–90 minutes; 120-minute deep-therapy options are available. Sessions include consultation, personalized pressure, and optional post-massage shower. Choose duration based on desired depth of treatment and any add-ons like aromatherapy or extended relaxation time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide B2B spa in Gurgaon options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer professional, consensual B2B spa in Gurgaon sessions at select outlets. These are delivered by trained therapists in private rooms with strict hygiene and consent protocols. Availability and pricing vary by location, so confirm the outlet’s B2B schedule when booking.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer spa home service in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the spa home service in Gurgaon brings trained therapists with sanitized equipment, oils and fresh linens to your home. Bookings include a pre-visit consultation, secure payment options, and privacy protocols to ensure a professional, relaxing in-home experience.",
      },
    },
    {
      "@type": "Question",
      name: "Are foreign therapists available for massage in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — selected Gurgaon outlets schedule foreign therapists (e.g., Thai, Russian) to provide authentic techniques. Requesting a foreign therapist is possible during booking but subject to availability and scheduling; premium packages may include international therapist options.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your Gurgaon outlet different from others?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Luxury Spa in Gurgaon stands out for its 5-star ambience, certified foreign therapists, and transparent pricing. Whether you choose a couple massage, B2B session, or full-body therapy, you’ll experience unmatched quality, hygiene, and personalized care.",
      },
    },
  ],
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
