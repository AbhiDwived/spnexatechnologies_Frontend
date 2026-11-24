import Image from "next/image";
import Link from "next/link";
import { aboutBio, aboutBullets, aboutMission, aboutVision } from "@/data/about";

export function AboutWhoWeAre() {
  return (
    <section className="about-who">
      <div className="container">
        <div className="about-who__grid">
          <div className="about-who__photo">
            <Image
              src="/assets/images/about-team-photo.png"
              alt="A member of the SP Nexa Technologies team"
              width={480}
              height={520}
            />
          </div>

          <div className="about-who__content">
            <h2 className="section-title section-title--left">Who We are</h2>

            {aboutBio.map((paragraph) => (
              <p className="about-who__desc" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}

            <ul className="about-who__list">
              {aboutBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="about-who__mv">
              <div>
                <h3>{aboutMission.heading}</h3>
                <p>{aboutMission.text}</p>
              </div>
              <div>
                <h3>{aboutVision.heading}</h3>
                <p>{aboutVision.text}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h3>Let&rsquo;s Start The Development Of Your Dream Project</h3>
          <Link href="/#contact" className="about-cta__btn">
            Contact Us Now <span className="btn__arrow-circle">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
