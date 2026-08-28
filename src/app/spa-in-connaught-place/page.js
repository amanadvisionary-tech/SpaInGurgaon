import Connaught from "./Connaught";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Book Best Spa in Connaught Place | Luxury Massage in CP",
  description: "Book a session at the best spa in Connaught Place. Experience top notch luxury massage in CP by Certified female therapists. Visit Now!",
  alternates: {
    canonical: "/spa-in-connaught-place",
  },
  openGraph: {
    title: "Book Best Spa in Connaught Place | Luxury Massage in CP",
    description: "Book a session at the best spa in Connaught Place. Experience top notch luxury massage in CP by Certified female therapists. Visit Now!",
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
  return <Connaught />;
}
