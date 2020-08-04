import * as admin from "firebase-admin";

import { ENV } from "./env";
import { TweetData } from "./twitter.interface";

import serviceAccount = require("../firebase-credential.json");

const TWEET_COLLECTION_NAME = "tweets";

const app = admin.initializeApp({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: ENV.FIREBASE_DATABASE_URL,
});
const firestore = app.firestore();

const appendTweetData = async (data: TweetData) => {
  await firestore.collection(TWEET_COLLECTION_NAME).add(data);
};

export const firestoreClient = {
  appendTweetData,
  firestore,
  TWEET_COLLECTION_NAME,
};
