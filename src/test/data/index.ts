import StationObservations_ from "./station-observations.json";
import { WeatherApiStationObservations } from "types/weather.types";

export const StationObservations = (StationObservations_ as unknown) as WeatherApiStationObservations;
