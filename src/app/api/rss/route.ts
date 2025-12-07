import { NextResponse } from "next/server";
import Parser from "rss-parser";

export async function GET() {
  try {
    // Récupérer le flux RSS d'Actu-Juridique (flux gratuit et accessible)
    const response = await fetch("https://www.actu-juridique.fr/feed/", {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
        'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlText = await response.text();
    const parser = new Parser();
    const feed = await parser.parseString(xmlText);

    const articles = feed.items.map((item) => ({
      title: item.title || "Titre non disponible",
      link: item.link || "#",
      description: item.contentSnippet || item.content || "Description non disponible",
      pubDate: item.pubDate || "Date inconnue",
    }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Erreur lors du chargement du flux RSS :", error);
    return NextResponse.json({ error: "Erreur lors du chargement du flux RSS" }, { status: 500 });
  }
}