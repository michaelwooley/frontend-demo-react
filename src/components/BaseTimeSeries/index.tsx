import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import "./index.scss";
import Measure from "react-measure";
import { IWeatherUnit } from "../../common/weather";

const generateTimeSeriesOptions = ({
  name,
  unit,
  type = "line",
}: {
  name: string;
  unit: IWeatherUnit;
  type?: string;
}): Record<string, any> => ({
  chart: {
    type,
    title: name,
    stacked: false,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: "zoom",
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  yaxis: {
    labels: {
      formatter: function (val: number) {
        return val.toFixed(0);
      },
    },
    title: {
      text: unit.name,
    },
  },
  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false,
    },
  },
  tooltip: {
    shared: false,
    x: {
      show: true,
      format: "<b>hh:mm TT</b> | dd MMM yyyy",
    },
    y: {
      formatter: function (val: number, other: any) {
        return `${val}${unit.abbrev}`;
      },
    },
  },
});

/**
 * Sets the dimensions of the chart given the outlying div
 * @param entry
 */
const generateChartDims = (
  entry: DOMRect
): { width: number; height: number } => {
  const width = Math.max(300, entry.width);
  // NOTE Why is 15 a magic number here?? Appears to be perfect point at which
  // does not shrink/grow?
  const height = Math.max(150, entry.height - 15);

  return { width, height };
};

export interface BaseTimeSeriesProps {
  series: {
    name: string;
    data: number[][];
  }[];
  name: string;
  unit: IWeatherUnit;
}

/**
 * Time series for displaying historical data
 */
export const BaseTimeSeries: React.FC<BaseTimeSeriesProps> = ({
  series,
  name,
  unit,
  ...props
}) => {
  const options = useMemo(() => generateTimeSeriesOptions({ name, unit }), [
    name,
    unit,
  ]);

  return (
    <Measure>
      {({ measureRef, contentRect: { entry } }) => {
        const { height, width } = generateChartDims(entry);
        return (
          <div ref={measureRef} className="base-time-series" {...props}>
            <Chart
              options={options}
              series={series}
              type="line"
              width={width}
              height={height}
            />
          </div>
        );
      }}
    </Measure>
  );
};
