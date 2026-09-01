import Pricpage from "./Pricpage";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Best Spa Price in Gurgaon | Affordable Delhi NCR Spa",
  description: "Looking for an affordable spa price in Delhi NCR? Check our spa price in gurgaon and visit us for complete relaxation. We provide multiple types of therapies.",
  keywords: ["spa price delhi ncr", "massage price gurgaon", "spa cost gurgaon", "body massage price list"],
  alternates: {
    canonical: "/spa-price-in-delhi-ncr",
  },
  openGraph: {
    title: "Best Spa Price in Gurgaon | Affordable Delhi NCR Spa",
    description: "Looking for an affordable spa price in Delhi NCR? Check our spa price in gurgaon and visit us for complete relaxation. We provide multiple types of therapies.",
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
