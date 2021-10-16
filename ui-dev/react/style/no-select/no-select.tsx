import React from 'react';

export type NoSelectProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function NoSelect({ text }: NoSelectProps) {
  return (
    <div>
      {text}
    </div>
  );
}
