import React from "react";
import { OfferItem } from "./OfferItem";
import { offerData } from "../../utils/offerData";

export function ServicesSection() {
  // Function to generate OfferItem components
  const generateOfferItems = () => {
    return offerData.map((item, index) => (
      <OfferItem
        key={index}
        iconClass={item.iconClass}
        heading={item.heading}
        description={item.description}
      />
    ));
  };

  return (
    <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
      <h2 className="mb-4">What We Offer</h2>
      <p>
        On her way she met a copy. The copy warned the Little Blind Text, that
        where it came from it would have been rewritten a thousand times and
        everything that was left from its origin would be the word.
      </p>
      <div className="row mt-5">{generateOfferItems()}</div>
    </div>
  );
}
