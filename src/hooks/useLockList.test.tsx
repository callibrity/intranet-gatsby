import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import useLockList from './useLockList';

const TestComponent = () => {
  const { lockList, lockToggle } = useLockList('testLocalStorage');
  return (
    <>
      <div onClick={() => lockToggle('111')}>111</div>
      <div onClick={() => lockToggle('222')}>222</div>
      <div onClick={() => lockToggle('333')}>333</div>
      <div>{`lockList: ${JSON.stringify(lockList)}`}</div>
    </>
  )
}

describe('useLockList hook', () => {
  it('should initially have empty list', () => {
    render(<TestComponent />);

    expect(screen.getByText('lockList: []')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[]");
  });

  it('should toggle items in lockList and when lockToggle is run', () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('111'));

    expect(screen.getByText('lockList: ["111"]')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe('[\"111\"]');

    fireEvent.click(screen.getByText('111'));

    expect(screen.getByText('lockList: []')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[]");
  });
});
