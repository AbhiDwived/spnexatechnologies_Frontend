// Decorative hero illustration for the Web Design service page — a
// simplified recreation of the Figma reference (node 71:623 / Web_Design.pdf):
// a lightbulb-in-head icon, pencil & ruler, a notebook, a browser-layout
// mockup and a small figure across the top, a big "WEB DESIGN" wordmark in
// the middle, and a monitor, laptop with code, coffee cup and earbuds along
// the bottom, all linked by dashed connector lines. Figma's API was
// rate-limited while this page was built, so this is a hand-drawn
// approximation from the PDF screenshot rather than an exported vector
// asset — close in spirit, not pixel-exact.
export function WebDesignIllustration() {
  return (
    <svg
      viewBox="0 0 600 460"
      width="100%"
      height="100%"
      role="img"
      aria-label="Illustration of the web design process"
    >
      {/* background decorative squares */}
      <rect x="18" y="300" width="16" height="16" rx="3" fill="rgba(255,255,255,0.16)" />
      <rect x="566" y="78" width="16" height="16" rx="3" fill="rgba(255,255,255,0.16)" />
      <rect x="548" y="398" width="14" height="14" rx="3" fill="rgba(255,255,255,0.16)" />

      {/* connector lines */}
      <g fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="5 5">
        <path d="M118 128 L160 100" />
        <path d="M250 120 L250 160" />
        <path d="M360 110 L404 96" />
        <path d="M466 150 L512 140" />
        <path d="M146 300 L146 258" />
        <path d="M250 310 L250 258" />
        <path d="M420 300 L420 258" />
        <path d="M486 300 L520 292" />
      </g>

      {/* lightbulb-in-head icon */}
      <path
        d="M96 150c-24 0-42-18-42-40 0-10 4-18 10-25"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
      />
      <path
        d="M96 150c24 0 42-18 42-40a40 40 0 0 0-14-30"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
      />
      <circle cx="96" cy="92" r="20" fill="#f9d94f" />
      <path d="M88 110h16M90 116h12" stroke="#f9d94f" strokeWidth="3" strokeLinecap="round" />
      <path d="M90 92a6 6 0 0 1 12 0" fill="none" stroke="#2a3a7a" strokeWidth="1.4" />

      {/* pencil */}
      <g transform="translate(176,60) rotate(28)">
        <rect x="0" y="0" width="12" height="54" rx="2" fill="none" stroke="#fff" strokeWidth="1.8" />
        <path d="M0 54l6 12 6-12z" fill="none" stroke="#fff" strokeWidth="1.8" />
      </g>

      {/* ruler */}
      <g transform="translate(202,52)">
        <rect x="0" y="0" width="16" height="70" rx="2" fill="none" stroke="#fff" strokeWidth="1.8" />
        <path d="M2 10h6M2 20h10M2 30h6M2 40h10M2 50h6M2 60h10" stroke="#fff" strokeWidth="1.4" />
      </g>

      {/* notebook */}
      <rect x="238" y="46" width="76" height="86" rx="10" fill="#7fd3f4" />
      <rect x="258" y="46" width="6" height="86" fill="rgba(255,255,255,0.55)" />

      {/* browser mockup */}
      <rect x="340" y="62" width="104" height="80" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <line x1="340" y1="78" x2="444" y2="78" stroke="#fff" strokeWidth="1.8" />
      <circle cx="350" cy="70" r="2.4" fill="#f9d94f" />
      <circle cx="359" cy="70" r="2.4" fill="#7fd3f4" />
      <circle cx="368" cy="70" r="2.4" fill="#4ade80" />
      <rect x="350" y="92" width="24" height="38" fill="#7fd3f4" />
      <rect x="380" y="92" width="26" height="14" fill="none" stroke="#fff" strokeWidth="1.4" strokeDasharray="2 2" />
      <text x="388" y="103" fontSize="10" fill="#fff" textAnchor="middle">T</text>
      <rect x="410" y="92" width="24" height="38" fill="#4ade80" />

      {/* small person figure */}
      <circle cx="528" cy="100" r="13" fill="none" stroke="#fff" strokeWidth="1.8" />
      <path d="M518 100a10 6 0 0 1 20 0" fill="#4ade80" />
      <path d="M516 142c2-18 8-26 12-26s10 8 12 26" fill="none" stroke="#fff" strokeWidth="1.8" />
      <rect x="512" y="140" width="32" height="20" rx="4" fill="#7fd3f4" />

      {/* wordmark */}
      <text
        x="300"
        y="235"
        textAnchor="middle"
        fontSize="64"
        fontWeight={800}
        fill="#f9d94f"
        style={{ fontFamily: "var(--font-alt, sans-serif)" }}
      >
        WEB DESIGN
      </text>

      {/* monitor with layout icon */}
      <rect x="92" y="258" width="108" height="78" rx="6" fill="none" stroke="#fff" strokeWidth="1.8" />
      <rect x="128" y="276" width="36" height="34" fill="#4ade80" />
      <path d="M146 286v14M138 296l8 8 8-8" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M126 336h40M146 336v10" stroke="#fff" strokeWidth="1.8" />
      <path d="M130 346h32" stroke="#fff" strokeWidth="1.8" />

      {/* laptop with code */}
      <rect x="222" y="252" width="110" height="68" rx="4" fill="#4ade80" />
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <path d="M234 266h40" />
        <path d="M234 276h60" />
        <path d="M234 286h30" />
        <path d="M234 296h50" />
        <path d="M234 306h20" />
      </g>
      <path d="M212 320h130l-8 10h-114z" fill="none" stroke="#fff" strokeWidth="1.8" />

      {/* coffee cup */}
      <path d="M394 268h30l-4 46a4 4 0 0 1-4 4h-18a4 4 0 0 1-4-4z" fill="#f9d94f" />
      <rect x="394" y="282" width="30" height="10" fill="#4ade80" />
      <path d="M424 276c8 0 8 14 0 14" fill="none" stroke="#fff" strokeWidth="1.8" />

      {/* earbuds / mp3 */}
      <rect x="446" y="278" width="30" height="44" rx="6" fill="none" stroke="#7fd3f4" strokeWidth="1.8" />
      <rect x="454" y="286" width="14" height="12" fill="none" stroke="#7fd3f4" strokeWidth="1.4" />
      <path d="M476 288c10 0 10 10 10 16s0 16-8 16" fill="none" stroke="#fff" strokeWidth="1.6" />

      {/* gears */}
      {[
        [142, 96],
        [368, 164],
        [196, 350],
        [460, 346],
      ].map(([gx, gy], i) => (
        <g key={i} transform={`translate(${gx},${gy})`}>
          <circle r="10" fill="none" stroke="#fff" strokeWidth="1.6" />
          <circle r="3.2" fill="none" stroke="#fff" strokeWidth="1.2" />
        </g>
      ))}
    </svg>
  );
}
