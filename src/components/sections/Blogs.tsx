import Image from "next/image";
import { blogPosts } from "@/data/blogs";

export function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <h2 className="section-title">Latest Blogs</h2>
        <p className="section-sub">
          Check out our newest blog posts for the latest insights and updates. Dive into our
          latest articles to stay informed and inspired!
        </p>

        <div className="blogs__grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-card__media">
                <span className="blog-card__badge">{post.badge}</span>
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                />
              </div>
              <p className="blog-card__tag">{post.tag}</p>
              <h3>{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <a href="#" className="blog-card__readmore">
                Read More &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
