import React, { useContext } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { CityConfigModal } from "./index";
import { ContextProvider } from "containers/ContextProviders";
import { ModalsContext } from "common/context";

export default {
  title: "City config modal/Modal container",
  component: CityConfigModal,
  argTypes: {},
} as Meta;

const Inner: Story = (args) => {
  const { modals, toggle } = useContext(ModalsContext);

  return (
    <>
      <CityConfigModal {...args} />

      <section className="section">
        <div className="container">
          <div className="box">
            <button
              className="button is-fullwidth"
              onClick={() => toggle("cities")}
            >
              Open modal
            </button>
            <hr></hr>
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
