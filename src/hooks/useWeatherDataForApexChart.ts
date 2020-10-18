import { IWeatherStatSpec, WEATHER_STAT_KEYS } from "common/weather";
import { useMemo, useState } from "react";
import { IApexChartSeries } from "types/apex.types";
import { WeatherApiStationObservations } from "../types/weather.types";

const extractSeriesFromData = (
  id: WEATHER_STAT_KEYS,
  name: string,
  datesInv: number[],
  data?: WeatherApiStationObservations
): IApexChartSeries => {
  if (!data) return [];

  return [
    {
      name,
      type: "line",
      data: data.features
        .map((feat, i) => [datesInv[i], feat.properties[id].value])
        .reverse(),
    },
  ];
};

const extractDatesFromData = (
  data?: WeatherApiStationObservations
): number[] => {
  console.log("setting dates from formula");

  if (!data) return [];

  return data.features.map((feat) =>
    new Date(feat.properties.timestamp).valueOf()
  );
};

export function useWeatherDataForApexChart(
  initSpec: IWeatherStatSpec,
  data?: WeatherApiStationObservations
) {
  const [{ id, name }, setSpec] = useState<IWeatherStatSpec>(initSpec);
  const datesInv = useMemo(() => extractDatesFromData(data), [data]);
  const series = useMemo(
    () => extractSeriesFromData(id, name, datesInv, data),
    [id, name, datesInv, data]
  );

  return [series];
}
