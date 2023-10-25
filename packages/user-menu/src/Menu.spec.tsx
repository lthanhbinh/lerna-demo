/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Menu } from './Menu';

test('renders user menu', () => {
  const { getByText } = render(<Menu />);
  const linkElement = getByText(/Cart/i);
  expect(linkElement).toBeDefined();
});
