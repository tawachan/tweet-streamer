/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as Twitter from "twitter";

import { ENV } from "./env";
import { request } from "./request";
import { TweetData } from "./twitter.interface";

export const initialize = () => {
  const cred: Twitter.AccessTokenOptions = {
    consumer_key: ENV.TWITTER_API_KEY!,
    consumer_secret: ENV.TWITTER_SECRET_KEY!,
    access_token_key: ENV.TWITTER_ACCESS_TOKEN!,
    access_token_secret: ENV.TWITTER_ACCESS_TOKEN_SECRET!,
  };

  const client = new Twitter(cred);

  const stream = client.stream("statuses/filter", { track: ENV.KEYWORDS });
  stream.on("data", (tweet: TweetData) => {
    request.postApiTweets({
      keywords: ENV.KEYWORDS,
      tweet_id: tweet.id,
      text: tweet.text,
      is_reply: tweet.in_reply_to_status_id_str != null,
      is_quote: tweet.quote_status != null,
      is_retweet: tweet.retweeted_status != null,
      original_tweet_id: tweet.retweeted_status?.id || tweet.quote_status?.id,
      user_id: tweet.user.id,
      user_name: tweet.user.name,
      user_screen_name: tweet.user.screen_name,
      user_friends_count: tweet.user.friends_count,
      user_followers_count: tweet.user.followers_count,
      lang: tweet.lang,
      quote_count: tweet.quote_count,
      reply_count: tweet.quote_count,
      retweet_count: tweet.retweet_count,
      favorite_count: tweet.favorite_count,
      hashtags: tweet.entities.hashtags.map((t) => t.text).join(","),
      tweeted_at: tweet.timestamp_ms,
    });
  });
  stream.on("error", (error) => {
    console.log(error);
  });
  console.log("init");
};
