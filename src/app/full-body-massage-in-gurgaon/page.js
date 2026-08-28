import Fullbodymassage from "./Fullbodymassage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Full Body Massage in Gurgaon By Female Therapists",
  description: " Book the best full body massage in Gurgaon today. Get Complete care with our  experts at our luxury spa centre in gurgaon. Get Stress Free Now",
  alternates: {
    canonical: "/full-body-massage-in-gurgaon",
  },
  openGraph: {
    title: "Best Full Body Massage in Gurgaon By Female Therapists",
    description: " Book the best full body massage in Gurgaon today. Get Complete care with our  experts at our luxury spa centre in gurgaon. Get Stress Free Now",
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
  return <Fullbodymassage />;
}
