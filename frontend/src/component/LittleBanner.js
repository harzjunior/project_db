import { ServiceItem } from "./ServiceItem";
import servicesData from "../../utils/servicesData";

export function LittleBanner() {
  return (
    <section className="ftco-services ftco-no-pb">
      <div className="container-wrap">
        <div className="row no-gutters">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              iconClass={service.iconClass}
              bgColor={service.bgColor}
              heading={service.heading}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
