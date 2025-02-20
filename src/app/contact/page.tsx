import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
    return (
      <>
        <Head>
          <title>Contact | Cabinet Mériéux - Avocat en Droit Fiscal</title>
          <meta name="description" content="Contactez le Cabinet Mériéux pour toute question juridique en droit fiscal, droit des affaires et droit social." />
          <meta name="keywords" content="contact avocat, cabinet Mériéux, avocat fiscaliste, droit des affaires" />

          {/* Open Graph */}
          <meta property="og:title" content="Contact | Cabinet Mériéux - Avocat en Droit Fiscal" />
          <meta property="og:description" content="Besoin d’un avocat en droit fiscal ou droit des affaires ? Contactez Maître Jean-Claude Mériéux." />
          <meta property="og:url" content="https://cabinet-merieux.fr/contact" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <main className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-primary text-center">Contact</h1>
          <p className="mt-4 text-center">Besoin d’un conseil ? Contactez-nous :</p>

          <ul className="mt-6 space-y-4 text-center">
            {/* 📍 Adresse - Ouvre Google Maps ou Apple Plans */}
            <li>
              <Link 
                href="https://maps.google.com/?q=1+RUE+HONORE+DAUMIER,77000+La+Rochette" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:underline"
              >
                📍 1 Rue Honoré Daumier, 77000 La Rochette
              </Link>
            </li>

            {/* 📞 Numéro de téléphone - Ouvre l'application d’appel */}
            <li>
              <Link href="tel:+33607343116" className="text-secondary hover:underline">
                📞 06 07 34 31 16
              </Link>
            </li>

            {/* 📧 Email - Ouvre le client mail */}
            <li>
              <Link href="mailto:jcm@cabinet-merieux.com" className="text-secondary hover:underline">
                📧 jcm@cabinet-merieux.com
              </Link>
            </li>
          </ul>
        </main>
      </>
    );
}