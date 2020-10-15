// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import CityBlockChart, { CityBlockChartProps } from "./index";
import { STATIONS } from "common/data/stations";

export default {
  title: "City Block/Chart/Container",
  component: CityBlockChart,
  argTypes: {
    station: {
      control: {
        type: "select",
        options: STATIONS,
      },
    },
  },
} as Meta;

const Template: Story<CityBlockChartProps> = (args) => (
  <CityBlockChart {...args} />
);

export const Container = Template.bind({});
Container.args = {
  station: STATIONS[0],
  idx: 0,
};
