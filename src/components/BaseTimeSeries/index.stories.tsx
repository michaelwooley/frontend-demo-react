// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { BaseTimeSeries, BaseTimeSeriesProps } from "./index";
import { STATION_OBSERVATIONS } from "test/data";

export default {
  title: "Common/Base time series",
  component: BaseTimeSeries,
  argTypes: {},
} as Meta;

const Template: Story<BaseTimeSeriesProps> = (args) => (
  <div
    style={{
      resize: "both",
      overflow: "auto",
      backgroundColor: "orange",
      padding: "3rem",
    }}
  >
    <BaseTimeSeries {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  title: "No cities selected!",
  description: "Click here to add cities",
  icon: "fas fa-search-location",
  expand: true,
  inline: false,
};

export const AtBottom = Template.bind({});
AtBottom.args = {
  title: "Add or edit your cities",
  description: "Click here to edit",
  icon: "fas fa-edit",
  expand: false,
  inline: true,
};
