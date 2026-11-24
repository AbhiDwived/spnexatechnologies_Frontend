import { roadmapSteps } from "@/data/roadmap";

export function Process() {
  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title section-title--white">
          Process of Creating Web and Mobile Application
        </h2>
        <p className="section-sub section-sub--white section-sub--wide">
          Turn your concepts into reality with our simple roadmap for mobile app and website
          development services. Our process is straightforward, starting with a clear plan
          followed by visual mockups to display the layout and user flow of your app or website.
          Improve your app&rsquo;s performance effortlessly. As the best app development company,
          we offer comprehensive website and app development services. To understand our website
          design and development services, we have outlined the entire process into six simple
          stages, illustrating the transition from idea to completion.
        </p>

        <div className="roadmap">
          {roadmapSteps.map((step) => (
            <div className="roadmap__step" key={step.id}>
              <div className="roadmap__node">{step.title}</div>
              <div className="roadmap__connector" aria-hidden="true" />
              <ul className="roadmap__list">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
