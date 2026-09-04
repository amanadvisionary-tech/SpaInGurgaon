import CyberCity from "./CyberCity";

export const metadata = {
  title: "Spa in Cyber City Gurgaon - Foreign Therapists | Spa In Gurgaon",
  description: "Spa in Cyber City, Gurgaon with certified foreign therapists for full body, sandwich and couple massage — first visit at just ₹1999. Book your session now!",
  keywords: [
    "spa in cyber city",
    "massage in cyber city gurgaon",
    "spa near cyber city",
    "body massage cyber city",
  ],
  alternates: {
    canonical: "/spa-in-cyber-city",
  },
  openGraph: {
    title: "Spa in Cyber City Gurgaon - Foreign Therapists | Spa In Gurgaon",
    description: "Spa in Cyber City, Gurgaon with certified foreign therapists for full body, sandwich and couple massage — first visit at just ₹1999. Book your session now!",
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
