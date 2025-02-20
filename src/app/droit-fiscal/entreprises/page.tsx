import Head from "next/head";
import PageHeader from "@/app/components/PageHeader";

export default function FiscaliteEntreprisesPage() {
  return (
    <>
      <Head>
        <title>Fiscalité des Entreprises | Cabinet Mériéux</title>
        <meta name="description" content="Le Cabinet Mériéux accompagne les entreprises dans leur stratégie fiscale : optimisation, déclarations et contentieux fiscaux." />
        <meta name="keywords" content="fiscalité des entreprises, avocat fiscaliste, optimisation fiscale, stratégie fiscale, contentieux fiscal" />
        <meta name="author" content="Cabinet Mériéux" />

        {/* Open Graph pour Facebook & LinkedIn */}
        <meta property="og:title" content="Fiscalité des Entreprises | Cabinet Mériéux" />
        <meta property="og:description" content="Accompagnement en optimisation fiscale, gestion des déficits et contentieux fiscaux pour les entreprises." />
        <meta property="og:image" content="/images/fiscalite-entreprises.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cabinet-merieux.fr/droit-fiscal/entreprises" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fiscalité des Entreprises | Cabinet Mériéux" />
        <meta name="twitter:description" content="Accompagnement en droit fiscal des entreprises : gestion fiscale, déclarations, contrôle et contentieux fiscaux." />
        <meta name="twitter:image" content="/images/fiscalite-entreprises.jpg" />
      </Head>
       {/* Header personnalisé */}
       <PageHeader
        title="Fiscalité des Entreprises"
        subtitle="Maîtrisez la fiscalité avec l'expertise du Cabinet Mériéux"
        imageSrc="/header/fiscalite-entreprise.jpg"
      />

      <main className="container mx-auto p-6">
        {/* En-tête */}
        <section>
          <p className="mt-4 text-lg text-gray-700">
            La <strong>fiscalité des entreprises</strong> couvre l&rsquo;ensemble des règles encadrant l&rsquo;imposition des sociétés et des professionnels.
            Une gestion fiscale optimisée permet d&rsquo;anticiper les charges, réduire les risques et améliorer la rentabilité.
          </p>
          <p className="mt-4 text-gray-700">
            Le <strong>Cabinet Mériéux</strong> accompagne les entreprises dans la gestion et l’optimisation de leur fiscalité, 
            en tenant compte des obligations légales et des opportunités fiscales.
          </p>
        </section>

        {/* Services en Fiscalité des Entreprises */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Nos Services en Fiscalité des Entreprises</h2>

          {/* Optimisation et Stratégie Fiscale */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Optimisation et Stratégie Fiscale</h3>
            <p className="mt-2 text-gray-700">
              Le Cabinet Mériéux vous aide à élaborer une <strong>stratégie fiscale efficace</strong> pour minimiser les charges fiscales tout en respectant la réglementation.
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
            <h3 className="text-xl font-semibold text-primary text-center">Fiscalité Transactionnelle</h3>
            <p className="mt-2 text-gray-700">
              Nous vous accompagnons dans la structuration et l’optimisation des opérations d’acquisition et de cession d’entreprises.
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
            <h3 className="text-xl font-semibold text-primary text-center">Gestion des Contentieux Fiscaux</h3>
            <p className="mt-2 text-gray-700">
              En cas de contrôle fiscal ou de litige avec l&rsquo;administration fiscale, le Cabinet Mériéux vous assiste dans la gestion des contentieux.
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
            Contactez-nous pour une consultation
          </a>
        </div>
      </main>
    </>
  );
}