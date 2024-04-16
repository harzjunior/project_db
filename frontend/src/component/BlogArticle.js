import {
  categories,
  tagCloud,
  archives,
  articleTags,
} from "../../utils/singleData";
import Link from "next/link";
import ArticleAuthor from "./ArticleAuthor";
import RecentBlogSection from "./RecentBlogSection";
import CommentList from "./CommentList";

export default function BlogArticle({ decodedId, showCom }) {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ftco-animate">
            <h2 className="mb-3">{decodedId}</h2>
            <p>
              Temporibus ad error suscipit exercitationem hic molestiae totam
              obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora
              maiores ex architecto voluptatum aut officia doloremque. Error
              dolore voluptas, omnis molestias odio dignissimos culpa ex earum
              nisi consequatur quos odit quasi repellat qui officiis reiciendis
              incidunt hic non? Debitis commodi aut, adipisci.
            </p>
            {showCom == true ? (
              <p>
                <img src="/images/image_2.jpg" alt="" className="img-fluid" />
              </p>
            ) : (
              <>
                <p>
                  Quisquam esse aliquam fuga distinctio, quidem delectus
                  veritatis reiciendis. Nihil explicabo quod, est eos ipsum.
                  Unde aut non tenetur tempore, nisi culpa voluptate maiores
                  officiis quis vel ab consectetur suscipit veritatis nulla quos
                  quia aspernatur perferendis, libero sint. Error, velit, porro.
                  Deserunt minus, quibusdam iste enim veniam, modi rem maiores.
                </p>
                <p>
                  Odit voluptatibus, eveniet vel nihil cum ullam dolores
                  laborum, quo velit commodi rerum eum quidem pariatur! Quia
                  fuga iste tenetur, ipsa vel nisi in dolorum consequatur,
                  veritatis porro explicabo soluta commodi libero voluptatem
                  similique id quidem? Blanditiis voluptates aperiam non magni.
                  Reprehenderit nobis odit inventore, quia laboriosam harum
                  excepturi ea.
                </p>
              </>
            )}
            <p>
              Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
              reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
              tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab
              consectetur suscipit veritatis nulla quos quia aspernatur
              perferendis, libero sint. Error, velit, porro. Deserunt minus,
              quibusdam iste enim veniam, modi rem maiores.
            </p>
            <p>
              Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
              quo velit commodi rerum eum quidem pariatur! Quia fuga iste
              tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro
              explicabo soluta commodi libero voluptatem similique id quidem?
              Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit
              inventore, quia laboriosam harum excepturi ea.
            </p>
            <p>
              Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam
              quidem, dolor distinctio similique asperiores voluptas enim,
              exercitationem ratione aut adipisci modi quod quibusdam iusto,
              voluptates beatae iure nemo itaque laborum. Consequuntur et
              pariatur totam fuga eligendi vero dolorum provident. Voluptatibus,
              veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur
              recusandae!
            </p>
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                {articleTags.map((tag, index) => (
                  <Link key={index} href={tag.href} className="tag-cloud-link">
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>

            {showCom && (
              <ArticleAuthor
                imgSrc={
                  showCom === true
                    ? "/images/teacher-1.jpg"
                    : "/images/course-6.jpg"
                }
                alt="Image placeholder"
                className="img-fluid mb-4"
                title="George Washington"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!"
              />
            )}
            {showCom && (
              <div className="pt-5 mt-5">
                <h3 className="mb-5 h4 font-weight-bold">6 Comments</h3>
                <CommentList />
                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5 h4 font-weight-bold">Leave a comment</h3>
                  <form action="#" className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        className="form-control"
                        id="website"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name=""
                        id="message"
                        cols="30"
                        rows="10"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Post Comment"
                        className="btn py-3 px-4 btn-primary"
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}
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

            {/* Category */}
            <div className="sidebar-box ftco-animate">
              <h3>Category</h3>
              <ul className="categories">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link href={category.href}>
                      {category.name} <span>({category.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
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
