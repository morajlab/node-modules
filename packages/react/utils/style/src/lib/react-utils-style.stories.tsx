import React, { HTMLAttributes, FunctionComponent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createStyles } from './style';

interface IBasicStyleProps extends HTMLAttributes<HTMLPreElement> {
  styles?: any;
}

const BasicStyle: FunctionComponent<IBasicStyleProps> = ({
  children,
  styles,
}) => {
  const _styles = styles ?? {
    root: {
      padding: '20px',
      backgroundColor: 'rgb(29, 53, 87)',
      display: 'inline-block',
      color: 'rgb(255, 255, 255)',
      borderRadius: '5px',
    },
  };
  const { root } = createStyles(_styles)();

  return (
    <pre className={root}>
      <code>{children ?? JSON.stringify(_styles)}</code>
    </pre>
  );
};

export default {
  title: 'React/Utils/Style',
  component: BasicStyle,
} as ComponentMeta<typeof BasicStyle>;

export const Primary: ComponentStory<typeof BasicStyle> = () => <BasicStyle />;
