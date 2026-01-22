import Outpage from "./Outpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Book 5 Star Hotel spa in Mahipalpur | Foreigner Therapists",
  description: "Looking for the 5 star hotel Spa in Mahipalpur? Visit our spa in mahipalpur for premium body massage service in all over Delhi NCR. Book Now!",
  openGraph: {
    title: "Book 5 Star Hotel spa in Mahipalpur | Foreigner Therapists",
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
  return <Outpage />;
}
