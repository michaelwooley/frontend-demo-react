import {
  IWeatherStatSpec,
  IWeatherUnit,
  WEATHER_STAT_KEYS,
} from "common/weather";
import { TimeSeriesChart } from "components/TimeSeriesChart";
import React, { useMemo } from "react";
import { IApexChartSeries } from "types/apex.types";
import { WeatherApiStationObservations } from "types/weather.types";

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

export interface CityBlockTimeSeriesProps {
  data: WeatherApiStationObservations;

  spec: IWeatherStatSpec;

  unit: IWeatherUnit;
}

const CityBlockTimeSeries: React.FC<CityBlockTimeSeriesProps> = ({
  data,
  spec,
  unit,
  ...props
}) => {
  const { id, name, color } = spec;
  const datesInv = useMemo(() => extractDatesFromData(data), [data]);
  const series = useMemo(
    () => extractSeriesFromData(id, name, datesInv, data),
    [id, name, datesInv, data]
  );

  return (
    <TimeSeriesChart
      name={name}
      unit={unit}
      color={color}
      series={series}
      {...props}
    />
  );
};

export default CityBlockTimeSeries;
