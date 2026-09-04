import Sector29 from "./Sector29";

export const metadata = {
  title: "Spa in Sector 29 Gurgaon - Foreign Therapists | Spa In Gurgaon",
  description: "Spa in Sector 29, Gurgaon with certified foreign therapists for full body, sandwich and couple massage — first visit at just ₹1999. Book your session now!",
  keywords: ["spa in sector 29", "massage sector 29 gurgaon", "spa near sector 29", "body massage sector 29"],
  alternates: {
    canonical: "/spa-in-sector-29",
  },
  openGraph: {
    title: "Spa in Sector 29 Gurgaon - Foreign Therapists | Spa In Gurgaon",
    description: "Spa in Sector 29, Gurgaon with certified foreign therapists for full body, sandwich and couple massage — first visit at just ₹1999. Book your session now!",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"]
  }
};

export default function page() {
  return <Sector29 />;
}
