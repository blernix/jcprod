import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinet-merieux.com"),
  title: "Cabinet Mérieux – Avocat en droit fiscal",
  description: "Expertise en droit fiscal, droit des affaires, transactions immobilières et création d'affaires et sociétés.",
};

const UMAMI_WEBSITE_ID = "1cab1ebf-2f6a-4173-ae82-1a1f3ae07f1f";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
        <Script
          defer
          src="https://analytique.killian-lecrut.com/script.js"
          data-website-id={UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
        <Script
          defer
          src="https://analytique.killian-lecrut.com/recorder.js"
          data-website-id={UMAMI_WEBSITE_ID}
          data-sample-rate="1"
          data-mask-level="moderate"
          data-max-duration="300000"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-light text-dark">
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>

        <Footer />
      </body>
    </html>
  );
}