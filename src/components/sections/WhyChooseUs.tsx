import Image from "next/image";
import { whyChooseLeftCards, whyChooseRightCards } from "@/data/whyChooseUs";
import type { WhyChooseCard } from "@/types";

function WhyCard({ card }: { card: WhyChooseCard }) {
  return (
    <article className={`why-card${card.variant === "dark" ? " why-card--dark" : ""}`}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </article>
  );
}

export function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="why-choose__grid">
          <div className="why-choose__col">
            {whyChooseLeftCards.map((card) => (
              <WhyCard card={card} key={card.id} />
            ))}
          </div>

          <div className="why-choose__center">
            <span className="why-choose__exp-badge">10+ Years Of Experience</span>
            <div className="why-choose__photo">
              <Image
                src="/assets/images/coding-photo.png"
                alt="Developer working"
                width={419}
                height={466}
              />
            </div>
          </div>

          <div className="why-choose__col">
            {whyChooseRightCards.map((card) => (
              <WhyCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
