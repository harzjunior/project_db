import { SocialMediaIcons } from "./SocialMediaIcons";

export function StaffMember({ imgSrc, name, position, description }) {
  return (
    <div className="col-md-6 col-lg-3 ftco-animate">
      <div className="staff">
        <div className="img-wrap d-flex align-items-stretch">
          <div
            className="img align-self-stretch"
            style={{ backgroundImage: `url(${imgSrc})` }}
          ></div>
        </div>
        <div className="text pt-3 text-center">
          <h3>{name}</h3>
          <span className="position mb-2">{position}</span>
          <div className="faded">
            <p>{description}</p>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
