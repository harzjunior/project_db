import HeroPageSections from "@/component/HeroPAgeSections";
import { PricingPage } from "@/component/PricingPage";

export default function Pricing() {
  return (
    <div>
      <HeroPageSections heroText="Pricing" />
      <PricingPage isHomePage={false} />
    </div>
  );
}
