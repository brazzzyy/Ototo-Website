import type { Metadata } from "next";
import { League_Spartan, Lexend } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

// Self-hosted via next/font — no render-blocking requests to fonts.googleapis.com
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend-sans",
  display: "swap",
});

// --- 1. CONFIGURATION ---
const CONFIG = {
  name: "Ototo",
  cuisine: "Japanese Ramen & Comfort Food", 
  domain: "https://www.ototoappleton.com",
  description: "Authentic Japanese dining in the heart of Appleton. Serving fresh ramen, and craft cocktails.",
  address: {
    street: "205 N Richmond Street",
    city: "Appleton",
    state: "WI",
    zip: "54911",
    mapLink: "https://www.google.com/maps/place/Ot%C5%8Dto/@44.263218,-88.4186325,16z/data=!3m1!4b1!4m6!3m5!1s0x8803b70901001cd5:0xcbafbc715982a865!8m2!3d44.2632142!4d-88.4160576!16s%2Fg%2F11vt8dkhwn?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" // Helpful for you to find later
  },
  phone: "+19208153039"
};


// --- 2. METADATA (Server-Side Optimized) ---
export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.domain),
  title: {
    default: `${CONFIG.name} | ${CONFIG.address.city}, ${CONFIG.address.state}`,
    template: `%s | ${CONFIG.name}`,
  },
  description: CONFIG.description,
  icons: {
    icon: "/brand/Ototo_Logo.png", //
  },
  openGraph: {
    title: CONFIG.name,
    description: CONFIG.description,
    url: CONFIG.domain,
    siteName: CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/Ototo_Logo.png",
        width: 1200,
        height: 630,
        alt: "Ototo Ramen in Appleton",
      },
    ],
  },
};

// --- 3. SCHEMA GENERATOR ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: CONFIG.name,
  image: `${CONFIG.domain}/brand/Ototo_Logo.png`,
  description: CONFIG.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONFIG.address.street,
    addressLocality: CONFIG.address.city,
    addressRegion: CONFIG.address.state,
    postalCode: CONFIG.address.zip,
    addressCountry: "US",
  },
  telephone: CONFIG.phone,
  servesCuisine: CONFIG.cuisine,
  priceRange: "$$",
};

// --- 4. ROOT LAYOUT ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${lexend.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}