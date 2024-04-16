import CourseArticle from "@/component/CourseArticle";
import HeroPageSections from "@/component/HeroPAgeSections";

export default function CoursePost({ params }) {
  const decodedId = decodeURIComponent(params.id);

  return (
    <div>
      {/* show the parameters of the slug (slug is just a dummy name) */}
      <HeroPageSections
        heroText="Courses "
        singleText=" Course Single"
        isSingle="true"
        singleImg={{ backgroundImage: "url(/images/bg_2.jpg)" }}
      />
      <CourseArticle decodedId={decodedId} showCom={false} />
    </div>
  );
}
