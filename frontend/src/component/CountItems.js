import { CounterItem } from "./CounterItem";

export function CountItems({ countData }) {
  return (
    <>
      <div className="row d-md-flex align-items-center justify-content-center">
        <div className="col-lg-10">
          <div className="row d-md-flex align-items-center">
            {countData.map((item, index) => (
              <div
                key={index}
                className="col-md d-flex justify-content-center counter-wrap ftco-animate"
              >
                <CounterItem
                  iconClass={item.iconClass}
                  number={item.number}
                  label={item.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
