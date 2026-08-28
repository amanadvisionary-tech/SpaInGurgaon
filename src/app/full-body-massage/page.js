import FullBodyMassage from "./FullBodyMassage";

// ─── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata = {
  title: "Full Body Massage: Benefits, Types & Complete Guide",
  description:
    "Learn what a full body massage is, its benefits, different types, what happens during a session, and how it helps your body and mind.",
  keywords: [
    "full body massage",
    "full body massage benefits",
    "massage therapy",
    "types of full body massage",
    "spa massage",
  ],
  alternates: {
    canonical: "https://www.spaingurgaon.com/full-body-massage",
  },
  openGraph: {
    title: "Full Body Massage: Benefits, Types & Complete Guide",
    description:
      "Learn what a full body massage is, its benefits, different types, what happens during a session, and how it helps your body and mind.",
    url: "https://www.spaingurgaon.com/full-body-massage",
    siteName: "Spain Gurugram Spa",
    images: [
      {
        url: "https://www.spaingurgaon.com/images/fpkdl.com_960_1760685860_full-body-massage-spa-salon_926199-4238291.jpg",
        width: 1200,
        height: 630,
        alt: "Full Body Massage Therapy at Spain Gurugram Spa",
      },
    ],
    type: "article",
    publishedTime: "2026-08-04",
    modifiedTime: "2026-08-04",
    authors: ["Spain Gurugram Wellness Team"],
    tags: [
      "Full Body Massage",
      "Wellness",
      "Stress Relief",
      "Massage Therapy",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Body Massage: Benefits, Types & Complete Guide",
    description:
      "Learn what a full body massage is, its benefits, different types, what happens during a session, and how it helps your body and mind.",
    images: [
      "https://www.spaingurgaon.com/images/fpkdl.com_960_1760685860_full-body-massage-spa-salon_926199-4238291.jpg",
    ],
  },
};

// ─── JSON-LD Schemas ───────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Full Body Massage: Benefits, Types & Complete Guide",
  description:
    "Learn what a full body massage is, its benefits, different types, what happens during a session, and how it helps your body and mind.",
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
  datePublished: "2026-08-04",
  dateModified: "2026-08-04",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.spaingurgaon.com/full-body-massage",
  },
  image:
    "https://www.spaingurgaon.com/images/fpkdl.com_960_1760685860_full-body-massage-spa-salon_926199-4238291.jpg",
  keywords:
    "full body massage, full body massage benefits, massage therapy, types of full body massage",
  articleSection: "Massage Therapy",
  wordCount: 800,
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
      name: "Full Body Massage: Benefits, Types & Complete Guide",
      item: "https://www.spaingurgaon.com/full-body-massage",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does a full body massage hurt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most massages do not hurt. Some techniques, like deep tissue massage, may feel stronger, but you should always tell the therapist if the pressure is too much.",
      },
    },
    {
      "@type": "Question",
      name: "What should I wear?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can wear comfortable clothes to the spa. The therapist will explain what to do before the session.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a massage every week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some people do, especially if they have muscle tension. Others choose once a month for relaxation.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do after a massage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Drink water, take it easy for a while, and enjoy the relaxed feeling.",
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
      <FullBodyMassage />
    </>
  );
}
