import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";



export const metadata: Metadata = {
  title: "Fiscalité des entreprises | Cabinet Mérieux",
  description: "Le Cabinet Mérieux accompagne les entreprises dans leur stratégie fiscale : optimisation, déclarations et contentieux fiscaux.",
  keywords: [
    "fiscalité des entreprises",
    "avocat fiscaliste",
    "optimisation fiscale",
    "stratégie fiscale",
    "contentieux fiscal"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Fiscalité des entreprises | Cabinet Mérieux",
    description: "Accompagnement en optimisation fiscale, gestion des déficits et contentieux fiscaux pour les entreprises.",
    url: "https://cabinet-merieux.fr/droit-fiscal/entreprises",
    type: "article",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiscalité des entreprises | Cabinet Mérieux",
    description: "Accompagnement en droit fiscal des entreprises : gestion fiscale, déclarations, contrôle et contentieux fiscaux.",
    images: ["/logometa.jpeg"],
  },
};
export default function FiscaliteEntreprisesPage() {
  return (
    <>
  
       {/* Header personnalisé */}
       <PageHeader
        title="Fiscalité des Entreprises"
        subtitle="Maîtrisez la fiscalité avec l'expertise du Cabinet Mérieux"
        imageSrc="/header/fiscalite-entreprise.jpg"
      />

      <main className="container mx-auto p-6">
        {/* En-tête */}
        <section>
          <p className="mt-4 text-lg text-gray-700">
            La <strong>fiscalité des entreprises</strong> couvre l&rsquo;ensemble des règles encadrant l&rsquo;imposition des sociétés et des professionnels.
            Une gestion fiscale optimisée permet d&rsquo;anticiper les charges, réduire les risques et améliorer la rentabilité.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Le <strong>Cabinet Mérieux</strong> accompagne les entreprises dans la gestion et l’optimisation de leur fiscalité, 
            en tenant compte des obligations légales et des opportunités fiscales.
          </p>
        </section>

        {/* Services en Fiscalité des Entreprises */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Services en fiscalité des entreprises</h2>
          <div className="w-44 border-t border-gray-300 mt-11 mx-auto"></div>
          {/* Optimisation et Stratégie Fiscale */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Optimisation et stratégie fiscale</h3>
            <p className="mt-2 text-gray-700">
              Le Cabinet Mérieux vous aide à élaborer une <strong>stratégie fiscale efficace</strong> pour minimiser les charges fiscales tout en respectant la réglementation.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Choix de la localisation et du mode d’implantation (sociétés de capitaux, partnerships...)</li>
              <li>Détermination du résultat fiscal et gestion des déficits fiscaux</li>
              <li>Gestion fiscale des flux (dividendes, intérêts, redevances, prestations intra-groupes)</li>
              <li>Stratégie fiscale internationale et conventions fiscales</li>
            </ul>
          </div>

          {/* Fiscalité Transactionnelle */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Fiscalité transactionnelle</h3>
            <p className="mt-2 text-gray-700">
              Je vous accompagnons dans la structuration et l’optimisation des opérations d’acquisition et de cession d’entreprises.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Audit et revue fiscale d’acquisition ou de cession</li>
              <li>Structuration et optimisation fiscale des opérations de fusion et d&rsquo;acquisition</li>
              <li>Demandes d’agrément auprès de l&rsquo;administration fiscale</li>
              <li>Revue des parties fiscales des pactes d’actionnaires et des contrats d’acquisition</li>
            </ul>
          </div>

          {/* Gestion des Contentieux Fiscaux */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Gestion des contentieux fiscaux</h3>
            <p className="mt-2 text-gray-700">
              En cas de contrôle fiscal ou de litige avec l&rsquo;administration fiscale, le Cabinet Mérieux vous assiste dans la gestion des contentieux.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Assistance lors des contrôles fiscaux</li>
              <li>Élaboration des stratégies de défense fiscale</li>
              <li>Négociation avec l&rsquo;administration et transactions fiscales</li>
              <li>Représentation devant les tribunaux compétents</li>
            </ul>
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