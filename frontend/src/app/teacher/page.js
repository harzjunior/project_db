import HeroPageSections from "@/component/HeroPAgeSections";
import { StaffSection } from "@/component/StaffSection";

export default function Teachers() {
  return (
    <div>
      <HeroPageSections heroText="Teachers" />
      <StaffSection isHomePage={false} />
    </div>
  );
}
