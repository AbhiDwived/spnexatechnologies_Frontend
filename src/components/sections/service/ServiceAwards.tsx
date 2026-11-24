import { AwardBadge } from "@/components/icons/AwardBadgeIcons";

// Shared "Awards" block — same 3 badges on every page that shows it
// (About, Android Development, Custom iOS Development, Database
// Analysis), so no per-page data is needed beyond the showAwards flag on
// ServiceDetail.
const AWARDS = [
  { id: "laurel", badge: "laurel" as const, caption: "Certified as a Mobile app Developers" },
  { id: "chamber-seal", badge: "chamber-seal" as const, caption: "Certified Top 1000 Companies Global 2021" },
  { id: "clutch", badge: "clutch" as const, caption: "Best outsourcing company in SGCCI" },
];

export function ServiceAwards() {
  return (
    <section className="svc-awards">
      <div className="container">
        <h2 className="section-title section-title--white">Awards</h2>
        <p className="svc-awards__sub">
          The awards that inspire us to keep upgrading the standards in our web and mobile development services.
        </p>

        <div className="svc-awards__grid">
          {AWARDS.map((award) => (
            <div className="svc-awards__item" key={award.id}>
              <div className="svc-awards__badge">
                <AwardBadge badge={award.badge} />
              </div>
              <p>{award.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
