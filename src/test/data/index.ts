import STATION_OBSERVATIONS_ from "test/data/station-observations.json";
import LATEST_OBSERVATION_ from "test/data/station-observations-latest.json";

import {
  WeatherApiStationObservations,
  WeatherApiStationObservationLatest,
} from "types/weather.types";

export const STATION_OBSERVATIONS = (STATION_OBSERVATIONS_ as unknown) as WeatherApiStationObservations;
export const LATEST_OBSERVATION = (LATEST_OBSERVATION_ as unknown) as WeatherApiStationObservationLatest;
