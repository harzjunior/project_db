import TestimonyItem from "./TestimonyItem";
import { testimonyData } from "../../utils/testimonyData"; // Importing testimonyData

export default function TestimonyCarousel() {
  return (
    <>
      <div className="row ftco-animate justify-content-center">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel">
            {testimonyData.map((testimony, index) => (
              <TestimonyItem
                index={index}
                imgSrc={testimony.imgSrc}
                text={testimony.text}
                name={testimony.name}
                position={testimony.position}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
