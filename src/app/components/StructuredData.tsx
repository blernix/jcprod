'use client';

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization / LocalBusiness Schema
      {
        '@type': 'LegalService',
        '@id': 'https://cabinet-merieux.com/#organization',
        name: 'Cabinet Mérieux',
        image: 'https://cabinet-merieux.com/logometa.jpeg',
        logo: 'https://cabinet-merieux.com/logo.png',
        description: 'Cabinet juridique spécialisé en droit fiscal, droit des affaires et transactions immobilières à La Rochette (77)',
        url: 'https://cabinet-merieux.com',
        telephone: '+33607343116',
        email: 'jcm@cabinet-merieux.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1 Rue Honoré Daumier',
          addressLocality: 'La Rochette',
          postalCode: '77000',
          addressCountry: 'FR',
          addressRegion: 'Île-de-France'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 48.509722,
          longitude: 2.668056
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'La Rochette'
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Seine-et-Marne'
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Île-de-France'
          },
          {
            '@type': 'Country',
            name: 'France'
          }
        ],
        priceRange: '€€',
        knowsAbout: [
          'Droit fiscal',
          'Droit des affaires',
          'Droit des sociétés',
          'Droit social',
          'Transactions immobilières',
          'Fiscalité des entreprises',
          'Fiscalité patrimoniale',
          'Contentieux fiscaux'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services juridiques',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Droit fiscal',
                description: 'Optimisation fiscale, déclarations et contentieux fiscaux'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Droit des affaires',
                description: 'Création d\'entreprise, contrats et litiges commerciaux'
              }
            },
            {
              '@type': 'Service',
              itemOffered: {
                '@type': 'Service',
                name: 'Droit social',
                description: 'Gestion du droit du travail, licenciements, ruptures conventionnelles'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Transactions immobilières',
                description: 'Sécurisation des transactions immobilières et accompagnement juridique'
              }
            }
          ]
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          }
        ],
        sameAs: [
          // Ajoutez ici les réseaux sociaux quand disponibles
          // 'https://www.linkedin.com/company/cabinet-merieux',
          // 'https://twitter.com/cabinetmerieux'
        ]
      },

      // Attorney / Person Schema
      {
        '@type': 'Attorney',
        '@id': 'https://cabinet-merieux.com/#attorney',
        name: 'Jean-Claude Mérieux',
        honorificPrefix: 'Maître',
        jobTitle: 'Avocat',
        worksFor: {
          '@id': 'https://cabinet-merieux.com/#organization'
        },
        knowsAbout: [
          'Droit fiscal',
          'Droit des affaires',
          'Droit des sociétés',
          'Droit social',
          'Fiscalité des entreprises'
        ],
        affiliation: {
          '@type': 'Organization',
          name: 'Barreau de Melun'
        },
        url: 'https://cabinet-merieux.com/a-propos',
        image: 'https://cabinet-merieux.com/jeanClaude.png',
        email: 'jcm@cabinet-merieux.com',
        telephone: '+33607343116',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1 Rue Honoré Daumier',
          addressLocality: 'La Rochette',
          postalCode: '77000',
          addressCountry: 'FR'
        }
      },

      // WebSite Schema
      {
        '@type': 'WebSite',
        '@id': 'https://cabinet-merieux.com/#website',
        url: 'https://cabinet-merieux.com',
        name: 'Cabinet Mérieux',
        description: 'Cabinet d\'avocat spécialisé en droit fiscal, droit des affaires et transactions immobilières',
        publisher: {
          '@id': 'https://cabinet-merieux.com/#organization'
        },
        inLanguage: 'fr-FR'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
