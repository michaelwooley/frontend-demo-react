// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import StationObservationCurrent from "test/data/station-observations-latest.json";
import { CityBlockChart, CityBlockChartProps } from "./index";
import { StationObservation as IStationObservation } from "types/weather.types";

export default {
  title: "City Block/Chart outline",
  component: CityBlockChart,
  argTypes: {},
} as Meta;

const Template: Story<CityBlockChartProps> = (args) => (
  <CityBlockChart {...args} />
);

export const Main = Template.bind({});
Main.args = {
  data: (StationObservationCurrent as unknown) as IStationObservation,
};
