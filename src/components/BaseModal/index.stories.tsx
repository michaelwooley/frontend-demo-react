// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { BaseModal, BaseModalProps } from "./index";

export default {
  title: "Common/Base Modal",
  component: BaseModal,
  argTypes: {},
} as Meta;

const Template: Story<BaseModalProps> = (args) => (
  <BaseModal {...args}>
    <div className="modal-content">
      <header className="modal-card-head">
        <p className="modal-card-title">Sample modal</p>
      </header>
      <section className="modal-card-body">
        Either use a modal card or a modal-content element.{" "}
        <a href="https://bulma.io/documentation/components/modal/">Reference</a>
      </section>
    </div>
  </BaseModal>
);

export const Main = Template.bind({});
Main.args = {
  isOpen: true,
};
