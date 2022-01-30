import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Bare } from "./bare";

export default {
  title: "React/Components/Button",
  component: Bare,
} as ComponentMeta<typeof Bare>;

export const Primary: ComponentStory<typeof Bare> = () => (
  <Bare>Basic Bare Component</Bare>
);
