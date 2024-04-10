import BlogPage from "@/component/BlogPage";
import HeroPageSections from "@/component/HeroPAgeSections";
import Pagination from "@/component/Pagination";

export default function Blog() {
  return (
    <div>
      <HeroPageSections heroText="Blog" />
      <BlogPage isHomePage={false} />
      <Pagination />
    </div>
  );
}
