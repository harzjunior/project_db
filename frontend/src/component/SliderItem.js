import Link from "next/link";
import { ActionButton } from "./ActionButton";

export function SliderItem({ backgroundImage, title, subtitle }) {
  return (
    <div className="slider-item" style={{ backgroundImage }}>
      <div className="overlay"></div>
      <div className="container">
        <div
          className="row no-gutters slider-text align-items-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div className="col-md-8 text-center ftco-animate">
            <h1 className="mb-4">
              {title} <span>{subtitle}</span>
            </h1>
            <ActionButton
              href="/home"
              label="Read More"
              padClass="true"
              title={title + " " + subtitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
