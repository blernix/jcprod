import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RdvCards from "./components/RdvCards";

export const metadata: Metadata = {
  title: "Cabinet Mériéux - Avocat en Droit Fiscal",
  description: "Expertise en droit fiscal, droit des affaires et transactions immobilières.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-light text-dark">
        <Navbar/>
        {children}
        <RdvCards/>
        <Footer/>
      </body>
    </html>
  );
}