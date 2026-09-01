import Abpage from "./Abpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "About Our Luxury Spa in Gurgaon | Spa In Gurgaon",
  description: "Know more about our luxury spa in Gurgaon, offering body spa, couple spa, and ayurvedic therapies to clients across Delhi NCR with top-class service.",
  keywords: [
    "about spa in gurgaon",
    "spa in gurgaon therapists",
    "luxury spa gurgaon",
    "body spa gurgaon",
    "couple spa gurgaon",
    "ayurvedic spa gurgaon",
  ],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Our Luxury Spa in Gurgaon | Spa In Gurgaon",
    description: "Know more about our luxury spa in Gurgaon, offering body spa, couple spa, and ayurvedic therapies to clients across Delhi NCR with top-class service.",
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

export default function Page() {
  return <Abpage />;
}
