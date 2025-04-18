import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";




export const metadata: Metadata = {
  title: "Droit des sociétés | Cabinet Mérieux",
  description: "Le Cabinet de Maître Jean-Claude Mérieux accompagne les entreprises dans toutes les étapes de la vie de leur société : création, gouvernance, cession, liquidation.",
  keywords: [
    "droit des sociétés",
    "avocat entreprise",
    "création de société",
    "fusion",
    "acquisition",
    "pacte d’actionnaires",
    "cession de titres"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Droit des sociétés | Cabinet Mérieux",
    description: "Accompagnement juridique des entreprises en droit des sociétés : constitution, gouvernance, fusion, liquidation.",
    url: "https://cabinet-merieux.fr/droit-affaires/societes",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Droit des sociétés | Cabinet Mérieux",
    description: "Le Cabinet Mérieux vous accompagne tout au long de la vie de votre société : création, fusion, cession, gouvernance.",
  },
};

export default function DroitSocietesPage() {
  return (
    <>
  
      <PageHeader
        title="Droit des Sociétés"
        subtitle="Accompagnement personnalisé avec l'expertise du Cabinet Mérieux"
        imageSrc="/header/entreprise.jpg"
      />
      <main className="container mx-auto p-6">
        {/* <h1 className="text-4xl font-bold text-primary text-center">Droit des Sociétés</h1> */}
        <p className="mt-4 text-gray-700 text-center">
          Le Cabinet de Maître Jean-Claude MÉRIEUX accompagne les entreprises à chaque étape de leur développement, en les conseillant sur la gestion et la structuration juridique de leur société.
        </p>

       {/* Présentation */}

       
<section className="mt-12">
  <h2 className="text-2xl font-semibold text-primary text-center">Un accompagnement à chaque étape</h2>
  <p className="mt-4 text-center">
    Depuis la <strong>création</strong> d&rsquo;une société jusqu&rsquo;à sa <strong>liquidation</strong>, le Cabinet Mérieux conseille ses clients sur toutes les décisions stratégiques et juridiques, en intégrant les aspects fiscaux et sociaux.
  </p>
  <p className="mt-4 text-center">
    L&rsquo;objectif est d&rsquo;assurer la <strong>pérennité et la sécurité juridique</strong> des structures, tout en optimisant la gouvernance et la gestion des relations entre associés.
  </p>
</section>

        {/* Domaines d'intervention */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-primary text-center">Domaines d’intervention</h3>
          <div className="w-44 border-t border-gray-300 mt-11 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Carte 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Création et immatriculation</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>SARL, SAS, SCI, EURL, SNC, SCP, etc.</li>
                <li>Accompagnement dans le choix de la structure</li>
                <li>Rédaction des statuts et formalités</li>
              </ul>
            </div>

            {/* Carte 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Pactes d’associés et actionnariat</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Négociation et rédaction de pactes d’actionnaires</li>
                <li>Gestion des relations entre associés</li>
              </ul>
            </div>

            {/* Carte 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Gouvernance et direction</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Nomination et révocation des dirigeants</li>
                <li>Optimisation du régime social et fiscal des dirigeants</li>
              </ul>
            </div>

            {/* Carte 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Cessions et acquisitions</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Cession et acquisition de titres</li>
                <li>Fusion, absorption, ouverture du capital</li>
              </ul>
            </div>

            {/* Carte 5 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Formalités juridiques</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Approbation des comptes, modifications statutaires</li>
                <li>Publication et enregistrement des décisions</li>
              </ul>
            </div>

            {/* Carte 6 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Liquidation et dissolution</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Préparation et exécution des procédures de dissolution</li>
                <li>Accompagnement en cas de liquidation judiciaire</li>
              </ul>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
}