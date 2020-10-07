export const APP_NAME = "Weather demo";
export const CONTACT_EMAIL = "wm.wooley@gmail.com";
export const URL = "https://github.com/michaelwooley/frontend-demo-react";

export enum SCREEN_BREAKPOINTS {
  "mobile" = 768, // up to 768px
  "tablet" = 769, //from 769px
  "desktop" = 1024, // from 1024px
  "widescreen" = 1216, //from 1216px
  "fullhd" = 1408,
}

export enum LOCAL_STORAGE_KEYS {
  STATIONS = "bhw-react-stations",
}

export enum MS_TIME {
  "hour" = 1000 * 60 * 60,
  "day" = 1000 * 60 * 60 * 24,
  "week" = 1000 * 60 * 60 * 24 * 7,
  "month" = 1000 * 60 * 60 * 24 * 7 * 30,
  "year" = 1000 * 60 * 60 * 24 * 7 * 30 * 365,
  "decade" = 1000 * 60 * 60 * 24 * 7 * 30 * 365 * 10,
}
