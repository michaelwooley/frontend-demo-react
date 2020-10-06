// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { CityBlockPlaceholder, CityBlockPlaceholderProps } from "./index";

export default {
  title: "City Block/Placeholder",
  component: CityBlockPlaceholder,
  argTypes: {},
} as Meta;

const Template: Story<CityBlockPlaceholderProps> = (args) => (
  <CityBlockPlaceholder {...args} />
);

export const NoCities = Template.bind({});
NoCities.args = {
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
