export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Parshwanath Caterers",
    "image": "https://www.parshwanathcaterers.com/logo/logo-text.png",
    "@id": "https://www.parshwanathcaterers.com",
    "url": "https://www.parshwanathcaterers.com",
    "telephone": "+919982310686",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B-18, Mohanbadi, Surajpole gate",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.920556, // Approximate for Jaipur center
      "longitude": 75.823611
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "servesCuisine": ["Pure Vegetarian", "Jain Food", "Indian", "Marwari"],
    "priceRange": "$$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
