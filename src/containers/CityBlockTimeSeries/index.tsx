import {
  IWeatherStatSpec,
  IWeatherUnit,
  WEATHER_STAT_KEYS,
} from "common/weather";
import { TimeSeriesChart } from "components/TimeSeriesChart";
import React, { useMemo } from "react";
import { IApexChartSeries } from "types/apex.types";
import { WeatherApiStationObservations } from "types/weather.types";
import { CityBlockPlaceholder } from "components/CityBlockPlaceholder/index";

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
        .map(
          (feat, i) =>
            !!feat.properties[id].value && [
              datesInv[i],
              feat.properties[id].value,
            ]
        )
        .reverse()
        .filter((el): el is number[] => el !== false),
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
    <>
      {series[0].data.length > 0 ? (
        <TimeSeriesChart
          name={name}
          unit={unit}
          color={color}
          series={series}
          {...props}
        />
      ) : (
        <CityBlockPlaceholder
          title={`No data found for series "${spec.name}"`}
          description="Select another series to view data."
          icon="fas fa-database"
          inline={false}
        />
      )}
    </>
  );
};

export default CityBlockTimeSeries;
