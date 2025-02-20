import Head from "next/head";
import Carousel from "../components/Carousel";
import Link from "next/link";

export default function Immobilier() {
  return (
    <>
      <Head>
        <title>Immobilier | Cabinet Mériéux - Avocat en Transactions Immobilières</title>
        <meta name="description" content="Découvrez notre bien immobilier à vendre et bénéficiez d'un accompagnement juridique sécurisé." />
        <meta name="keywords" content="avocat immobilier, transaction immobilière, maison à vendre Saintry-sur-Seine" />
        <meta name="author" content="Cabinet Mériéux" />

        {/* Open Graph */}
        <meta property="og:title" content="Immobilier | Cabinet Mériéux" />
        <meta property="og:description" content="Découvrez cette magnifique demeure de 487m² à Saintry-sur-Seine, avec 8 chambres et un terrain de 1405m²." />
        <meta property="og:image" content="/immo/sejour1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cabinet-merieux.fr/immo" />
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary">Pôle Immobilier</h1>
        <p className="mt-4 text-lg text-gray-700">
          Le Cabinet Mériéux vous accompagne dans vos transactions immobilières avec un suivi juridique rigoureux.
        </p>

      
        {/* Détails du bien */}
        <section className="mt-12 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-primary">Maison à vendre - Saintry-sur-Seine</h2>
            {/* Carrousel */}
        <section className="mt-8">
          <Carousel />
        </section>

          <p className="mt-4 text-gray-700">
            <strong>10 pièces - 8 chambres - 487m²</strong> | <strong>Surface habitable (CARREZ) : 381m²</strong> | <strong>Terrain : 1405m²</strong>
          </p>
          <p className="mt-4">
            Cette belle demeure entièrement close de murs offre un cadre de vie exceptionnel avec un jardin paysager.
            Elle se compose de trois niveaux :
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Rez-de-chaussée : <strong>Séjour lumineux de 61m²</strong> avec cheminée, cuisine équipée, terrasse.</li>
            <li>Premier étage : <strong>Suite parentale avec dressing</strong>, salle d&rsquo;eau, deux chambres et un bureau.</li>
            <li>Deuxième étage : <strong>Trois chambres</strong>, salle d&rsquo;eau et WC.</li>
            <li>Sous-sol total avec <strong>cuisine d&rsquo;été</strong>, four à pain, salle de jeux, cave à vins.</li>
            <li><strong>Garage double</strong> et carport pour 2 véhicules.</li>
            <li>Prestations haut de gamme : <strong>parquet, carrelage, marbre</strong>.</li>
          </ul>
          <p className="mt-4">
            <strong>Prix :</strong> Sur demande.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-primary">Intéressé par ce bien ?</h2>
          <p className="mt-4">
            Contactez-nous pour plus d&rsquo;informations ou pour organiser une visite.
          </p>
          <Link href="/contact" className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-secondary transition">
            Contacter le cabinet
          </Link>
        </section>
      </main>
    </>
  );
}