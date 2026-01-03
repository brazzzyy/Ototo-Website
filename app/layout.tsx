import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

// --- 1. CONFIGURATION ---
// Keep all your hardcoded strings in one place
const CONFIG = {
  name: "Ototo",
  cuisine: "Japanese", 
  domain: "https://www.ototoappleton.com",
  description: "Authentic Japanese dining in the heart of Appleton. Serving fresh sushi, ramen, and craft cocktails.",
  address: {
    street: "123 College Ave",
    city: "Appleton",
    state: "WI",
    zip: "54911",
    mapLink: "https://maps.app.goo.gl/YOUR_LINK_HERE" // Helpful for you to find later
  },
  phone: "+19201234567"
};

// --- 3. METADATA (Server-Side Optimized) ---
export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.domain), // Fixes all relative path issues automatically
  title: {
    default: `${CONFIG.name} | ${CONFIG.cuisine} in ${CONFIG.address.city}, ${CONFIG.address.state}`,
    template: `%s | ${CONFIG.name}`,
  },
  description: CONFIG.description,
  icons: {
    icon: "/Ototo_Logo.png", // Must be in /public folder
  },
  openGraph: {
    title: CONFIG.name,
    description: CONFIG.description,
    url: CONFIG.domain,
    siteName: CONFIG.name,
    locale: "en_US",
    type: "website",
  },
};

// --- 4. SCHEMA GENERATOR ---
// Keeps the layout clean. 
// Using a standard <script> is actually faster for crawlers than next/script for JSON-LD.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: CONFIG.name,
  image: `${CONFIG.domain}/Ototo_Logo.png`,
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
  priceRange: "$$", // $, $$, $$$, or $$$$
};

// --- 5. ROOT LAYOUT ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Render Schema as raw HTML for instant parsing by Google */}
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