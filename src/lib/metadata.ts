import { Metadata } from 'next';

/**
 * Génère l'URL canonique pour une page
 * @param path - Le chemin de la page (ex: '/droit-fiscal')
 * @returns L'objet alternates pour les métadonnées Next.js
 */
export function generateCanonical(path: string): Metadata['alternates'] {
  const baseUrl = 'https://cabinet-merieux.com';
  return {
    canonical: `${baseUrl}${path}`
  };
}
