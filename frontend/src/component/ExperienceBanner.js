import { counterData } from "../../utils/counterData";
import { CountItems } from "./CountItems";

export function ExperienceBanner() {
  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{ backgroundImage: "url(images/bg_4.jpg)" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section heading-section-black ftco-animate">
            <h2 className="mb-4">
              <span>20 Years of</span> Experience
            </h2>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country
            </p>
          </div>
        </div>
        <CountItems countData={counterData} />
      </div>
    </section>
  );
}
