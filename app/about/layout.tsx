import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the rich history and culinary masters behind Parshwanath Caterers. Decades of excellence in pure vegetarian and Jain catering in Jaipur.",
  openGraph: {
    title: "About Parshwanath Caterers",
    description: "Learn about the rich history and culinary masters behind Parshwanath Caterers.",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
