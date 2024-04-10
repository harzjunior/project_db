import React from "react";
import { SectionHeader } from "./SectionHeader";
import PricingSection from "./PricingSection";

export function PricingPage({ isHomePage }) {
  return (
    <section className="ftco-section">
      <div className="container">
        {isHomePage && (
          <SectionHeader
            title1="Our"
            title2="Pricing"
            subtitle="Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country"
          />
        )}

        <div className="row">
          <PricingSection />
        </div>
      </div>
    </section>
  );
}
