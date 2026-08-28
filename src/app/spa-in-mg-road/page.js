import MgRoad from "./MgRoad";

export const metadata = {
  title: "Best Spa in MG Road Gurgaon With Foreign Therapists",
  description: "Looking for a luxury spa in MG Road Gurgaon? Enjoy premium body massage with certified foreign therapists. Experience world-class wellness treatments.",
  alternates: {
    canonical: "/spa-in-mg-road",
  },
  openGraph: {
    title: "Get Best Body Massage in MG Road Gurgaon | First Visit Offer 1999",
    description: "Looking for a relaxing massage in MG Road? Experience the best full body, sandwich massage, Couple massages at the top massage parlour in Gurgaon.",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"]
  }
};

export default function page() {
  return <MgRoad />;
}
