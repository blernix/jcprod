import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "./components/PageHeader";
import RdvCards from "./components/RdvCards";
import Image from "next/image";
import { generateCanonical } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Cabinet Mérieux – Avocat en droit fiscal & des affaires",
  description: "Le Cabinet Mérieux, situé à La Rochette (77), vous accompagne en droit fiscal, droit des affaires et transactions immobilières.",
  keywords: ["avocat fiscaliste", "droit fiscal", "droit des affaires", "transactions immobilières", "avocat La Rochette"],
  authors: [{ name: "Cabinet Mérieux" }],
  alternates: generateCanonical(''),
  openGraph: {
    title: "Cabinet Mérieux – Avocat en droit fiscal & des affaires",
    description: "Maître Jean-Claude MÉRIEUX vous accompagne en droit fiscal, droit des affaires et transactions immobilières.",
    url: "https://cabinet-merieux.com",
    type: "website",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet Mérieux – Avocat en droit fiscal & des affaires",
    description: "Expertise en droit fiscal, droit des affaires et transactions immobilières.",
    images: ["/logometa.jpeg"],
  },
};
export default function HomePage() {

 
  return (
    <>


      {/* Header avec l’image du cabinet */}
      <PageHeader
        title="Cabinet Mérieux"
        subtitle="Expertise en droit fiscal, droit des affaires et transactions immobilières."
        imageSrc="/header/accueil.jpg"
        clientImageSrc="/jeanClaude.png"
      />

      <main className="container mx-auto px-6 py-12 space-y-16">
      <div className="mt-6 md:mt-0 flex flex-wrap justify-center items-center gap-4">
  <Image
    src="/logo_avocat.png"
    alt="Logo Avocats"
    width={80}
    height={80}
    className="max-w-[80px] h-auto"
    priority
    unoptimized={true}
  />
  <Image
    src="/logo.png"
    alt="Logo Client"
    width={180}
    height={180}
    className="max-w-[180px] h-auto"
    priority
    unoptimized={true}
  />
  <Image
    src="/logo_immo.png"
    alt="Logo Immobilier"
    width={100}
    height={100}
    className="max-w-[100px] h-auto"
    priority
    unoptimized={true}
  />
</div>
        {/* Section Expertise */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-primary">Une expertise à votre service</h2>
          <p className="mt-6 max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Le <strong>Cabinet Mérieux</strong> vous accompagne dans toutes vos démarches juridiques, fiscales et immobilières, avec une approche 
            personnalisée et rigoureuse. Le cabinet défend vos intérêts avec <strong>transparence, réactivité et professionnalisme</strong>.
          </p>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Les prestations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Droit Fiscal */}
            <div className="bg-white shadow-md border border-gray-200 p-8 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              {/* <img src="/icons/fiscalite.svg" alt="Droit Fiscal" className="w-16 mx-auto mb-4" /> */}
              <h3 className="text-2xl font-semibold text-primary">Droit fiscal</h3>
              <p className="mt-3 text-gray-600">
                Optimisation fiscale, déclarations et contentieux fiscaux pour entreprises et particuliers.
              </p>
              <Link href="/droit-fiscal" className="mt-4 inline-block text-secondary hover:text-red-600 transition">
                En savoir plus →
              </Link>
            </div>

            {/* Droit des Affaires */}
            <div className="bg-white shadow-md border border-gray-200 p-8 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              {/* <img src="/icons/affaires.svg" alt="Droit des Affaires" className="w-16 mx-auto mb-4" /> */}
              <h3 className="text-2xl font-semibold text-primary">Droit des affaires</h3>
              <p className="mt-3 text-gray-600">
                Accompagnement dans la création d’entreprise, contrats et litiges commerciaux.
              </p>
              <Link href="/droit-affaires" className="mt-4 inline-block text-secondary hover:text-red-600 transition">
                En savoir plus →
              </Link>
            </div>

            {/* Transactions Immobilières */}
            <div className="bg-white shadow-md border border-gray-200 p-8 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              {/* <img src="/icons/immobilier.svg" alt="Transactions Immobilières" className="w-16 mx-auto mb-4" /> */}
              <h3 className="text-2xl font-semibold text-primary">Transactions immobilières</h3>
              <p className="mt-3 text-gray-600">
                Sécurisation des transactions immobilières et accompagnement juridique.
              </p>
              <Link href="/droit-fiscal/immobiliere" className="mt-4 inline-block text-secondary hover:text-red-600 transition">
                En savoir plus →
              </Link>
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="border-t border-gray-300"></div>

        {/* Pourquoi choisir le cabinet ? */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-primary">Pourquoi choisir le Cabinet Mérieux ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">🔹 Transparence</h3>
              <p className="mt-2">
                Des conseils clairs et honnêtes, adaptés à vos besoins.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">🔹 Réactivité</h3>
              <p className="mt-2">
                Un suivi rigoureux et des réponses rapides à vos interrogations.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">🔹 Expertise</h3>
              <p className="mt-2">
                Une approche juridique stratégique et une parfaite maîtrise du droit fiscal et des affaires.
              </p>
            </div>
          </div>
        </section>

        {/* CTA vers Contact */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Besoin d’un conseil juridique ?</h2>
          <p className="text-gray-700 mb-6">Je suis à votre écoute pour vous accompagner dans toutes vos démarches.</p>
          <Link href="/contact" className="bg-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition transform">
            Contactez-moi
          </Link>
        </div>
        <RdvCards/>
      </main>
    </>
  );
}