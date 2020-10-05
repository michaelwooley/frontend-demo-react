// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Footer, FooterProps } from "./index";

export default {
  title: "Common/Footer",
  component: Footer,
  argTypes: {},
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Main = Template.bind({});
Main.args = {};
