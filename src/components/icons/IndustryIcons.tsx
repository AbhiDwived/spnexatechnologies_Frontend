import type { SVGProps } from "react";
import type { IndustryIconName } from "@/types";

type IconProps = SVGProps<SVGSVGElement>;

const commonProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#155e9e",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 28,
  height: 28,
};

function EducationIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function GroceryIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M3 21h18" />
      <path d="M4 21V10l8-6 8 6v11" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 13h.01M12 13h.01M15 13h.01" />
    </svg>
  );
}

function EcommerceIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
      <path d="M2 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L22 7H6" />
    </svg>
  );
}

function SalonIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L8.5 15.5M8.5 8.5L14 14M20 20L14 14" />
    </svg>
  );
}

const INDUSTRY_ICON_MAP: Record<IndustryIconName, (props: IconProps) => React.JSX.Element> = {
  education: EducationIcon,
  grocery: GroceryIcon,
  ecommerce: EcommerceIcon,
  salon: SalonIcon,
};

interface IndustryIconProps {
  icon: IndustryIconName;
}

export function IndustryIcon({ icon }: IndustryIconProps) {
  const Icon = INDUSTRY_ICON_MAP[icon];
  return <Icon />;
}
