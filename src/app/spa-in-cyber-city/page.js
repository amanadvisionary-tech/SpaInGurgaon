import CyberCity from "./CyberCity";

export const metadata = {
  title: "Best Spa in Cyber City Gurgaon With Foreign Therapists",
  description: "Looking for a luxury spa in Cyber City Gurgaon? Enjoy premium body massage with certified foreign therapists. Experience world-class wellness treatments.",
  alternates: {
    canonical: "/spa-in-cyber-city",
  },
  openGraph: {
    title: "Get Best Body Massage in Cyber City Gurgaon | First Visit Offer 1999",
    description: "Looking for a relaxing massage in Cyber City? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Gurgaon.",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"]
  }
};

export default function page() {
  return <CyberCity />;
}
