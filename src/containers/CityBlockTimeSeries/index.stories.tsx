// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { WEATHER_STAT_SPEC, WEATHER_UNITS } from "common/weather";
import React from "react";
import { StationObservations } from "test/data";
import { WeatherApiStationObservations } from "types/weather.types";
import { WEATHER_STAT_KEYS, WEATHER_UNIT_KEYS } from "../../common/weather";
import CityBlockTimeSeries from "./index";

export default {
  title: "City Block/Chart/Time series/Container",
  component: CityBlockTimeSeries,
  argTypes: {
    spec: {
      control: {
        type: "select",
        options: WEATHER_STAT_KEYS,
      },
    },
    unit: {
      control: {
        type: "select",
        options: WEATHER_UNIT_KEYS,
      },
    },
  },
} as Meta;

const Template: Story<{
  data: WeatherApiStationObservations;
  spec: WEATHER_STAT_KEYS;
  unit: WEATHER_UNIT_KEYS;
}> = ({ spec, unit, ...args }) => (
  <>
    <div>Click and drag corner to resize chart</div>
    <hr />
    <div
      className="box"
      style={{
        resize: "both",
        overflow: "auto",
        border: "5px solid rgba(45,41,124,0.5)",
        height: "450px",
      }}
    >
      <CityBlockTimeSeries
        spec={
          WEATHER_STAT_SPEC.find((w) => w.id === spec) || WEATHER_STAT_SPEC[0]
        }
        unit={WEATHER_UNITS[unit]}
        {...args}
      />
    </div>
  </>
);

export const Main = Template.bind({});
Main.args = {
  data: StationObservations,
  spec: WEATHER_STAT_KEYS.dewpoint,
  unit: WEATHER_UNIT_KEYS.degC,
};
