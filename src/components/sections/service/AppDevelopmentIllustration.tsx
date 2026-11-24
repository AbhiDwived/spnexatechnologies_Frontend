// Decorative hero illustration for the App Development service page — a
// simplified recreation of the fuller reference export
// (Mobile_App_Development_Company_in_USA.pdf): an app-frame screen holding
// a small icon grid, ringed by floating tech-stack chips (JAVA, CSS,
// HTML, "#"). Figma's API was rate-limited while this page was built, so
// this is a hand-drawn approximation from the PDF screenshot rather than
// an exported vector asset.
export function AppDevelopmentIllustration() {
  const gridIcons = [
    { x: 254, y: 110, color: "#f97316" },
    { x: 312, y: 110, color: "#38bdf8" },
    { x: 254, y: 164, color: "#4ade80" },
    { x: 312, y: 164, color: "#f9d94f" },
    { x: 254, y: 218, color: "#38bdf8" },
    { x: 312, y: 218, color: "#f97316" },
  ];

  return (
    <svg viewBox="0 0 600 460" width="100%" height="100%" role="img" aria-label="Illustration of mobile app development">
      {/* connector lines from frame to chips */}
      <g fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5 5">
        <path d="M205 120 L140 90" />
        <path d="M395 120 L460 90" />
        <path d="M205 300 L138 330" />
        <path d="M395 300 L462 330" />
      </g>

      {/* app frame */}
      <rect x="205" y="78" width="190" height="296" rx="24" fill="rgba(255,255,255,0.08)" stroke="#fff" strokeWidth="2" />
      <rect x="226" y="98" width="148" height="14" rx="7" fill="rgba(255,255,255,0.35)" />
      {gridIcons.map((icon, i) => (
        <rect key={i} x={icon.x} y={icon.y} width="38" height="38" rx="10" fill={icon.color} />
      ))}
      <rect x="254" y="272" width="96" height="10" rx="5" fill="rgba(255,255,255,0.5)" />
      <rect x="254" y="290" width="70" height="10" rx="5" fill="rgba(255,255,255,0.3)" />
      <rect x="254" y="330" width="92" height="28" rx="14" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="1.5" />

      {/* floating tech-stack chips */}
      <g fontFamily="var(--font-alt), sans-serif" fontWeight="700" textAnchor="middle">
        <rect x="80" y="66" width="76" height="40" rx="12" fill="#4ade80" />
        <text x="118" y="91" fontSize="15" fill="#073b1f">JAVA</text>

        <rect x="452" y="60" width="72" height="40" rx="12" fill="#f472b6" />
        <text x="488" y="85" fontSize="15" fill="#5c0a35">HTML</text>

        <rect x="70" y="298" width="72" height="40" rx="12" fill="#2dd4bf" />
        <text x="106" y="323" fontSize="14" fill="#063a35">CSS</text>

        <rect x="456" y="302" width="60" height="40" rx="12" fill="#a78bfa" />
        <text x="486" y="327" fontSize="16" fill="#2c1065">#</text>
      </g>

      {/* decorative dots */}
      <circle cx="150" cy="380" r="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="470" cy="400" r="4" fill="rgba(255,255,255,0.4)" />
      <rect x="520" y="140" width="14" height="14" rx="3" fill="rgba(255,255,255,0.18)" />
      <rect x="60" y="180" width="14" height="14" rx="3" fill="rgba(255,255,255,0.18)" />
    </svg>
  );
}
