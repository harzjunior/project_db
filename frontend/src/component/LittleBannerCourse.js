import { ActionButton } from "./ActionButton";

export function LittleBannerCourse() {
  return (
    <section
      className="ftco-intro"
      style={{ backgroundImage: "url(images/bg_3.jpg)" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h2>Teaching Your Child Some Good Manners</h2>
            <p className="mb-0">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <ActionButton href="#" label="Take a Course" padClass={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
