import React from 'react';
import { render } from '@testing-library/react';
import { BasicNoSelect } from './no-select.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNoSelect />);
  const rendered = getByText('hello from NoSelect');
  expect(rendered).toBeTruthy();
});
