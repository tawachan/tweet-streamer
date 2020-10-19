import { Client } from "@line/bot-sdk";

import { ENV } from "./env";
import { Tweet } from "./twitter.interface";

const lineClient = new Client({
  channelAccessToken: ENV.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: ENV.LINE_CHANNEL_SECRET,
});

export const sendBook = async (tweet: Tweet) => {
  await lineClient.broadcast([
    {
      type: "text",
      text: `良書が見つかりました（from ${tweet.user.screen_name}）\r\n------\r\n${tweet.text}`,
    },
  ]);
};

export const sendInitialize = async (keyword: string) => {
  await lineClient.broadcast([
    {
      type: "text",
      text: `起動しました（キーワード：${keyword}）`,
    },
  ]);
};
