import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-primary mb-6">Page non trouvée</h2>

        <p className="text-lg text-gray-700 mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          Retournez à l&apos;accueil ou explorez nos services juridiques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition"
          >
            ← Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-gray-100 transition"
          >
            Nous contacter
          </Link>
        </div>

        {/* Services suggérés */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <h3 className="text-2xl font-semibold text-primary mb-6">Nos services juridiques</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/droit-fiscal"
              className="p-6 border border-gray-300 rounded-lg hover:border-secondary hover:shadow-lg transition group"
            >
              <h4 className="font-semibold text-primary text-lg mb-2 group-hover:text-secondary">Droit Fiscal</h4>
              <p className="text-sm text-gray-600">Optimisation fiscale et conseil fiscal</p>
            </Link>

            <Link
              href="/droit-affaires"
              className="p-6 border border-gray-300 rounded-lg hover:border-secondary hover:shadow-lg transition group"
            >
              <h4 className="font-semibold text-primary text-lg mb-2 group-hover:text-secondary">Droit des Affaires</h4>
              <p className="text-sm text-gray-600">Création d&apos;entreprise et contrats</p>
            </Link>

            <Link
              href="/droit-social"
              className="p-6 border border-gray-300 rounded-lg hover:border-secondary hover:shadow-lg transition group"
            >
              <h4 className="font-semibold text-primary text-lg mb-2 group-hover:text-secondary">Droit Social</h4>
              <p className="text-sm text-gray-600">Gestion du droit du travail</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
