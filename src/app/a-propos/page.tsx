import Head from "next/head";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>À Propos | Cabinet Mériéux - Avocat en Droit Fiscal</title>
        <meta name="description" content="Découvrez le parcours de Maître Jean-Claude MÉRIEUX, avocat spécialisé en droit fiscal, droit des affaires et transactions immobilières." />
        <meta name="keywords" content="avocat fiscaliste, droit fiscal, avocat Jean-Claude Mériéux, droit des affaires, avocat La Rochette" />
        <meta name="author" content="Cabinet Mériéux" />

        {/* Open Graph pour Facebook & LinkedIn */}
        <meta property="og:title" content="À Propos | Cabinet Mériéux - Avocat en Droit Fiscal" />
        <meta property="og:description" content="Découvrez le parcours et l'expertise de Maître Jean-Claude MÉRIEUX, avocat en droit fiscal et des affaires." />
        <meta property="og:image" content="/images/jean-claude-merieux.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cabinet-merieux.fr/a-propos" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À Propos | Cabinet Mériéux - Avocat en Droit Fiscal" />
        <meta name="twitter:description" content="Parcours et expertise de Maître Jean-Claude MÉRIEUX, avocat spécialisé en droit fiscal et en droit des affaires." />
        <meta name="twitter:image" content="/images/jean-claude-merieux.jpg" />
      </Head>

      <main className="container mx-auto p-6">
        {/* Photo de Maître MériéUX */}
<div className="flex justify-center mt-6">
  <Image
    src="/photo-profil.jpeg"
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
          <h2 className="text-2xl font-semibold text-primary text-center">Expertise et Domaines d&rsquo;Intervention</h2>
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
          <h2 className="text-2xl font-semibold text-primary text-center">Transactions Immobilières</h2>
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