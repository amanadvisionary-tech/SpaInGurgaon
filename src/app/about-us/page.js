import Abpage from "./Abpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "About Our Luxury Spa in Gurgaon - Certified Care | Spa In Gurgaon",
  description: "Our luxury spa in Gurgaon offers body spa, couple spa and ayurvedic therapies across Delhi NCR — certified therapists, top-class service. Discover our story now!",
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
    title: "About Our Luxury Spa in Gurgaon - Certified Care | Spa In Gurgaon",
    description: "Our luxury spa in Gurgaon offers body spa, couple spa and ayurvedic therapies across Delhi NCR — certified therapists, top-class service. Discover our story now!",
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
