/// <reference path="../types/env.d.ts" />
import { initialize } from "unleash-client";

const unleash = initialize({
  url: process.env.UNLEASH_API_URL,
  appName: "server",
  environment: process.env.APP_ENV || "development",
  customHeaders: {
    Authorization: process.env.UNLEASH_API_KEY,
  },
});

export default unleash;
