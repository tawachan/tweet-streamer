export * from "./openapi";

import { ENV } from "./env";
import { Configuration, TweetApi } from "./openapi";

export const request = new TweetApi(
  new Configuration({
    basePath: ENV.SERVER_DOMAIN,
  })
);
