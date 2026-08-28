import Sandwichmassagevsswedish from "./Sandwichmassagevsswedish";

export const metadata = {
  title: "Sandwich vs Swedish Massage: Which is Better?",
  description: "Sandwich massage vs Swedish massage — compare pressure, technique, and benefits to find out which one is better to relieve stress and muscle tension.",
  alternates: {
    canonical: "/sandwich-massage-vs-swedish-massage",
  },
  openGraph: {
    title: "Sandwich Massage vs Swedish Massage: Which One is Better?",
    description: "Compare pressure, technique, and benefits of sandwich massage vs Swedish massage to find out which is better to relieve stress.",
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
