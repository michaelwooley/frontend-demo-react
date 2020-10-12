// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { WEATHER_STAT_SPEC } from "common/weather";
import React from "react";
import { CityBlockChart, CityBlockChartProps } from "./index";

export default {
  title: "City Block/Chart outline",
  component: CityBlockChart,
  argTypes: {},
} as Meta;

const Template: Story<CityBlockChartProps> = (args) => (
  <CityBlockChart {...args}>
    <figure className="image is-4by3">
      <img
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder"
      />
    </figure>
  </CityBlockChart>
);

const activeSeriesInit = WEATHER_STAT_SPEC[2];
export const Main = Template.bind({});
Main.args = {
  specs: WEATHER_STAT_SPEC,
  activeSeries: activeSeriesInit,
};
