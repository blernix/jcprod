import { Metadata } from "next";
import Carousel from "../components/Carousel";
import Link from "next/link";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Immobilier | Cabinet Mérieux – Avocat en transactions immobilières",
  description: "Découvrez notre bien immobilier à vendre et bénéficiez d'un accompagnement juridique sécurisé.",
  keywords: [
    "avocat immobilier",
    "transaction immobilière",
    "maison à vendre"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Immobilier | Cabinet Mérieux",
    description: "Découvrez cette maison de caractère, idéalement située dans un quartier très calme.",
    url: "https://cabinet-merieux.fr/immobilier",
    type: "website",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immobilier | Cabinet Mérieux",
    description: "Maison à vendre accompagnée par un avocat spécialisé en transactions immobilières.",
    images: ["/logometa.jpeg"],
  },
};
export default function Immobilier() {
  return (
    <>
    

      <main className="container mx-auto p-6">
      <div className="flex flex-row items-center gap-4">
  <h1 className="text-4xl font-bold text-primary">Pôle Immobilier</h1>
  <Image src="/logo_immo.png" alt="Logo Immobilier" width={100} height={100} priority />
</div>
        
        <p className="mt-4 text-lg text-gray-700">
          Le Cabinet Mériéux vous accompagne dans vos transactions immobilières avec un suivi juridique rigoureux.
        </p>

        {/* Détails du bien */}
        <section className="mt-12 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-primary">Maison de caractère Nandy</h2>
          
          {/* Carrousel */}
          <section className="mt-8">
            <Carousel />
          </section>

          <p className="mt-4 text-gray-700">
            <strong>Maison de caractère située dans un quartier très calme</strong>
          </p>
          <p className="mt-4 text-gray-700">
            Composée d&rsquo;une entrée, d&rsquo;une cuisine, d&rsquo;une salle à manger, d&rsquo;un séjour, de deux salles de douche (dont l&rsquo;une avec un cabinet de toilettes), de deux cabinets de toilettes indépendants, et de 6 chambres, le tout sur 3 niveaux.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Chauffage au gaz</li>
            <li>Terrain de plus de 1000 m² avec piscine et puits entièrement clos et sans vis-à-vis</li>
            <li>Très grand garage d’environ 30 m²</li>
            <li>Taxe foncière 2.980 € - Dépenses annuelles d&rsquo;énergies environ 4.000 €</li>
            <li>Écoles primaires et collège à proximité</li>
            <li>Accès par l&rsquo;A4 et l&rsquo;A6, Gare SNCF proche à Savigny Le Temple - 2 lignes de bus</li>
            <li>Commerces de proximité et grand centre commercial BOISSENART</li>
          </ul>
          <p className="mt-4">
            <strong>Prix :</strong> Sur demande.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary">Intéressé par ce bien ?</h2>
          <p className="mt-4">
            Contactez-nous pour plus d&rsquo;informations ou pour organiser une visite.
          </p>
          <Link href="/contact" className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-secondary transition">
            Contacter le cabinet
          </Link>
        </section>
      </main>
    </>
  );
}