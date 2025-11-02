/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Me",
    backgroundColor: "#007bff",
  },
};

export const Disabled: Story = {
  args: {
    label: "Can't Click",
    disabled: true,
  },
};
