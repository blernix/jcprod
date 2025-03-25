import { Metadata } from "next";
import RdvCards from "../components/RdvCards";


export const metadata: Metadata = {
  title: "Honoraires | Cabinet Mérieux – Transparence et tarification",
  description: "Découvrez les honoraires du Cabinet Mérieux : facturation au forfait, au temps passé ou au résultat, avec une totale transparence.",
  keywords: [
    "honoraires avocat",
    "tarification avocat",
    "forfait avocat",
    "facturation avocat",
    "Cabinet Mérieux"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Honoraires | Cabinet Mérieux – Transparence et tarification",
    description: "Découvrez la tarification du Cabinet Mérieux, proposant des honoraires adaptés aux besoins des clients.",
    url: "https://cabinet-merieux.fr/honoraires",
    type: "article",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honoraires | Cabinet Mérieux – Transparence et tarification",
    description: "Découvrez les différentes options de facturation du Cabinet Mérieux : forfait, temps passé ou honoraire au résultat.",
    images: ["/logometa.jpeg"],
  },
};
export default function HonorairesPage() {
  return (
    <>
   

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary text-center">Honoraires et Tarification</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Le montant des honoraires est défini en toute <strong>transparence</strong> avec le client, garantissant une parfaite maîtrise des coûts.
          Ils varient selon le <strong>temps passé</strong>, la <strong>complexité du dossier</strong> et les <strong>enjeux financiers</strong>.
        </p>

        {/* Modes de facturation */}
        <section className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Facturation au forfait */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-primary">📌 Facturation au forfait</h2>
            <p className="mt-4">
              Lorsque le coût peut être déterminé à l&rsquo;avance, un <strong>forfait fixe</strong> est proposé. 
              Idéal pour des <strong>dossiers récurrents</strong> ou ne présentant pas de complexités particulières.
            </p>
          </div>

          {/* Facturation au temps passé */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-primary">⏳ Facturation au temps passé</h2>
            <p className="mt-4">
              Utilisée pour les <strong>dossiers complexes</strong>, les <strong>audits</strong> et les <strong>consultations juridiques approfondies</strong>. 
              La tarification s&rsquo;ajuste en fonction du volume de travail requis.
            </p>
          </div>

          {/* Facturation au résultat */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-primary">💰 Facturation au résultat</h2>
            <p className="mt-4">
              Possibilité d’un <strong>honoraire de résultat</strong>, uniquement en complément d’un forfait ou d’une tarification horaire.
              Ce mode est adapté aux dossiers à <strong>fort enjeu financier</strong>.
            </p>
          </div>

          {/* Créateurs d'entreprises */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-primary">🚀 Créateurs d&rsquo;entreprises</h2>
            <p className="mt-4">
              Des <strong>conditions préférentielles</strong> peuvent être appliquées aux entrepreneurs souhaitant développer leur activité.
              Une convention spécifique peut être mise en place.
            </p>
          </div>
        </section>
        <RdvCards/>
      </main>
    </>
  );
}