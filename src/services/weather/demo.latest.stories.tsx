// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { WeatherLatestDemo } from "./demo";

const queryCache = new QueryCache();

export default {
  title: "Services/Weather/Latest",
  component: WeatherLatestDemo,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <WeatherLatestDemo {...args}></WeatherLatestDemo>
    </ReactQueryCacheProvider>
  </>
);

export const Main = Template.bind({});
Main.args = {};
