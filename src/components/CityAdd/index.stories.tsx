// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { CityAdd, CityAddProps } from "./index";
import { STATIONS } from "common/data/stations";

export default {
  title: "City config modal/City add",
  component: CityAdd,
  argTypes: {},
} as Meta;

const Template: Story<CityAddProps> = (args) => (
  <div
    style={{
      resize: "both",
      overflow: "auto",
      backgroundColor: "orange",
      padding: "3rem",
    }}
  >
    <CityAdd {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  stations: STATIONS,
};
