// import React from "react";
import { Meta, StoryFn } from "@storybook/react"; // use react-webpack5
import Card from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "Components/Card",
  component: Card,
} as Meta<CardProps>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Hello Card",
  description: "This is a simple card",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled Card",
  description: "Cannot interact",
  disabled: true, // if Card supports a disabled prop
};
