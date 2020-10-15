// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import StationObservationCurrent from "test/data/station-observations-latest.json";
import { CityBlockCurrent, CityBlockCurrentProps } from "./index";
import { StationObservation as IStationObservation } from "types/weather.types";
import { QueryStatus } from "react-query";

export default {
  title: "City Block/Current/Component",
  component: CityBlockCurrent,
  argTypes: {},
} as Meta;

const Template: Story<CityBlockCurrentProps> = (args) => (
  <CityBlockCurrent {...args} />
);

export const Main = Template.bind({});
Main.args = {
  data: (StationObservationCurrent as unknown) as IStationObservation,
  status: QueryStatus.Success,
};

export const DataLoadError = Template.bind({});
DataLoadError.args = {
  data: undefined,
  status: QueryStatus.Error,
};

export const DataLoading = Template.bind({});
DataLoading.args = {
  data: undefined,
  status: QueryStatus.Loading,
};
