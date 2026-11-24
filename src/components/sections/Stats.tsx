import { statItems, yearsOfExperience } from "@/data/stats";
import { StatIcon } from "@/components/icons/StatIcons";

export function Stats() {
  return (
    <section className="stats">
      <div className="container stats__inner">
        <div className="stats__grid">
          {statItems.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <p className="stat-card__num">{stat.value}</p>
              <div className="stat-card__row">
                <span className="stat-card__icon">
                  <StatIcon icon={stat.icon} />
                </span>
                <p className="stat-card__label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="stats__badge">
          <div className="stats__ring-outer">
            <div className="stats__ring-inner">
              <p className="stats__years">{yearsOfExperience.value}</p>
              <div className="stat-card__row">
                <span className="stat-card__icon">
                  <StatIcon icon={yearsOfExperience.icon} />
                </span>
                <p className="stat-card__label">{yearsOfExperience.label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
