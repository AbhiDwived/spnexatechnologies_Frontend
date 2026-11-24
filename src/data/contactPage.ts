// Transcribed from Contact_us.pdf (a single tall Figma export). This
// page's own address/phone/rating block is kept separate from
// serviceContact.ts (reused by every /services and /solutions page's
// inline contact form, which has its own, different placeholder
// address/phone — a pre-existing inconsistency in the source material,
// left as-is since changing it wasn't asked for) because this page's PDF
// gives a distinct, more complete address with a real map pin and rating.
export const contactPageInfo = {
  email: "www.contact@tricklesolutions.com",
  phone: "+91 98882-25514",
  addressLines: ["A-21, Neelpadam Kunj Complex, Sector 3, Vaishali, Ghaziabad, Uttar Pradesh 201010"],
  rating: 4.5,
  reviewCount: 299,
  // A real, working Google Maps search link for the address above — used
  // instead of an embedded map image/screenshot, since this project has
  // no actual Maps embed to show and a fake static map graphic would
  // misrepresent itself as a live map.
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=A-21,+Neelpadam+Kunj+Complex,+Sector+3,+Vaishali,+Ghaziabad,+Uttar+Pradesh+201010",
};
