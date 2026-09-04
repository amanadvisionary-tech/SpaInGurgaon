import Couppage from "./Couppage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Couples Massage in Gurgaon - Private Romantic Setting | Spa In Gurgaon",
  description: "Couples massage in Gurgaon in a private, romantic setting for two — soothing side-by-side therapies by certified therapists. Book your session together today!",
  keywords: [
    "couples massage gurgaon",
    "couple spa gurgaon",
    "romantic massage gurgaon",
    "couple massage near me",
    "couple spa near me",
  ],
  alternates: {
    canonical: "/couples-massage-in-gurgaon",
  },
  openGraph: {
    title: "Couples Massage in Gurgaon - Private Romantic Setting | Spa In Gurgaon",
    description: "Couples massage in Gurgaon in a private, romantic setting for two — soothing side-by-side therapies by certified therapists. Book your session together today!",
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
  return <Couppage />;
}
