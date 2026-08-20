import { productsData, venueInfo } from '@/data/menu';

export default function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: venueInfo.name.fa,
    alternateName: [
      venueInfo.name.en,
      `کافه ${venueInfo.name.fa}`,
      `رستوران ${venueInfo.name.fa}`,
    ],
    description: venueInfo.description.fa,
    address: {
      '@type': 'PostalAddress',
      streetAddress: venueInfo.address.fa,
      addressLocality: venueInfo.city.fa,
      addressCountry: 'IR',
    },
    telephone: venueInfo.phone,
    servesCuisine: ['Café', 'Coffee', 'Tea', 'Pastry'],
    priceRange: '$$',
    hasMenu: {
      '@type': 'Menu',
      name: `منوی دیجیتال ${venueInfo.name.fa}`,
      hasMenuItem: productsData.map((product) => ({
        '@type': 'MenuItem',
        name: product.name.fa,
        description: product.description?.fa || '',
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'IRR',
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
