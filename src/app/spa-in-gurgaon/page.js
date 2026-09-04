import Gurgaon from "./Gurgaon";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Luxury Spa in Gurgaon - Full Body & Couple Massage | Spa In Gurgaon",
  description: "Luxury spa in Gurgaon offering full body, couple and sandwich massage in a relaxing, private setting — certified therapists, transparent pricing. Book your session now!",
  keywords: [
    "spa in gurgaon",
    "massage in gurgaon",
    "best spa gurgaon",
    "body massage gurgaon",
    "spa gurugram",
  ],
  alternates: {
    canonical: "/spa-in-gurgaon",
  },
  openGraph: {
    title: "Luxury Spa in Gurgaon - Full Body & Couple Massage | Spa In Gurgaon",
    description: "Luxury spa in Gurgaon offering full body, couple and sandwich massage in a relaxing, private setting — certified therapists, transparent pricing. Book your session now!",
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
  return <Gurgaon />;
}
