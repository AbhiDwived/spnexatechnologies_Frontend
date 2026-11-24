// "BLOGS" hero — matches Blogs.pdf's full-bleed banner: a large photo
// (someone typing on a laptop at sunset, warm bokeh lights) with
// left-aligned white text over it and a filled "Contact Us Now" button.
// Recheck against the PDF confirmed the text is left-aligned (not
// centered) and the button is filled, not outlined — both fixed here. No
// licensed photography is available for the background, so a warm
// gradient with soft bokeh-style dots stands in for it, the same
// tradeoff made for every other photo slot across this project.
export function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="blog-hero__bokeh" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="container blog-hero__inner">
        <h1 className="blog-hero__title">Blogs</h1>
        <span className="svc-hero__swash blog-hero__swash" aria-hidden="true" />
        <h2 className="blog-hero__subtitle">Trickle Solutions IT Comprehensive Information Hub</h2>
        <p className="blog-hero__desc">
          Welcome to the Trickle Solutions IT Comprehensive Information Hub, your go-to destination
          for the latest in technology and innovation. Dive into a wealth of resources, expert
          insights, and up-to-date information to stay ahead in the ever-evolving IT landscape.
        </p>
        <a href="/contact" className="btn btn--primary">
          Contact Us Now <span className="btn__arrow-circle">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
