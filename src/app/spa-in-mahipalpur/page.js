import Outpage from "./Outpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa in Mahipalpur - 5-Star Hotel Massage | Spa In Gurgaon",
  description: "Spa in Mahipalpur offering 5-star hotel massage service across Delhi NCR with certified foreign therapists — premium comfort at your doorstep. Book now!",
  keywords: [
    "spa in mahipalpur",
    "hotel spa mahipalpur",
    "massage mahipalpur",
    "5 star spa mahipalpur",
  ],
  alternates: {
    canonical: "/spa-in-mahipalpur",
  },
  openGraph: {
    title: "Spa in Mahipalpur - 5-Star Hotel Massage | Spa In Gurgaon",
    description: "Spa in Mahipalpur offering 5-star hotel massage service across Delhi NCR with certified foreign therapists — premium comfort at your doorstep. Book now!",
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
  return <Outpage />;
}
