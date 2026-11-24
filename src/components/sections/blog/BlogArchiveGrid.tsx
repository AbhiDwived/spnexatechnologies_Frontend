// "Explore the World of Development with Trickle Solutions Blog" section.
// A pixel-level recheck against Blogs.pdf found this archive grid is NOT
// the site's real taxi-booking blog posts (those belong to the homepage's
// "Latest Blogs" teaser, reused unmodified on /portfolio and /blogs) — the
// real design shows 3 identical lorem-ipsum-grade placeholder cards ("How
// Indian Trickle Solutions Perfect App Launches" x3, each with a generic
// dark "APP Development" illustration, not a photo) in a staggered
// 2-column layout (1 card offset into column 2, then 2 more filling both
// columns below), followed by "Load More". Reproduced literally here per
// the explicit "100% match" request, the same call made for the Portfolio
// page's own repeated placeholder paragraph.
//
// The intro paragraph's own placeholder also literally says "Devherds
// Software Solutions Blog" / "Devherds Blog" — a leftover from whatever
// template this Figma file started from, not this company's name (which
// is Trickle Solutions throughout the rest of the page, including the
// sentence right before it). An earlier pass corrected this to "Trickle
// Solutions"; reproduced verbatim here instead (typo-grade run-on
// "more.Start" included) per the explicit "100% match" request — the same
// call made for the Portfolio page's "uttse" paragraph.
const PLACEHOLDER_TITLE = "How Indian SP Nexa Technologies Perfect App Launches";
const PLACEHOLDER_EXCERPT =
  "A mobile app launch involves several critical stages, such as architecture design, performance optimisation, platform compliance, and post-release stability.";
const PLACEHOLDER_DATE = "January 30, 2026";

function ArchiveCardMedia() {
  return (
    <svg viewBox="0 0 400 220" width="100%" height="100%" role="img" aria-hidden="true">
      <rect width="400" height="220" fill="#0a0f24" />
      <rect x="40" y="0" width="4" height="220" fill="#1c2a52" />
      <rect x="140" y="0" width="4" height="220" fill="#1c2a52" />
      <g stroke="#2a3a6b" strokeWidth="1.5" fill="none" opacity="0.7">
        <path d="M44 60h96M44 150h96" />
      </g>
      <rect x="54" y="30" width="34" height="34" rx="8" fill="#13224a" stroke="#3a56a0" />
      <rect x="96" y="30" width="34" height="34" rx="8" fill="#13224a" stroke="#3a56a0" />
      <rect x="54" y="78" width="78" height="10" rx="3" fill="#1c2a52" />
      <rect x="54" y="96" width="60" height="8" rx="3" fill="#1c2a52" />
      <rect x="88" y="118" width="52" height="24" rx="12" fill="#ec4899" opacity="0.85" />
      <rect x="54" y="150" width="78" height="10" rx="3" fill="#1c2a52" />
      <rect x="54" y="168" width="78" height="30" rx="8" fill="#13224a" stroke="#3a56a0" />
      <circle cx="30" cy="20" r="3" fill="#60a5fa" />
      <circle cx="380" cy="40" r="4" fill="#60a5fa" opacity="0.7" />
      <circle cx="30" cy="190" r="4" fill="#ec4899" opacity="0.6" />
      <path d="M350 25l6 6M356 25l-6 6" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <rect x="330" y="150" width="30" height="26" rx="4" fill="#1c2a52" transform="rotate(18 345 163)" />
      <text x="188" y="105" fontSize="34" fontWeight={800} fill="#ffffff" style={{ fontFamily: "var(--font-alt, sans-serif)" }}>
        APP
      </text>
      <text x="188" y="140" fontSize="30" fontWeight={400} fill="rgba(255,255,255,0.75)" style={{ fontFamily: "var(--font-alt, sans-serif)" }}>
        Development
      </text>
    </svg>
  );
}

export function BlogArchiveGrid() {
  const posts = [0, 1, 2];

  return (
    <section className="blog-archive">
      <div className="container">
        <h2 className="section-title">
          Explore the World of Development
          <br />
          with SP Nexa Technologies Blog
        </h2>
        <p className="section-sub">
          Welcome to Devherds Software Solutions Blog, your one-stop destination for insightful
          blogs, tutorials, and resources on various aspects of software development, programming
          languages, web development, and much more.Start exploring our latest articles and
          resources today at Devherds Blog and take your development skills to new heights!
        </p>

        <div className="blog-archive__masonry">
          {posts.map((i) => (
            <article className="blog-card archive-card" key={i}>
              <div className="blog-card__media archive-card__media">
                <ArchiveCardMedia />
              </div>
              <h3>{PLACEHOLDER_TITLE}</h3>
              <p className="blog-card__excerpt">{PLACEHOLDER_EXCERPT}</p>
              <div className="archive-card__footer">
                <span className="archive-card__date">
                  <span className="archive-card__dot" aria-hidden="true" />
                  {PLACEHOLDER_DATE}
                </span>
                <a href="#" className="blog-card__readmore">
                  Read More &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-archive__load-more">
          <button type="button" className="btn btn--primary">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
