import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/.next/', '/_next/'],
      },
      // Ralentir les bots trop agressifs
      {
        userAgent: 'MJ12bot',
        crawlDelay: 1,
      },
      {
        userAgent: 'AhrefsBot',
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://cabinet-merieux.com/sitemap.xml',
  };
}
