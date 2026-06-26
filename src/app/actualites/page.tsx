import Link from "next/link";
import Parser from "rss-parser";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch("https://www.actu-juridique.fr/feed/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/rss+xml, application/xml, text/xml, */*",
        "Accept-Language": "fr-FR,fr;q=0.9",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const xmlText = await response.text();
    const parser = new Parser();
    const feed = await parser.parseString(xmlText);

    return feed.items.map((item) => ({
      title: item.title || "Titre non disponible",
      link: item.link || "#",
      description: item.contentSnippet || item.content || "Description non disponible",
      pubDate: item.pubDate || "Date inconnue",
    }));
  } catch {
    return [];
  }
}

export default async function ActualitesPage() {
  const articles = await getArticles();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-primary text-center">Actualités Juridiques</h1>
      <p className="mt-4 text-lg text-gray-700 text-center">
        Retrouvez les dernières actualités juridiques en droit fiscal, droit des affaires et droit social.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition flex flex-col h-full"
            >
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-primary line-clamp-2">{article.title}</h2>
                <p className="mt-2 text-gray-700 text-sm">{article.pubDate}</p>
                <p className="mt-4 text-gray-600 text-sm line-clamp-4">
                  {article.description}
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
          <p className="text-center text-gray-600 col-span-full">Aucune actualité disponible pour le moment.</p>
        )}
      </div>
    </main>
  );
}
