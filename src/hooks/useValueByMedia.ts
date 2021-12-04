import { useMediaLayout } from "use-media";

import { Media } from "../constants/Media";

type Values<T> = {
  desktop: T;
  tablet: T;
  mobile: T;
};

export const useValueByMedia = <T>(values: Values<T>) => {
  const desktopMediaQuery = Media.Desktop.split("@media ")[1];
  const tabletMediaQuery = Media.Tablet.split("@media ")[1];
  const isDesktop = useMediaLayout(
    desktopMediaQuery,
    window.matchMedia(desktopMediaQuery).matches
  );
  const isTablet = useMediaLayout(
    tabletMediaQuery,
    window.matchMedia(tabletMediaQuery).matches
  );

  const currentMedia = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";

  return values[currentMedia];
};
