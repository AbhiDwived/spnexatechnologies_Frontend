// Decorative hero illustration for the SEO service page — a simplified
// recreation of the Search_Engine_Optimization.pdf reference: a central
// "SEO" laptop badge ringed by smaller circular icon badges (search,
// wrench, chat, cloud, trend-chart), with a "SEO Marketing" wordmark
// above. Figma's API was rate-limited while this page was built, so this
// is a hand-drawn approximation from the PDF screenshot rather than an
// exported vector asset.
export function SeoIllustration() {
  const satellites = [
    { cx: 150, cy: 150, r: 34, fill: "#38bdf8" }, // search
    { cx: 450, cy: 150, r: 34, fill: "#f97316" }, // wrench
    { cx: 136, cy: 300, r: 34, fill: "#a78bfa" }, // chat
    { cx: 464, cy: 300, r: 34, fill: "#4ade80" }, // trend
  ];

  return (
    <svg viewBox="0 0 600 460" width="100%" height="100%" role="img" aria-label="Illustration of SEO marketing">
      <text
        x="300"
        y="48"
        textAnchor="middle"
        fontFamily="var(--font-alt), sans-serif"
        fontWeight="800"
        fontSize="26"
        fill="#fca5a5"
        letterSpacing="4"
      >
        SEO MARKETING
      </text>

      {/* connecting ring */}
      <circle cx="300" cy="235" r="130" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="6 6" />

      {/* central SEO badge */}
      <circle cx="300" cy="235" r="78" fill="#b91c1c" stroke="#fff" strokeWidth="2" />
      <rect x="258" y="212" width="84" height="54" rx="6" fill="#fde68a" />
      <rect x="258" y="212" width="84" height="12" rx="4" fill="#fbbf24" />
      <text
        x="300"
        y="252"
        textAnchor="middle"
        fontFamily="var(--font-alt), sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#7c2d12"
      >
        SEO
      </text>
      <rect x="276" y="266" width="48" height="8" rx="4" fill="#92400e" />

      {satellites.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill} stroke="#fff" strokeWidth="2" />
      ))}

      {/* search icon */}
      <circle cx="146" cy="146" r="8" fill="none" stroke="#fff" strokeWidth="2.2" />
      <path d="M152 152l7 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />

      {/* wrench icon */}
      <path
        d="M442 138c4-4 10-4 14 0l4 4-8 8-4-4c-4 4-10 4-14 0s-4-10 0-14l4 4z"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* chat icon */}
      <rect x="122" y="288" width="28" height="18" rx="5" fill="none" stroke="#fff" strokeWidth="2" />
      <path d="M130 306l-4 7 8-7z" fill="#fff" stroke="none" />

      {/* trend icon */}
      <path d="M452 310l8-10 7 6 10-14" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* bottom icon row */}
      <g fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2">
        <circle cx="210" cy="378" r="14" />
        <path d="M216 384l6 6" />
        <rect x="248" y="366" width="24" height="16" rx="4" />
        <circle cx="300" cy="378" r="14" />
        <path d="M294 372l6 6-6 6M306 372l-6 6 6 6" />
        <path d="M340 366c6-6 16-6 20 0s2 14-6 16" />
        <path d="M398 384l4-10 5 6 8-12" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
