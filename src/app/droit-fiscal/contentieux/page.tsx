import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";


export const metadata: Metadata = {
  title: "Contrôle et contentieux fiscaux | Cabinet Mérieux",
  description: "Le Cabinet Mérieux accompagne les entreprises et les particuliers lors de contrôles fiscaux et les défend en contentieux avec l'administration fiscale.",
  keywords: [
    "contrôle fiscal",
    "contentieux fiscal",
    "avocat fiscaliste",
    "redressement fiscal",
    "défense fiscale",
    "litiges fiscaux"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Contrôle et contentieux fiscaux | Cabinet Mérieux",
    description: "Accompagnement en contrôle fiscal et défense en cas de contentieux avec l'administration fiscale.",
    url: "https://cabinet-merieux.fr/droit-fiscal/contentieux",
    type: "article",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contrôle et contentieux fiscaux | Cabinet Mérieux",
    description: "Défense et accompagnement en cas de contrôle fiscal et litiges avec l'administration fiscale.",
    images: ["/logometa.jpeg"],
  },
};
export default function ContentieuxFiscauxPage() {
  return (
    <>
 
         <PageHeader
                      title="Fiscalité Indirect"
                      subtitle="Défendez efficacement vos intérêts avec l'expertise du Cabinet Mérieux"
                      imageSrc="/header/fiscalite-indirect.jpg"
                    />
      <main className="container mx-auto p-6">
        {/* En-tête */}
        <section>
          {/* <h1 className="text-4xl font-bold text-primary text-center">Contrôle et Contentieux Fiscaux</h1> */}
          <p className="mt-4 text-lg text-gray-700">
            Un <strong>contrôle fiscal</strong> peut avoir des conséquences financières lourdes pour une entreprise ou un particulier.
            Il est essentiel d’être bien préparé et de défendre efficacement ses intérêts.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Le <strong>Cabinet Mérieux</strong> accompagne ses clients tout au long de la procédure de contrôle fiscal et dans les litiges avec l&rsquo;administration fiscale.
          </p>
        </section>

        {/* Services en Contentieux Fiscaux */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Services en Contrôle et Contentieux Fiscaux</h2>
          <div className="w-44 border-t border-gray-300 mt-11 mx-auto"></div>
          {/* Assistance en Contrôle Fiscal */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Assistance en Contrôle Fiscal</h3>
            <p className="mt-2 text-gray-700">
              Maître Mérieux vous assiste à chaque étape du contrôle fiscal pour défendre vos intérêts et minimiser les risques.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Préparation aux contrôles fiscaux</li>
              <li>Analyse des demandes d’information et rédaction des réponses</li>
              <li>Élaboration d’une stratégie de défense en cas de redressement fiscal</li>
              <li>Représentation auprès des autorités fiscales</li>
            </ul>
          </div>

          {/* Défense en Contentieux Fiscal */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Défense en Contentieux Fiscal</h3>
            <p className="mt-2 text-gray-700">
              En cas de litige avec l&rsquo;administration fiscale, le cabinet met en place une défense adaptée à votre situation.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Rédaction de réclamations contentieuses</li>
              <li>Recours devant les juridictions administratives et judiciaires</li>
              <li>Défense face aux procédures de redressement fiscal</li>
              <li>Négociation avec l&rsquo;administration pour obtenir des transactions fiscales</li>
            </ul>
          </div>

          {/* Optimisation et Stratégie de Contentieux Fiscal */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Optimisation et Stratégie de Contentieux Fiscal</h3>
            <p className="mt-2 text-gray-700">
              Maître Mérieux vous aide à anticiper les risques fiscaux et à mettre en place une stratégie de défense proactive.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Audit fiscal préventif pour identifier les risques</li>
              <li>Analyse des opportunités de dégrèvement d&rsquo;impôts</li>
              <li>Conseil en conformité fiscale pour éviter les litiges</li>
              <li>Assistance dans les négociations de règlement amiable avec l&rsquo;administration</li>
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