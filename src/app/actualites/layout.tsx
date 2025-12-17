import { Metadata } from "next";
import { generateCanonical } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Actualités | Cabinet Mérieux – Dernières nouvelles juridiques",
  description: "Suivez les dernières actualités juridiques en droit fiscal, droit des affaires et droit social. Consultez nos articles et analyses.",
  keywords: [
    "actualité juridique",
    "news avocat",
    "droit fiscal",
    "droit des affaires",
    "droit social",
    "cabinet Mérieux"
  ],
  alternates: generateCanonical('/actualites'),
  authors: [{ name: "Cabinet Mérieux" }],
  openGraph: {
    title: "Actualités | Cabinet Mérieux",
    description: "Dernières actualités juridiques et analyses du Cabinet Mérieux.",
    url: "https://cabinet-merieux.com/actualites",
    type: "website",
    images: ["/logometa.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Actualités | Cabinet Mérieux",
    description: "Suivez les dernières actualités juridiques.",
    images: ["/logometa.jpeg"],
  },
};

export default function ActualitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
