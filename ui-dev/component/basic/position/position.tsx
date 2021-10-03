import React from 'react';

export type PositionProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Position({ text }: PositionProps) {
  return (
    <div>
      {text}
    </div>
  );
}
