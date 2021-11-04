import React from 'react';

export type SchemaValidatorProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function SchemaValidator({ text }: SchemaValidatorProps) {
  return (
    <div>
      {text}
    </div>
  );
}
