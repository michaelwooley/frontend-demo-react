// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { CityConfigModal, CityConfigModalProps } from "./index";

export default {
  title: "City config modal/Modal outline",
  component: CityConfigModal,
  argTypes: {},
} as Meta;

const Template: Story<CityConfigModalProps> = (args) => (
  <CityConfigModal {...args} />
);

export const Main = Template.bind({});
Main.args = {
  isOpen: true,
  leftChild: (
    <div className="box" style={{ height: "150vh" }}>
      Left side is tight <br /> (150vh)
    </div>
  ),
  rightChild: <div className="box">Right side</div>,
};
