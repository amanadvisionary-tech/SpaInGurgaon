import SandwichMassageAndDeepTissueMassage from "./SandwichMassageAndDeepTissueMassage";

export const metadata = {
  title: "Sandwich vs Deep Tissue Massage - Which One Is Right | Spa In Gurgaon",
  description: "Sandwich massage vs deep tissue massage in Gurgaon compared for pressure, benefits and pain relief — advice from 12+ certified spa outlets. Read the full guide now!",
  keywords: [
    "sandwich vs deep tissue massage",
    "difference between sandwich and deep tissue massage",
    "sandwich massage vs deep tissue",
  ],
  alternates: {
    canonical: "/difference-between-sandwich-massage-and-deep-tissue-massage",
  },
  openGraph: {
    title: "Sandwich vs Deep Tissue Massage - Which One Is Right | Spa In Gurgaon",
    description: "Sandwich massage vs deep tissue massage in Gurgaon compared for pressure, benefits and pain relief — advice from 12+ certified spa outlets. Read the full guide now!",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"], // <-- use absolute URL in production
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"]
  }
};

export default function page() {
  return <SandwichMassageAndDeepTissueMassage />;
}
