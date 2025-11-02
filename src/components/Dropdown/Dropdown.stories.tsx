import { Meta, StoryObj } from "@storybook/react-webpack5";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

const meta: Meta<DropdownProps> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;

// Define a "type" for your stories
type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    disabled: true,
  },
};
