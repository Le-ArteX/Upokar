import * as React from 'react';
import { render, screen } from '@testing-library/react-native';

import { ThemedText } from '../themed-text';

describe('ThemedText', () => {
  it('renders correctly with default text', async () => {
    await render(<ThemedText>Hello World</ThemedText>);
    expect(screen.getByText('Hello World')).toBeOnTheScreen();
  });
});
