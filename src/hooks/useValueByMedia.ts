import { useMediaLayout } from "use-media";

import { Device } from "../constants/Device";

type Values<T> = {
  desktop: T;
  tablet: T;
  mobile: T;
};

export const useValueByMedia = <T>(values: Values<T>) => {
  const isDesktop = useMediaLayout({ minWidth: Device.Tablet + 1 });
  const isTablet = useMediaLayout({
    maxWidth: Device.Tablet,
    minWidth: Device.Mobile + 1,
  });

  const currentMedia = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";

  return values[currentMedia];
};
