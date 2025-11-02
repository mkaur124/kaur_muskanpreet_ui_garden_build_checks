import type { Meta, StoryFn } from "@storybook/react-webpack5";
import Table from "./Table";
import { TableProps } from "./Table.types";

export default {
  title: "Components/Table",
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ["Name", "Age", "Country"],
  data: [
    ["Alice", "25", "Canada"],
    ["Bob", "30", "USA"],
    ["Charlie", "28", "UK"],
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  headers: ["Name", "Age", "Country"],
  data: [
    ["Alice", "25", "Canada"],
    ["Bob", "28", "UK"],
    ["Charlie", "30", "USA"],
  ],
  disabled: true,
};
