import HomeClient from "./HomeClient";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa in Gurgaon | First Visit Offer @1999",
  description: "Book a spa in Gurgaon and experience one of the best massages by well-trained female therapists — soothing ambience, organic oils, professional care.",
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

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <HomeClient />;
}
