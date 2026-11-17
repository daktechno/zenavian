/**
 * Business locations. CITY-LEVEL ONLY until the owner supplies verified details.
 *
 * Nothing here is an invented street address, coordinate or map pin. The map/directions links
 * search for the city name only. To upgrade a location, fill the optional fields:
 *   addressLines: ['Street line', 'Area', 'City PIN']   // verified postal address
 *   postal: { streetAddress, addressLocality, addressRegion, postalCode }  // used for schema.org ONLY with verified: true
 *   coordinates: { lat, lng }                            // verified coordinates
 *   mapsUrl: 'https://maps.app.goo.gl/...'               // verified Google Maps place/share link
 *   embedUrl: 'https://www.google.com/maps/embed?pb=...' // verified embed URL (overrides the keyless city embed)
 *   verified: true                                       // enables LocalBusiness JSON-LD for this location
 *
 * Optional env var: VITE_GOOGLE_MAPS_EMBED_API_KEY – if set, the official Maps Embed API is used
 * (restrict that key by HTTP referrer in Google Cloud). Without a key a keyless city-level embed is used.
 */
export const locations = [
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    region: 'Telangana',
    country: 'India',
    label: 'Hyderabad',
    role: 'Poultry Corridor Hub',
    description: 'Poultry healthcare enquiries and distribution coordination for the Hyderabad region.',
    addressLines: [],
    postal: null,
    coordinates: null,
    mapsUrl: null,
    embedUrl: null,
    verified: false,
  },
  {
    id: 'bengaluru',
    city: 'Bengaluru',
    region: 'Karnataka',
    country: 'India',
    label: 'Bengaluru',
    role: 'Poultry Corridor Hub',
    description: 'Poultry healthcare enquiries and distribution coordination for the Bengaluru region.',
    addressLines: [],
    postal: null,
    coordinates: null,
    mapsUrl: null,
    embedUrl: null,
    verified: false,
  },
]

export const mapConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY || '',
}

export const cityQuery = (loc) => `${loc.city}, ${loc.region}, ${loc.country}`

/** Google Maps search link for the place (city-level unless a verified mapsUrl exists). */
export const getMapsUrl = (loc) =>
  loc.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cityQuery(loc))}`

/** Directions link to the place. */
export const getDirectionsUrl = (loc) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    loc.coordinates ? `${loc.coordinates.lat},${loc.coordinates.lng}` : cityQuery(loc),
  )}`

export const getEmbedUrl = (loc) => {
  if (loc.embedUrl) return loc.embedUrl
  const q = encodeURIComponent(cityQuery(loc))
  return mapConfig.apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${mapConfig.apiKey}&q=${q}`
    : `https://www.google.com/maps?q=${q}&output=embed`
}
