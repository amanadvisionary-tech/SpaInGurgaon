import Connaught from "./Connaught";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa in Connaught Place - Luxury Massage in CP | Spa In Gurgaon",
  description: "Spa in Connaught Place offering luxury full body and couple massage by certified female therapists in a private, relaxing setting. Book your visit now!",
  keywords: [
    "spa in connaught place",
    "massage in cp delhi",
    "spa near connaught place",
    "body massage cp delhi",
  ],
  alternates: {
    canonical: "/spa-in-connaught-place",
  },
  openGraph: {
    title: "Spa in Connaught Place - Luxury Massage in CP | Spa In Gurgaon",
    description: "Spa in Connaught Place offering luxury full body and couple massage by certified female therapists in a private, relaxing setting. Book your visit now!",
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
