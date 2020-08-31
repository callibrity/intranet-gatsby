import React from 'react';
import { render, screen } from '@testing-library/react';
import LineItem from './LineItem';
import { mockLineItemProps } from '@globals/testConstants';

describe('LineItem component', () => {
  it('should render the label and value', () => {
    render(<LineItem {...mockLineItemProps} />);

    const expectedLabel = `${mockLineItemProps.label}:`;
    const expectedValue = mockLineItemProps.value;

    expect(screen.getByText(expectedLabel)).toBeInstanceOf(HTMLElement);
    expect(screen.getByText(expectedValue)).toBeInstanceOf(HTMLElement);
  });
});
