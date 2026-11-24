// Hand-drawn approximations of the 3 award badges shown on the About,
// Android Development, Custom iOS Development, and Database Analysis
// pages (same badges every time). Figma's API was rate-limited while
// these were built, so these are inline SVG recreations rather than the
// real badge artwork/logos — close in spirit, not pixel-exact, and with
// no real organization names attached.

function LaurelBadge() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%" role="img" aria-label="Award winning platform badge">
      <rect x="2" y="2" width="116" height="116" rx="6" fill="#fff" stroke="#e5c66b" strokeWidth="2" />
      <g stroke="#c9a227" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M30 95c-8-14-8-40 4-58" />
        <path d="M34 42l-7-2 1-7M34 42l-8 1-1-7M38 50l-8 1M40 60l-8 1M42 70l-8 1M46 80l-7 2" />
        <path d="M90 95c8-14 8-40-4-58" />
        <path d="M86 42l7-2-1-7M86 42l8 1 1-7M82 50l8 1M80 60l8 1M78 70l8 1M74 80l7 2" />
      </g>
      <text x="60" y="50" textAnchor="middle" fontSize="11" fontWeight={800} fill="#1e3a8a">
        AWARD
      </text>
      <text x="60" y="64" textAnchor="middle" fontSize="11" fontWeight={800} fill="#1e3a8a">
        WINNING
      </text>
      <text x="60" y="78" textAnchor="middle" fontSize="9" fill="#475569" fontStyle="italic">
        platform
      </text>
    </svg>
  );
}

function ChamberSealBadge() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%" role="img" aria-label="Certified top 1000 companies global 2021 seal">
      <rect x="2" y="2" width="116" height="116" rx="6" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="#1e3a8a" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="38" fill="none" stroke="#1e3a8a" strokeWidth="1.2" strokeDasharray="2 3" />
      <path d="M60 32l6 12 13 2-9.5 9 2 13L60 62l-11.5 6 2-13-9.5-9 13-2z" fill="#1e3a8a" />
      <text
        x="60"
        y="100"
        textAnchor="middle"
        fontSize="7"
        fill="#1e3a8a"
        style={{ letterSpacing: "0.5px" }}
      >
        CHAMBER OF COMMERCE
      </text>
    </svg>
  );
}

function ClutchBadge() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%" role="img" aria-label="Top 1000 companies global 2021 clutch badge">
      <rect x="2" y="2" width="116" height="116" rx="6" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <text x="60" y="30" textAnchor="middle" fontSize="8" fontWeight={700} fill="#64748b" style={{ letterSpacing: "1px" }}>
        TOP 1000
      </text>
      <text x="60" y="40" textAnchor="middle" fontSize="7" fill="#64748b" style={{ letterSpacing: "1px" }}>
        COMPANIES
      </text>
      <rect x="18" y="50" width="84" height="26" rx="4" fill="none" stroke="#17594a" strokeWidth="1.6" />
      <text x="60" y="68" textAnchor="middle" fontSize="16" fontWeight={800} fill="#17594a">
        Clutch
      </text>
      <text x="60" y="95" textAnchor="middle" fontSize="9" fontWeight={700} fill="#334155" style={{ letterSpacing: "1px" }}>
        GLOBAL
      </text>
      <text x="60" y="106" textAnchor="middle" fontSize="9" fontWeight={700} fill="#334155">
        2021
      </text>
    </svg>
  );
}

export type AwardBadgeName = "laurel" | "chamber-seal" | "clutch";

const AWARD_BADGE_MAP: Record<AwardBadgeName, () => React.JSX.Element> = {
  laurel: LaurelBadge,
  "chamber-seal": ChamberSealBadge,
  clutch: ClutchBadge,
};

export function AwardBadge({ badge }: { badge: AwardBadgeName }) {
  const Badge = AWARD_BADGE_MAP[badge];
  return <Badge />;
}
