"use client";

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
    <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary text-center">Actualités Juridiques</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Retrouvez les dernières actualités juridiques en droit fiscal, droit des affaires et droit social.
        </p>

        {/* Affichage des articles */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-primary line-clamp-2">{article.title}</h2>
                  <p className="mt-2 text-gray-700 text-sm">{article.pubDate || "Date inconnue"}</p>
                  <p className="mt-4 text-gray-600 text-sm line-clamp-4">
                    {article.description || "Aucune description disponible"}
                  </p>
                </div>

                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-secondary font-semibold hover:text-red-600 transition self-start"
                >
                  Lire l&rsquo;article →
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">Chargement des actualités...</p>
          )}
        </div>
      </main>
  );
}