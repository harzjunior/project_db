import BlogArticle from "@/component/BlogArticle";
import HeroPageSections from "@/component/HeroPAgeSections";

export default function AboutPost({ params }) {
  const decodedId = decodeURIComponent(params.id);

  return (
    <div>
      {/* show the parameters of the slug (slug is just a dummy name) */}
      <HeroPageSections
        heroText="About Us "
        singleText=" About Single"
        isSingle="true"
        singleImg={{ backgroundImage: "url(/images/bg_2.jpg)" }}
      />
      <BlogArticle decodedId={decodedId} showCom={false} />
    </div>
  );
}
