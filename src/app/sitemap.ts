import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cabinet-merieux.com';

  // Pages statiques principales
  const staticPages = [
    '',
    '/a-propos',
    '/contact',
    '/honoraires',
    '/actualites',
    '/immobilier',
    '/mentions-legales',
    '/confidentialite',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/actualites' || route === '/immobilier'
      ? 'weekly' as const
      : 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.7,
  }));

  // Pages Droit Fiscal
  const droitFiscalPages = [
    '/droit-fiscal',
    '/droit-fiscal/entreprises',
    '/droit-fiscal/patrimoniale',
    '/droit-fiscal/immobiliere',
    '/droit-fiscal/indirecte',
    '/droit-fiscal/contentieux',
    '/droit-fiscal/bilan',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/droit-fiscal' ? 0.9 : 0.8,
  }));

  // Pages Droit des Affaires
  const droitAffairesPages = [
    '/droit-affaires',
    '/droit-affaires/societes',
    '/droit-affaires/commercial',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/droit-affaires' ? 0.9 : 0.8,
  }));

  // Pages Droit Social
  const droitSocialPages = [
    '/droit-social',
    '/droit-social/licenciement',
    '/droit-social/rupture-conventionnelle',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/droit-social' ? 0.9 : 0.8,
  }));

  return [
    ...staticPages,
    ...droitFiscalPages,
    ...droitAffairesPages,
    ...droitSocialPages,
  ];
}
