// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "DEV",
  SERVER_DOMAIN: process.env.SERVER_DOMAIN || "",
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN || "",
  TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET || "",
  TWITTER_API_KEY: process.env.TWITTER_API_KEY || "",
  TWITTER_SECRET_KEY: process.env.TWITTER_SECRET_KEY || "",
  KEYWORDS: process.env.KEYWORDS || "",
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL || "",
};
