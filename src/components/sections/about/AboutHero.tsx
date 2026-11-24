import Image from "next/image";

// Full-bleed photo banner with an overlapping dark title card, bottom-left —
// matches About.pdf's page header (a wide office photo with an "About" card
// sitting on top of its lower-left corner).
export function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__photo">
        <Image
          src="/assets/images/about-hero-bg.png"
          alt="SP Nexa Technologies team at work"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container">
        <div className="about-hero__card">
          <h1>About</h1>
          <span className="about-hero__rule" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
