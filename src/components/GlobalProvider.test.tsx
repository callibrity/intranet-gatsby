import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalProvider from './GlobalProvider';
import { mockCredentials } from '@globals/testConstants';
import '@testing-library/jest-dom' // needs to be imported somewhere

jest.mock('@hooks/useCredentials', () => (() => mockCredentials));

const testElement = <div data-testid="testElement" />

describe('GlobalProvider component', () => {
  it('should render the navbar and child element when loaded is true', () => {
    mockCredentials.loaded = true;
    render(<GlobalProvider element={testElement} />);

    expect(screen.getByTestId('testElement')).toBeInstanceOf(HTMLElement);
    expect(screen.getByAltText('Callibrity Logo')).toBeInstanceOf(HTMLImageElement);
  });

  it('should not render the child element when loaded is false, and instead render the Loading component', () => {
    mockCredentials.loaded = false;
    render(<GlobalProvider element={testElement} />);

    expect(screen.queryByTestId('testElement')).toBeNull();
  });

});
