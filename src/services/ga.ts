import ReactGA from "react-ga";

interface TrackPageViewParams {
  path: string;
}

interface TrackEventParams {
  category: string;
  action: string;
  value?: number;
  label?: string;
}

interface TrackHeaderEventParams extends Omit<TrackEventParams, "category"> {
  action: "Link Button Clicked";
}

interface TrackProfileSectionEventParams
  extends Omit<TrackEventParams, "category"> {
  action: "Link Button Clicked";
}

interface TrackProjectSectionEventParams
  extends Omit<TrackEventParams, "category"> {
  action: "Card Viewd" | "Modal Opened" | "Link Button Clicked";
}

interface TrackFooterEventParams extends Omit<TrackEventParams, "category"> {
  action: "Name Clicked";
}

class GAService {
  private env: "development" | "production" | "test";

  constructor() {
    if (!process.env.GA_TRACKING_ID) {
      throw new Error("GA_TRACKING_ID must be provided.");
    }

    this.env = process.env.NODE_ENV;

    if (this.isProduction) {
      ReactGA.initialize(process.env.GA_TRACKING_ID);
    }
  }

  private get isProduction() {
    return this.env === "production";
  }

  public trackPageView({ path }: TrackPageViewParams) {
    if (!this.isProduction) {
      console.log("Page Viewed");
      return;
    }

    ReactGA.pageview(path);
  }

  private trackEvent(params: TrackEventParams) {
    if (!this.isProduction) {
      console.log(params);
      return;
    }

    ReactGA.event(params);
  }

  public trackHeaderEvent(params: TrackHeaderEventParams) {
    this.trackEvent({ category: "Header", ...params });
  }

  public trackProfileSectionEvent(params: TrackProfileSectionEventParams) {
    this.trackEvent({ category: "Profile", ...params });
  }

  public trackProjectSectionEvent(params: TrackProjectSectionEventParams) {
    this.trackEvent({ category: "Project", ...params });
  }

  public trackFooterEvent(params: TrackFooterEventParams) {
    this.trackEvent({ category: "Footer", ...params });
  }
}

export const GA = new GAService();
