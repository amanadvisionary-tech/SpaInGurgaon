import DLFPhase1 from "./DLFPhase1";
// src/app/spa-in-DLF-Phase-1/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa in DLF Phase 1 Gurgaon With Foreign Therapists | Premium Massage in DLF Phase 1",
  description: "Looking for a luxury spa in DLF Phase 1 Gurgaon? Enjoy premium body massage with certified foreign therapists. Experience world-class wellness treatments.",
  openGraph: {
    title: "Get Best Body Massage in DLF Phase 1 Gurgaon | First Visit Offer 1999",
    description: "Looking for a relaxing massage in DLF Phase 1? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Gurgaon.",
    images: ["https://yourdomain.com/images/hb1.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

export default function page() {
  return <DLFPhase1 />;
}
