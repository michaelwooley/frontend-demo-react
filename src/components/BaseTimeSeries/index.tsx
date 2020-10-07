import { WEATHER_STAT_KEYS } from "common/weather";
import React, { useMemo } from "react";
import {
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { StationObservation } from "types/weather.types";
import "./index.scss";

export interface BaseTimeSeriesProps {
  data: StationObservation[];

  /**
   * Name of series to plot as a line.
   */
  series: WEATHER_STAT_KEYS;

  /**
   * Line color
   */
  stroke?: string;
}

const getDataFromStationObservation = (key: WEATHER_STAT_KEYS) => (
  datum: StationObservation
) => datum.properties[key].value;

/**
 * Placeholder "button" for editing cities.
 */
export const BaseTimeSeries: React.FC<BaseTimeSeriesProps> = ({
  data,
  series,
  stroke = "#ff7300",
  ...props
}) => {
  const getDatum = useMemo(() => getDataFromStationObservation(series), [
    series,
  ]);

  return (
    <ResponsiveContainer {...props}>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey={getDatum} stroke={stroke} />
        <YAxis />
        {/*   <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
      </ComposedChart>
    </ResponsiveContainer>
  );
};
