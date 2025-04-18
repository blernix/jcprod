"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isFiscalOpen, setIsFiscalOpen] = useState(false);
  const [isAffairesOpen, setIsAffairesOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isImmoOpen, setIsImmoOpen] = useState(false);
  const [isActuOpen, setIsActuOpen] = useState(false);

  const fiscalTimeout = useRef<NodeJS.Timeout | null>(null);
  const affairesTimeout = useRef<NodeJS.Timeout | null>(null);
  const socialTimeout = useRef<NodeJS.Timeout | null>(null);
  const immoTimeout = useRef<NodeJS.Timeout | null>(null);
  const actuTimeout = useRef<NodeJS.Timeout | null>(null);

  const openMenu = (menu: string) => {
    clearTimeout(fiscalTimeout.current as NodeJS.Timeout);
    clearTimeout(affairesTimeout.current as NodeJS.Timeout);
    clearTimeout(socialTimeout.current as NodeJS.Timeout);
    clearTimeout(immoTimeout.current as NodeJS.Timeout);
    clearTimeout(actuTimeout.current as NodeJS.Timeout);

    setIsFiscalOpen(false);
    setIsAffairesOpen(false);
    setIsSocialOpen(false);
    setIsImmoOpen(false);
    setIsActuOpen(false);

    if (menu === "fiscal") setIsFiscalOpen(true);
    else if (menu === "affaires") setIsAffairesOpen(true);
    else if (menu === "social") setIsSocialOpen(true);
    else if (menu === "immobilier") setIsImmoOpen(true);
    else setIsActuOpen(true);
  };

  const closeMenu = (menu: string) => {
    if (menu === "fiscal") {
      fiscalTimeout.current = setTimeout(() => setIsFiscalOpen(false), 300);
    } else if (menu === "affaires") {
      affairesTimeout.current = setTimeout(() => setIsAffairesOpen(false), 300);
    } else if (menu === "social") {
      socialTimeout.current = setTimeout(() => setIsSocialOpen(false), 300);
    } else if (menu === "immobilier") {
      immoTimeout.current = setTimeout(() => setIsImmoOpen(false), 300);
    } else {
      actuTimeout.current = setTimeout(() => setIsActuOpen(false), 300);
    }
  };

  const DropdownMenu = ({
    isOpen,
    onOpen,
    onClose,
    label,
    link,
    items,
  }: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    label: string;
    link: string;
    items: { name: string; href: string }[];
  }) => (
    <li className="relative z-20" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link href={link} className="hover:text-secondary flex items-center gap-1">
        {label} ▾
      </Link>
      {isOpen && (
        <ul
          className="absolute left-0 mt-2 w-56 bg-white text-primary shadow-lg rounded-md overflow-hidden"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block px-4 py-2 hover:bg-gray-200">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <>
      <nav className="bg-primary text-white h-[70px] px-4 shadow-md top-0 left-0 w-full z-10 relative">
        <div className="w-full h-full flex justify-between items-center">
          {/* Logo + Nom */}
          <div className="flex items-center gap-2">
            
            <Link href="/" className="text-md font-semibold whitespace-nowrap">
              Cabinet Mérieux
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <li><Link href="/a-propos" className="hover:text-secondary">À Propos</Link></li>
            <DropdownMenu
              isOpen={isFiscalOpen}
              onOpen={() => openMenu("fiscal")}
              onClose={() => closeMenu("fiscal")}
              label="Droit Fiscal"
              link="/droit-fiscal"
              items={[
                { name: "Fiscalité des Entreprises", href: "/droit-fiscal/entreprises" },
                { name: "Fiscalité Patrimoniale", href: "/droit-fiscal/patrimoniale" },
                { name: "Fiscalité Immobilière", href: "/droit-fiscal/immobiliere" },
                { name: "Fiscalité Indirecte", href: "/droit-fiscal/indirecte" },
                { name: "Contrôle et Contentieux Fiscaux", href: "/droit-fiscal/contentieux" },
                { name: "Bilan Patrimonial et successoral", href: "/droit-fiscal/bilan" },
              ]}
            />
            <DropdownMenu
              isOpen={isAffairesOpen}
              onOpen={() => openMenu("affaires")}
              onClose={() => closeMenu("affaires")}
              label="Droit des Affaires"
              link="/droit-affaires"
              items={[
                { name: "Droit des Sociétés", href: "/droit-affaires/societes" },
                { name: "Droit Commercial", href: "/droit-affaires/commercial" },
              ]}
            />
            <DropdownMenu
              isOpen={isSocialOpen}
              onOpen={() => openMenu("social")}
              onClose={() => closeMenu("social")}
              label="Droit Social"
              link="/droit-social"
              items={[
                { name: "Licenciement", href: "/droit-social/licenciement" },
                { name: "Rupture Conventionnelle", href: "/droit-social/rupture-conventionnelle" },
              ]}
            />
            <DropdownMenu
              isOpen={isImmoOpen}
              onOpen={() => openMenu("immobilier")}
              onClose={() => closeMenu("immobilier")}
              label="Immobilier"
              link="/immobilier"
              items={[{ name: "Nos biens en vente", href: "/immobilier" }]}
            />
            <DropdownMenu
              isOpen={isActuOpen}
              onOpen={() => openMenu("actualites")}
              onClose={() => closeMenu("actualites")}
              label="Actualités"
              link="/actualites"
              items={[{ name: "Nos articles", href: "/actualites" }]}
            />
            <li><Link href="/honoraires" className="hover:text-secondary">Honoraires</Link></li>
            <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu - en dehors de la div */}
      {isMobileMenuOpen && (
        <div className="absolute text-white top-[70px] left-0 w-full bg-primary p-4 z-20 md:hidden">
          <ul className="flex flex-col gap-4">
            <li><Link href="/a-propos" className="hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>À Propos</Link></li>
            <li><Link href="/droit-fiscal" className="hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Droit Fiscal</Link></li>
            <li><Link href="/droit-affaires" className="hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Droit des Affaires</Link></li>
            <li><Link href="/droit-social" className="hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Droit Social</Link></li>
            <li><Link href="/immobilier" className="hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Immobilier</Link></li>
            <li><Link href="/actualites" className="hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Actualités</Link></li>
            <li><Link href="/honoraires" className="hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Honoraires</Link></li>
            <li><Link href="/contact" className="hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}