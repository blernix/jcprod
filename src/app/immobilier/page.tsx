import { Metadata } from "next";
import { generateCanonical } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Immobilier | Cabinet Mérieux – Avocat en transactions immobilières",
  description: "Découvrez nos biens immobiliers à vendre et bénéficiez d'un accompagnement juridique personnalisé à chaque étape de votre transaction.",
  keywords: [
    "avocat immobilier",
    "transaction immobilière",
    "annonces immobilières",
    "accompagnement juridique",
    "vente de biens",
  ],
  alternates: generateCanonical('/immobilier'),
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Immobilier | Cabinet Mérieux",
    description: "Biens immobiliers à vendre, accompagnement juridique rigoureux et sécurisation des transactions.",
    url: "https://cabinet-merieux.com/immobilier",
    type: "website",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immobilier | Cabinet Mérieux",
    description: "Le Cabinet Mérieux vous accompagne dans vos projets immobiliers et transactions.",
    images: ["/logometa.jpeg"],
  },
};

interface Property {
  id: string;
  slug: string;
  title: string;
  type: string;
  surface: number;
  location: string;
  price: string;
  available: boolean;
  images: string[];
  shortDescription: string;
}

async function getProperties(): Promise<Property[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/data/properties.json`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data.properties.filter((p: Property) => p.available);
}

export default async function Immobilier() {
  const properties = await getProperties();

  return (
    <main className="container mx-auto p-6">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-4xl font-bold text-primary">Pôle Immobilier</h1>
        <Image src="/logo_immo.png" alt="Logo Immobilier" width={100} height={100} priority />
      </div>

      <p className="mt-4 text-lg text-gray-700">
        Le Cabinet Mérieux vous accompagne dans vos transactions immobilières avec un suivi juridique rigoureux.
      </p>

      {properties.length === 0 ? (
        <section className="mt-12 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-primary">Aucune annonce actuellement</h2>
          <p className="mt-4 text-gray-700">
            Aucun bien n&apos;est disponible à la vente pour le moment.
            Le Cabinet Mérieux publie régulièrement de nouvelles annonces.
          </p>
          <p className="mt-2 text-gray-700">
            N&apos;hésitez pas à revenir consulter cette page ou à me contacter directement pour connaître les prochaines opportunités.
          </p>
        </section>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-primary mt-12 mb-6">
            {properties.length === 1 ? 'Notre bien en vente' : 'Nos biens en vente'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {property.title}
                  </h3>

                  <div className="flex gap-4 text-sm text-gray-600 mb-3">
                    <span className="font-medium">{property.type}</span>
                    <span>•</span>
                    <span>{property.surface} m²</span>
                    <span>•</span>
                    <span>{property.location}</span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {property.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-secondary">
                      {property.price}
                    </span>

                    <Link
                      href={`/immobilier/${property.slug}`}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                    >
                      Voir plus →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Contact */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-primary">Intéressé par un bien ?</h2>
        <p className="mt-4">
          Contactez-nous pour plus d&rsquo;informations ou pour organiser une visite.
        </p>
        <Link href="/contact" className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-secondary transition">
          Contacter le cabinet
        </Link>
      </section>
    </main>
  );
}
