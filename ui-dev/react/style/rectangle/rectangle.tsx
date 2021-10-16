import React from 'react';

export type RectangleProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Rectangle({ text }: RectangleProps) {
  return (
    <div>
      {text}
    </div>
  );
}
