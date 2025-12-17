import type { Metadata } from "next";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
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