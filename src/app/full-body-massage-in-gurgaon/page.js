import Fullbodymassage from "./Fullbodymassage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Full Body Massage in Gurgaon - Female Therapists | Spa In Gurgaon",
  description: "Full body massage in Gurgaon by certified female therapists — head-to-toe relaxation at our luxury spa centre, stress-free and affordable. Book now!",
  keywords: [
    "full body massage gurgaon",
    "full body massage near me",
    "female to male massage gurgaon",
    "full body spa gurgaon",
    "full body massage price gurgaon",
  ],
  alternates: {
    canonical: "/full-body-massage-in-gurgaon",
  },
  openGraph: {
    title: "Full Body Massage in Gurgaon - Female Therapists | Spa In Gurgaon",
    description: "Full body massage in Gurgaon by certified female therapists — head-to-toe relaxation at our luxury spa centre, stress-free and affordable. Book now!",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Fullbodymassage />;
}
