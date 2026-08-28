import B2bservice from "./B2bservice";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Get Body To Body Massage in Gurgaon | B2B Spa At Home",
  description: "Get a premium body to body massage in Gurgaon. Enjoy a private B2B spa at home and experience total comfort at your doorstep.",
  alternates: {
    canonical: "/b2b-massage-in-gurgaon",
  },
  openGraph: {
    title: "Get Body To Body Massage in Gurgaon | B2B Spa At Home",
    description: "Get a premium body to body massage in Gurgaon. Enjoy a private B2B spa at home and experience total comfort at your doorstep.",
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
