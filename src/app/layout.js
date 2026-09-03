// import { GeistSans, GeistMono } from 'geist/font'
import "./globals.css";
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsappFloat from "./components/WhatsappFloat";
import Analytics from "./components/Analytics";

// const geist = Geist({
//   subsets: ['latin'],
//   variable: '--font-geist',
// })

// const geistMono = GeistMono({
//   subsets: ['latin'],
//   variable: '--font-geist-mono',
// })
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL("https://www.spaingurgaon.com"),
  title: {
    default: "Luxury Body Spa in Gurgaon | Spa In Gurgaon",
    template: "%s | Spa In Gurgaon",
  },
  description: "Relax and rejuvenate at the best spa in Gurgaon. Certified therapists, full body, couple and sandwich massage with a first-visit offer.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Spa In Gurgaon",
    type: "website",
    locale: "en_IN",
    images: ["/images/banner.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/banner.jpeg"],
  },
  icons: {
    icon: [
      { url: "/spa-in-gurgaon-favicon.png?v=2" },
      { url: "/icon.png?v=2" },
      { url: "/favicon.ico?v=2" },
    ],
    shortcut: "/spa-in-gurgaon-favicon.png?v=2",
    apple: "/apple-icon.png?v=2",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": "https://www.spaingurgaon.com/#business",
  name: "Spa In Gurgaon",
  image: "https://www.spaingurgaon.com/images/banner.jpeg",
  logo: "https://www.spaingurgaon.com/images/spaingurgaonlogo.png",
  url: "https://www.spaingurgaon.com",
  telephone: "+91-8448499173",
  email: "spaingurugram8826@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "442, Shankar Chowk Rd, Phase II, Udyog Vihar, Sector 20",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122016",
    addressCountry: "IN",
  },
  areaServed: [
    "Gurgaon",
    "Gurugram",
    "DLF Phase 1",
    "Cyber City",
    "MG Road",
    "Golf Course Road",
    "Sohna Road",
    "Sector 29",
    "Aerocity",
    "Connaught Place",
    "Lajpat Nagar",
    "Noida",
    "Delhi NCR",
  ],
  makesOffer: {
    "@type": "Offer",
    name: "First Visit Offer",
    description: "45-60 minute full body massage session for first-time clients.",
    price: "1999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://www.spaingurgaon.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/spa-in-gurgaon-favicon.png?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/spa-in-gurgaon-favicon.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={inter.className}
      >
         <Analytics />
        <Navbar />
        {children}
        <WhatsappFloat />
        <Footer />
      </body>
    </html>
  );
}
