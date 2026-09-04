import Noida from "./Noida";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa in Noida - Self-Care Massage Session | Spa In Gurgaon",
  description: "Spa in Noida offering a soothing self-care massage session designed for total wellness, delivered by trained therapists. Book your relaxing session today!",
  keywords: ["spa in noida", "massage in noida", "spa near noida", "body massage noida"],
  alternates: {
    canonical: "/spa-in-noida",
  },
  openGraph: {
    title: "Spa in Noida - Self-Care Massage Session | Spa In Gurgaon",
    description: "Spa in Noida offering a soothing self-care massage session designed for total wellness, delivered by trained therapists. Book your relaxing session today!",
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
