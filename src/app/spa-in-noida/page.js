import Noida from "./Noida";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Book Massage session at our spa in Noida | Self Care Session",
  description: "Book your massage session at our spa in Noida today. Treat yourself to a soothing self-care spa therapy designed for total wellness.",
  alternates: {
    canonical: "/spa-in-noida",
  },
  openGraph: {
    title: "Book Massage session at our spa in Noida | Self Care Session",
    description: "Book your massage session at our spa in Noida today. Treat yourself to a soothing self-care spa therapy designed for total wellness.",
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
  return <Noida />;
}
