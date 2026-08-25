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
  title: "Luxury Body Spa | Gurgaon",
  description: "Relax and rejuvenate at the best spa in Gurgaon.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/spa-in-gurgaon-favicon.png?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/spa-in-gurgaon-favicon.png?v=2" />
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
