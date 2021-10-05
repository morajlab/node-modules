import React from 'react';
import { render } from '@testing-library/react';
import { BasicCommon } from './common.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCommon />);
  const rendered = getByText('hello from Common');
  expect(rendered).toBeTruthy();
});
