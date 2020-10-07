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
import { getDateFormatter } from "../../common/utils";
import { MomentInput } from "moment";

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

// "{\"textAnchor\":\"middle\",\"verticalAnchor\":\"start\",\"width\":1168,\"height\":30,\"x\":917.64,\"y\":223,\"stroke\":\"none\",\"fill\":\"#666\",\"index\":3,\"payload\":{\"coordinate\":917.64,\"value\":\"2020-09-16T07:15:00+00:00\",\"index\":36,\"offset\":11.68,\"tickCoord\":917.64,\"isShow\":true},\"visibleTicksCount\":5}"
const XTickLabel: React.FC<{
  formatFn: (dateLike: MomentInput) => string;

  x: number;
  y: number;
  fill: string;
  textAnchor: string;
  width: number;
  height: number;
  stroke: string;
  fontSize: number;

  /**
   * Index of tick among displayed ticks
   */
  // index: number;
  // visibleTicksCount: number;

  payload: {
    coordinate: number;
    value: MomentInput;

    /**
     * Index of value in larger data
     */
    index: number;

    /**
     * Vertical offset
     */
    offset: number;

    tickCoord: number;
    isShow: boolean;
  };
}> = ({
  formatFn,
  x,
  y,
  payload,
  fill,
  textAnchor,
  width,
  height,
  stroke,
  fontSize = 10,
  ...props
}) => {
  console.log(x, y, payload, props);
  const { value, offset } = payload;
  const fmtValue = useMemo(() => formatFn(payload.value).split("\n"), [
    formatFn,
    value,
  ]);

  return (
    <text
      x={x}
      y={y}
      dy={offset}
      width={width}
      height={height}
      fontSize={fontSize}
      fill={fill}
      stroke={stroke}
      textAnchor={textAnchor}
    >
      {fmtValue.map((line: string, i: number) => (
        <tspan dy={i * 10 + 5} x={x} key={i}>
          {line}
        </tspan>
      ))}
    </text>
  );
};

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

const getTimestamp = (datum: StationObservation) =>
  new Date(datum.properties.timestamp).valueOf();

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
  const dateFormatterFn = useMemo(() => getDateFormatter(data, getTimestamp), [
    data,
  ]);

  console.log(data.length, getDatum(data[0]), name, unit, label);

  return (
    <ResponsiveContainer minHeight={250} minWidth={350} {...props}>
      <ComposedChart width={500} height={400} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="linear" dataKey={getDatum} stroke={stroke} />
        <YAxis dataKey={getDatum} label={label}></YAxis>
        <XAxis
          // tickFormatter={(...p) => {
          //   console.log(p);
          //   return "t";
          // }}
          // tickCount={5}
          tick={(props) => (
            <XTickLabel
              fontSize={10}
              formatFn={dateFormatterFn}
              {...props}
            ></XTickLabel>
          )}
          dataKey={getTimestamp}
        ></XAxis>

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
