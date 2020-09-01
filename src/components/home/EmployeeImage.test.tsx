import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeImage from './EmployeeImage';
import { mockEmployeeImageProps } from '@globals/testConstants';
import { openLockTestId, closedLockTestId } from '@globals/constants';

describe('EmployeeImage component', () => {
  it('should display the name and image', () => {
    render(<EmployeeImage {...mockEmployeeImageProps} />);

    const expectedName = mockEmployeeImageProps.employeeName;
    const expectedImageAltText = `Image of ${expectedName}`;

    expect(screen.getByText(expectedName)).toBeInstanceOf(HTMLElement);
    expect(screen.getByAltText(expectedImageAltText)).toBeInstanceOf(HTMLImageElement);
  });

  it('should display an open lock when isLockedRow is false', () => {
    mockEmployeeImageProps.isLockedRow = false;
    render(<EmployeeImage {...mockEmployeeImageProps} />);

    expect(screen.queryByTestId(closedLockTestId)).toBeNull();
    expect(screen.getByTestId(openLockTestId)).toBeInstanceOf(SVGSVGElement);
  });

  it('should display a closed lock when isLockedRow is true', () => {
    mockEmployeeImageProps.isLockedRow = true;
    render(<EmployeeImage {...mockEmployeeImageProps} />);

    expect(screen.queryByTestId(openLockTestId)).toBeNull();
    expect(screen.getByTestId(closedLockTestId)).toBeInstanceOf(SVGSVGElement);
  });

  it('should run the lockToggle function with the employeeId when clicked', () => {
    mockEmployeeImageProps.isLockedRow = true;
    const { lockToggle, employeeId } = mockEmployeeImageProps;
    render(<EmployeeImage {...mockEmployeeImageProps} />);

    const lockElement = screen.getByTestId(closedLockTestId);
    fireEvent.click(lockElement);

    expect(lockToggle).toHaveBeenCalledTimes(1);
    expect(lockToggle).toHaveBeenCalledWith(employeeId);
  });
});
