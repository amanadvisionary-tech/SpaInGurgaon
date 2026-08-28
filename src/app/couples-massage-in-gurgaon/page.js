import Couppage from "./Couppage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Experience Couples Massage in Gurgaon | Romantic Vibes",
  description: "Book a luxury couples massage in Gurgaon today. Relax together and enjoy soothing therapies in a private, romantic spa setting.",
  alternates: {
    canonical: "/couples-massage-in-gurgaon",
  },
  openGraph: {
    title: "Experience Couples Massage in Gurgaon | Romantic Vibes",
    description: "Book a luxury couples massage in Gurgaon today. Relax together and enjoy soothing therapies in a private, romantic spa setting.",
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
