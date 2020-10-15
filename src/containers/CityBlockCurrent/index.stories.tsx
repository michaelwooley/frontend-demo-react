// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import CityBlockCurrent, { CityBlockCurrentProps } from "./index";
import { STATIONS } from "common/data/stations";

export default {
  title: "City Block/Current/Container",
  component: CityBlockCurrent,
  argTypes: {
    station: {
      control: {
        type: "select",
        options: STATIONS,
      },
    },
  },
} as Meta;

const Template: Story<CityBlockCurrentProps> = (args) => (
  <CityBlockCurrent {...args} />
);

export const Container = Template.bind({});
Container.args = {
  station: STATIONS[0],
  idx: 0,
};
