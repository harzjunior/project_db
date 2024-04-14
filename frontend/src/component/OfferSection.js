import { WelcomeSection } from "./WelcomeSection";
import { ServicesSection } from "./ServicesSection";

export function OfferSection() {
  return (
    <section className="ftco-section ftco-no-pt ftc-no-pb">
      <div className="container">
        <div className="row">
          <WelcomeSection />
          <ServicesSection />
        </div>
      </div>
    </section>
  );
}
