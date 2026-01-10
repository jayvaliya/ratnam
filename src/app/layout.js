import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://ratnam.org.in'),
  title: {
    default: "Ratnam Enterprise - Industrial Electrical Supplier Pune | Switchgear, Cables & Control Panel Accessories",
    template: "%s | Ratnam Enterprise"
  },
  description: "Leading industrial electrical equipment supplier in Pune. Trusted supplier of L&T Switchgear, Polycab cables, MCCB, ACB, VFD, control panel accessories, LT HT cables, terminal blocks, busbar systems & automation products. Wholesale B2B electrical goods distributor serving Pune, Maharashtra & India.",
  keywords: [
    "industrial electrical supplier Pune",
    "electrical panel accessories supplier",
    "switchgear dealer Pune",
    "MCCB RCCB ACB supplier",
    "Polycab dealer Pune",
    "L&T switchgear stockist",
    "control panel accessories shop",
    "VFD drive supplier",
    "LT HT cable supplier",
    "busbar system supplier",
    "terminal block supplier",
    "industrial automation supplier",
    "electrical control panel accessories",
    "wholesale electrical shop Pune",
    "B2B electrical distributor"
  ],
  authors: [{ name: "Ratnam Enterprise" }],
  creator: "Ratnam Enterprise",
  publisher: "Ratnam Enterprise",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ratnam.org.in',
    siteName: 'Ratnam Enterprise',
    title: 'Ratnam Enterprise - Industrial Electrical Supplier Pune | L&T, Polycab Trusted Supplier',
    description: 'Top industrial electrical equipment supplier in Pune. Trusted supplier of L&T Switchgear & Polycab products. MCCB, ACB, VFD, cables, control panel accessories, automation products. Wholesale B2B electrical distributor.',
    images: [
      {
        url: '/images/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ratnam Enterprise - Industrial Electrical Supplier Pune',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ratnam Enterprise - Industrial Electrical Supplier Pune',
    description: 'Leading supplier of industrial electrical goods - L&T Switchgear, Polycab cables, MCCB, ACB, VFD, control panel accessories.',
    images: ['/images/logos/logo.png'],
  },
  alternates: {
    canonical: 'https://ratnam.org.in',
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.6446;73.8427',
    'ICBM': '18.6446, 73.8427',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ratnam.org.in/#organization",
    "name": "Ratnam Enterprise",
    "alternateName": "RATNAM ENTERPRISE",
    "url": "https://ratnam.org.in",
    "logo": "https://ratnam.org.in/images/logos/logo.png",
    "image": "https://ratnam.org.in/images/logos/logo.png",
    "description": "Leading industrial electrical equipment supplier in Pune, specializing in switchgear, cables, control panel accessories, and automation products. Trusted supplier of L&T Switchgear and Polycab products.",
    "telephone": "+919429094277",
    "email": "sales@ratnam.org.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Telco Road, Near Quality Circle, Bhosari MIDC",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411026",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.6446,
      "longitude": 73.8427
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "State",
      "name": "Maharashtra"
    },
    "hasMap": "https://maps.app.goo.gl/FsfFHYS44GuDRE1M6",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919429094277",
      "contactType": "sales",
      "email": "sales@ratnam.org.in",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
