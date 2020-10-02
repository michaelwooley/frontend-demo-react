// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { WeatherHistoricalDemo } from "./demo";

const queryCache = new QueryCache();

export default {
  title: "Services/Weather/Historical",
  component: WeatherHistoricalDemo,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <WeatherHistoricalDemo {...args}></WeatherHistoricalDemo>
    </ReactQueryCacheProvider>
  </>
);

export const Main = Template.bind({});
Main.args = {};
