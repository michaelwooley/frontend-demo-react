import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { CityBlock, CityBlockProps } from "./index";
import { STATIONS } from "common/data/stations";

export default {
  title: "City Block/Outline",
  component: CityBlock,
  argTypes: {},
} as Meta;

const Template: Story<CityBlockProps> = (args) => <CityBlock {...args} />;

export const Main = Template.bind({});
Main.args = {
  isOpen: false,
  station: STATIONS[0],
  currentComponent: <div>current</div>,
  chartComponent: <div>chart</div>,
};

export const Multiple: Story<CityBlockProps> = (args) => (
  <>
    {STATIONS.map((s) => (
      <CityBlock {...args} station={s} key={s.id} />
    ))}
  </>
);
Multiple.args = {
  isOpen: false,
};
