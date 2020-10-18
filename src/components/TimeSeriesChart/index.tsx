import { IWeatherUnit } from "common/weather";
import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import Measure from "react-measure";
import { IApexChartSeries, IApexChartTypes } from "types/apex.types";
import "./index.scss";

const BRUSH_CHART_HEIGHT = 100;
const CHART_HEIGHT_PAD = 15;

type ChartOptionProps = {
  name: string;
  unit: IWeatherUnit;
  chartType: IApexChartTypes;
  color: string;
};

const generateTimeSeriesOptions = ({
  name,
  unit,
  chartType,
  color,
}: ChartOptionProps): Record<string, any> => ({
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
      // TODO Add back ability to export chart?
      show: false,
      autoSelected: "pan",
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        reset: false,
      },
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
    labels: {
      datetimeFormatter: {
        year: "yyyy",
        month: "MMM 'yy",
        day: "dd MMM",
        hour: "hh:mm TT",
      },
    },
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

const generateBrushSeriesOptions = ({
  color,
  series,
}: {
  color: string;
  series: IApexChartSeries;
}): Record<string, any> => ({
  chart: {
    id: "brush-chart",
    height: 130,
    type: "area",
    brush: {
      target: "main-chart",
      enabled: true,
      autoScaleYaxis: true,
    },
    selection: {
      enabled: true,
      xaxis: {
        min: series[0].data[0][0],
        max: series[0].data.slice(-1)[0][0],
      },
    },
  },
  colors: [color, color],

  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    tickAmount: 2,
    labels: {
      show: true,
      formatter: (value: number) => value,
      style: { colors: "rgba(0,0,0,0)" },
    },
    title: {
      text: "unit",
      style: { color: "rgba(0,0,0,0)" },
    },
    axisBorder: {
      show: true,
      // color: "rgba(0,0,0,0)"
    },
  },
});

/**
 * Sets the dimensions of the chart given the outlying div
 *
 * @param entry
 */
const generateChartDims = (
  entry: DOMRect
): { width: number; height: number } => {
  const width = Math.max(300, entry.width || 300);
  // NOTE Why is 15 a magic number here?? Appears to be perfect point at which
  // does not shrink/grow?
  const height =
    Math.max(250, (entry.height || 165) - CHART_HEIGHT_PAD) -
    BRUSH_CHART_HEIGHT;

  return { width, height };
};

export interface TimeSeriesChartProps {
  series: IApexChartSeries;
  name: string;
  unit: IWeatherUnit;
  color: string;
  chartType?: IApexChartTypes;
}

/**
 * Time series for displaying historical data
 */
export const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({
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

  const optionsLine = useMemo(
    () => generateBrushSeriesOptions({ color, series }),
    [color, series]
  );

  return (
    <Measure>
      {({ measureRef, contentRect: { entry } }) => {
        const { height, width } = generateChartDims(entry);
        return (
          <div ref={measureRef} className="base-time-series" {...props}>
            <div id="main-chart-outer">
              <Chart
                options={options}
                series={series}
                type={chartType}
                width={width}
                height={height}
              />
            </div>
            <div id="brush-chart-outer">
              <Chart
                options={optionsLine}
                series={series}
                type="area"
                height={BRUSH_CHART_HEIGHT - CHART_HEIGHT_PAD}
                width={width}
              />
            </div>
          </div>
        );
      }}
    </Measure>
  );
};
