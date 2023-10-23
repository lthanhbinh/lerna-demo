/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Products } from './Products';

test('renders footer', () => {
  const { getByText } = render(<Products productsCollection={[]}/>);
  const linkElement = getByText(/products/i);
  expect(linkElement).toBeDefined();
});
