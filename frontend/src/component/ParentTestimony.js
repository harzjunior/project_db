import { SectionHeader } from "./SectionHeader";
import TestimonyCarousel from "./TestimonyCarousel";

export default function ParentTestimony() {
  return (
    <section className="ftco-section testimony-section bg-light">
      <div className="container">
        <SectionHeader
          title1="What Parents"
          title2="Says About Us"
          subtitle="Separated they live in. A small river named Duden flows by 
          their place and supplies it with the necessary regelialia. 
          It is a paradisematic country"
        />
        <TestimonyCarousel />
      </div>
    </section>
  );
}
