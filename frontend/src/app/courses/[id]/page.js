import HeroPageSections from "@/component/HeroPAgeSections";
import Link from "next/link";

export default function CoursePost({ params }) {
  //params.slug ---> http://localhost:3000/blogposts/abc  -- will work, because the parent folder is [slug]
  //params.slug ---> http://localhost:3000/blogposts/abc/xyz -- will not work because the parent folder is not spread
  //for this to work you will need to spread parent folder ([...slug])
  //if you don't want the name of the parent folder to show then use ([...id])

  // If you want to clean the %20 from the params in the BlogPost component,
  // you can use JavaScript's decodeURIComponent() function. This function
  // decodes any URL-encoded characters in a string.

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
      <h1>Course</h1>
      <h2>{decodedId}</h2>
      <Link href={"/"}>Go back home</Link>
    </div>
  );
}
