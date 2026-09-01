import Lajpatnagar from "./Lajpatnagar";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Body Massage Spa in Lajpat Nagar | 1st Visit @1999",
  description: "Looking for the best body massage spa in Lajpat Nagar? Visit us for premium massage service with certified therapists in a relaxing setting. Book Now!",
  keywords: [
    "spa in lajpat nagar",
    "body massage lajpat nagar",
    "spa near lajpat nagar",
    "massage lajpat nagar delhi",
  ],
  alternates: {
    canonical: "/spa-in-lajpat-nagar",
  },
  openGraph: {
    title: "Body Massage Spa in Lajpat Nagar | 1st Visit @1999",
    description: "Looking for a relaxing massage in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi.",
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
  return <Lajpatnagar />;
}
