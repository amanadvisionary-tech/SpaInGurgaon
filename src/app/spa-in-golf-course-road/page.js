import GolfCourseRoad from "./golfcourseroad";

export const metadata = {
  title:
    "Spa in Golf Course Road Gurgaon - Foreign Therapists | Spa In Gurgaon",
  description:
    "Spa on Golf Course Road, Gurgaon with certified foreign therapists for full body, sandwich and couple massage — first visit at just ₹1999. Book your session now!",
  keywords: [
    "spa in golf course road",
    "massage golf course road gurgaon",
    "spa golf course extension road",
    "body massage golf course road",
  ],
  alternates: {
    canonical: "/spa-in-golf-course-road",
  },
  openGraph: {
    title:
      "Spa in Golf Course Road Gurgaon - Foreign Therapists | Spa In Gurgaon",
    description:
      "Spa on Golf Course Road, Gurgaon with certified foreign therapists for full body, sandwich and couple massage — first visit at just ₹1999. Book your session now!",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spaingurgaon.com/images/banner.jpeg"],
  },
};

export default function Page() {
  return <GolfCourseRoad />;
}