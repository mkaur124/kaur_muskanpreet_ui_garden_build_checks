import { Meta, StoryFn } from "@storybook/react-webpack5";
import Text from "./Text";
import { TextProps } from "./Text.types";

export default {
  title: "Components/Text",
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello Text",
  disabled: false,
  color: "black",
  fontSize: "16px",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Text",
  disabled: true,
};
