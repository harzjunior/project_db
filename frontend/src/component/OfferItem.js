import React from "react";

export function OfferItem({ iconClass, heading, description }) {
  return (
    <div class="col-lg-6">
      <div className="services-2 d-flex">
        <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
          <span className={iconClass}></span>
        </div>
        <div className="text">
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
