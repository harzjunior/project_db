export function ServiceItem({ iconClass, bgColor, heading, description }) {
  return (
    <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate">
      <div className={`media block-6 d-block text-center ${bgColor}`}>
        <div className="icon d-flex justify-content-center align-items-center">
          <span className={iconClass}></span>
        </div>
        <div className="media-body p-2 mt-3">
          <h3 className="heading">{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
