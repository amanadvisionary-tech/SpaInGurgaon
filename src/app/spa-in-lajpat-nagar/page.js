import Lajpatnagar from "./Lajpatnagar";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: " Get Body Massage Spa in Lajpat Nagar | Book Now 1st Visit @1999",
  description: "Looking for the best 5-star hotel spa in Delhi NCR? Visit our spa in Rohini for premium body massage service in all over Delhi NCR. Book Now!",
  openGraph: {
    title: "Get Body Massage Spa in Lajpat Nagar | Book Now 1st Visit @1999",
    description: "Looking for a relaxing massage in Delhi? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Delhi.",
    images: ["https://yourdomain.com/images/hb1.jpg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://yourdomain.com/images/hb1.jpg"]
  }
};

// import dynamic from "next/dynamic";

// dynamic import is optional but helps to avoid SSR issues with some libs
// const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });

export default function page() {
  return <Lajpatnagar />;
}
