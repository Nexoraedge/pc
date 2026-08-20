import type { Metadata } from "next";
import { Archivo, Playfair_Display, JetBrains_Mono, Bricolage_Grotesque, Great_Vibes } from "next/font/google";
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
  title: "Parshwanath Caterers",
  description: "Creative, premium catering services for weddings, corporate events, and parties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${archivo.variable} ${playfair.variable} ${jetbrains.variable} ${bricolage.variable} ${greatVibes.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
