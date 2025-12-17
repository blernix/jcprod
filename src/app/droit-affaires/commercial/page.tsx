import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Droit commercial & économique | Cabinet Mérieux",
  description: "Le Cabinet de Maître Jean-Claude Mérieux accompagne les entreprises en droit commercial et économique : contrats, négociations, propriété intellectuelle, baux commerciaux.",
  keywords: [
    "droit commercial",
    "droit économique",
    "avocat entreprise",
    "contrats commerciaux",
    "baux commerciaux",
    "propriété intellectuelle",
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Droit commercial & économique | Cabinet Mérieux",
    description: "Maître Jean-Claude Mérieux conseille les entreprises en droit commercial et économique : contrats, négociations, baux commerciaux, distribution, concurrence.",
    url: "https://cabinet-merieux.com/droit-affaires/commercial",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Droit commercial & économique | Cabinet Mérieux",
    description: "Le Cabinet Mérieux accompagne les entreprises en droit commercial et économique.",
  },
};

export default function DroitCommercialPage() {
  return (
    <>
     
       <PageHeader
                    title="Droit Commercial & Économique"
                    subtitle="Prenez des décisions éclairées avec l'expertise du Cabinet Mérieux"
                    imageSrc="/header/commerce.jpg"
                  />
      <main className="container mx-auto p-6">
        {/* <h1 className="text-4xl font-bold text-primary text-center">Droit Commercial & Économique</h1> */}
        <p className="mt-4  text-gray-700 text-center">
          Le Cabinet de Maître Jean-Claude MÉRIEUX accompagne les entreprises dans leurs décisions commerciales et économiques pour assurer leur développement en toute sécurité juridique.
        </p>

        {/* Présentation */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Une expertise au service des entreprises</h2>
          <p className="mt-4 text-center">
            Le Cabinet intervient dès la création de l’entreprise et tout au long de son développement, en conseillant et assistant ses clients dans leurs négociations et décisions stratégiques.
          </p>
          <p className="mt-4">
            Grâce à une expertise approfondie en <strong>droit commercial</strong> et <strong>droit économique</strong>, Maître MÉRIEUX veille à la sécurité juridique des opérations et à la conformité des pratiques commerciales.
          </p>
        </section>

        {/* Domaines d'intervention */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Domaines d&rsquo;intervention</h2>
          <div className="w-44 border-t border-gray-300 mt-11 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Carte 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Opérations sur fonds de commerce</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Cession, nantissement, apport en société, location-gérance</li>
              </ul>
            </div>

            {/* Carte 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Baux commerciaux</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Rédaction, renouvellement, cession de droit au bail, analyse juridique</li>
              </ul>
            </div>

            {/* Carte 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Négociation commerciale</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Assistance dans les négociations avec partenaires et fournisseurs</li>
              </ul>
            </div>

            {/* Carte 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Propriété intellectuelle</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Dépôt de marque, acquisition, exploitation, cession, licence</li>
              </ul>
            </div>

            {/* Carte 5 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Contrats de distribution</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Agent commercial, courtier, franchise, accords-cadres</li>
              </ul>
            </div>

            {/* Carte 6 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary text-center">Gestion des créances</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Reconnaissance de dette, prêts, recouvrement</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}