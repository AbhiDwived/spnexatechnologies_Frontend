import type { SVGProps } from "react";
import type { StatIconName } from "@/types";

type IconProps = SVGProps<SVGSVGElement>;

const commonProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 20,
  height: 20,
};

function RocketIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function BuildingIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M6 22V9l6-4 6 4v13" />
      <path d="M6 22h12" />
      <path d="M10 22v-4h4v4" />
      <path d="M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  );
}

function ClientsIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M18 21a6 6 0 0 0-12 0" />
      <circle cx="12" cy="9" r="4" />
      <path d="M22 20c0-2-1.4-3.6-3.2-4M16 5.2A4 4 0 0 1 16 13" />
    </svg>
  );
}

function TeamIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TrophyIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M7 5H4a3 3 0 0 0 3 5M17 5h3a3 3 0 0 1-3 5" />
    </svg>
  );
}

const STAT_ICON_MAP: Record<StatIconName, (props: IconProps) => React.JSX.Element> = {
  rocket: RocketIcon,
  building: BuildingIcon,
  clients: ClientsIcon,
  team: TeamIcon,
  trophy: TrophyIcon,
};

interface StatIconProps {
  icon: StatIconName;
}

export function StatIcon({ icon }: StatIconProps) {
  const Icon = STAT_ICON_MAP[icon];
  return <Icon />;
}
