// Decorative hero illustration for the Custom iOS Application Development
// page — a simplified recreation of the Figma reference
// (Custom_iSO_Application_Development.pdf): a phone mockup ringed by
// small feature-chip icons, next to an Apple logo roundel and the
// "iOS App Development" wordmark. Figma's API was rate-limited while
// this page was built, so this is a hand-drawn approximation from the PDF
// screenshot rather than an exported vector asset.
export function IosIllustration() {
  return (
    <svg viewBox="0 0 600 460" width="100%" height="100%" role="img" aria-label="Illustration of iOS app development">
      <rect x="40" y="40" width="520" height="220" rx="24" fill="rgba(255,255,255,0.06)" />

      {/* connector lines */}
      <g fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="4 5">
        <path d="M130 90 L185 120" />
        <path d="M130 190 L185 170" />
        <path d="M290 70 L290 110" />
        <path d="M370 190 L320 170" />
      </g>

      {/* phone mockup */}
      <rect x="230" y="78" width="120" height="180" rx="22" fill="#111827" />
      <rect x="240" y="92" width="100" height="152" rx="8" fill="#1f2937" />
      <circle cx="290" cy="150" r="22" fill="none" stroke="#7fd3f4" strokeWidth="2.4" />
      <path d="M290 136v28M278 150h24" stroke="#7fd3f4" strokeWidth="2.4" strokeLinecap="round" />

      {/* feature chips */}
      <circle cx="110" cy="90" r="24" fill="#f9d94f" />
      <path d="M110 80a10 10 0 0 1 6 18h-12a10 10 0 0 1 6-18z" fill="none" stroke="#1f2937" strokeWidth="2" />
      <path d="M104 100h12" stroke="#1f2937" strokeWidth="2.4" strokeLinecap="round" />

      <circle cx="110" cy="190" r="24" fill="#4ade80" />
      <circle cx="110" cy="190" r="8" fill="none" stroke="#fff" strokeWidth="2.2" />
      <path d="M96 190a14 14 0 0 1 28 0" fill="none" stroke="#fff" strokeWidth="2.2" />

      <circle cx="370" cy="90" r="24" fill="#7fd3f4" />
      <path d="M364 80l14 10-14 10z" fill="#1f2937" />

      <circle cx="370" cy="190" r="24" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="370" cy="190" r="10" fill="none" stroke="#fff" strokeWidth="2" />

      {/* apple roundel */}
      <circle cx="500" cy="150" r="60" fill="#e5e7eb" />
      <path
        d="M505 125c3-4 5-9 4-14-4 0-9 3-12 7-3 4-5 9-4 13 5 1 9-2 12-6z"
        fill="#1f2937"
      />
      <path
        d="M515 140c-1-10-8-16-15-16-6 0-9 4-14 4s-9-4-15-4c-8 0-15 5-19 13-8 16-2 40 6 53 4 6 8 13 15 13s9-4 17-4 12 4 18 4 11-6 15-12c4-6 6-11 6-11-7-3-11-10-11-18s5-15 11-18c-3-5-9-10-14-11z"
        fill="#1f2937"
      />
      <text x="500" y="230" textAnchor="middle" fontSize="18" fontWeight={700} fill="#fff">
        iOS App
      </text>
      <text x="500" y="252" textAnchor="middle" fontSize="18" fontWeight={700} fill="#fff">
        Development
      </text>
    </svg>
  );
}
