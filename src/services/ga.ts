import ReactGA from "react-ga";

interface TrackPageViewParams {
  path: string;
}

export class GAService {
  private env: "development" | "production" | "test";

  constructor() {
    if (!process.env.REACT_APP_GA_TRACKING_ID) {
      throw new Error("GA_TRACKING_ID must be provided.");
    }

    this.env = process.env.NODE_ENV;

    if (this.isProduction) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    }
  }

  private get isProduction() {
    return this.env === "production";
  }

  public trackPageView({ path }: TrackPageViewParams) {
    if (!this.isProduction) {
      console.log("page viewed");
      return;
    }

    ReactGA.pageview(path);
  }
}

export const GA = new GAService();
