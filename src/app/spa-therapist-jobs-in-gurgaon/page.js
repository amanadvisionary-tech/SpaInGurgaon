import Hiring from "./Hiring";
// src/app/page.js
// <-- NO "use client" here -->
export const metadata = {
  title: "Spa Therapist Jobs in Delhi NCR - 5-Star Pay & Training | Spa In Gurgaon",
  description: "Spa therapist jobs in Delhi NCR at leading 5-star hotel spas — great pay, hands-on training and real career growth with our certified team. Apply now!",
  keywords: ["spa therapist jobs gurgaon", "spa jobs delhi ncr", "massage therapist hiring", "spa therapist vacancy gurgaon"],
  alternates: {
    canonical: "/spa-therapist-jobs-in-gurgaon",
  },
  openGraph: {
    title: "Spa Therapist Jobs in Delhi NCR - 5-Star Pay & Training | Spa In Gurgaon",
    description: "Spa therapist jobs in Delhi NCR at leading 5-star hotel spas — great pay, hands-on training and real career growth with our certified team. Apply now!",
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
