import type { CSSProperties } from "react";
import { portfolioProjects, portfolioParagraph } from "@/data/portfolioProjects";
import { NizeBadge, PortfolioPhone } from "./PortfolioAssets";

// The real Portfolio.pdf design is 7 full-bleed sections (not a 3-column
// card grid), one per project, each with its own background-gradient
// color and alternating left/right layout: odd projects show the two
// phone mockups on the left and the white info card on the right; even
// projects flip it. Kept as "PortfolioGrid" (the export other files import)
// even though it no longer renders a grid, to avoid touching every import.
export function PortfolioGrid() {
  return (
    <section className="portfolio-projects">
      {portfolioProjects.map((project, index) => {
        const reversed = index % 2 === 1;
        return (
          <article
            key={project.id}
            className={`portfolio-project${reversed ? " portfolio-project--reverse" : ""}`}
            style={
              {
                "--pp-from": project.bgFrom,
                "--pp-to": project.bgTo,
              } as CSSProperties
            }
          >
            <div className="container portfolio-project__inner">
              <div className="portfolio-project__phones" aria-hidden="true">
                <div className="portfolio-project__phone portfolio-project__phone--back">
                  <PortfolioPhone kind={project.screens[0]} accent={project.buttonBg} />
                </div>
                <div className="portfolio-project__phone portfolio-project__phone--front">
                  <PortfolioPhone kind={project.screens[1]} accent={project.buttonBg} tall />
                </div>
              </div>

              <div className="portfolio-project__card">
                <NizeBadge />
                <h3 className="portfolio-project__name">{project.name}</h3>
                <p className="portfolio-project__desc">{portfolioParagraph}</p>
                <a
                  href="/contact"
                  className="portfolio-project__link"
                  style={{ background: project.buttonBg, color: project.buttonText }}
                >
                  View Case Study <span>&rarr;</span>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
