import { CONTACT_EMAIL, URL } from "common/constants";
import {
  WeatherApiStationObservationLatest,
  WeatherApiStationObservations,
} from "types/weather.types";
import { QueryStatus, useQuery } from "react-query";

const BASE_URL = "https://api.weather.gov";
const CACHE_TIME = 1000 * 60 * 5; // 5 minutes (API update rate)

var HEADERS = new Headers();
HEADERS.append("Accept", "application/geo+json");
HEADERS.append("User-Agent", `(${URL},${CONTACT_EMAIL})`);
HEADERS.append("Origin", URL);

const REQUEST_INIT = {
  method: "GET",
  headers: HEADERS,
} as RequestInit;

/**
 * Common weather API request
 *
 * NOTE Cannot request https resources from localhost in firefox. See https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed?utm_source=devtools&utm_medium=firefox-cors-errors&utm_campaign=default
 *
 * @param url
 */
const _callWeatherStation = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, REQUEST_INIT);

  if (!res.ok) {
    const r = await res.json();
    throw new Error(r.detail || "Station not found");
  }

  return await res.json();
};

type ITitlePlaceholder = {
  [s in QueryStatus]: {
    title: string;
    message: string;
    icon: string;
    background: string;
    foreground: string;
    canRefetch: boolean;
  };
};

export const STATUS_TITLES = {
  [QueryStatus.Error]: {
    title: "Error",
    message: "Could not load data.",
    icon: "fas fa-exclamation-circle",
    background: "has-background-danger-light",
    foreground: "has-text-danger",
    canRefetch: true,
  },
  [QueryStatus.Loading]: {
    title: "Data loading...",
    message: "This should only take a moment.",
    icon: "fas fa-hourglass-half",
    background: "has-background-white-ter",
    foreground: "",
    canRefetch: false,
  },
  [QueryStatus.Success]: {
    title: "Data fetch complete!",
    message: "Rendering now...",
    icon: "fas fa-hourglass-half",
    background: "has-background-success-light",
    foreground: "has-text-success-dark",
    canRefetch: true,
  },
} as ITitlePlaceholder;

const weatherLatest = async (
  _: string,
  stationId: string
): Promise<WeatherApiStationObservationLatest> => {
  const url = `${BASE_URL}/stations/${stationId}/observations/latest`;

  return _callWeatherStation<WeatherApiStationObservationLatest>(url);
};

const weatherHistorical = async (
  _: string,
  stationId: string,
  limit = 50
): Promise<WeatherApiStationObservations> => {
  const url = `${BASE_URL}/stations/${stationId}/observations?limit=${limit}`;

  const data = await _callWeatherStation<WeatherApiStationObservations>(url);

  // Will return "ok" even if stationId is bad
  if (data.features.length === 0) {
    throw new Error("Station not found");
  }

  return data;
};

export function useWeatherLatest(stationId: string) {
  const out = useQuery(["weather-latest", stationId], weatherLatest, {
    cacheTime: CACHE_TIME,
    staleTime: CACHE_TIME,
  });

  return {
    ...out,
    statusTitle: STATUS_TITLES[out.status],
  };
}

export function useWeatherHistorical(stationId: string, limit = 50) {
  const out = useQuery(
    ["weather-historical", stationId, limit],
    weatherHistorical,
    {
      cacheTime: CACHE_TIME,
      staleTime: CACHE_TIME,
    }
  );

  return {
    ...out,
    statusTitle: STATUS_TITLES[out.status],
  };
}
