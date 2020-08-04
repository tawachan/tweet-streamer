import * as csv from "csv";
import * as fs from "fs";

import { firestoreClient } from "../src/firebase";
import { TweetData } from "../src/twitter.interface";

const convert = (d: TweetData) => {
  const t = d.tweet;
  return {
    id: t.id,
    text: t.text,
    in_reply_to_user_id: t.in_reply_to_user_id,
    in_reply_to_screen_name: t.in_reply_to_screen_name,
    user_name: t.user.name,
    user_screen_name: t.user.screen_name,
    user_description: t.user.description,
    created_at: t.created_at,
    quoted_status_id: t.quoted_status_id,
    quote_count: t.quote_count,
    reply_count: t.reply_count,
    retweet_count: t.retweet_count,
    favorite_count: t.favorite_count,
    hastags: t.entities.hashtags.map((t) => t.text),
    favorited: t.favorited ? 1 : 0,
    retweeted: t.retweeted ? 1 : 0,
    possibly_sensitive: t.possibly_sensitive ? 1 : 0,
    filter_level: t.filter_level,
    lang: t.lang,
    timestamp_ms: t.timestamp_ms,
    geo: t.geo,
  };
};

const main = async () => {
  const snapshot = await firestoreClient.firestore.collection(firestoreClient.TWEET_COLLECTION_NAME).get();
  const data: TweetData[] = [];
  snapshot.docs.forEach((doc) => {
    data.push(doc.data() as TweetData);
  });
  const tweets = data.map(convert);
  const output = await new Promise<string>((resolve) => {
    csv.stringify(tweets, { header: true }, (error, output) => {
      resolve(output);
    });
  });
  fs.writeFileSync("output/tweet-data.csv", output);
};

main();
