import type { SVGProps } from "react";
import type { ServiceProcessStepIcon } from "@/types";

type IconProps = SVGProps<SVGSVGElement>;

// Icons for the "Process of Creating ___" 6-step flow diagram (Android &
// Custom iOS Development pages). Same blue line-art convention as
// ServiceIcons.tsx, sized smaller since these sit inside compact step
// cards rather than the benefits grid.
const commonProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#2563eb",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 34,
  height: 34,
};

function RequirementGatheringIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="3" y="4" width="13" height="16" rx="1.5" />
      <path d="M6.5 8.5h6M6.5 12h6M6.5 15.5h3.5" />
      <circle cx="17.5" cy="17.5" r="4" />
      <path d="M20.3 20.3L22 22" />
    </svg>
  );
}

function UiUxDesigningIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="2.5" y="4" width="19" height="13" rx="1.6" />
      <path d="M2.5 8h19" />
      <rect x="6" y="10.5" width="5" height="4" />
      <path d="M13.5 11h4M13.5 13.5h4" />
      <path d="M9 20.5h6M12 17v3.5" />
    </svg>
  );
}

function DevelopmentIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <rect x="3" y="4" width="18" height="13" rx="1.6" />
      <path d="M8.5 9l-2.5 3 2.5 3M15.5 9l2.5 3-2.5 3M13 8.5l-2 7" />
      <path d="M9 20.5h6" />
    </svg>
  );
}

function TestingIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

function DeploymentIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M12 2.5c2.5 2.5 3.5 5.5 3.5 9 0 2-.6 3.7-1.4 5l-2.1 3-2.1-3c-.8-1.3-1.4-3-1.4-5 0-3.5 1-6.5 3.5-9z" />
      <circle cx="12" cy="10.5" r="1.8" />
      <path d="M8.5 16l-3 2 .8 3.5M15.5 16l3 2-.8 3.5" />
    </svg>
  );
}

function SupportMaintenanceIcon(props: IconProps) {
  return (
    <svg {...commonProps} {...props}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="5" rx="1.3" />
      <rect x="17" y="13" width="4" height="5" rx="1.3" />
      <path d="M19 18v1.2a2.3 2.3 0 0 1-2.3 2.3H13" />
      <circle cx="11.3" cy="21.5" r="1.3" />
    </svg>
  );
}

const PROCESS_ICON_MAP: Record<ServiceProcessStepIcon, (props: IconProps) => React.JSX.Element> = {
  "requirement-gathering": RequirementGatheringIcon,
  "ui-ux-designing": UiUxDesigningIcon,
  development: DevelopmentIcon,
  testing: TestingIcon,
  deployment: DeploymentIcon,
  "support-maintenance": SupportMaintenanceIcon,
};

export function ProcessIcon({ icon }: { icon: ServiceProcessStepIcon }) {
  const Icon = PROCESS_ICON_MAP[icon];
  return <Icon />;
}
