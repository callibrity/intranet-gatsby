import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeCardRow from './EmployeeCardRow';
import { mockEmployeeCardRowProps } from '@globals/testConstants';
import { billableTitle, growthTitle } from '@globals/constants';

describe('EmployeeCardRow component', () => {
  it('should display billable, growth, and image when all props are provided', () => {
    render(<EmployeeCardRow {...mockEmployeeCardRowProps} />);

    const expectedName = mockEmployeeCardRowProps.employeeName;
    const expectedImageAltText = `Image of ${expectedName}`;

    expect(screen.getByText(billableTitle)).toBeInstanceOf(HTMLElement);
    expect(screen.getByText(growthTitle)).toBeInstanceOf(HTMLElement);
    expect(screen.getByAltText(expectedImageAltText)).toBeInstanceOf(HTMLImageElement);
  });

  it('should not display billable if it is missing', () => {
    mockEmployeeCardRowProps.employeeMetrics.billable = null;
    render(<EmployeeCardRow {...mockEmployeeCardRowProps} />);

    expect(screen.queryByText(billableTitle)).toBeNull();
  });

  it('should not display growth if it is missing', () => {
    mockEmployeeCardRowProps.employeeMetrics.growth = null;
    render(<EmployeeCardRow {...mockEmployeeCardRowProps} />);

    expect(screen.queryByText(growthTitle)).toBeNull();
  });

  it('should not display the image or user name if img is missing', () => {
    mockEmployeeCardRowProps.img = null;
    render(<EmployeeCardRow {...mockEmployeeCardRowProps} />);

    const expectedName = mockEmployeeCardRowProps.employeeName;
    const expectedImageAltText = `Image of ${expectedName}`;

    expect(screen.queryByAltText(expectedImageAltText)).toBeNull();
    expect(screen.queryByText(expectedName)).toBeNull();
  });
});
