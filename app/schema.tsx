export function LocalBusinessSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    'name': 'شركة رفيف الجزيرة للمقاولات العامة',
    'image': 'https://rafeef-aljazeera.com/logo.png', // Replace with your live domain url
    '@id': 'https://rafeef-aljazeera.com',
    'url': 'https://rafeef-aljazeera.com',
    'telephone': '+966544175444',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'طريق الأمير محمد بن سلمان بن عبدالعزيز، حي حطين',
      'addressLocality': 'الرياض',
      'addressRegion': 'منطقة الرياض',
      'postalCode': '13512', // Fixed: Official Postal Code for Hittin, Riyadh
      'addressCountry': 'SA',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 24.7612,   // Fixed: Precise Latitude for your Hittin segment
      'longitude': 46.6115,  // Fixed: Precise Longitude for your Hittin segment
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
      ],
      'opens': '08:00',
      'closes': '17:00'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}