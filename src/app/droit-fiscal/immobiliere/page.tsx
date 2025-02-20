import Head from "next/head";

export default function FiscaliteImmobilierePage() {
  return (
    <>
      <Head>
        <title>Fiscalité Immobilière | Cabinet Mériéux</title>
        <meta name="description" content="Le Cabinet Mériéux accompagne particuliers et entreprises en fiscalité immobilière : acquisitions, cessions, optimisation fiscale et structuration d’investissement." />
        <meta name="keywords" content="fiscalité immobilière, avocat fiscaliste, acquisition immobilière, cession immobilière, SCI, optimisation fiscale" />
        <meta name="author" content="Cabinet Mériéux" />

        {/* Open Graph pour Facebook & LinkedIn */}
        <meta property="og:title" content="Fiscalité Immobilière | Cabinet Mériéux" />
        <meta property="og:description" content="Accompagnement en structuration fiscale pour l'immobilier, gestion des acquisitions et cessions, et optimisation des investissements immobiliers." />
        <meta property="og:image" content="/images/fiscalite-immobiliere.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cabinet-merieux.fr/droit-fiscal/immobiliere" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fiscalité Immobilière | Cabinet Mériéux" />
        <meta name="twitter:description" content="Conseil en fiscalité immobilière : gestion des acquisitions, cessions et structuration d'investissement." />
        <meta name="twitter:image" content="/images/fiscalite-immobiliere.jpg" />
      </Head>

      <main className="container mx-auto p-6">
        {/* En-tête */}
        <section>
          <h1 className="text-4xl font-bold text-primary text-center">Fiscalité Immobilière</h1>
          <p className="mt-4 text-lg text-gray-700">
            La <strong>fiscalité immobilière</strong> concerne les règles fiscales applicables aux transactions immobilières, aux investissements et aux structures de détention d’immeubles.
          </p>
          <p className="mt-4 text-gray-700">
            Le <strong>Cabinet Mérieux</strong> accompagne les particuliers et les entreprises dans la gestion de leurs investissements immobiliers et l&rsquo;optimisation de leur fiscalité.
          </p>
        </section>

        {/* Services en Fiscalité Immobilière */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Nos Services en Fiscalité Immobilière</h2>

          {/* Structuration et Optimisation Fiscale des Investissements */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Structuration et Optimisation Fiscale des Investissements</h3>
            <p className="mt-2 text-gray-700">
              Nous vous accompagnons dans la structuration de vos investissements immobiliers pour optimiser leur rentabilité et minimiser les charges fiscales.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Création de SCI et sociétés holding immobilières</li>
              <li>Optimisation fiscale pour investisseurs résidents et non-résidents</li>
              <li>Gestion des flux fiscaux en structuration immobilière</li>
              <li>Planification successorale et patrimoniale</li>
            </ul>
          </div>

          {/* Fiscalité des Acquisitions et Cessions Immobilières */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Fiscalité des Acquisitions et Cessions Immobilières</h3>
            <p className="mt-2 text-gray-700">
              Nos experts vous conseillent sur la fiscalité applicable lors des transactions immobilières afin d&rsquo;optimiser vos investissements.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Analyse fiscale des acquisitions et cessions d&rsquo;immeubles</li>
              <li>Optimisation des droits d&rsquo;enregistrement et des plus-values</li>
              <li>Fiscalité de l’achat pour revente et TVA immobilière</li>
              <li>Structuration des transactions immobilières</li>
            </ul>
          </div>

          {/* Régime Fiscal des Revenus Locatifs et Fiscalité Internationale */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Régime Fiscal des Revenus Locatifs et Fiscalité Internationale</h3>
            <p className="mt-2 text-gray-700">
              Nous vous assistons dans la gestion fiscale de vos revenus locatifs et des obligations fiscales internationales.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Choix du régime fiscal pour les revenus locatifs</li>
              <li>Gestion des taxes foncières et obligations fiscales locales</li>
              <li>Optimisation fiscale pour les non-résidents</li>
              <li>Structuration d&rsquo;investissements immobiliers à l&rsquo;étranger</li>
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