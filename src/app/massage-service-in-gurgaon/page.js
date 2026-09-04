import Servpage from "./Servpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Massage Service in Gurgaon - Home, Hotel & Outlet Visits | Spa In Gurgaon",
  description: "Massage service in Gurgaon at your home, hotel or our spa outlet — soothing oils and trained therapists for complete relaxation at your doorstep. Book your session today!",
  keywords: [
    "massage service gurgaon",
    "spa service gurgaon",
    "massage at home gurgaon",
    "spa near me gurgaon",
    "massage centre gurgaon",
  ],
  alternates: {
    canonical: "/massage-service-in-gurgaon",
  },
  openGraph: {
    title: "Massage Service in Gurgaon - Home, Hotel & Outlet Visits | Spa In Gurgaon",
    description: "Massage service in Gurgaon at your home, hotel or our spa outlet — soothing oils and trained therapists for complete relaxation at your doorstep. Book your session today!",
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
  return <Servpage />;
}
