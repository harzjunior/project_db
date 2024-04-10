import PriceItem from "./PriceItem";
import { pricingData } from "../../utils/pricingData";

export default function PricingSection() {
  return (
    <>
      {pricingData.map((prix, index) => (
        <PriceItem
          key={index}
          imgSrc={prix.imgSrc}
          title={prix.title}
          price={prix.price}
          href={prix.url}
          duration={prix.duration}
          description={prix.description}
          btnColor={prix.btnColor}
        />
      ))}
    </>
  );
}
