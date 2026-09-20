import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// We'll use the same data as the about page. In a real app, this would be a DB or CMS fetch.
const INTERNS = [
  {
    slug: "pankaj-singh-rathore",
    name: "Pankaj singh rathore",
    role: "Media & Video Intern (BCA)",
    duration: "Aug-Sept 2026",
    description: "Pankaj, pursuing his BCA, brought his technical and creative skills to our team. He played a key role in video shooting and media production, capturing the essence of our luxury events.",
    skills: ["Video Shooting", "Media Production", "Creative Direction"]
  },
  {
    slug: "tanmay-vijay",
    name: "Tanmay Vijay",
    role: "Management Intern (BBA)",
    duration: "Aug-Sept 2026",
    description: "Tanmay, pursuing his BBA, provided excellent management support during our peak season. His organizational skills and dedication helped streamline our event operations.",
    skills: ["Event Operations", "Management", "Organization"]
  }
];

export function generateStaticParams() {
  return INTERNS.map((intern) => ({
    slug: intern.slug,
  }));
}

export default function InternPage({ params }: { params: { slug: string } }) {
  const intern = INTERNS.find((i) => i.slug === params.slug);

  if (!intern) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream text-maroon-dark font-sans selection:bg-gold selection:text-maroon-dark flex flex-col">
      <Navbar />

      <section className="flex-grow pt-40 pb-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white p-10 md:p-16 rounded-3xl shadow-lg border border-maroon-dark/5 text-center">

          <Link href="/about" className="inline-block mb-8 text-sm text-gold hover:text-maroon-dark uppercase tracking-widest font-bold transition-colors">
            ← Back to About
          </Link>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-maroon-dark mb-4">{intern.name}</h1>
          <p className="text-gold font-bold tracking-widest uppercase text-sm md:text-base mb-2">{intern.role}</p>
          <p className="text-maroon-dark/60 text-sm mb-10">{intern.duration}</p>

          <div className="w-16 h-[2px] bg-gold mx-auto mb-10"></div>

          <p className="text-lg md:text-xl text-maroon-dark/80 leading-relaxed mb-10">
            {intern.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {intern.skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-maroon-dark/5 text-maroon-dark rounded-full text-xs font-bold tracking-widest uppercase">
                {skill}
              </span>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
