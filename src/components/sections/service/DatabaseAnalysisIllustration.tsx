// Decorative hero illustration for the Database Analysis service page — a
// simplified recreation of the Figma reference (Database_Analysis.pdf): a
// small robot figure beside a wall of colored data-screen chips, a large
// magnifying glass, and a diagonal "DATA ANALYSIS" wordmark. Figma's API
// was rate-limited while this page was built, so this is a hand-drawn
// approximation from the PDF screenshot rather than an exported vector
// asset.
export function DatabaseAnalysisIllustration() {
  const chips = [
    { x: 330, y: 70, color: "#7fd3f4" },
    { x: 380, y: 70, color: "#f97316" },
    { x: 430, y: 70, color: "#4ade80" },
    { x: 330, y: 118, color: "#f9d94f" },
    { x: 380, y: 118, color: "#7c3aed" },
    { x: 430, y: 118, color: "#7fd3f4" },
    { x: 330, y: 166, color: "#4ade80" },
    { x: 380, y: 166, color: "#f97316" },
    { x: 430, y: 166, color: "#f9d94f" },
  ];

  return (
    <svg viewBox="0 0 600 460" width="100%" height="100%" role="img" aria-label="Illustration of database analysis">
      <text
        x="470"
        y="60"
        textAnchor="middle"
        fontSize="22"
        fontWeight={800}
        fill="rgba(255,255,255,0.5)"
        transform="rotate(-18 470 60)"
        style={{ fontFamily: "var(--font-alt, sans-serif)" }}
      >
        DATA ANALYSIS
      </text>

      {/* wall of screen chips */}
      {chips.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="40" height="38" rx="6" fill={c.color} />
      ))}
      <rect x="310" y="210" width="180" height="150" rx="6" fill="#1f2937" />
      <g stroke="#7fd3f4" strokeWidth="2" strokeLinecap="round">
        <path d="M330 230h60M330 245h90M330 260h40" />
      </g>
      <path d="M330 290l25 -20 20 14 35 -30" fill="none" stroke="#4ade80" strokeWidth="2.6" strokeLinecap="round" />

      {/* magnifying glass */}
      <g transform="translate(150,170)">
        <circle r="46" fill="none" stroke="#f97316" strokeWidth="10" />
        <path d="M32 32l30 30" stroke="#f97316" strokeWidth="12" strokeLinecap="round" />
        <circle r="34" fill="rgba(255,255,255,0.08)" />
      </g>

      {/* folder stack */}
      <path d="M90 300h60l10 14h60v40H90z" fill="#7fd3f4" />
      <path d="M80 330h120v46a6 6 0 0 1-6 6H86a6 6 0 0 1-6-6z" fill="#f9d94f" />

      {/* robot figure */}
      <g transform="translate(230,330)">
        <rect x="-26" y="-10" width="52" height="44" rx="10" fill="#e5e7eb" />
        <circle cx="-10" cy="8" r="5" fill="#1f2937" />
        <circle cx="10" cy="8" r="5" fill="#1f2937" />
        <rect x="-14" y="-32" width="28" height="22" rx="8" fill="#e5e7eb" />
        <rect x="-6" y="-40" width="12" height="10" fill="#e5e7eb" />
        <path d="M-26 6h-14M26 6h14" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" />
      </g>

      {/* decoration */}
      <circle cx="520" cy="300" r="4" fill="rgba(255,255,255,0.3)" />
      <circle cx="90" cy="100" r="4" fill="rgba(255,255,255,0.3)" />
      <rect x="520" y="380" width="14" height="14" rx="3" fill="rgba(255,255,255,0.18)" />
    </svg>
  );
}
