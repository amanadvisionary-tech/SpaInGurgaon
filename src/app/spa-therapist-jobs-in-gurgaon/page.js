import Hiring from "./Hiring";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa Therapist Jobs in Delhi NCR | We're Hiring",
  description: "Looking for spa therapist jobs in Delhi NCR? Join our team and work at leading 5-star hotel spas with great pay, training, and career growth. Apply now!",
  keywords: ["spa therapist jobs gurgaon", "spa jobs delhi ncr", "massage therapist hiring", "spa therapist vacancy gurgaon"],
  alternates: {
    canonical: "/spa-therapist-jobs-in-gurgaon",
  },
  openGraph: {
    title: "Spa Therapist Jobs in Delhi NCR | We're Hiring",
    description: "We're hiring spa therapists for 5-star hotel spas across Delhi NCR. Great pay, training, and career growth. Apply now.",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"],
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
  return <Hiring />;
}
