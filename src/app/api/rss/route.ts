import { NextResponse } from "next/server";
import Parser from "rss-parser";

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL("https://www.labase-lextenso.fr/flux-rss.xml");

    const articles = feed.items.map((item) => ({
      title: item.title || "Titre non disponible",
      link: item.link || "#",
      description: item.contentSnippet || "Description non disponible",
      pubDate: item.pubDate || "Date inconnue",
    }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Erreur lors du chargement du flux RSS :", error);
    return NextResponse.json({ error: "Erreur lors du chargement du flux RSS" }, { status: 500 });
  }
}