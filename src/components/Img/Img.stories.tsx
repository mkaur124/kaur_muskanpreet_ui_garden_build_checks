import type { Meta, StoryFn } from "@storybook/react-webpack5";
import Img from "./Img";
import { ImgProps } from "./Img.types";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "/logo192.png",
  alt: "Default image",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "/logo192.png",
  alt: "Disabled image",
  disabled: true,
};
