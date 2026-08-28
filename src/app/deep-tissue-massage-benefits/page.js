import DeepTissueMassageBenefits from "./DeepTissueMassageBenefits";

// ─── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata = {
  title: "Deep Tissue Massage Benefits: A Simple Guide for Everyone",
  description:
    "Learn the top deep tissue massage benefits, how it works, who should get it, and why it helps reduce pain, stress, and muscle tension naturally.",
  keywords: [
    "deep tissue massage benefits",
    "deep tissue massage",
    "benefits of deep tissue massage",
    "deep tissue massage therapy",
    "massage for muscle pain",
    "deep tissue massage for back pain",
    "full body deep tissue massage",
    "is deep tissue massage good",
  ],
  alternates: {
    canonical: "https://www.spaingurgaon.com/deep-tissue-massage-benefits",
  },
  openGraph: {
    title: "Deep Tissue Massage Benefits: A Simple Guide for Everyone",
    description:
      "Learn the top deep tissue massage benefits, how it works, who should get it, and why it helps reduce pain, stress, and muscle tension naturally.",
    url: "https://www.spaingurgaon.com/deep-tissue-massage-benefits",
    siteName: "Spain Gurugram Spa",
    images: [
      {
        url: "https://www.spaingurgaon.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg",
        width: 1200,
        height: 630,
        alt: "Deep Tissue Massage Therapy at Spain Gurugram Spa",
      },
    ],
    type: "article",
    publishedTime: "2026-08-03",
    modifiedTime: "2026-08-03",
    authors: ["Spain Gurugram Wellness Team"],
    tags: [
      "Deep Tissue Massage",
      "Massage Therapy",
      "Wellness",
      "Back Pain Relief",
      "Muscle Recovery",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Tissue Massage Benefits: A Simple Guide for Everyone",
    description:
      "Learn the top deep tissue massage benefits, how it works, who should get it, and why it helps reduce pain, stress, and muscle tension naturally.",
    images: [
      "https://www.spaingurgaon.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg",
    ],
  },
};

// ─── JSON-LD Schemas ───────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Deep Tissue Massage Benefits: A Simple Guide for Everyone",
  description:
    "Learn the top deep tissue massage benefits, how it works, who should get it, and why it helps reduce pain, stress, and muscle tension naturally.",
  author: {
    "@type": "Organization",
    name: "Spain Gurugram Wellness Team",
    url: "https://www.spaingurgaon.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Spain Gurugram Spa",
    logo: {
      "@type": "ImageObject",
      url: "https://www.spaingurgaon.com/images/GurgaonSiteIcon.png",
    },
  },
  datePublished: "2026-08-03",
  dateModified: "2026-08-03",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.spaingurgaon.com/deep-tissue-massage-benefits",
  },
  image:
    "https://www.spaingurgaon.com/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg",
  keywords:
    "deep tissue massage benefits, deep tissue massage, massage for muscle pain, deep tissue massage for back pain",
  articleSection: "Massage Therapy",
  wordCount: 1800,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.spaingurgaon.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.spaingurgaon.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Massage",
      item: "https://www.spaingurgaon.com/blog#massage",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Deep Tissue Massage Benefits",
      item: "https://www.spaingurgaon.com/deep-tissue-massage-benefits",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a deep tissue massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A deep tissue massage is a massage that uses firm pressure to work on the deeper muscles and reduce pain and stiffness.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of deep tissue massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can help reduce muscle pain, improve blood flow, reduce stress, improve flexibility, and support better sleep.",
      },
    },
    {
      "@type": "Question",
      name: "Is deep tissue massage good for back pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many people choose deep tissue massage because it helps relax tight back muscles and reduce stiffness.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a deep tissue massage last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most sessions last between 60 and 90 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is deep tissue massage safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is safe for most healthy adults. If you have a medical condition, recent surgery, or an injury, talk to your doctor before getting a massage.",
      },
    },
  ],
};

// ─── Page Component ────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DeepTissueMassageBenefits />
    </>
  );
}
