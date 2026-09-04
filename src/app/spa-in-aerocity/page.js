import Aerocirt from "./Aerocirt";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa in Aerocity - Foreign Therapists | Spa In Gurgaon",
  description: "Spa in Aerocity with certified foreign therapists delivering premium full body massage in a relaxing, hygienic setting — world-class treatments. Book now!",
  keywords: [
    "spa in aerocity",
    "massage in aerocity delhi",
    "spa near aerocity",
    "body massage aerocity",
  ],
  alternates: {
    canonical: "/spa-in-aerocity",
  },
  openGraph: {
    title: "Spa in Aerocity - Foreign Therapists | Spa In Gurgaon",
    description: "Spa in Aerocity with certified foreign therapists delivering premium full body massage in a relaxing, hygienic setting — world-class treatments. Book now!",
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
  return <Aerocirt />;
}
