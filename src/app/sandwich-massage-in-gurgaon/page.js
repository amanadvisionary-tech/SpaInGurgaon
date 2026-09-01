import Sandwichmassage from "./Sandwichmassage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Sandwich Massage in Gurgaon | Starting From Just 1999",
  description: " Book a premium Sandwich Massage in Gurgaon today. Visit our luxury spa for full-body relaxation and professional care starting from just ₹1999",
  keywords: [
    "sandwich massage gurgaon",
    "sandwich massage near me",
    "four hand massage gurgaon",
    "sandwich massage price gurgaon",
  ],
  alternates: {
    canonical: "/sandwich-massage-in-gurgaon",
  },
  openGraph: {
    title: "Best Sandwich Massage in Gurgaon | Starting From Just 1999",
    description: " Book a premium Sandwich Massage in Gurgaon today. Visit our luxury spa for full-body relaxation and professional care starting from just ₹1999",
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
  return <Sandwichmassage />;
}
