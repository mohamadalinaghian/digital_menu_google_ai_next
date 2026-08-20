import { productsData, venueInfo } from "@/data/menu-data";

export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: venueInfo.name.fa,
    alternateName: ["Chino Cafe", "کافه چینو شاهرود", "رستوران چینو"],
    description: venueInfo.description.fa,
    address: {
      "@type": "PostalAddress",
      streetAddress: "خیابان فردوسی، نبش کوچه یاس",
      addressLocality: "شاهرود",
      addressRegion: "سمنان",
      addressCountry: "IR",
    },
    telephone: venueInfo.phone,
    servesCuisine: ["Café", "Specialty Coffee", "Persian Traditional Infusions", "Pastry", "Brunch"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:30",
        closes: "23:30",
      },
    ],
    hasMenu: {
      "@type": "Menu",
      name: "منوی کافه و رستوران چینو",
      hasMenuItem: productsData.slice(0, 10).map((product) => ({
        "@type": "MenuItem",
        name: product.name.fa,
        description: product.description?.fa || "",
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "IRR",
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
