// Decorative hero illustration for the Digital Marketing service page — a
// simplified recreation of the Figma reference (Digital_Marketing.pdf): a
// person at a laptop surrounded by a bar chart, a pie chart, a target with
// an arrow, and message/email icons. Figma's API was rate-limited while
// this page was built, so this is a hand-drawn approximation from the PDF
// screenshot rather than an exported vector asset.
export function DigitalMarketingIllustration() {
  return (
    <svg viewBox="0 0 600 460" width="100%" height="100%" role="img" aria-label="Illustration of digital marketing">
      {/* desk + person */}
      <rect x="150" y="330" width="220" height="14" rx="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="260" cy="190" r="26" fill="#f9d94f" />
      <path d="M234 190a26 26 0 0 1 52 0v6h-52z" fill="#7c3aed" />
      <path d="M225 330c3-55 15-82 35-82s32 27 35 82" fill="none" stroke="#fff" strokeWidth="2.4" />
      <rect x="205" y="300" width="110" height="34" rx="8" fill="#f97316" />

      {/* laptop */}
      <rect x="210" y="260" width="100" height="62" rx="6" fill="#1f2937" />
      <rect x="216" y="266" width="88" height="46" rx="3" fill="#7fd3f4" />
      <rect x="190" y="320" width="150" height="10" rx="4" fill="#111827" />

      {/* bar chart */}
      <g transform="translate(400,180)">
        <rect x="0" y="40" width="18" height="60" fill="#7fd3f4" />
        <rect x="24" y="20" width="18" height="80" fill="#4ade80" />
        <rect x="48" y="55" width="18" height="45" fill="#f9d94f" />
        <path d="M0 10l24-16 24 10 24-16" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      {/* pie chart */}
      <g transform="translate(470,90)">
        <circle r="30" fill="#4ade80" />
        <path d="M0 0L0 -30A30 30 0 0 1 26 15Z" fill="#7c3aed" />
        <path d="M0 0L26 15A30 30 0 0 1 -12 28Z" fill="#f97316" />
      </g>

      {/* target */}
      <g transform="translate(120,110)">
        <circle r="36" fill="none" stroke="#fff" strokeWidth="2.4" />
        <circle r="24" fill="none" stroke="#fff" strokeWidth="2.4" />
        <circle r="10" fill="#f97316" />
        <path d="M30 -30l20 -14" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M50 -44l-4 14 14 -4z" fill="#fff" />
      </g>

      {/* email chip */}
      <rect x="440" y="300" width="70" height="50" rx="10" fill="#fff" />
      <path d="M440 306l35 26 35-26" fill="none" stroke="#2563eb" strokeWidth="2.4" />

      {/* speech bubble */}
      <rect x="60" y="230" width="60" height="40" rx="12" fill="#fff" />
      <path d="M78 270l-6 14 16-14z" fill="#fff" />
      <circle cx="78" cy="250" r="3" fill="#7c3aed" />
      <circle cx="90" cy="250" r="3" fill="#7c3aed" />
      <circle cx="102" cy="250" r="3" fill="#7c3aed" />

      {/* decoration */}
      <circle cx="420" cy="60" r="4" fill="rgba(255,255,255,0.35)" />
      <circle cx="80" cy="370" r="4" fill="rgba(255,255,255,0.35)" />
      <rect x="540" y="230" width="14" height="14" rx="3" fill="rgba(255,255,255,0.18)" />
    </svg>
  );
}
