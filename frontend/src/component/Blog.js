import BlogSection from "./BlogSection";
import { SectionHeader } from "./SectionHeader";

export default function Blog() {
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <SectionHeader
          title1="Recent"
          title2="Blog"
          subtitle="Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country"
        />
        <div className="row">
          <BlogSection />
        </div>
      </div>
    </section>
  );
}
