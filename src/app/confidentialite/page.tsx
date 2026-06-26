import type { Metadata } from "next";
import { generateCanonical } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Cabinet Mérieux",
  description: "Politique de confidentialité et gestion des données personnelles du Cabinet Mérieux.",
  alternates: generateCanonical('/confidentialite'),
  openGraph: {
    title: "Politique de Confidentialité | Cabinet Mérieux",
    description: "Politique de confidentialité et gestion des données personnelles du Cabinet Mérieux.",
    url: "https://cabinet-merieux.com/confidentialite",
    type: "website",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Confidentialité | Cabinet Mérieux",
    description: "Politique de confidentialité et gestion des données personnelles du Cabinet Mérieux.",
    images: ["/logometa.jpeg"],
  },
};

export default function ConfidentialitePage() {
  return (
    <>
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary text-center">Politique de Confidentialité</h1>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">1. Collecte de données</h2>
          <p className="mt-4 text-center">
            Le site ne collecte aucune donnée personnelle via des formulaires ou des cookies.  
            Aucune information personnelle n’est stockée ou analysée à des fins marketing.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">2. Mesure d&apos;audience</h2>
          <p className="mt-4 text-center">
            Ce site utilise <strong>Umami</strong>, un outil de mesure d&apos;audience auto-hébergé et respectueux de la vie privée.
            Umami ne dépose <strong>aucun cookie</strong> et ne collecte <strong>aucune donnée personnelle</strong>.
          </p>
          <p className="mt-4 text-center">
            Les données anonymes collectées (pages consultées, pays d&apos;origine, type d&apos;appareil et navigateur) servent
            uniquement à analyser la fréquentation du site et sont stockées sur notre propre serveur.
            Aucune donnée n&apos;est partagée avec des tiers.
          </p>
          <p className="mt-4 text-center">
            Umami est conforme au RGPD et ne nécessite pas de consentement préalable car il ne traite aucune donnée personnelle.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">3. Logs serveur</h2>
          <p className="mt-4 text-center">
            Le serveur enregistre des logs techniques de connexion (<strong>adresse IP, date, heure et pages consultées</strong>) uniquement à des fins de sécurité et de diagnostic.  
            Ces logs sont supprimés après <strong>3 mois</strong>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">4. Droits des utilisateurs</h2>
          <p className="mt-4 text-center">
            Conformément au RGPD, vous disposez d’un <strong>droit d’accès, de rectification et de suppression</strong> de vos données.  
            Pour toute demande, contactez-nous à :
          </p>
          <p className="mt-4 text-center">
            <strong>Email :</strong> jcm@cabinet-merieux.com
          </p>
        </section>
      </main>
    </>
  );
}