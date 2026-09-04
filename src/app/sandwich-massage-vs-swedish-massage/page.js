import Sandwichmassagevsswedish from "./Sandwichmassagevsswedish";

export const metadata = {
  title: "Sandwich vs Swedish Massage - Which Relieves Stress Better | Spa In Gurgaon",
  description: "Sandwich massage vs Swedish massage compared for pressure, technique and stress relief — expert insight from Gurgaon's certified spa therapists. Read the guide now!",
  keywords: [
    "sandwich vs swedish massage",
    "swedish massage gurgaon",
    "sandwich massage or swedish massage",
  ],
  alternates: {
    canonical: "/sandwich-massage-vs-swedish-massage",
  },
  openGraph: {
    title: "Sandwich vs Swedish Massage - Which Relieves Stress Better | Spa In Gurgaon",
    description: "Sandwich massage vs Swedish massage compared for pressure, technique and stress relief — expert insight from Gurgaon's certified spa therapists. Read the guide now!",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"]
  }
};

export default function page() {
  return <Sandwichmassagevsswedish />;
}
