"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isFiscalOpen, setIsFiscalOpen] = useState(false);
  const [isAffairesOpen, setIsAffairesOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Nouveaux états pour Immobilier et Actualités
  const [isImmoOpen, setIsImmoOpen] = useState(false);
  const [isActuOpen, setIsActuOpen] = useState(false);

  // Références pour gérer les délais de fermeture
  const fiscalTimeout = useRef<NodeJS.Timeout | null>(null);
  const affairesTimeout = useRef<NodeJS.Timeout | null>(null);
  const socialTimeout = useRef<NodeJS.Timeout | null>(null);
  const immoTimeout = useRef<NodeJS.Timeout | null>(null);
  const actuTimeout = useRef<NodeJS.Timeout | null>(null);

  // Fonction pour ouvrir un menu
  const openMenu = (menu: string) => {
    clearTimeout(fiscalTimeout.current as NodeJS.Timeout);
    clearTimeout(affairesTimeout.current as NodeJS.Timeout);
    clearTimeout(socialTimeout.current as NodeJS.Timeout);
    clearTimeout(immoTimeout.current as NodeJS.Timeout);
    clearTimeout(actuTimeout.current as NodeJS.Timeout);

    // Fermer tous les menus avant d'ouvrir le menu ciblé
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

  // Fonction pour fermer un menu après un petit délai
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

  // Fonction générique pour créer les menus déroulants
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
    <nav className="bg-primary text-white p-4 shadow-md top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Nom */}
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-lg font-bold">Cabinet Mérieux</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link href="/a-propos" className="hover:text-secondary">
              À Propos
            </Link>
          </li>

          {/* Droit Fiscal */}
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

          {/* Droit des Affaires */}
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

          {/* Droit Social */}
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

          {/* Immobilier */}
          <DropdownMenu
            isOpen={isImmoOpen}
            onOpen={() => openMenu("immobilier")}
            onClose={() => closeMenu("immobilier")}
            label="Immobilier"
            link="/immobilier"
            items={[{ name: "Nos biens en vente", href: "/immobilier" }]}
          />

          {/* Actualités */}
          <DropdownMenu
            isOpen={isActuOpen}
            onOpen={() => openMenu("actualites")}
            onClose={() => closeMenu("actualites")}
            label="Actualités"
            link="/actualites"
            items={[{ name: "Nos articles", href: "/actualites" }]}
          />

          <li>
            <Link href="/honoraires" className="hover:text-secondary">
              Honoraires
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/a-propos"
                className="hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À Propos
              </Link>
            </li>
            <li>
              <Link
                href="/droit-fiscal"
                className="hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Droit Fiscal
              </Link>
            </li>
            <li>
              <Link
                href="/droit-affaires"
                className="hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Droit des Affaires
              </Link>
            </li>
            <li>
              <Link
                href="/droit-social"
                className="hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Droit Social
              </Link>
            </li>
            <li>
              <Link
                href="/immobilier"
                className="hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Immobilier
              </Link>
            </li>
            <li>
              <Link
                href="/actualites"
                className="hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Actualités
              </Link>
            </li>
            <li>
              <Link
                href="/honoraires"
                className="hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Honoraires
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}