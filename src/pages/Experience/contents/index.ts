import catchFashionKo from "./catch-fashion/ko.md";
import catchFashionEn from "./catch-fashion/en.md";

import vivaRepublicaKo from "./viva-republica/ko.md";
import vivaRepublicaEn from "./viva-republica/en.md";

export const Experiences = [
  {
    id: "catch-fashion",
    ko: {
      name: "스마일벤처스 (캐치패션)",
      markdown: catchFashionKo,
    },
    en: {
      name: "Catch Fashion",
      markdown: catchFashionEn,
    },
  },
  {
    id: "viva-republica",
    ko: {
      name: "비바리퍼블리카 (토스)",
      markdown: vivaRepublicaKo,
    },
    en: {
      name: "Viva Republica (Toss)",
      markdown: vivaRepublicaEn,
    },
  },
];
