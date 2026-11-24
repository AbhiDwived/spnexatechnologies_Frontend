interface SolutionIllustrationProps {
  /** Short label rendered inside the phone mockup (e.g. "FIT", "SALON"). */
  label: string;
}

// Shared hero/banner illustration for every solution page. The 7
// reference PDFs each show their own bespoke photo/app-mockup composite
// (stock photography + custom app screens) for this slot, none of which
// is an exported vector asset Figma could hand back (its API was
// rate-limited on every attempt, same as the /services pages) — so,
// rather than building 7 bespoke hand-drawn illustrations under time
// pressure, every solution page reuses this one generic phone-mockup
// illustration, labeled per page, in the same spirit as the /services
// pages' per-slug illustrations but intentionally simplified to one
// shared component.
export function SolutionIllustration({ label }: SolutionIllustrationProps) {
  return (
    <svg viewBox="0 0 600 460" width="100%" height="100%" role="img" aria-label={`Illustration for ${label}`}>
      <defs>
        <linearGradient id={`sol-chip-${label}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      <rect x="16" y="252" width="18" height="18" rx="3" fill="rgba(255,255,255,0.18)" />
      <rect x="556" y="104" width="16" height="16" rx="3" fill="rgba(255,255,255,0.18)" />
      <rect x="520" y="338" width="16" height="16" rx="3" fill="rgba(255,255,255,0.18)" />

      <g fill="none" stroke="rgba(236,72,153,0.5)" strokeWidth="2" strokeDasharray="5 5">
        <path d="M110 150 L205 185" />
        <path d="M130 320 L205 280" />
        <path d="M470 150 L406 190" />
        <path d="M486 300 L406 268" />
      </g>

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
      <rect x="229" y="92" width="142" height="22" rx="6" fill="rgba(255,255,255,0.14)" />
      <rect x="229" y="126" width="142" height="86" rx="10" fill="rgba(255,255,255,0.1)" />
      <rect x="229" y="222" width="68" height="60" rx="8" fill="rgba(255,255,255,0.1)" />
      <rect x="303" y="222" width="68" height="60" rx="8" fill="rgba(255,255,255,0.1)" />
      <text
        x="300"
        y="340"
        textAnchor="middle"
        fontSize="30"
        fontWeight={800}
        fill="rgba(255,255,255,0.4)"
        style={{ fontFamily: "var(--font-alt, sans-serif)" }}
      >
        {label}
      </text>
      <rect x="258" y="358" width="84" height="30" rx="15" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.6)" />

      <rect x="64" y="90" width="52" height="52" rx="14" fill={`url(#sol-chip-${label})`} />
      <circle cx="90" cy="112" r="6" fill="none" stroke="#fff" strokeWidth="1.6" />
      <path d="M90 118v10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />

      <rect x="446" y="86" width="52" height="52" rx="14" fill="#fff" />
      <path
        d="M472 100l4 8.5 9.3 1.3-6.7 6.6 1.6 9.3-8.2-4.3-8.2 4.3 1.6-9.3-6.7-6.6 9.3-1.3z"
        fill="none"
        stroke="#4338ca"
        strokeWidth="1.5"
      />

      <rect x="56" y="300" width="52" height="52" rx="14" fill={`url(#sol-chip-${label})`} />
      <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
        <path d="M70 336v-14" />
        <path d="M82 340v-22" />
        <path d="M94 332v-10" />
      </g>

      <rect x="452" y="296" width="52" height="52" rx="14" fill="#fff" />
      <rect x="464" y="310" width="28" height="22" rx="3" fill="none" stroke="#4338ca" strokeWidth="1.5" />
      <circle cx="471" cy="317" r="2.2" fill="#4338ca" />
      <path d="M466 330l7-8 6 6 5-5 7 7" fill="none" stroke="#4338ca" strokeWidth="1.5" />
    </svg>
  );
}
