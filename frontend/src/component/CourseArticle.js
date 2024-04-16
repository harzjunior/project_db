import { tagCloud, archives, articleTags } from "../../utils/singleData";
import Link from "next/link";
import RecentBlogSection from "./RecentBlogSection";
import { CourseItem } from "./CourseItem";

export default function CourseArticle({ decodedId, showCom }) {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ftco-animate">
            <h2 className="mb-3">{decodedId}</h2>
            <p>
              Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
              quo velit commodi rerum eum quidem pariatur! Quia fuga iste
              tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro
              explicabo soluta commodi libero voluptatem similique id quidem?
              Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit
              inventore, quia laboriosam harum excepturi ea.
            </p>

            <CourseItem />

            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                {articleTags.map((tag, index) => (
                  <Link key={index} href={tag.href} className="tag-cloud-link">
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4 sidebar ftco-animate">
            {/* sidebar */}
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon icon-search"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a keyword and hit enter"
                  />
                </div>
              </form>
            </div>

            {/* Popular Articles */}
            {showCom && (
              <div className="sidebar-box ftco-animate">
                <h3>Popular Articles</h3>
                <RecentBlogSection isHomeBlog={false} />
              </div>
            )}

            {/* Tag Cloud */}
            <div className="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>
              <ul className="tagcloud m-0 p-0">
                {tagCloud.map((tag, index) => (
                  <Link key={index} href={tag.href} className="tag-cloud-link">
                    {tag.name}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Archives */}
            <div className="sidebar-box ftco-animate">
              <h3>Archives</h3>
              <ul className="categories">
                {archives.map((archive, index) => (
                  <li>
                    <Link
                      key={index}
                      href={archive.href}
                      className="tag-cloud-link"
                    >
                      {archive.name} <span>({archive.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paragraph */}
            {showCom && (
              <div className="sidebar-box ftco-animate">
                <h3>Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
