import React from 'react';

export type SolidProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Solid({ text }: SolidProps) {
  return (
    <div>
      {text}
    </div>
  );
}
