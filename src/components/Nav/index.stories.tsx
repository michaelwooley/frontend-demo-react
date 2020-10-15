import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Nav, NavProps } from "./index";

export default {
  title: "Common/Nav/Component",
  component: Nav,
  argTypes: {},
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const Main = Template.bind({});
Main.args = {};
