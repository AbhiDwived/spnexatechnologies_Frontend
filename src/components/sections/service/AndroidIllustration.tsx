// Decorative hero illustration for the Android Development Company page —
// a simplified recreation of the Figma reference
// (Android__Application_Development_Company.pdf): a green phone mockup
// with the Android robot and wordmark, next to a second phone showing a
// document preview. Figma's API was rate-limited while this page was
// built, so this is a hand-drawn approximation from the PDF screenshot
// rather than an exported vector asset.
export function AndroidIllustration() {
  return (
    <svg viewBox="0 0 600 460" width="100%" height="100%" role="img" aria-label="Illustration of Android app development">
      {/* green phone */}
      <rect x="150" y="60" width="210" height="340" rx="26" fill="#111827" />
      <rect x="162" y="78" width="186" height="304" rx="10" fill="#3ddc84" />

      {/* android robot */}
      <g transform="translate(255,190)">
        <path d="M-38 0v54a9 9 0 0 0 9 9h58a9 9 0 0 0 9-9V0z" fill="#fff" />
        <path d="M-38 0a38 38 0 0 1 76 0z" fill="#fff" />
        <path d="M-38 8h-12M38 8h12" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
        <path d="M-20 -32l-7-12M20 -32l7-12" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
        <circle cx="-13" cy="-16" r="3.6" fill="#3ddc84" />
        <circle cx="13" cy="-16" r="3.6" fill="#3ddc84" />
        <rect x="-10" y="66" width="10" height="20" rx="3" fill="#fff" />
        <rect x="6" y="66" width="10" height="20" rx="3" fill="#fff" />
      </g>
      <text x="255" y="350" textAnchor="middle" fontSize="26" fontWeight={800} fill="#fff" style={{ fontFamily: "var(--font-alt, sans-serif)" }}>
        Android
      </text>

      {/* second phone: document preview */}
      <rect x="380" y="90" width="150" height="230" rx="22" fill="#0b1220" />
      <rect x="392" y="104" width="126" height="202" rx="8" fill="#f4f7fb" />
      <g stroke="#f97316" strokeWidth="4" strokeLinecap="round">
        <path d="M406 128h50" />
        <path d="M406 140h70" />
      </g>
      <g stroke="#7c3aed" strokeWidth="4" strokeLinecap="round">
        <path d="M406 160h60" />
        <path d="M406 172h40" />
      </g>
      <g stroke="#94a3b8" strokeWidth="3" strokeLinecap="round">
        <path d="M406 196h90" />
        <path d="M406 208h90" />
        <path d="M406 220h60" />
      </g>
      <rect x="406" y="250" width="90" height="26" rx="13" fill="#3ddc84" />

      {/* connector dots/decoration */}
      <circle cx="110" cy="100" r="4" fill="rgba(255,255,255,0.3)" />
      <circle cx="540" cy="350" r="4" fill="rgba(255,255,255,0.3)" />
      <rect x="90" y="330" width="14" height="14" rx="3" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}
