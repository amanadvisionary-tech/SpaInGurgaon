import B2bservice from "./B2bservice";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "B2B Massage in Gurgaon - Private Spa at Home | Spa In Gurgaon",
  description: "B2B massage in Gurgaon delivered in a private, consensual setting at your home or hotel — trained therapists, complete comfort at your doorstep. Book now!",
  keywords: [
    "b2b massage gurgaon",
    "body to body massage gurgaon",
    "b2b spa at home",
    "body to body spa gurgaon",
    "b2b massage near me",
  ],
  alternates: {
    canonical: "/b2b-massage-in-gurgaon",
  },
  openGraph: {
    title: "B2B Massage in Gurgaon - Private Spa at Home | Spa In Gurgaon",
    description: "B2B massage in Gurgaon delivered in a private, consensual setting at your home or hotel — trained therapists, complete comfort at your doorstep. Book now!",
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
  return <B2bservice />;
}
