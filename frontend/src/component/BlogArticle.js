import React from "react";

export default function BlogArticle({decodedId}) {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ftco-animate">
            <h2 className="mb-3">{decodedId}</h2>
            <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
            <p>
              <img src="images/image_2.jpg" alt="" className="img-fluid" />
            </p>
            <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
            <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
            <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">Life</a>
                <a href="#" className="tag-cloud-link">Sport</a>
                <a href="#" className="tag-cloud-link">Tech</a>
                <a href="#" className="tag-cloud-link">Travel</a>
              </div>
            </div>

            <div className="about-author d-flex p-4 bg-light">
              <div className="bio mr-5">
                <img src="images/teacher-1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
              </div>
              <div className="desc">
                <h3>George Washington</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div>

            <div className="pt-5 mt-5">
              <h3 className="mb-5 h4 font-weight-bold">6 Comments</h3>
              <ul className="comment-list">
                {/* Comments go here */}
              </ul>
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
                    <input type="url" className="form-control" id="website" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4 sidebar ftco-animate">
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon icon-search"></span>
                  <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                </div>
              </form>
            </div>
            <div className="sidebar-box ftco-animate">
              <h3>Popular Articles</h3>
              <div className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}}></a>
                <div className="text">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta">
                    <div><a href="#"><span className="icon-calendar"></span> Jan. 27, 2019</a></div>
                    <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                    <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              {/* Add other popular articles here */}
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>
              <ul className="tagcloud m-0 p-0">
                <a href="#" className="tag-cloud-link">School</a>
                <a href="#" className="tag-cloud-link">Kids</a>
                <a href="#" className="tag-cloud-link">Nursery</a>
                <a href="#" className="tag-cloud-link">Daycare</a>
                <a href="#" className="tag-cloud-link">Care</a>
                <a href="#" className="tag-cloud-link">Kindergarten</a>
                <a href="#" className="tag-cloud-link">Teacher</a>
              </ul>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Archives</h3>
              <ul className="categories">
                <li><a href="#">December 2018 <span>(30)</span></a></li>
                <li><a href="#">Novemmber 2018 <span>(20)</span></a></li>
                <li><a href="#">September 2018 <span>(6)</span></a></li>
                <li><a href="#">August 2018 <span>(8)</span></a></li>
              </ul>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
