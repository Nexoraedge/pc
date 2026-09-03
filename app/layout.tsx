import type { Metadata } from "next";
import { Archivo, Playfair_Display, JetBrains_Mono, Bricolage_Grotesque, Great_Vibes } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.parshwanathcaterers.com'),
  title: {
    default: "Parshwanath Caterers | Best Pure Veg & Jain Catering in Jaipur",
    template: "%s | Parshwanath Caterers"
  },
  description: "Experience premium pure vegetarian and Jain catering in Jaipur. Parshwanath Caterers specializes in royal weddings, corporate events, and luxury destination dining with decades of culinary excellence.",
  keywords: ["best caterer in jaipur", "jain caterer", "pure veg catering jaipur", "wedding caterers rajasthan", "luxury catering", "corporate event catering jaipur", "destination wedding catering"],
  openGraph: {
    title: "Parshwanath Caterers | Premium Pure Veg & Jain Catering",
    description: "Experience premium pure vegetarian and Jain catering in Jaipur for royal weddings and corporate events.",
    url: 'https://www.parshwanathcaterers.com',
    siteName: 'Parshwanath Caterers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parshwanath Caterers | Jaipur\'s Premium Veg Caterer',
    description: 'Elevating events with pure vegetarian luxury. From grand destination weddings to intimate private galas.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${archivo.variable} ${playfair.variable} ${jetbrains.variable} ${bricolage.variable} ${greatVibes.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-foreground`}>
        <StructuredData />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
