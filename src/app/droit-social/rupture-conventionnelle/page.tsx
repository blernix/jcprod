import { Metadata } from "next";
import { generateCanonical } from "@/lib/metadata";
import PageHeader from "@/app/components/PageHeader";


export const metadata: Metadata = {
  title: "Rupture conventionnelle | Cabinet Mérieux",
  description: "Le Cabinet Mérieux vous assiste dans les ruptures conventionnelles et les recours en prud'hommes.",
  keywords: [
    "rupture conventionnelle",
    "avocat droit du travail",
    "prud'hommes",
    "droit social",
    "accord employeur salarié",
    "indemnités"
  ],
  alternates: generateCanonical('/droit-social/rupture-conventionnelle'),
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Rupture conventionnelle | Cabinet Mérieux",
    description: "Comprendre les règles de la rupture conventionnelle et ses recours possibles.",
    url: "https://cabinet-merieux.com/droit-social/rupture-conventionnelle",
    type: "article",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupture conventionnelle | Cabinet Mérieux",
    description: "Comprendre les règles de la rupture conventionnelle et ses recours possibles.",
    images: ["/logometa.jpeg"],
  },
};
export default function RuptureConventionnellePage() {
  return (
    <>
    

      {/* Image de la page */}
      <PageHeader
        title="Rupture Conventionnelle"
        subtitle="Obtenez le départ que vous méritez avec l&rsquo;expertise du Cabinet Mérieux"
        imageSrc="/header/conventionnelle.jpg"
      />

      <main className="container mx-auto p-6">
        {/* Introduction */}
        <section className="mt-6 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-3xl font-semibold text-primary text-center">Qu&rsquo;est-ce qu&rsquo;une rupture conventionnelle ?</h2>
          <p className="mt-4 text-gray-700 text-justify">
            La <strong>rupture conventionnelle</strong> permet à un employeur et un salarié de mettre fin au contrat de travail d&rsquo;un commun accord. Elle offre une alternative au licenciement et à la démission en garantissant au salarié le droit aux <strong>indemnités chômage</strong>.
          </p>
        </section>

        {/* Conditions et procédure */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Conditions et procédure</h2>
          <p className="mt-4 text-gray-700 text-justify">
            Pour être valide, une rupture conventionnelle doit respecter plusieurs étapes légales :
          </p>
          <ul className="mt-4 list-none list-inside">
            <li>📌 Un <strong>entretien préalable</strong> entre l&rsquo;employeur et le salarié.</li>
            <li>📌 La signature d&rsquo;une <strong>convention écrite</strong> précisant les modalités du départ.</li>
            <li>📌 Un <strong>délai de rétractation</strong> de 15 jours calendaires après la signature.</li>
            <li>📌 Une <strong>demande d’homologation</strong> adressée à la <strong>DREETS</strong> (anciennement DIRECCTE).</li>
            <li>📌 Une décision de l&rsquo;administration sous 15 jours.</li>
          </ul>
        </section>

        {/* Indemnités de rupture */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Indemnités de rupture</h2>
          <p className="mt-4 text-gray-700 text-center">
            Lors d’une rupture conventionnelle, le salarié perçoit une <strong>indemnité spécifique</strong>, qui ne peut être inférieure à l&rsquo;<strong>indemnité légale de licenciement</strong>. Son montant dépend de :
          </p>
          <ul className="mt-4 list-none list-inside">
            <li>📌 <strong>L&rsquo;ancienneté</strong> du salarié dans l&rsquo;entreprise.</li>
            <li>📌 <strong>Le salaire brut</strong> des 12 derniers mois.</li>
            <li>📌 <strong>Les accords d’entreprise</strong> éventuels.</li>
          </ul>
        </section>

        {/* Recours et contestation */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Recours et contestation</h2>
          <p className="mt-4 text-gray-700 text-justify">
            Un salarié peut contester une rupture conventionnelle devant les <strong>prud&rsquo;hommes</strong> si :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Carte 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Vice du consentement</h3>
              <p className="mt-2">
                Si le salarié a subi des <strong>pressions ou contraintes</strong> pour signer la convention.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Absence d&rsquo;indemnités</h3>
              <p className="mt-2">
                Si l&rsquo;indemnité minimale n&rsquo;a pas été versée comme prévu par la loi.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Non-respect des délais</h3>
              <p className="mt-2">
                Si le délai de <strong>rétractation</strong> ou d&rsquo;<strong>homologation</strong> n&rsquo;a pas été respecté.
              </p>
            </div>

            {/* Carte 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Détournement de procédure</h3>
              <p className="mt-2">
                Si l&rsquo;employeur a forcé la rupture pour éviter un licenciement économique ou disciplinaire.
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-700 text-justify">
            La contestation peut être déposée devant le Conseil de Prud’hommes dans un <strong>délai de 12 mois</strong> suivant l&rsquo;homologation.
          </p>
        </section>

      </main>
    </>
  );
}