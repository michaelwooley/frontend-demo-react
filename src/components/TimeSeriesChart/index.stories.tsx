// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { StationObservations } from "test/data";
import { TimeSeriesChart, TimeSeriesChartProps } from "./index";
import { WEATHER_UNITS } from "common/weather";

const series = [
  {
    name: "Temperature",
    data: StationObservations.features
      .map((feat) => [
        new Date(feat.properties.timestamp).valueOf(),
        feat.properties.temperature.value,
      ])
      .reverse(),
  },
];

export default {
  title: "City Block/Chart/Time series/Component",
  component: TimeSeriesChart,
  argTypes: {},
} as Meta;

const Template: Story<TimeSeriesChartProps> = (args) => (
  <>
    <div>Click and drag corner to resize chart</div>
    <hr />
    <div
      className="box"
      style={{
        resize: "both",
        overflow: "auto",
        border: "5px solid rgba(45,41,124,0.5)",
        height: "450px",
      }}
    >
      <TimeSeriesChart {...args} />
    </div>
  </>
);

export const Main = Template.bind({});
Main.args = {
  series,
  name: "Temperature",
  unit: WEATHER_UNITS.degC,
  color: "#33b2df",
};
