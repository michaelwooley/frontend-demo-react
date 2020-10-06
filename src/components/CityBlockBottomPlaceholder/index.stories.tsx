// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import {
  CityBlockBottomPlaceholder,
  CityBlockBottomPlaceholderProps,
} from "./index";

export default {
  title: "City Block/Bottom Placeholder",
  component: CityBlockBottomPlaceholder,
  argTypes: {},
} as Meta;

const Template: Story<CityBlockBottomPlaceholderProps> = (args) => (
  <CityBlockBottomPlaceholder {...args} />
);

export const Main = Template.bind({});
Main.args = {};
