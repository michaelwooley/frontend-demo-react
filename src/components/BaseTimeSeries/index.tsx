import { WEATHER_STAT_KEYS } from "common/weather";
import React, { useMemo } from "react";
import {
  CartesianGrid,
  ComposedChart,
  LabelProps,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { StationObservation } from "types/weather.types";
import "./index.scss";

const makeLabel = (name?: string, unit?: string): LabelProps => {
  let value: string;

  if (name && unit) {
    value = `${name} (${unit})`;
  } else if (name) {
    value = name;
  } else if (unit) {
    value = unit;
  } else {
    value = "";
  }

  return {
    value,
    fill: "red",
    angle: -90,
    position: "center",
  };
};

// const YLabel: React.FC<{
//   name?: string;
//   unit?: string;
// }> = ({ name, unit }) => {
//   const label = useMemo(() => {
//     if (name && unit) {
//       return `${name} (${unit})`;
//     } else if (name) {
//       return name;
//     } else if (unit) {
//       return unit;
//     } else {
//       return null;
//     }
//   }, [name, unit]);

//   console.log("LABEL", label);

//   return <>{label && <Label value={label} offset={5} position="center" rotation= />}</>;
// };

export interface BaseTimeSeriesProps {
  data: StationObservation[];

  /**
   * Name of series to plot as a line.
   */
  series: WEATHER_STAT_KEYS;

  /**
   * Display name of series
   */
  name?: string;

  /**
   * Units of series
   */
  unit?: string;

  /**
   * Line color
   */
  stroke?: string;
}

const getDataFromStationObservation = (key: WEATHER_STAT_KEYS) => (
  datum: StationObservation
) => datum.properties[key].value;

const getTimestamp = (datum: StationObservation) => datum.properties.timestamp;

/**
 * Placeholder "button" for editing cities.
 */
export const BaseTimeSeries: React.FC<BaseTimeSeriesProps> = ({
  data,
  series,
  name,
  unit,
  stroke = "#8884d8",
  ...props
}) => {
  const getDatum = useMemo(() => getDataFromStationObservation(series), [
    series,
  ]);
  const label = useMemo(() => makeLabel(name, unit), [name, unit]);

  console.log(data, getDatum(data[0]), name, unit, label);

  return (
    <ResponsiveContainer minHeight={250} minWidth={350} {...props}>
      <ComposedChart width={500} height={400} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey={getDatum} stroke={stroke} />
        <YAxis dataKey={getDatum} label={label}></YAxis>
        <XAxis dataKey={getTimestamp} />

        <Tooltip />
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
