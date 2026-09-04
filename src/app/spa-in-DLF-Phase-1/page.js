import DLFPhase1 from "./DLFPhase1";
// src/app/spa-in-DLF-Phase-1/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa in DLF Phase 1 Gurgaon - Foreign Therapists | Spa In Gurgaon",
  description: "Spa in DLF Phase 1, Gurgaon with certified foreign therapists for full body, sandwich and couple massage — first visit at just ₹1999. Book your session now!",
  keywords: [
    "spa in dlf phase 1",
    "massage in dlf phase 1 gurgaon",
    "spa dlf phase 1 gurgaon",
    "body massage dlf phase 1",
  ],
  alternates: {
    canonical: "/spa-in-DLF-Phase-1",
  },
  openGraph: {
    title: "Spa in DLF Phase 1 Gurgaon - Foreign Therapists | Spa In Gurgaon",
    description: "Spa in DLF Phase 1, Gurgaon with certified foreign therapists for full body, sandwich and couple massage — first visit at just ₹1999. Book your session now!",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"]
  }
};

export default function page() {
  return <DLFPhase1 />;
}
