import { Instrument_Sans, Instrument_Serif } from "next/font/google";

export const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});
export const instrumentItalic = Instrument_Sans({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "700"],
});
