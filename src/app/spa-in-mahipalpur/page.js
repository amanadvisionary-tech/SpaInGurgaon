import Outpage from "./Outpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Book 5 Star Hotel spa in Mahipalpur | Foreigner Therapists",
  description: "Looking for the 5 star hotel Spa in Mahipalpur? Visit our spa in mahipalpur for premium body massage service in all over Delhi NCR. Book Now!",
  keywords: [
    "spa in mahipalpur",
    "hotel spa mahipalpur",
    "massage mahipalpur",
    "5 star spa mahipalpur",
  ],
  alternates: {
    canonical: "/spa-in-mahipalpur",
  },
  openGraph: {
    title: "Book 5 Star Hotel spa in Mahipalpur | Foreigner Therapists",
    description: "Looking for the 5 star hotel Spa in Mahipalpur? Visit our spa in mahipalpur for premium body massage service in all over Delhi NCR. Book Now!",
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
  return <Outpage />;
}
