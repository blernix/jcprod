import { Metadata } from "next";
import Link from "next/link";
import RdvCards from "../components/RdvCards";
import { generateCanonical } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contact | Cabinet Mérieux – Avocat en droit fiscal",
  description: "Contactez le Cabinet Mérieux pour toute question juridique en droit fiscal, droit des affaires et droit social.",
  keywords: ["contact avocat", "cabinet Mérieux", "avocat fiscaliste", "droit des affaires"],
  alternates: generateCanonical('/contact'),
  openGraph: {
    title: "Contact | Cabinet Mérieux – Avocat en droit fiscal",
    description: "Besoin d'un avocat en droit fiscal ou droit des affaires ? Contactez Maître Jean-Claude Mérieux.",
    url: "https://cabinet-merieux.com/contact",
    type: "website",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Cabinet Mérieux – Avocat en droit fiscal",
    description: "Besoin d'un avocat en droit fiscal ou droit des affaires ? Contactez Maître Jean-Claude Mérieux.",
    images: ["/logometa.jpeg"],
  },
};

export default function ContactPage() {
    return (
      <>
      

        <main className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-primary text-center">Contact</h1>
          <p className="mt-4 text-center">Besoin d’un conseil ? Contactez-moi :</p>

          <ul className="mt-6 space-y-4 text-center">
            {/* 📍 Adresse - Ouvre Google Maps ou Apple Plans */}
            <li>
              <Link 
                href="https://maps.google.com/?q=1+RUE+HONORE+DAUMIER,77000+La+Rochette" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:underline"
              >
                📍 1 Rue Honoré Daumier, 77000 La Rochette
              </Link>
            </li>

            {/* 📞 Numéro de téléphone - Ouvre l'application d’appel */}
            <li>
              <Link href="tel:+33607343116" className="text-secondary hover:underline">
                📞 06 07 34 31 16
              </Link>
            </li>

            {/* 📧 Email - Ouvre le client mail */}
            <li>
              <Link href="mailto:jcm@cabinet-merieux.com" className="text-secondary hover:underline">
                📧 jcm@cabinet-merieux.com
              </Link>
            </li>
          </ul>
        <RdvCards/>
        </main>
      </>
    );
}