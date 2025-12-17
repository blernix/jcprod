import { Metadata } from "next";
import { generateCanonical } from "@/lib/metadata";
import Link from "next/link";
import PageHeader from "../components/PageHeader";



export const metadata: Metadata = {
  title: "Droit des affaires | Cabinet Mérieux",
  description: "Le Cabinet Mérieux accompagne les entreprises en droit des affaires, droit des sociétés et droit commercial.",
  keywords: [
    "droit des affaires",
    "avocat en entreprise",
    "droit commercial",
    "droit des sociétés",
    "baux commerciaux",
    "contrats d'affaires"
  ],
  alternates: generateCanonical('/droit-affaires'),
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Droit des affaires | Cabinet Mérieux",
    description: "Conseil et assistance en droit des affaires : droit des sociétés, droit commercial, négociation et contrats.",
    url: "https://cabinet-merieux.com/droit-affaires",
    type: "article",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Droit des affaires | Cabinet Mérieux",
    description: "Le Cabinet Mérieux accompagne entreprises et entrepreneurs en droit des affaires, droit des sociétés et droit commercial.",
    images: ["/logometa.jpeg"],
  },
};
export default function DroitAffairesPage() {
  return (
    <>
  

       <PageHeader
                    title="Droit des Affaires"
                    subtitle="Bénéficiez de l'expertise du Cabinet Mérieux"
                    imageSrc="/header/droit-affaire.jpg"
                  />

      <main className="container mx-auto p-6">
        {/* En-tête */}
        <section>
          {/* <h1 className="text-4xl font-bold text-primary text-center">Droit des Affaires</h1> */}
          <p className="mt-4 text-lg text-gray-700 text-center">
            Le <strong>Droit des Affaires</strong> encadre l’ensemble des activités économiques et commerciales des entreprises.
            Il comprend plusieurs branches telles que le <strong>droit des sociétés</strong> et le <strong>droit commercial</strong>.
          </p>
          <p className="mt-4 text-gray-700 text-center">
            Le <strong>Cabinet Mérieux</strong> accompagne les entrepreneurs et chefs d’entreprise dans toutes les étapes de la vie de leur société :
            création, développement, négociation et litiges.
          </p>
        </section>

        {/* Services en Droit des Affaires */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Domaines d&rsquo;Intervention</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Droit des Sociétés */}
            <Link href="/droit-affaires/societes" className="bg-light shadow-lg p-6 rounded-lg hover:shadow-xl transition block">
              <h3 className="text-xl font-semibold text-primary">Droit des Sociétés</h3>
              <p className="mt-2 text-gray-700">
                Création d&rsquo;entreprises, gestion des relations entre associés, gouvernance et accompagnement juridique des dirigeants.
              </p>
              <p className="mt-3 text-secondary font-semibold">→ Découvrir</p>
            </Link>

            {/* Droit Commercial */}
            <Link href="/droit-affaires/commercial" className="bg-light shadow-lg p-6 rounded-lg hover:shadow-xl transition block">
              <h3 className="text-xl font-semibold text-primary">Droit Commercial</h3>
              <p className="mt-2 text-gray-700">
                Rédaction et négociation de contrats, baux commerciaux, gestion des litiges et propriété intellectuelle.
              </p>
              <p className="mt-3 text-secondary font-semibold">→ Découvrir</p>
            </Link>
          </div>
        </section>

        {/* CTA vers contact */}
        <div className="mt-12 text-center">
          <a href="/contact" className="bg-secondary text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition">
            Contactez-moi
          </a>
        </div>
      </main>
    </>
  );
}