import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Informations du cabinet */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Cabinet Mérieux</h2>
          <p className="mt-2 text-sm">
            <Link 
              href="https://maps.google.com/?q=1+RUE+HONORE+DAUMIER,77000+La+Rochette" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-secondary hover:underline"
            >
              📍 1 Rue Honoré Daumier, 77000 La Rochette
            </Link>
          </p>
          <p className="text-sm">
            📞 <Link href="tel:+33607343116" className="hover:text-secondary">06 07 34 31 16</Link>
          </p>
          <p className="text-sm">
            📧 <Link href="mailto:jcm@cabinet-merieux.com" className="hover:text-secondary">jcm@cabinet-merieux.com</Link>
          </p>
        </div>

      

        {/* Liens rapides */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-lg font-semibold">Liens utiles</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/a-propos" className="hover:text-secondary">À Propos</Link></li>
            <li><Link href="/droit-fiscal" className="hover:text-secondary">Droit Fiscal</Link></li>
            <li><Link href="/honoraires" className="hover:text-secondary">Honoraires</Link></li>
            <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>

           {/* Section Logos */}
           <div className="mt-6 md:mt-0 flex:col items-center justify-center gap-4">
          <Image src="/logo_avocat.png" alt="Logo Avocats" width={80} height={80} priority />
          <Image src="/logo.png" alt="Logo Client" width={130} height={130} priority />
            <Image src="/logo_immo.png" alt="Logo Immobilier" width={100} height={100} priority />
          
        </div>

        {/* Mentions légales & Politique de confidentialité */}
        <div className="mt-6 md:mt-0 text-center md:text-right text-xs">
          <p>© {new Date().getFullYear()} Cabinet Mérieux. Tous droits réservés.</p>
          <p>
            <Link href="/mentions-legales" className="hover:text-secondary">Mentions légales</Link> | <Link href="/confidentialite" className="hover:text-secondary">Politique de confidentialité</Link>
          </p>
        </div>

       
      </div>
    </footer>
  );
}