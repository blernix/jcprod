import Head from "next/head";

export default function ConfidentialitePage() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité | Cabinet Mériéux</title>
        <meta name="description" content="Politique de confidentialité et gestion des données personnelles du Cabinet Mériéux." />
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary text-center">Politique de Confidentialité</h1>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">1. Collecte de données</h2>
          <p className="mt-4 text-center">
            Le site ne collecte aucune donnée personnelle via des formulaires ou des cookies.  
            Aucune information personnelle n’est stockée ou analysée à des fins marketing.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">2. Logs serveur</h2>
          <p className="mt-4 text-center">
            Le serveur enregistre des logs techniques de connexion (<strong>adresse IP, date, heure et pages consultées</strong>) uniquement à des fins de sécurité et de diagnostic.  
            Ces logs sont supprimés après <strong>3 mois</strong>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">3. Droits des utilisateurs</h2>
          <p className="mt-4 text-center">
            Conformément au RGPD, vous disposez d’un <strong>droit d’accès, de rectification et de suppression</strong> de vos données.  
            Pour toute demande, contactez-nous à :
          </p>
          <p className="mt-4 text-center">
            <strong>Email :</strong> jcm@cabinet-merieux.com
          </p>
        </section>
      </main>
    </>
  );
}