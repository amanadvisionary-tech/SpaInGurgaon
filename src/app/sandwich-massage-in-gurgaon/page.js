import Sandwichmassage from "./Sandwichmassage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Sandwich Massage in Gurgaon - Two Therapists, From ₹1999 | Spa In Gurgaon",
  description: "Sandwich massage in Gurgaon delivered by two therapists at once for deep, full-body relaxation — certified staff, private rooms, starting at just ₹1999. Book now!",
  keywords: [
    "sandwich massage gurgaon",
    "sandwich massage near me",
    "four hand massage gurgaon",
    "sandwich massage price gurgaon",
  ],
  alternates: {
    canonical: "/sandwich-massage-in-gurgaon",
  },
  openGraph: {
    title: "Sandwich Massage in Gurgaon - Two Therapists, From ₹1999 | Spa In Gurgaon",
    description: "Sandwich massage in Gurgaon delivered by two therapists at once for deep, full-body relaxation — certified staff, private rooms, starting at just ₹1999. Book now!",
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
  return <Sandwichmassage />;
}
