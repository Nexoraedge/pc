import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery & Events",
  description: "Browse our stunning portfolio of royal weddings, luxury destination dining, and corporate catering events in Jaipur and Rajasthan.",
  openGraph: {
    title: "Event Gallery | Parshwanath Caterers",
    description: "Browse our stunning portfolio of royal weddings, luxury destination dining, and corporate catering events.",
  }
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
