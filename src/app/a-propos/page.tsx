import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "À propos | Cabinet Mérieux – Avocat en droit fiscal",
  description: "Découvrez le parcours de Maître Jean-Claude Mérieux, avocat spécialisé en droit fiscal, droit des affaires et transactions immobilières.",
  keywords: [
    "avocat fiscaliste",
    "droit fiscal",
    "avocat Jean-Claude Mérieux",
    "droit des affaires",
    "avocat La Rochette"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "À propos | Cabinet Mérieux – Avocat en droit fiscal",
    description: "Découvrez le parcours et l'expertise de Maître Jean-Claude Mérieux, avocat en droit fiscal et des affaires.",
    url: "https://cabinet-merieux.fr/a-propos",
    type: "article",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | Cabinet Mérieux – Avocat en droit fiscal",
    description: "Parcours et expertise de Maître Jean-Claude Mérieux, avocat spécialisé en droit fiscal et en droit des affaires.",
    images: ["/logometa.jpeg"],
  },
};
export default function AboutPage() {
  return (
    <>
  

      <main className="container mx-auto p-6">
        {/* Photo de Maître Mérieux */}
<div className="flex justify-center mt-6">
  <Image
    src="/jeanClaude.jpeg"
    alt="Maître Jean-Claude MÉRIEUX - Avocat en Droit Fiscal"
    width={200}
    height={200}
    className="rounded-full shadow-lg"
    priority
  />
</div>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Le Cabinet de Maître Jean-Claude MÉRIEUX accompagne ses clients avec rigueur et expertise en droit fiscal, droit des affaires et transactions immobilières.
        </p>

        {/* Parcours de l'avocat */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Le Cabinet</h2>
          <p className="mt-4 text-center">
            <strong>Maître Jean-Claude MÉRIEUX</strong>, diplômé de la Sorbonne, a intégré en qualité de stagiaire, le <strong>1er juillet 1990</strong>, le cabinet de Conseils Juridiques et Fiscaux 
            « <strong>SCP Jacques DUMONT & Associés</strong> » situé à <strong>Paris XVIème</strong> – 12 Avenue Paul Doumer.
          </p>
          <p className="mt-4 text-center">
            Après une formation pratique en <strong>droit des affaires et des sociétés, droit fiscal et droit social</strong>, il a prêté serment et a été admis au 
            <strong> tableau de l’Ordre des Avocats de Paris</strong> le <strong>18 octobre 1993</strong>.
          </p>
          <p className="mt-4 text-center">
            Aux côtés de son père et mentor, <strong>Maître Joseph MÉRIEUX</strong>, ancien Conseil Juridique et Fiscal, il a exercé en tant qu&rsquo;<strong>Avocat collaborateur salarié </strong> 
            jusqu&rsquo;en <strong>septembre 1996</strong>, ce qui lui a permis de parfaire ses connaissances.
          </p>
          <p className="mt-4 text-center">
            Il ouvre ensuite son propre cabinet le <strong>1er octobre 1996</strong> à <strong>Paris IXème</strong> – 37 rue Godot de Mauroy, puis le transfère successivement :
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li><strong>Janvier 1998</strong> : Paris VIIIème – 35 rue des Mathurins</li>
            <li><strong>Avril 2002</strong> : Paris VIIIème – 9 rue du Faubourg Saint Honoré</li>
            <li><strong>Aujourd’hui</strong> : La Rochette (77) – Résidence Le Richelieu – 1 rue Honoré Daumier</li>
          </ul>
        </section>

           {/* Ligne de séparation subtile */}
           <div className="border-t border-gray-300 mt-11"></div>

        {/* Spécialisation et domaines d'intervention */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Expertise et domaines d&rsquo;intervention</h2>
          <p className="mt-4 text-center">
            Aujourd’hui, Maître MÉRIEUX exerce sa profession d’avocat <strong>inscrit au tableau de l’Ordre des Avocats de Melun</strong>. Il intervient principalement en :
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li><strong>Droit des affaires</strong></li>
            <li><strong>Droit des sociétés</strong></li>
            <li><strong>Droit social</strong></li>
            <li><strong>Conseil fiscal</strong> pour entreprises et particuliers</li>
          </ul>
        </section>

           {/* Ligne de séparation subtile */}
           <div className="border-b border-gray-300 mt-11"></div>

        {/* Transactions immobilières */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Transactions immobilières</h2>
          <p className="mt-4 text-center">
            En tant qu&rsquo;<strong>adhérent du réseau « Marché Immobilier des Avocats » (M.I.A)</strong>, Maître MÉRIEUX accompagne ses clients dans leurs <strong>projets immobiliers</strong>.
          </p>
          <p className="mt-4 text-center">
            Grâce à une vision globale et experte, il leur apporte <strong>sécurité et sérénité</strong> dans le déroulement des transactions immobilières en prenant en compte leurs 
            <strong> enjeux professionnels, familiaux, personnels, financiers et fiscaux</strong>.
          </p>
        </section>
      </main>
    </>
  );
}