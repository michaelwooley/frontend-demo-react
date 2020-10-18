import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import "./index.scss";
import Measure from "react-measure";
import { IWeatherUnit } from "../../common/weather";
import { IApexChartTypes } from "types/apex.types";

const generateTimeSeriesOptions = ({
  name,
  unit,
  chartType,
  color = "#FF9800",
}: {
  name: string;
  unit: IWeatherUnit;
  chartType: IApexChartTypes;
  color: string;
}): Record<string, any> => ({
  chart: {
    id: "main-chart",
    type: chartType,
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
    events: {
      // TODO Callbacks on chart click.
      // markerClick: function (event, chartContext, config) {
      //   console.log(event);
      //   console.log(chartContext);
      //   console.log(config);
      // },
    },
  },
  colors: [color, "#66DA26", "#2E93fA", "#546E7A", "#E91E63", "#FF9800"],
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
      style: {
        colors: color,
      },
    },
    title: {
      text: unit.name,
      style: { color },
    },
    axisBorder: {
      show: true,
      color,
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
      format: "<b>hh:mm TT</b><br/> dd MMM yyyy",
    },
    y: {
      formatter: function (val: number) {
        return `${val}${unit.abbrev}`;
      },
    },
  },
});

/**
 * Sets the dimensions of the chart given the outlying div
 *
 * NOTE Add brush chart??? https://apexcharts.com/react-chart-demos/line-charts/brush-chart/
 * @param entry
 */
const generateChartDims = (
  entry: DOMRect
): { width: number; height: number } => {
  const width = Math.max(300, entry.width || 300);
  // NOTE Why is 15 a magic number here?? Appears to be perfect point at which
  // does not shrink/grow?
  const height = Math.max(150, (entry.height || 165) - 15);

  return { width, height };
};

export interface BaseTimeSeriesProps {
  series: {
    name: string;
    data: number[][];
  }[];
  name: string;
  unit: IWeatherUnit;
  color: string;
  chartType: IApexChartTypes;
}

/**
 * Time series for displaying historical data
 */
export const BaseTimeSeries: React.FC<BaseTimeSeriesProps> = ({
  series,
  name,
  unit,
  color,
  chartType = "line",
  ...props
}) => {
  const options = useMemo(
    () => generateTimeSeriesOptions({ name, unit, color, chartType }),
    [name, unit, color, chartType]
  );

  return (
    <Measure>
      {({ measureRef, contentRect: { entry } }) => {
        const { height, width } = generateChartDims(entry);
        return (
          <div ref={measureRef} className="base-time-series" {...props}>
            <div id="main-chart">
              <Chart
                options={options}
                series={series}
                type={chartType}
                width={width}
                height={height}
              />
            </div>
          </div>
        );
      }}
    </Measure>
  );
};
