"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Carousel from "@/app/components/Carousel";
import Lightbox from "@/app/components/Lightbox";

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
  description: string;
  features: string[];
}

export default function PropertyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    async function fetchProperty() {
      const resolvedParams = await params;
      const { slug } = resolvedParams;

      const res = await fetch('/data/properties.json');
      const data = await res.json();
      const foundProperty = data.properties.find((p: Property) => p.slug === slug);

      if (!foundProperty) {
        notFound();
      }

      setProperty(foundProperty);
      setLoading(false);
    }

    fetchProperty();
  }, [params]);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNextImage = () => {
    if (property) {
      setLightboxIndex((prev) => (prev + 1) % property.images.length);
    }
  };

  const handlePreviousImage = () => {
    if (property) {
      setLightboxIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    }
  };

  if (loading) {
    return (
      <main className="container mx-auto p-6">
        <p className="text-center text-gray-600">Chargement...</p>
      </main>
    );
  }

  if (!property) {
    return null;
  }

  return (
    <main className="container mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/immobilier" className="hover:text-primary transition">
          ← Retour aux annonces
        </Link>
      </nav>

      {/* Property Details */}
      <section className="bg-gray-100 p-6 rounded-lg shadow">
        <h1 className="text-3xl font-semibold text-primary mb-2">{property.title}</h1>

        <div className="flex gap-4 text-gray-600 mb-6">
          <span className="font-medium">{property.type}</span>
          <span>•</span>
          <span>{property.surface} m²</span>
          <span>•</span>
          <span>{property.location}</span>
        </div>

        {/* Carousel */}
        <section className="mt-8">
          <Carousel images={property.images} onImageClick={handleImageClick} />
          <p className="text-sm text-gray-500 text-center mt-2">Cliquez sur une image pour agrandir</p>
        </section>

        <p className="mt-6 text-gray-700">
          <strong>Appartement de {property.surface} m² à usage d&apos;habitation ou professionnel</strong>
        </p>

        {property.description.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mt-4 text-gray-700">
            {paragraph}
          </p>
        ))}

        <ul className="mt-4 list-disc list-inside text-gray-700">
          {property.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <p className="mt-6">
          <strong className="text-xl text-secondary">Prix : {property.price}</strong>
        </p>
      </section>

      {/* Contact */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-primary">Intéressé par ce bien ?</h2>
        <p className="mt-4">
          Contactez-nous pour plus d&rsquo;informations ou pour organiser une visite.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-secondary transition"
        >
          Contacter le cabinet
        </Link>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={property.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
        />
      )}
    </main>
  );
}
