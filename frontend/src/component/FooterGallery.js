import FooterGallerySection from "./FooterGallerySection";

export function FooterGallery() {
  return (
    // <section classNameName="ftco-gallery">
    //   <div classNameName="container-wrap">
    //     <div classNameName="row no-gutters">
    //       <FooterGallerySection />
    //     </div>
    //   </div>
    // </section>

    <section className="ftco-gallery">
      <div className="container-wrap">
        <div className="row no-gutters">
          <div className="col-md-3 ftco-animate">
            <a
              href="images/image_1.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: `url(images/image_4.jpg)` }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-3 ftco-animate">
            <a
              href="images/image_2.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: `url(images/image_4.jpg)` }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-3 ftco-animate">
            <a
              href="images/image_3.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: `url(images/image_4.jpg)` }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-3 ftco-animate">
            <a
              href="images/image_4.jpg"
              className="gallery image-popup img d-flex align-items-center"
              style={{ backgroundImage: `url(images/image_4.jpg)` }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
