// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { BaseTimeSeries, BaseTimeSeriesProps } from "./index";
import { STATION_OBSERVATIONS } from "test/data";
import { WEATHER_STAT_KEYS } from "common/weather";

export default {
  title: "Common/Base time series",
  component: BaseTimeSeries,
  argTypes: {},
} as Meta;

const Template: Story<BaseTimeSeriesProps> = (args) => (
  <div
    style={{
      minHeight: "450px",
      minWidth: "600px",
      resize: "both",
      overflow: "auto",
      border: "1px solid black",
      padding: "3rem",
    }}
  >
    <BaseTimeSeries {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  data: STATION_OBSERVATIONS.features
    .sort(
      (a, b) =>
        new Date(a.properties.timestamp).valueOf() -
        new Date(b.properties.timestamp).valueOf()
    )
    .filter(
      (_, i) =>
        i === 0 ||
        i === STATION_OBSERVATIONS.features.length ||
        Math.random() > 0.95
    ),
  series: WEATHER_STAT_KEYS.temperature,
  name: "Series name",
  unit: "unit",
};
