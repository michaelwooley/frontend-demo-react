import React, { useContext } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Nav } from "./index";
import { ContextProvider } from "containers/ContextProviders";
import { ModalsContext } from "common/context";

export default {
  title: "Common/Nav/Container",
  component: Nav,
  argTypes: {},
} as Meta;

const Inner: Story = (args) => {
  const { modals } = useContext(ModalsContext);

  return (
    <>
      <Nav {...args} />

      <section className="section">
        <div className="container">
          <div className="box">
            Modal container status:
            <code>{JSON.stringify(modals)}</code>
          </div>
        </div>
      </section>
    </>
  );
};

const Template: Story = (args) => (
  <ContextProvider>
    <Inner {...args}></Inner>
  </ContextProvider>
);

export const Container = Template.bind({});
Container.args = {};
