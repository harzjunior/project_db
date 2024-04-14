import BlogArticle from "@/component/BlogArticle";
import HeroPageSections from "@/component/HeroPAgeSections";

export default function BlogPost({ params }) {
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
        heroText="Blog "
        singleText=" Blog Single"
        isSingle="true"
        singleImg={{ backgroundImage: "url(/images/bg_2.jpg)" }}
      />
      <BlogArticle decodedId={decodedId} />
    </div>
  );
}
