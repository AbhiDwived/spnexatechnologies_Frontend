// Decorative hero illustration for the UI/UX Design service page — a
// simplified recreation of the Figma reference (node 50:26 / UX_Design.pdf):
// a phone mockup labeled "UX" surrounded by small app-icon chips linked by
// dashed connector lines. Figma's API was rate-limited while this page was
// built, so this is a hand-drawn approximation from the PDF screenshot
// rather than an exported vector asset — close in spirit, not pixel-exact.
export function UxIllustration() {
  return (
    <svg
      viewBox="0 0 600 460"
      width="100%"
      height="100%"
      role="img"
      aria-label="Illustration of a mobile app UX flow"
    >
      <defs>
        <linearGradient id="chip-pink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* background decorative squares */}
      <rect x="16" y="252" width="18" height="18" rx="3" fill="rgba(255,255,255,0.18)" />
      <rect x="556" y="104" width="16" height="16" rx="3" fill="rgba(255,255,255,0.18)" />
      <rect x="520" y="338" width="16" height="16" rx="3" fill="rgba(255,255,255,0.18)" />

      {/* connector lines */}
      <g fill="none" stroke="rgba(236,72,153,0.55)" strokeWidth="2" strokeDasharray="5 5">
        <path d="M100 118 L172 150" />
        <path d="M118 250 L205 230" />
        <path d="M128 352 L205 300" />
        <path d="M452 96 L402 140" />
        <path d="M486 172 L428 178" />
        <path d="M470 294 L406 262" />
        <path d="M486 92 L486 140" />
      </g>

      {/* phone mockup */}
      <rect
        x="205"
        y="56"
        width="190"
        height="348"
        rx="32"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2"
      />
      <text
        x="300"
        y="245"
        textAnchor="middle"
        fontSize="72"
        fontWeight={800}
        fill="rgba(255,255,255,0.3)"
        style={{ fontFamily: "var(--font-alt, sans-serif)" }}
      >
        UX
      </text>
      <rect x="258" y="330" width="84" height="30" rx="15" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.6)" />
      <text x="292" y="350" textAnchor="middle" fontSize="13" fill="#fff">
        Slide
      </text>
      <path d="M322 345l5 -4.5l-5 -4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />

      {/* GPS chip */}
      <rect x="64" y="90" width="52" height="52" rx="14" fill="url(#chip-pink)" />
      <circle cx="90" cy="112" r="6" fill="none" stroke="#fff" strokeWidth="1.6" />
      <path d="M90 118v10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />

      {/* star / favorite chip */}
      <rect x="414" y="66" width="52" height="52" rx="14" fill="#fff" />
      <path
        d="M440 80l4 8.5 9.3 1.3-6.7 6.6 1.6 9.3-8.2-4.3-8.2 4.3 1.6-9.3-6.7-6.6 9.3-1.3z"
        fill="none"
        stroke="#4338ca"
        strokeWidth="1.5"
      />

      {/* lock chip */}
      <rect x="466" y="34" width="52" height="52" rx="14" fill="url(#chip-pink)" />
      <rect x="482" y="58" width="20" height="16" rx="3" fill="none" stroke="#fff" strokeWidth="1.6" />
      <path d="M486 58v-6a6 6 0 0 1 12 0v6" fill="none" stroke="#fff" strokeWidth="1.6" />

      {/* weather chip */}
      <rect x="436" y="148" width="52" height="52" rx="14" fill="#fff" />
      <path
        d="M452 178a8 8 0 1 1 1.4-15.9 9 9 0 0 1 17 3.4 7 7 0 0 1-2.4 13.6h-16z"
        fill="none"
        stroke="#4338ca"
        strokeWidth="1.5"
      />

      {/* music chip */}
      <rect x="56" y="214" width="52" height="52" rx="14" fill="url(#chip-pink)" />
      <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
        <path d="M70 250v-14" />
        <path d="M82 254v-22" />
        <path d="M94 246v-10" />
      </g>

      {/* photo chip */}
      <rect x="452" y="256" width="52" height="52" rx="14" fill="#fff" />
      <rect x="464" y="270" width="28" height="22" rx="3" fill="none" stroke="#4338ca" strokeWidth="1.5" />
      <circle cx="471" cy="277" r="2.2" fill="#4338ca" />
      <path d="M466 290l7-8 6 6 5-5 7 7" fill="none" stroke="#4338ca" strokeWidth="1.5" />

      {/* error chip */}
      <rect x="96" y="326" width="52" height="52" rx="14" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.5)" />
      <path d="M112 342l20 20M132 342l-20 20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />

      {/* play/pause chip */}
      <rect x="402" y="356" width="48" height="48" rx="14" fill="url(#chip-pink)" />
      <rect x="418" y="370" width="5" height="20" rx="1.5" fill="#fff" />
      <rect x="429" y="370" width="5" height="20" rx="1.5" fill="#fff" />
    </svg>
  );
}
