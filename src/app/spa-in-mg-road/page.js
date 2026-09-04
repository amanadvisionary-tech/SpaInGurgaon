import MgRoad from "./MgRoad";

export const metadata = {
  title: "Spa in MG Road Gurgaon - Foreign Therapists | Spa In Gurgaon",
  description: "Spa in MG Road, Gurgaon with certified foreign therapists for premium full body and sandwich massage — first visit offer at just ₹1999. Book your session now!",
  keywords: ["spa in mg road", "massage mg road gurgaon", "spa near mg road", "body massage mg road gurgaon"],
  alternates: {
    canonical: "/spa-in-mg-road",
  },
  openGraph: {
    title: "Spa in MG Road Gurgaon - Foreign Therapists | Spa In Gurgaon",
    description: "Spa in MG Road, Gurgaon with certified foreign therapists for premium full body and sandwich massage — first visit offer at just ₹1999. Book your session now!",
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
