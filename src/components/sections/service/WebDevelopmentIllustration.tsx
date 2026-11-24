// Decorative hero illustration for the Web Development service page — a
// simplified recreation of the Web_Development.pdf reference: a desktop
// monitor showing a code-editor-style UI, ringed by floating tech-stack
// chips ("</>", js, java, html, c++) and gear/cloud icons. Figma's API was
// rate-limited while this page was built, so this is a hand-drawn
// approximation from the PDF screenshot rather than an exported vector
// asset.
export function WebDevelopmentIllustration() {
  return (
    <svg viewBox="0 0 600 460" width="100%" height="100%" role="img" aria-label="Illustration of web development">
      {/* monitor */}
      <rect x="170" y="110" width="260" height="190" rx="14" fill="rgba(255,255,255,0.1)" stroke="#fff" strokeWidth="2" />
      <rect x="186" y="126" width="80" height="80" rx="6" fill="rgba(255,255,255,0.12)" stroke="#fff" strokeWidth="1.4" />
      <path d="M198 158l10 10-10 10M230 178l12-30" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="276" y="126" width="138" height="10" rx="5" fill="#f9d94f" />
      <rect x="276" y="144" width="110" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
      <rect x="276" y="160" width="130" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
      <rect x="276" y="176" width="90" height="8" rx="4" fill="rgba(255,255,255,0.5)" />
      <rect x="186" y="220" width="228" height="56" rx="6" fill="rgba(255,255,255,0.08)" stroke="#fff" strokeWidth="1.4" />
      <circle cx="210" cy="248" r="10" fill="#4ade80" />
      <rect x="230" y="238" width="60" height="7" rx="3.5" fill="rgba(255,255,255,0.5)" />
      <rect x="230" y="252" width="90" height="7" rx="3.5" fill="rgba(255,255,255,0.3)" />
      <rect x="260" y="300" width="80" height="16" rx="8" fill="rgba(255,255,255,0.15)" />
      <rect x="282" y="316" width="36" height="46" fill="rgba(255,255,255,0.1)" stroke="#fff" strokeWidth="1.6" />

      {/* floating tech-stack chips */}
      <g fontFamily="var(--font-alt), sans-serif" fontWeight="700" textAnchor="middle">
        <rect x="78" y="150" width="62" height="38" rx="12" fill="#a78bfa" />
        <text x="109" y="174" fontSize="15" fill="#2c1065">js</text>

        <rect x="452" y="140" width="76" height="38" rx="12" fill="#8b5cf6" />
        <text x="490" y="164" fontSize="14" fill="#2c1065">java</text>

        <rect x="66" y="276" width="76" height="38" rx="12" fill="#f472b6" />
        <text x="104" y="300" fontSize="14" fill="#5c0a35">html</text>

        <rect x="456" y="270" width="72" height="38" rx="12" fill="#7c3aed" />
        <text x="492" y="294" fontSize="13" fill="#fff">c++</text>

        <rect x="252" y="356" width="64" height="38" rx="12" fill="#1e293b" stroke="#fff" strokeWidth="1.4" />
        <text x="284" y="380" fontSize="15" fill="#fff">{"</>"}</text>
      </g>

      {/* gear + cloud decorations */}
      <g fill="none" stroke="#f9d94f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="300" cy="72" r="16" />
        <path d="M300 56v-6M300 94v-6M284 72h-6M322 72h-6M289 61l-4-4M311 83l4 4M311 61l4-4M289 83l-4 4" />
      </g>
      <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="356" cy="86" r="11" />
        <path d="M356 76v-5M356 97v-5M346 86h-5M367 86h-5" />
      </g>
      <path
        d="M90 100c-10 0-18-8-18-17 0-8 6-15 14-16 2-9 10-16 20-16 9 0 17 6 20 14 8 1 14 8 14 16 0 9-8 16-17 16z"
        fill="rgba(255,255,255,0.12)"
        stroke="#fff"
        strokeWidth="1.6"
      />
      <path d="M85 112l-8 14M85 126v-14" stroke="#f9d94f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* decorative dots */}
      <circle cx="150" cy="380" r="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="470" cy="360" r="4" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}
