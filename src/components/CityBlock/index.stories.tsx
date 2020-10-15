import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { CityBlock, CityBlockProps } from "./index";
import { STATIONS } from "common/data/stations";
import { StationObservation as IStationObservation } from "types/weather.types";
import StationObservationCurrent from "test/data/station-observations-latest.json";
import { CityBlockCurrent } from "components/CityBlockCurrent";

export default {
  title: "City Block/Full/Outline",
  component: CityBlock,
  argTypes: {},
} as Meta;

const Template: Story<CityBlockProps> = (args) => <CityBlock {...args} />;

export const Main = Template.bind({});
Main.args = {
  isOpen: false,
  station: STATIONS[0],
  currentComponent: (
    <CityBlockCurrent
      data={(StationObservationCurrent as unknown) as IStationObservation}
    />
  ),
  chartComponent: (
    <div className="box" style={{ height: "100%" }}>
      chart
    </div>
  ),
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
