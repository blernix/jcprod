import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";


export const metadata: Metadata = {
  title: "Fiscalité indirecte | Cabinet Mérieux",
  description: "Le Cabinet Mérieux accompagne entreprises et particuliers en gestion de la TVA, droits d'enregistrement et taxes indirectes.",
  keywords: [
    "fiscalité indirecte",
    "TVA",
    "droits d'enregistrement",
    "accises",
    "avocat fiscaliste",
    "optimisation fiscale"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Fiscalité indirecte | Cabinet Mérieux",
    description: "Conseil en TVA, gestion des droits d'enregistrement et taxes indirectes.",
    url: "https://cabinet-merieux.com/droit-fiscal/indirecte",
    type: "article",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiscalité indirecte | Cabinet Mérieux",
    description: "Accompagnement en TVA, taxes sur les salaires et fiscalité des accises.",
    images: ["/logometa.jpeg"],
  },
};
export default function FiscaliteIndirectePage() {
  return (
    <>
    
       <PageHeader
              title="Fiscalité Indirecte"
              subtitle="TVA, droits d&rsquo;enregistrement, taxes spécifiques : maîtrisez tout avec l&rsquo;expertise du Cabinet Mérieux"
              imageSrc="/header/taxe.jpg"
            />
      <main className="container mx-auto p-6">
        {/* En-tête */}
        <section>
          {/* <h1 className="text-4xl font-bold text-primary text-center">Fiscalité Indirecte</h1> */}
          <p className="mt-4 text-lg text-gray-700 text-center">
            La <strong>fiscalité indirecte</strong> concerne les impôts et taxes appliqués à la consommation et aux transactions économiques.
            Elle inclut notamment la <strong>TVA</strong>, les <strong>droits d&rsquo;enregistrement</strong> et les <strong>taxes spécifiques</strong>.
          </p>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Le <strong>Cabinet Mérieux</strong> vous accompagne dans l&rsquo;optimisation de votre fiscalité indirecte et dans la gestion des obligations déclaratives.
          </p>
        </section>

        {/* Services en Fiscalité Indirecte */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Services en Fiscalité Indirecte</h2>
          <div className="w-44 border-t border-gray-300 mt-11 mx-auto"></div>
          {/* Gestion de la TVA */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Gestion de la TVA</h3>
            <p className="mt-2 text-gray-700 text-center">
              La TVA est un élément clé de la fiscalité des entreprises. Le cabinet Mérieux vous accompagne pour optimiser votre assujettissement et déclarations.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Audit et analyse des risques fiscaux liés à la TVA</li>
              <li>Optimisation des droits à déduction</li>
              <li>Gestion du prorata de TVA</li>
              <li>Déclarations et obligations fiscales</li>
            </ul>
          </div>

          {/* Droits d'enregistrement et Fiscalité des Transactions */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Droits d&rsquo;Enregistrement et Fiscalité des Transactions</h3>
            <p className="mt-2 text-gray-700 text-center">
              Un accompagnement dans l’analyse et la gestion des taxes appliquées aux transactions financières et patrimoniales.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Analyse des obligations en matière de droits d’enregistrement</li>
              <li>Optimisation des taxes sur les mutations d&rsquo;entreprises</li>
              <li>Fiscalité des cessions d’actifs et de fonds de commerce</li>
              <li>Exonérations et réductions de droits d&rsquo;enregistrement</li>
            </ul>
          </div>

          {/* Fiscalité des Accises et Taxes Spécifiques */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Fiscalité des Accises et Taxes Spécifiques</h3>
            <p className="mt-2 text-gray-700">
              Le cabinet accompagne les entreprises soumises à des taxes spécifiques, telles que les droits d&rsquo;accises et la CVAE.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Audit et conformité des taxes indirectes</li>
              <li>Gestion et déclaration des droits d’accises</li>
              <li>Optimisation de la CVAE et autres contributions économiques</li>
              <li>Conseils en structuration fiscale pour réduire l&rsquo;impact des taxes indirectes</li>
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