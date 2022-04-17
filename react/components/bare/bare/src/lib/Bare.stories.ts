import { createElement as ce } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Bare } from '.';

export default {
  title: 'React/Components/Bare',
  component: Bare,
} as ComponentMeta<typeof Bare>;

const Template: ComponentStory<typeof Bare> = (args) => ce(Bare, args);

export const Primary = Template.bind({});
Template.args = {};
