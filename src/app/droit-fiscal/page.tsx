import Head from "next/head";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export default function DroitFiscalPage() {
  return (
    <>
      <Head>
        <title>Droit Fiscal | Cabinet Mériéux</title>
        <meta name="description" content="Le Cabinet Mériéux vous accompagne en droit fiscal : fiscalité des entreprises, patrimoniale, immobilière, TVA et contentieux fiscaux." />
        <meta name="keywords" content="droit fiscal, avocat fiscaliste, fiscalité des entreprises, fiscalité patrimoniale, fiscalité immobilière, contentieux fiscaux" />
        <meta name="author" content="Cabinet Mériéux" />

        {/* Open Graph pour Facebook & LinkedIn */}
        <meta property="og:title" content="Droit Fiscal | Cabinet Mériéux" />
        <meta property="og:description" content="Expertise en fiscalité des entreprises, patrimoine, immobilier et contentieux fiscaux." />
        <meta property="og:image" content="/images/droit-fiscal.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cabinet-merieux.fr/droit-fiscal" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Droit Fiscal | Cabinet Mériéux" />
        <meta name="twitter:description" content="Accompagnement en droit fiscal : entreprises, patrimoine, immobilier et litiges fiscaux." />
        <meta name="twitter:image" content="/images/droit-fiscal.jpg" />
      </Head>

       {/* Header personnalisé */}
       <PageHeader
        title="Droit Fiscal"
        subtitle="Maîtrisez la fiscalité avec l&rsquo;expertise du Cabinet Mériéux"
        imageSrc="/header/fiscalite.jpg"
      />

      <main className="container mx-auto p-6">
        {/* Introduction */}
        <section>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Le <strong>droit fiscal</strong> regroupe l&rsquo;ensemble des règles encadrant l&rsquo;imposition des particuliers et des entreprises.
            Il permet d&rsquo;assurer une gestion optimale de la fiscalité, tout en respectant les obligations légales.
          </p>
          <p className="mt-4 text-gray-700 text-center">
            Le Cabinet Mériéux vous accompagne dans tous les aspects du droit fiscal, que ce soit pour
            <strong> optimiser votre fiscalité</strong>, <strong>gérer un contentieux</strong> ou <strong>assurer la conformité de votre entreprise</strong>.
          </p>
        </section>

        {/* Cartes des spécialisations */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fiscalité des Entreprises */}
          <div className="bg-light shadow-lg p-6 rounded-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-primary text-center">Fiscalité des Entreprises</h2>
            <p className="mt-2 text-gray-700 text-center">
              Stratégie et optimisation fiscale pour les entreprises, gestion des groupes et fiscalité internationale.
            </p>
            <Link href="/droit-fiscal/entreprises" className="mt-4 inline-block text-secondary hover:underline">
              En savoir plus →
            </Link>
          </div>

          {/* Fiscalité Patrimoniale */}
          <div className="bg-light shadow-lg p-6 rounded-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-primary text-center">Fiscalité Patrimoniale</h2>
            <p className="mt-2 text-gray-700 text-center">
              Gestion de la transmission de patrimoine, optimisation de l’impôt et successions.
            </p>
            <Link href="/droit-fiscal/patrimoniale" className="mt-4 inline-block text-secondary hover:underline">
              En savoir plus →
            </Link>
          </div>

          {/* Fiscalité Immobilière */}
          <div className="bg-light shadow-lg p-6 rounded-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-primary text-center">Fiscalité Immobilière</h2>
            <p className="mt-2 text-gray-700 text-center">
              Accompagnement sur la fiscalité des transactions immobilières et structuration fiscale.
            </p>
            <Link href="/droit-fiscal/immobiliere" className="mt-4 inline-block text-secondary hover:underline">
              En savoir plus →
            </Link>
          </div>

          {/* Fiscalité Indirecte */}
          <div className="bg-light shadow-lg p-6 rounded-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-primary text-center">Fiscalité Indirecte</h2>
            <p className="mt-2 text-gray-700 text-center">
              Gestion des taxes indirectes comme la TVA, les droits d&rsquo;enregistrement et la CVAE.
            </p>
            <Link href="/droit-fiscal/indirecte" className="mt-4 inline-block text-secondary hover:underline">
              En savoir plus →
            </Link>
          </div>

          {/* Contrôle et Contentieux Fiscaux */}
          <div className="bg-light shadow-lg p-6 rounded-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-primary text-center">Contrôle et Contentieux Fiscaux</h2>
            <p className="mt-2 text-gray-700 text-center">
              Défense et accompagnement lors de contrôles fiscaux et litiges avec l&rsquo;administration.
            </p>
            <Link href="/droit-fiscal/contentieux" className="mt-4 inline-block text-secondary hover:underline">
              En savoir plus →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}