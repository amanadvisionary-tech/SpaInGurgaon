import HomeClient from "./HomeClient";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Book Spa in Gurgaon By Certified Therapists | First Visit Offer @1999",
  description: "Book spa in gurgaon and experience one of the best massages in gurgaon by well trained female therapists. soothing ambience, organic oils, and professional therapists.",
  openGraph: {
    title: "Get Best Body Massage in Delhi | First Visit Offer 1999",
    description: "Looking for a relaxing massage in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <HomeClient />;
}
