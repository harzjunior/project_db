import BlogSection from "./BlogSection";
import { SectionHeader } from "./SectionHeader";

export default function BlogPage({ isHomePage }) {
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        {isHomePage && (
          <SectionHeader
            title1="Recent"
            title2="Blog"
            subtitle="Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country"
          />
        )}
        <div className="row">
          <BlogSection isHomePage={isHomePage} />
        </div>
      </div>
    </section>
  );
}
