import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";


export const metadata: Metadata = {
  title: "Bilan patrimonial & successoral | Cabinet Mérieux",
  description: "Le Cabinet Mérieux vous accompagne dans l’analyse, la structuration et la transmission de votre patrimoine, en tenant compte de votre situation familiale et fiscale.",
  keywords: [
    "bilan patrimonial",
    "transmission",
    "succession",
    "avocat patrimoine",
    "gestion du patrimoine",
    "optimisation successorale"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Bilan patrimonial & successoral | Cabinet Mérieux",
    description: "Anticipez la transmission de votre patrimoine grâce à un accompagnement juridique et fiscal sur mesure.",
    url: "https://cabinet-merieux.fr/bilan",
    type: "article",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilan patrimonial & successoral | Cabinet Mérieux",
    description: "Conseil personnalisé pour la gestion et la transmission de votre patrimoine, en conformité avec vos objectifs familiaux et fiscaux.",
    images: ["/logometa.jpeg"],
  },
};
export default function BilanPatrimonialSuccessoralPage() {
  return (
    <>
   

      <PageHeader
        title="Bilan Patrimonial & Successoral"
        subtitle="Anticipez, protégez et transmettez votre patrimoine en toute sérénité"
        imageSrc="/header/fiscalite-patrimoniale.jpg"
      />

      <main className="container mx-auto p-6">
        {/* Introduction */}
        <section>
          <p className="mt-4 text-lg text-gray-700">
            Le <strong>bilan patrimonial et successoral</strong> est une étape essentielle pour anticiper l&rsquo;avenir et assurer la pérennité de votre patrimoine familial.
            Il permet d’établir une stratégie adaptée à votre situation, en prenant en compte vos objectifs, votre environnement fiscal et vos contraintes personnelles.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Le <strong>Cabinet Mérieux</strong> vous accompagne avec rigueur et confidentialité dans cette démarche de conseil sur mesure.
          </p>
        </section>

        {/* Services en Bilan Patrimonial et Successoral */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Nos Services en Bilan Patrimonial & Successoral</h2>
          <div className="w-44 border-t border-gray-300 mt-11 mx-auto"></div>
          {/* Analyse patrimoniale globale */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Analyse Patrimoniale Globale</h3>
            <p className="mt-2 text-gray-700">
              Identification et évaluation des actifs afin d&rsquo;établir un état des lieux précis de votre patrimoine.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Inventaire des biens immobiliers, financiers, professionnels et personnels</li>
              <li>Analyse des régimes matrimoniaux et conséquences fiscales</li>
              <li>Étude des objectifs de vie : transmission, protection du conjoint, anticipation de la dépendance</li>
            </ul>
          </div>

          {/* Optimisation de la transmission */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Stratégie de Transmission & Succession</h3>
            <p className="mt-2 text-gray-700">
              Mise en place d’une stratégie successorale personnalisée pour limiter la fiscalité et protéger vos héritiers.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Donation, démembrement de propriété, pactes successoraux</li>
              <li>Testament, mandat de protection future</li>
              <li>Anticipation des droits de succession et simulation des impacts fiscaux</li>
            </ul>
          </div>

          {/* Accompagnement juridique et fiscal */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Accompagnement Juridique & Fiscal</h3>
            <p className="mt-2 text-gray-700">
              Un accompagnement complet et sur-mesure dans vos démarches patrimoniales, en lien avec les notaires et experts-comptables.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Conseil sur les structures juridiques : SCI, holding patrimoniale, etc.</li>
              <li>Assistance dans les relations avec l&rsquo;administration fiscale</li>
              <li>Préparation des déclarations fiscales liées à la transmission</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="/contact" className="bg-secondary text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition">
            Contactez-moi
          </a>
        </div>
      </main>
    </>
  );
}