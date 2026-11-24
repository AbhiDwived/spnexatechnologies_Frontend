// Shared visual building blocks for the /portfolio page's 7 project
// sections (Portfolio.pdf). The real design shows genuine app-screenshot
// mockups inside each phone frame and one reused circular "Nize" agency
// badge on every project card — none of which are licensed assets this
// project can embed, so both are recreated here as simplified SVG
// abstractions in the same hand-drawn style already used for this
// project's other illustration slots (see IosIllustration, UxIllustration,
// SolutionIllustration): a phone frame with a schematic, color-matched
// approximation of that project's real screen content (a grid of product
// tiles, a chat list, a dashboard with rings, etc.), not a literal
// reproduction of the source screenshots.

interface NizeBadgeProps {
  size?: number;
}

/** The one circular "Nize" placeholder logo reused on all 7 project cards
 * in the real design — recreated as a simple blue swoosh + wordmark. */
export function NizeBadge({ size = 52 }: NizeBadgeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      role="img"
      aria-label="Project badge"
      style={{ flexShrink: 0 }}
    >
      <circle cx="26" cy="26" r="25" fill="#fff" stroke="#dfe3ea" strokeWidth="1.5" />
      <g stroke="#1b3a8a" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M11 20c6-6 10-6 16-2s10 4 15-1" />
        <path d="M11 26c6-6 10-6 16-2s10 4 15-1" />
        <path d="M11 32c6-6 10-6 16-2s10 4 15-1" opacity="0.55" />
      </g>
      <text
        x="26"
        y="44.5"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight={800}
        fill="#1b3a8a"
        style={{ fontFamily: "var(--font-alt, sans-serif)" }}
      >
        Nize
      </text>
    </svg>
  );
}

export type PortfolioScreenKind =
  | "product-grid"
  | "cart-list"
  | "match-detail"
  | "chat-list"
  | "grocery-grid"
  | "salon-list"
  | "specialist-detail"
  | "coworking-list"
  | "space-detail"
  | "menu-grid"
  | "item-detail"
  | "calorie-dashboard"
  | "rings-tracking";

interface PortfolioPhoneProps {
  kind: PortfolioScreenKind;
  accent: string;
  tall?: boolean;
}

/** One phone-frame mockup with a schematic approximation of a real
 * screen's layout (header, search/banner, then a grid/list/detail body),
 * colored with the section's accent so the two phones in each project
 * read as belonging to that project. */
export function PortfolioPhone({ kind, accent, tall = false }: PortfolioPhoneProps) {
  const h = tall ? 400 : 360;
  const screenH = h - 32;

  return (
    <svg
      viewBox={`0 0 200 ${h}`}
      width="200"
      height={h}
      role="img"
      aria-hidden="true"
      className="portfolio-phone"
    >
      <rect x="2" y="2" width="196" height={h - 4} rx="26" fill="#13151a" />
      <rect x="8" y="8" width="184" height={h - 16} rx="20" fill="#fff" />
      <rect x="74" y="12" width="52" height="10" rx="5" fill="#13151a" />

      <g transform="translate(16, 26)">
        {renderScreen(kind, accent, screenH - 10)}
      </g>
    </svg>
  );
}

function renderScreen(kind: PortfolioScreenKind, accent: string, h: number) {
  const w = 168;

  switch (kind) {
    case "product-grid":
      return (
        <g>
          <rect width={w} height="26" rx="8" fill="#f1f2f4" />
          <rect x="10" y="9" width="90" height="8" rx="4" fill="#9aa0a8" />
          <rect width={w} height="70" y="36" rx="12" fill={accent} opacity="0.18" />
          <rect x="12" y="48" width="70" height="8" rx="4" fill={accent} />
          <rect x="12" y="62" width="100" height="36" rx="6" fill="#fff" opacity="0.6" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={i * 58} y="118" width="52" height="52" rx="10" fill="#f1f2f4" />
          ))}
          {[0, 1, 2].map((i) => (
            <rect key={`b${i}`} x={i * 58} y={h - 28} width="52" height="10" rx="5" fill="#e3e5e9" />
          ))}
        </g>
      );

    case "cart-list":
      return (
        <g>
          <rect width={w} height="16" y="2" rx="4" fill="#9aa0a8" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(0, ${30 + i * 44})`}>
              <rect width="38" height="38" rx="8" fill="#f1f2f4" />
              <rect x="46" width="90" height="10" rx="5" fill="#2a2d33" />
              <rect x="46" y="16" width="50" height="8" rx="4" fill="#9aa0a8" />
              <rect x="138" y="4" width="30" height="20" rx="10" fill={accent} />
            </g>
          ))}
          <rect y={h - 40} width={w} height="1" fill="#e3e5e9" />
          <rect y={h - 30} width="90" height="10" rx="5" fill="#2a2d33" />
          <rect x={w - 70} y={h - 34} width="70" height="26" rx="13" fill={accent} />
        </g>
      );

    case "match-detail":
      return (
        <g>
          <circle cx="16" cy="12" r="10" fill="#f1f2f4" />
          <rect width={w} height={h - 70} y="34" rx="14" fill={accent} opacity="0.85" />
          <rect x="14" y="48" width={w - 28} height={h - 118} rx="10" fill="#fff" opacity="0.92" />
          <text
            x={w / 2}
            y={h - 44}
            textAnchor="middle"
            fontSize="15"
            fontWeight={800}
            fill="#fff"
            style={{ fontFamily: "var(--font-alt, sans-serif)" }}
          >
            You matched!
          </text>
          <circle cx={w / 2} cy={h - 14} r="16" fill="#fff" />
        </g>
      );

    case "chat-list":
      return (
        <g>
          <rect width={w} height="16" rx="4" fill="#2a2d33" />
          <circle cx="12" cy="40" r="12" fill={accent} opacity="0.3" />
          <circle cx="40" cy="40" r="12" fill={accent} opacity="0.5" />
          <circle cx="68" cy="40" r="12" fill={accent} opacity="0.7" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(0, ${68 + i * 36})`}>
              <circle cx="14" cy="10" r="14" fill="#f1f2f4" />
              <rect x="36" width="70" height="8" rx="4" fill="#2a2d33" />
              <rect x="36" y="14" width="110" height="7" rx="3.5" fill="#c6cad1" />
            </g>
          ))}
        </g>
      );

    case "grocery-grid":
      return (
        <g>
          <rect width={w} height="22" rx="8" fill="#f1f2f4" />
          <rect x="10" y="7" width="90" height="8" rx="4" fill="#9aa0a8" />
          <rect width={w} height="56" y="32" rx="12" fill={accent} />
          <rect x="12" y="44" width="64" height="8" rx="4" fill="#fff" />
          <rect x="12" y="58" width="40" height="18" rx="9" fill="#fff" opacity="0.85" />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={24 + i * 58} cy="118" r="26" fill="#f1f2f4" />
          ))}
          {[0, 1, 2].map((i) => (
            <rect key={`b${i}`} x={i * 58} y={h - 26} width="48" height="9" rx="4.5" fill="#e3e5e9" />
          ))}
        </g>
      );

    case "salon-list":
      return (
        <g>
          <rect width={w} height="24" rx="8" fill="#f1f2f4" />
          <rect x="10" y="8" width="70" height="8" rx="4" fill="#9aa0a8" />
          <rect width={w} height="60" y="34" rx="12" fill={accent} />
          <rect x="12" y="48" width="70" height="8" rx="4" fill="#fff" />
          <rect x="12" y="62" width="44" height="18" rx="9" fill="#fff" opacity="0.9" />
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={18 + i * 42} cy="124" r="18" fill={accent} opacity="0.25" />
          ))}
          <rect y="156" width={w} height="1" fill="#e3e5e9" />
          {[0, 1].map((i) => (
            <g key={i} transform={`translate(0, ${172 + i * 34})`}>
              <rect width="30" height="30" rx="8" fill="#f1f2f4" />
              <rect x="38" width="90" height="8" rx="4" fill="#2a2d33" />
              <rect x="38" y="14" width="60" height="7" rx="3.5" fill="#c6cad1" />
            </g>
          ))}
        </g>
      );

    case "specialist-detail":
      return (
        <g>
          <rect x="-16" y="-26" width={w + 32} height="128" fill={accent} opacity="0.85" />
          <rect x="18" y="86" width="60" height="60" rx="30" fill="#fff" />
          <rect x="18" y="156" width="110" height="10" rx="5" fill="#2a2d33" />
          <rect x="18" y="172" width="80" height="8" rx="4" fill="#c6cad1" />
          <rect x={w - 40} y="86" width="40" height="18" rx="9" fill={accent} />
          <rect y={h - 30} width={w} height="26" rx="13" fill={accent} />
        </g>
      );

    case "coworking-list":
      return (
        <g>
          <rect width={w} height="24" rx="8" fill="#f1f2f4" />
          <rect x="10" y="8" width="70" height="8" rx="4" fill="#9aa0a8" />
          <rect width={w} height="54" y="34" rx="12" fill={accent} />
          <rect x="12" y="46" width="70" height="8" rx="4" fill="#fff" />
          <rect x="12" y="60" width="44" height="18" rx="9" fill="#fff" opacity="0.9" />
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={18 + i * 42} cy="116" r="17" fill={accent} opacity="0.3" />
          ))}
          {[0, 1].map((i) => (
            <rect key={i} x={i * 86} y="150" width="78" height="56" rx="10" fill="#f1f2f4" />
          ))}
        </g>
      );

    case "space-detail":
      return (
        <g>
          <rect width={w} height="96" rx="12" fill={accent} opacity="0.85" />
          <rect x="12" y="112" width="110" height="10" rx="5" fill="#2a2d33" />
          <rect x="12" y="128" width="150" height="8" rx="4" fill="#c6cad1" />
          <rect x="12" y="146" width="150" height="7" rx="3.5" fill="#dfe2e7" />
          <rect x="12" y="158" width="120" height="7" rx="3.5" fill="#dfe2e7" />
          <rect x="12" y={h - 34} width="90" height="10" rx="5" fill="#2a2d33" />
          <rect x={w - 70} y={h - 38} width="70" height="26" rx="13" fill={accent} />
        </g>
      );

    case "menu-grid":
      return (
        <g>
          <rect width={w} height="24" rx="8" fill="#f1f2f4" />
          <rect x="10" y="8" width="70" height="8" rx="4" fill="#9aa0a8" />
          <rect x="0" y="34" width="46" height="18" rx="9" fill={accent} />
          <rect x="54" y="34" width="46" height="18" rx="9" fill="#f1f2f4" />
          <rect x="108" y="34" width="46" height="18" rx="9" fill="#f1f2f4" />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={24 + i * 58} cy="100" r="26" fill={accent} opacity="0.25" />
          ))}
          {[0, 1, 2].map((i) => (
            <rect key={`b${i}`} x={i * 58} y="134" width="48" height="8" rx="4" fill="#2a2d33" />
          ))}
          <rect y={h - 30} width={w} height="26" rx="13" fill={accent} />
        </g>
      );

    case "item-detail":
      return (
        <g>
          <circle cx={w / 2} cy="58" r="52" fill={accent} opacity="0.9" />
          <rect x="12" y="122" width="100" height="10" rx="5" fill="#2a2d33" />
          <rect x={w - 56} y="122" width="56" height="10" rx="5" fill={accent} />
          <rect x="12" y="140" width="50" height="18" rx="9" fill="#f1f2f4" />
          <rect x="68" y="140" width="56" height="18" rx="9" fill="#f1f2f4" />
          <rect x="12" y="166" width={w - 24} height="7" rx="3.5" fill="#dfe2e7" />
          <rect x="12" y="178" width={w - 60} height="7" rx="3.5" fill="#dfe2e7" />
          <rect x={w - 70} y={h - 32} width="70" height="26" rx="13" fill={accent} />
        </g>
      );

    case "calorie-dashboard":
      return (
        <g>
          <circle cx="14" cy="12" r="12" fill="#f1f2f4" />
          <rect x="34" width="60" height="8" rx="4" fill="#2a2d33" />
          <rect width={w} height="70" y="30" rx="12" fill={accent} />
          <rect x="12" y="44" width="80" height="8" rx="4" fill="#13151a" />
          <rect x="12" y="58" width="60" height="8" rx="4" fill="#13151a" opacity="0.7" />
          <circle cx={w - 36} cy="65" r="22" fill="#fff" opacity="0.9" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={i * 58} y="112" width="50" height="34" rx="8" fill="#f1f2f4" />
          ))}
          <rect x="0" y={h - 34} width="78" height="26" rx="13" fill="#2a2d33" />
          <rect x="88" y={h - 34} width="78" height="26" rx="13" fill={accent} />
        </g>
      );

    case "rings-tracking":
    default:
      return (
        <g>
          <rect width={w} height="16" rx="4" fill="#2a2d33" />
          {["M", "T", "W", "T"].map((d, i) => (
            <circle key={i} cx={18 + i * 42} cy="38" r="14" fill={i === 2 ? accent : "#f1f2f4"} />
          ))}
          <circle cx={w / 2} cy="112" r="50" fill="none" stroke="#2a2d33" strokeWidth="14" />
          <circle
            cx={w / 2}
            cy="112"
            r="50"
            fill="none"
            stroke={accent}
            strokeWidth="14"
            strokeDasharray="220 314"
            strokeLinecap="round"
          />
          <text
            x={w / 2}
            y="106"
            textAnchor="middle"
            fontSize="22"
            fontWeight={800}
            fill="#2a2d33"
            style={{ fontFamily: "var(--font-alt, sans-serif)" }}
          >
            821
          </text>
          <text x={w / 2} y="122" textAnchor="middle" fontSize="9" fill="#9aa0a8">
            kcal
          </text>
          {[0, 1].map((i) => (
            <rect key={i} x={i * 86} y={h - 28} width="78" height="22" rx="8" fill="#f1f2f4" />
          ))}
        </g>
      );
  }
}
