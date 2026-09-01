import Gurgaon from "./Gurgaon";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa in Gurgaon | Luxury Body Massage",
  description: "Looking for the best spa in Gurgaon? Enjoy full body, couple, and sandwich massage by certified therapists in a relaxing, luxury setting. Book Now!",
  keywords: [
    "spa in gurgaon",
    "massage in gurgaon",
    "best spa gurgaon",
    "body massage gurgaon",
    "spa gurugram",
  ],
  alternates: {
    canonical: "/spa-in-gurgaon",
  },
  openGraph: {
    title: "Best Spa in Gurgaon | Luxury Body Massage",
    description: "Looking for the best spa in Gurgaon? Enjoy full body, couple, and sandwich massage by certified therapists in a relaxing, luxury setting. Book Now!",
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
  return <Gurgaon />;
}
