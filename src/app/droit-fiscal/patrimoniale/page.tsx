import Head from "next/head";
import PageHeader from "@/app/components/PageHeader";
export default function FiscalitePatrimonialePage() {
  return (
    <>
      <Head>
        <title>Fiscalité Patrimoniale | Cabinet Mériéux</title>
        <meta name="description" content="Le Cabinet Mériéux accompagne particuliers et entreprises en gestion patrimoniale, transmission de patrimoine et régularisation fiscale." />
        <meta name="keywords" content="fiscalité patrimoniale, avocat fiscaliste, transmission de patrimoine, optimisation fiscale, donation, succession" />
        <meta name="author" content="Cabinet Mériéux" />

        {/* Open Graph pour Facebook & LinkedIn */}
        <meta property="og:title" content="Fiscalité Patrimoniale | Cabinet Mériéux" />
        <meta property="og:description" content="Conseil en optimisation fiscale, gestion de patrimoine et transmission." />
        <meta property="og:image" content="/images/fiscalite-patrimoniale.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://cabinet-merieux.fr/droit-fiscal/patrimoniale" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fiscalité Patrimoniale | Cabinet Mériéux" />
        <meta name="twitter:description" content="Accompagnement en droit fiscal patrimonial : optimisation fiscale, donation, succession et régularisation fiscale." />
        <meta name="twitter:image" content="/images/fiscalite-patrimoniale.jpg" />
      </Head>
          {/* Header personnalisé */}
               <PageHeader
                title="Fiscalité Patrimoniale"
                subtitle="Maîtrisez la fiscalité avec l'expertise du Cabinet Mériéux"
                imageSrc="/header/fiscalite-patrimoniale.jpg"
              />
      <main className="container mx-auto p-6">
        {/* En-tête */}
        <section>
          <h1 className="text-4xl font-bold text-primary text-center">Fiscalité Patrimoniale</h1>
          <p className="mt-4 text-lg text-gray-700">
            La <strong>fiscalité patrimoniale</strong> régit la gestion et la transmission du patrimoine des particuliers et des entreprises.
            Une bonne stratégie permet d&rsquo;optimiser la fiscalité et d’anticiper les obligations légales.
          </p>
          <p className="mt-4 text-gray-700">
            Le <strong>Cabinet Mériéux</strong> vous accompagne dans la structuration de votre patrimoine, la transmission de vos actifs et la régularisation fiscale.
          </p>
        </section>

        {/* Services en Fiscalité Patrimoniale */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary text-center">Nos Services en Fiscalité Patrimoniale</h2>

          {/* Optimisation et Gestion Patrimoniale */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Optimisation et Gestion Patrimoniale</h3>
            <p className="mt-2 text-gray-700">
              Nous vous accompagnons dans la structuration et l&rsquo;optimisation de votre patrimoine en tenant compte des implications fiscales.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Optimisation de l&rsquo;impôt sur le revenu et de l&rsquo;impôt sur la fortune</li>
              <li>Stratégie d’investissement immobilier pour non-résidents</li>
              <li>Réorganisation patrimoniale (SCI, sociétés holding...)</li>
              <li>Gestion des flux financiers et des conventions fiscales internationales</li>
            </ul>
          </div>

          {/* Transmission de Patrimoine */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Transmission de Patrimoine</h3>
            <p className="mt-2 text-gray-700">
              Nous vous conseillons sur la meilleure façon de transmettre votre patrimoine en minimisant les coûts fiscaux.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Pacte Dutreil et donation avant cession</li>
              <li>Structuration de transmission d’entreprise</li>
              <li>Optimisation des droits de succession et de donation</li>
              <li>Démembrement de propriété et transmission optimisée</li>
            </ul>
          </div>

          {/* Régularisation et Obligations Fiscales */}
          <div className="mt-8 bg-light shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary text-center">Régularisation et Obligations Fiscales</h3>
            <p className="mt-2 text-gray-700">
              Nous vous assistons dans la régularisation de vos déclarations fiscales et la mise en conformité de votre situation patrimoniale.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Déclaration d&rsquo;impôt sur le revenu et IFI</li>
              <li>Régularisation des comptes étrangers</li>
              <li>Simulation et optimisation des coûts fiscaux</li>
              <li>Suivi des procédures auprès de l&rsquo;administration fiscale</li>
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