// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { CityBlock, CityBlockProps } from "./index";
import { STATIONS } from "common/data/stations";

export default {
  title: "City Block/Container",
  component: CityBlock,
  argTypes: {
    station: {
      control: {
        type: "select",
        options: STATIONS,
      },
    },
  },
} as Meta;

const Template: Story<CityBlockProps> = (args) => <CityBlock {...args} />;

export const Container = Template.bind({});
Container.args = {
  station: STATIONS[0],
};
