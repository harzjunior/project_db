import {
  Bigelow_Rules,
  Dancing_Script,
  Inter,
  Merriweather,
  Russo_One,
  Fredericka_the_Great,
} from "next/font/google";

//used in navbar
export const dancingScript = Dancing_Script({ subsets: ["latin"] });
export const RussoOne = Russo_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const merriWeather = Merriweather({
  weight: ["300", "400", "700", "900"],
  style: ["italic"],
  subsets: ["latin"],
});

export const bigelowRules = Bigelow_Rules({
  weight: ["400"],
  subsets: ["latin"],
});

export const FrederickatheGreat = Fredericka_the_Great({
  weight: ["400"],
  subsets: ["latin"],
});
