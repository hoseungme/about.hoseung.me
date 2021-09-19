import { useMediaLayout } from "use-media";

import { Media } from "../constants/Media";

type Values<T> = {
  desktop: T;
  tablet: T;
  mobile: T;
};

export const useValueByMedia = <T>(values: Values<T>) => {
  const isDesktop = useMediaLayout(Media.Desktop.split("@media ")[1]);
  const isTablet = useMediaLayout(Media.Tablet.split("@media ")[1]);

  const currentMedia = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";

  return values[currentMedia];
};
