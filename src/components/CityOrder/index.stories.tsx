// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { CityOrder, CityOrderProps } from "./index";
import { STATIONS } from "common/data/stations";

export default {
  title: "City config modal/City order",
  component: CityOrder,
  argTypes: {},
} as Meta;

const Template: Story<CityOrderProps> = (args) => (
  <div
    style={{
      resize: "both",
      overflow: "auto",
      backgroundColor: "orange",
      padding: "3rem",
    }}
  >
    <CityOrder {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  stations: STATIONS,
};

export const NoStations = Template.bind({});
NoStations.args = {
  stations: [],
};
