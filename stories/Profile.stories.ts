import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import Profile from "./Profile";

const meta = {
  title: "Components/Profile",
  component: Profile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardProfile: Story = {
  args: {
    user: {
      name: "Dimitar Mandarliev",
    },
  },
};
