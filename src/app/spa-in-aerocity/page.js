import Aerocirt from "./Aerocirt";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa in Aerocity With Foreign Therapists",
  description: "Looking for a luxury spa in Aerocity? Enjoy premium body massage with certified foreign therapists. Experience world-class wellness treatments.",
  alternates: {
    canonical: "/spa-in-aerocity",
  },
  openGraph: {
    title: "Best Spa in Aerocity With Foreign Therapists",
    description: "Looking for a luxury spa in Aerocity? Enjoy premium body massage with certified foreign therapists. Experience world-class wellness treatments.",
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
  return <Aerocirt />;
}
