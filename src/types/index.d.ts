declare module NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production";
    readonly GA_TRACKING_ID: string;
  }
}

declare module "*.png" {
  const src: string;
  export default src;
}
