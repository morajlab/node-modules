import React from 'react';
import { Button } from './button';

export const BareButton = () => <Button>Bare Button</Button>;

export const StyledButton = () => (
  <Button
    style={{
      border: '1px solid #aaa',
      display: 'inline-block',
      position: 'relative',
      borderRadius: '5px',
      padding: '5px',
    }}
  >
    Styled Button
  </Button>
);

export const ActionButton = () => (
  <Button onClick={() => alert('A message from ActionButton component')}>
    Action Button
  </Button>
);

export const NonBareButton = () => (
  <Button bare={false}>Non Bare Button</Button>
);
