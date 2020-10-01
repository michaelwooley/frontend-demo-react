import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Nav, NavProps } from "./index";

export default {
  title: "Common/Nav",
  component: Nav,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const Main = Template.bind({});
Main.args = {
  primary: true,
  label: "Main",
};
