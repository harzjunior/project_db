import React from "react";

export default function HeroPageSections({ heroText }) {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{ backgroundImage: "url('images/bg_2.jpg')" }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <h1 className="mb-2 bread">{heroText}</h1>
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="/">
                  Home <i className="ion-ios-arrow-forward"></i>
                </a>
              </span>
              <span>
                {heroText} <i className="ion-ios-arrow-forward"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
