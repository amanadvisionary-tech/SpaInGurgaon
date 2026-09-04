import Lajpatnagar from "./Lajpatnagar";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa in Lajpat Nagar - 1st Visit @ ₹1999 | Spa In Gurgaon",
  description: "Spa in Lajpat Nagar with certified therapists for full body, sandwich and couple massage in a relaxing setting — first visit at just ₹1999. Book now!",
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
    title: "Spa in Lajpat Nagar - 1st Visit @ ₹1999 | Spa In Gurgaon",
    description: "Spa in Lajpat Nagar with certified therapists for full body, sandwich and couple massage in a relaxing setting — first visit at just ₹1999. Book now!",
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
