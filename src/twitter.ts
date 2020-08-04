/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as Twitter from "twitter";

import { ENV } from "./env";
import { firestoreClient } from "./firebase";
import { Tweet } from "./twitter.interface";

export const initialize = () => {
  const cred: Twitter.AccessTokenOptions = {
    consumer_key: ENV.TWITTER_API_KEY!,
    consumer_secret: ENV.TWITTER_SECRET_KEY!,
    access_token_key: ENV.TWITTER_ACCESS_TOKEN!,
    access_token_secret: ENV.TWITTER_ACCESS_TOKEN_SECRET!,
  };

  const client = new Twitter(cred);

  const stream = client.stream("statuses/filter", { track: ENV.KEYWORDS });
  stream.on("data", async (tweet: Tweet) => {
    await firestoreClient.appendTweetData({ tweet, keywords: ENV.KEYWORDS.split(",") });
  });
  stream.on("error", (error) => {
    console.log(error);
  });
  console.log("init");
};
