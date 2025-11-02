import type { Meta, StoryFn } from "@storybook/react-webpack5";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "/logo512.png",
  alt: "React Logo",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "/logo512.png",
  alt: "React Logo",
  disabled: true,
};
