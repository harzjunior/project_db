import { ActionButton } from "./ActionButton";

export default function PriceItem({
  imgSrc,
  title,
  price,
  duration,
  description,
  btnColor,
}) {
  return (
    <div className="col-md-6 col-lg-3 ftco-animate">
      <div className="pricing-entry bg-light pb-4 text-center">
        <div>
          <h3 className="mb-3">{title}</h3>
          <p>
            <span className="price">{price}</span>{" "}
            <span className="per">/ {duration}</span>
          </p>
        </div>
        <div
          className="img"
          style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>
        <div className="px-4">
          <p>{description}</p>
        </div>
        <ActionButton
          href="#"
          label="Take A Course"
          ActionClass={btnColor}
          padClass={true}
        />
      </div>
    </div>
  );
}
