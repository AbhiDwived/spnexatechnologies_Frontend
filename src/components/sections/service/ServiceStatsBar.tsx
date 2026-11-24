import type { ServiceStat } from "@/types";

interface ServiceStatsBarProps {
  /** Only `stats` is read — this also serves SolutionDetail pages, which
   * share the same ServiceStat[] shape without the rest of ServiceDetail. */
  detail: { stats: ServiceStat[] };
}

// Full-width purple stat strip beneath the benefits grid (Figma node 50:26).
export function ServiceStatsBar({ detail }: ServiceStatsBarProps) {
  return (
    <section className="svc-stats">
      <div className="container svc-stats__inner">
        {detail.stats.map((stat) => (
          <div className="svc-stat" key={stat.id}>
            <p className="svc-stat__value">{stat.value}</p>
            <p className="svc-stat__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
