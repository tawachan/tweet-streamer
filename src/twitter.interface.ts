/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Tweet {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  display_text_range: number[];
  source: string;
  truncated: boolean;
  in_reply_to_status_id: number;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id: number;
  in_reply_to_user_id_str: string;
  in_reply_to_screen_name: string;
  user: {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    url: string;
    description: string;
    translator_type: string;
    protected: boolean;
    verified: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    favourites_count: number;
    statuses_count: number;
    created_at: string;
    utc_offset: number;
    time_zone: string;
    geo_enabled: boolean;
    lang: string;
    contributors_enabled: boolean;
    is_translator: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: string;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    default_profile: false;
    default_profile_image: false;
    following: boolean;
    follow_request_sent: boolean;
    notifications: boolean;
  };
  geo: string;
  cordinates: any;
  place: any;
  contributors: any[];
  quoted_status_id: number;
  quoted_status_id_str: string;
  quoted_status_permalink: {
    url: string;
    expanded: string;
    display: string;
  };
  quote_status?: Tweet;
  retweeted_status?: Tweet;
  extended_tweet: any;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  favorite_count: number;
  entities: {
    hashtags: Array<{ text: string; indices: number[] }>;
    urls: Array<{
      url: string;
      expanded_url: string;
      display_url: string;
      indices: number[];
    }>;
    user_mentions: any[];
    symbols: any[];
  };
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  filter_level: string;
  lang: string;
  timestamp_ms: string;
}

export interface TweetData {
  tweet: Tweet;
  keywords: string[];
}
