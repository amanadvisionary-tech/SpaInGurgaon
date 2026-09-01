import SandwichMassageAndDeepTissueMassage from "./SandwichMassageAndDeepTissueMassage";

export const metadata = {
  title: "Sandwich vs Deep Tissue Massage: What's the Difference?",
  description: "Know the difference between sandwich massage and deep tissue massage — pressure, benefits, and which one is best for stress or pain relief.",
  keywords: [
    "sandwich vs deep tissue massage",
    "difference between sandwich and deep tissue massage",
    "sandwich massage vs deep tissue",
  ],
  alternates: {
    canonical: "/difference-between-sandwich-massage-and-deep-tissue-massage",
  },
  openGraph: {
    title: "Difference Between Sandwich Massage and Deep Tissue Massage | Best Spa in Gurgaon",
    description: "Know the difference between Sandwich Massage and Deep Tissue Massage. Understand pressure, benefits, and which massage is best for stress or pain. Visit our professional body spa in Gurgaon for expert massage therapy.",
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
