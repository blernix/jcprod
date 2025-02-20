import Head from "next/head";

export default function MentionsLegalesPage() {
  return (
    <>
      <Head>
        <title>Mentions Légales | Cabinet Mériéux</title>
        <meta name="description" content="Mentions légales du Cabinet Mériéux, avocat à La Rochette." />
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary text-center">Mentions Légales</h1>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">Propriétaire du site</h2>
          <p className="mt-4 text-center">
            <strong>Maître Jean-Claude MÉRIEUX</strong><br />
            1 Rue Honoré Daumier, 77000 La Rochette<br />
            <strong>Téléphone :</strong> 06 07 34 31 16<br />
            <strong>Email :</strong> jcm@cabinet-merieux.com
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">Hébergement</h2>
          <p className="mt-4 text-center">
            <strong>Hostinger International Ltd.</strong><br />
            61 Lordou Vironos Street, Larnaca, 6023, Chypre<br />
            <strong>Serveur utilisé :</strong> VPS situé en France
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">Activité réglementée</h2>
          <p className="mt-4 text-center">
            Maître Jean-Claude MÉRIEUX est inscrit au <strong>Barreau de Melun</strong> et exerce sous le respect des règles de la profession d&rsquo;avocat.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">Médiation et règlement des litiges</h2>
          <p className="mt-4 text-center">
            En cas de litige avec un avocat, vous pouvez recourir au <strong>Médiateur National de la Consommation de la Profession d&rsquo;Avocat</strong> :
          </p>
          <p className="mt-4 text-center">
            <strong>CNB - Médiateur de la Consommation</strong><br />
            22 Rue de Londres, 75009 PARIS<br />
            <a href="https://mediateur-consommation-avocat.fr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              https://mediateur-consommation-avocat.fr
            </a>
          </p>
        </section>
      </main>
    </>
  );
}