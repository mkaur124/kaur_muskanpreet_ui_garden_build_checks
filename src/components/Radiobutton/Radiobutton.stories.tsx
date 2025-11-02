import { Meta, StoryObj } from "@storybook/react-webpack5";
import Radiobutton, { RadiobuttonProps } from "./Radiobutton";

const meta: Meta<RadiobuttonProps> = {
  title: "Components/Radio Button",
  component: Radiobutton,
};
export default meta;

type Story = StoryObj<RadiobuttonProps>;

export const Default: Story = {
  args: {
    label: "Option 1",
    name: "radioGroup",
    value: "option1",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Option 2",
    name: "radioGroup",
    value: "option2",
    disabled: true,
  },
};
