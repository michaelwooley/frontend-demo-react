import React from "react";
import Chart from "react-apexcharts";
import "./index.scss";

export interface BaseTimeSeriesProps {
  data: any;
}

/**
 * Outline for chart container
 */
export const BaseTimeSeries: React.FC<BaseTimeSeriesProps> = ({
  data,
  ...props
}) => {
  const state = {
    series: [
      {
        name: "XYZ MOTORS",
        data: data,
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
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
      title: {
        text: "Stock Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val: number) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    },
  };

  return (
    <div {...props}>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width={500}
      />
    </div>
  );
};
