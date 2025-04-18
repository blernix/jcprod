"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

// Type pour structurer les articles extraits du RSS
interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

export default function ActualitesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const response = await fetch("/api/rss");
        if (!response.ok) throw new Error("Erreur lors de la récupération du flux RSS");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du RSS :", error);
      }
    };

    fetchRSSFeed();
  }, []);

  return (
    <>
      <Head>
        <title>Actualités | Cabinet Mériéux</title>
        <meta name="description" content="Suivez les actualités juridiques en droit fiscal, droit des affaires et droit social." />
        <meta name="keywords" content="actualité juridique, droit fiscal, droit des affaires, droit social, avocat" />
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary text-center">Actualités Juridiques</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Retrouvez les dernières mises à jour et articles de la base Lextenso.
        </p>

        {/* Affichage des articles */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition flex flex-col justify-between h-72 overflow-hidden"
              >
                <div className="flex flex-col flex-grow">
                  <h2 className="text-md font-semibold text-primary">{article.title}</h2>
                  <p className="mt-2 text-gray-700 text-sm">{article.pubDate || "Date inconnue"}</p>
                  <p className="mt-4 text-gray-600 text-sm">
  {article.description
    ? article.description.split(" ").slice(0, 30).join(" ") + "..."
    : ""}
</p>
                </div>

                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-secondary font-semibold hover:text-red-600 transition"
                >
                  Lire l&rsquo;article →
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Chargement des actualités...</p>
          )}
        </div>
      </main>
    </>
  );
}