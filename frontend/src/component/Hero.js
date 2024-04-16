import { SliderItem } from "./SliderItem";

export function Hero() {
  return (
    <section className="home-slider owl-carousel">
      <SliderItem
        backgroundImage="url(images/bg_1.jpg)"
        title="Snuggle with Knowledge"
        subtitle="Hug the Future"
      />

      <SliderItem
        backgroundImage="url(images/bg_2.jpg)"
        title="Where Every Line of Code"
        subtitle="Tells a Story!"
      />
    </section>
  );
}
