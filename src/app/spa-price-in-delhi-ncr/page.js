import Pricpage from "./Pricpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa Price in Delhi NCR - Transparent, Affordable Packages | Spa In Gurgaon",
  description: "Spa price in Delhi NCR made simple — transparent packages for full body, couple and sandwich massage across our 12+ Gurgaon outlets. Book an affordable session now!",
  keywords: ["spa price delhi ncr", "massage price gurgaon", "spa cost gurgaon", "body massage price list"],
  alternates: {
    canonical: "/spa-price-in-delhi-ncr",
  },
  openGraph: {
    title: "Spa Price in Delhi NCR - Transparent, Affordable Packages | Spa In Gurgaon",
    description: "Spa price in Delhi NCR made simple — transparent packages for full body, couple and sandwich massage across our 12+ Gurgaon outlets. Book an affordable session now!",
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
  return <Pricpage />;
}
