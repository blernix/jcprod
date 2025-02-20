import Head from "next/head";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export default function DroitSocialPage() {
  return (
    <>
      <Head>
        <title>Droit Social | Cabinet Mériéux</title>
        <meta name="description" content="Le Cabinet Mériéux vous accompagne dans la gestion du droit social : licenciements, ruptures conventionnelles, relations employeur-salarié." />
        <meta name="keywords" content="droit social, licenciement, rupture conventionnelle, droit du travail, avocat entreprise" />
        <meta name="author" content="Cabinet Mériéux" />

        {/* Open Graph */}
        <meta property="og:title" content="Droit Social | Cabinet Mériéux" />
        <meta property="og:description" content="Accompagnement juridique en droit social : licenciements, ruptures conventionnelles et protection des salariés." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cabinet-merieux.fr/droit-social" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Droit Social | Cabinet Mériéux" />
        <meta name="twitter:description" content="Le Cabinet Mériéux vous conseille sur le droit du travail et les litiges employeur-salarié." />
      </Head>
         <PageHeader
              title="Droit Social"
              subtitle="Bénéficiez de l'expertise du Cabinet Mériéux"
              imageSrc="/header/droit-social.jpg"
            />

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary text-center">Droit Social</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Le Cabinet de Maître Jean-Claude MÉRIEUX accompagne les employeurs et salariés sur toutes les problématiques liées au <strong>droit du travail</strong>.
        </p>

        {/* Présentation */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-primary">Un accompagnement juridique en droit social</h2>
          <p className="mt-4">
            Le <strong>droit social</strong> régit les relations entre employeurs et salariés. Il encadre les conditions de travail, la gestion des contrats et la <strong>résolution des litiges</strong>.
          </p>
          <p className="mt-4">
            Le Cabinet Mériéux vous aide à <strong>sécuriser vos décisions</strong> en respectant la réglementation en vigueur.
          </p>
        </section>

        {/* Domaines d'intervention */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Domaines d’intervention</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Carte Licenciement */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Licenciement</h3>
              <p className="mt-2">Accompagnement sur les procédures de licenciement, inaptitude physique, obligations légales.</p>
              <Link href="/droit-social/licenciement" className="text-primary mt-4 inline-block">En savoir plus →</Link>
            </div>

            {/* Carte Rupture Conventionnelle */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-secondary">Rupture Conventionnelle</h3>
              <p className="mt-2">Négociation de rupture de contrat, recours possibles, respect des délais légaux.</p>
              <Link href="/droit-social/rupture-conventionnelle" className="text-primary mt-4 inline-block">En savoir plus →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}