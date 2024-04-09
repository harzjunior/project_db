export function CounterItem({ iconClass, number, label }) {
  return (
    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
      <div className="block-18">
        <div className="icon">
          <span className={iconClass}></span>
        </div>
        <div className="text">
          <strong className="number" data-number={number}>
            0
          </strong>
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}
