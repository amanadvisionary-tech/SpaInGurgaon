import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Book a Spa Appointment in Gurgaon",
  description:
    "Get in touch with Spa In Gurgaon to book your body massage, couple spa, or wellness therapy. Call, WhatsApp, or fill our quick enquiry form.",
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    title: "Contact Spa In Gurgaon | Book Your Appointment",
    description:
      "Call, WhatsApp, or fill our quick enquiry form to book your massage or spa session in Gurgaon today.",
    url: "https://www.spaingurgaon.com/contacts",
    images: ["/images/27203214.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/27203214.jpg"],
  },
};

const faqs = [
  {
    question: "How can I book a spa appointment in Gurgaon?",
    answer:
      "You can book your spa session by filling out the contact form, calling us directly, or messaging us on WhatsApp for instant confirmation.",
  },
  {
    question: "Do you offer same-day spa appointments?",
    answer:
      "Yes, same-day spa appointments are available based on slot availability. We recommend contacting us via WhatsApp or phone for quick booking.",
  },
  {
    question: "Where is your spa located in Gurgaon?",
    answer:
      "Our luxury spa is conveniently located near Golf Course Road, Gurgaon. Exact location details are shared after booking confirmation for privacy.",
  },
  {
    question: "What types of massages do you offer?",
    answer:
      "We offer Swedish massage, deep tissue massage, body massage, couple massage, and customized relaxation therapies.",
  },
  {
    question: "Is couple massage available at your spa?",
    answer:
      "Yes, we provide private couple massage rooms for a relaxing and romantic spa experience in Gurgaon.",
  },
  {
    question: "Is prior appointment mandatory?",
    answer:
      "Yes, we recommend prior appointment to ensure therapist availability and a smooth spa experience.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContactClient faqs={faqs} />
    </>
  );
}
