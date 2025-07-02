// import { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";


// export const metadata: Metadata = {
//   title: "Immobilier | Cabinet Mérieux – Avocat en transactions immobilières",
//   description: "Découvrez nos annonces immobilières et bénéficiez d'un accompagnement juridique personnalisé à chaque étape de votre transaction.",
//   keywords: [
//     "avocat immobilier",
//     "transaction immobilière",
//     "annonces immobilières",
//     "accompagnement juridique",
//     "vente de biens",
//   ],
//   authors: [{ name: "Cabinet Mérieux" }],
//   openGraph: {
//     title: "Immobilier | Cabinet Mérieux",
//     description: "Biens immobiliers à vendre, accompagnement juridique rigoureux et sécurisation des transactions.",
//     url: "https://cabinet-merieux.fr/immobilier",
//     type: "website",
//     images: ["/logometa.jpeg"],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Immobilier | Cabinet Mérieux",
//     description: "Le Cabinet Mérieux vous accompagne dans vos projets immobiliers et transactions.",
//     images: ["/logometa.jpeg"],
//   },
// };
// export default function Immobilier() {
//   return (
//     <>
    

//       <main className="container mx-auto p-6">
//       <div className="flex flex-row items-center gap-4">
//   <h1 className="text-4xl font-bold text-primary">Pôle Immobilier</h1>
//   <Image src="/logo_immo.png" alt="Logo Immobilier" width={100} height={100} priority />
// </div>
        
//         <p className="mt-4 text-lg text-gray-700">
//           Le Cabinet Mérieux vous accompagne dans vos transactions immobilières avec un suivi juridique rigoureux.
//         </p>

//         {/* Détails du bien */}
//         <section className="mt-12 bg-gray-100 p-6 rounded-lg shadow">
//   <h2 className="text-2xl font-semibold text-primary">Aucune annonce actuellement</h2>
//   <p className="mt-4 text-gray-700">
//     Aucun bien n&apos;est disponible à la vente pour le moment. 
//     Le Cabinet Mérieux publie régulièrement de nouvelles annonces.
//   </p>
//   <p className="mt-2 text-gray-700">
//     N&apos;hésitez pas à revenir consulter cette page ou à me contacter directement pour connaître les prochaines opportunités.
//   </p>
// </section>

//         {/* Contact */}
//         <section className="mt-12">
//           <h2 className="text-2xl font-semibold text-primary">Intéressé par un bien ?</h2>
//           <p className="mt-4">
//             Contactez-nous pour plus d&rsquo;informations ou pour organiser une visite.
//           </p>
//           <Link href="/contact" className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-secondary transition">
//             Contacter le cabinet
//           </Link>
//         </section>
//       </main>
//     </>
//   );
// }



import { Metadata } from "next";
import Carousel from "../components/Carousel";
import Link from "next/link";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Immobilier | Cabinet Mérieux – Avocat en transactions immobilières",
  description: "Découvrez notre bien immobilier à vendre et bénéficiez d'un accompagnement juridique sécurisé.",
  keywords: [
    "avocat immobilier",
    "transaction immobilière",
    "maison à vendre"
  ],
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Immobilier | Cabinet Mérieux",
    description: "Découvrez cette maison de caractère, idéalement située dans un quartier très calme.",
    url: "https://cabinet-merieux.fr/immobilier",
    type: "website",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immobilier | Cabinet Mérieux",
    description: "Maison à vendre accompagnée par un avocat spécialisé en transactions immobilières.",
    images: ["/logometa.jpeg"],
  },
};
export default function Immobilier() {
  return (
    <>
    

      <main className="container mx-auto p-6">
      <div className="flex flex-row items-center gap-4">
  <h1 className="text-4xl font-bold text-primary">Pôle Immobilier</h1>
  <Image src="/logo_immo.png" alt="Logo Immobilier" width={100} height={100} priority />
</div>
        
        <p className="mt-4 text-lg text-gray-700">
          Le Cabinet Mérieux vous accompagne dans vos transactions immobilières avec un suivi juridique rigoureux.
        </p>

        {/* Détails du bien */}
       <section className="mt-12 bg-gray-100 p-6 rounded-lg shadow">
  <h2 className="text-2xl font-semibold text-primary">À vendre : T3 – Quartier Jean-Jaurès, Montrouge</h2>

  {/* Carrousel */}
  <section className="mt-8">
    <Carousel />
  </section>

  <p className="mt-4 text-gray-700">
    <strong>Appartement de 65 m² à usage d’habitation ou professionnel</strong>
  </p>
  <p className="mt-4 text-gray-700">
    Venez découvrir cet appartement de 3 pièces situé au rez-de-chaussée d’un immeuble sécurisé avec gardien,
    en plein cœur du quartier calme et dynamique Jean-Jaurès, à proximité immédiate des commerces, écoles et transports
    en commun (métro, bus). 
  </p>
  <p className="mt-4 text-gray-700">
    Il offre une entrée, un séjour, une cuisine, deux chambres donnant sur des espaces verts, une salle de bain, un WC séparé avec lave-mains
    et de nombreux placards de rangement.
  </p>
  <ul className="mt-4 list-disc list-inside text-gray-700">
    <li>Jardin privatif d’environ 6,5 m²</li>
    <li>Parking inclus</li>
    <li>Cave</li>
    <li>Ancien cabinet médical, encore équipé</li>
    <li>Convient à une famille, un professionnel libéral ou une personne à mobilité réduite</li>
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