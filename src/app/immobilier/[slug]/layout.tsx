import type { Metadata } from "next";

interface Property {
  slug: string;
  title: string;
  shortDescription: string;
  images: string[];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/data/properties.json`);
  const data = await res.json();
  const property = data.properties.find((p: Property) => p.slug === slug);

  if (!property) {
    return { title: "Bien non trouvé | Cabinet Mérieux" };
  }

  return {
    title: `${property.title} | Cabinet Mérieux`,
    description: property.shortDescription,
    openGraph: {
      title: `${property.title} | Cabinet Mérieux`,
      description: property.shortDescription,
      url: `https://cabinet-merieux.com/immobilier/${slug}`,
      type: "article",
      images: [property.images[0]],
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.title} | Cabinet Mérieux`,
      description: property.shortDescription,
      images: [property.images[0]],
    },
  };
}

export default function PropertyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
