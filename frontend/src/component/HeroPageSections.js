import Link from "next/link";
import React from "react";

export default function HeroPageSections({ heroText, singleText, isSingle }) {
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
              {heroText.toLowerCase() !== "home" ? (
                <span className="mr-2">
                  <Link href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </Link>
                </span>
              ) : null}
              <span className="mr-2">
                {isSingle ? (
                  isSingle && (
                    <Link href={`/${heroText.toLowerCase()}`}>
                      {heroText} <i className="ion-ios-arrow-forward"></i>
                    </Link>
                  )
                ) : (
                  <>
                    {heroText}
                    <i className="ion-ios-arrow-forward"></i>
                  </>
                )}
              </span>
              {isSingle && (
                <span>
                  {singleText} <i class="ion-ios-arrow-forward"></i>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
