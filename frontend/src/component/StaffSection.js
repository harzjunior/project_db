import { staffData } from "../../utils/staffData";
import { SectionHeader } from "./SectionHeader";
import { StaffMember } from "./StaffMember";

export function StaffSection() {
  return (
    <section className="ftco-section ftco-no-pb">
      <div className="container">
        <SectionHeader
          title1="Certified"
          title2="Teachers"
          subtitle="Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country"
        />
        <div className="row">
          {staffData.map((staff, index) => (
            <StaffMember
              key={index}
              imgSrc={staff.imgSrc}
              name={staff.name}
              position={staff.position}
              description={staff.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
