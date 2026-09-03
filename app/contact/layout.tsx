import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Parshwanath Caterers. Book the best premium pure veg and Jain catering services in Jaipur for your upcoming event.",
  openGraph: {
    title: "Contact Parshwanath Caterers",
    description: "Book the best premium pure veg and Jain catering services in Jaipur.",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
