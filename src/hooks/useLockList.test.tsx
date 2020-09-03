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
  it('should initially have an empty list and should toggle items in lockList and when lockToggle is run', () => {
    render(<TestComponent />);

    expect(screen.getByText('lockList: []')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[]");

    fireEvent.click(screen.getByText('111'));

    expect(screen.getByText('lockList: ["111"]')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe('[\"111\"]');

    fireEvent.click(screen.getByText('111'));

    expect(screen.getByText('lockList: []')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[]");
  });

  it('should initially have an element in localstorage and should toggle items in lockList and when lockToggle is run', () => {
    localStorage.setItem('testLocalStorage', '[\"111\"]');
    
    render(<TestComponent />);

    expect(screen.getByText('lockList: ["111"]')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[\"111\"]");

    fireEvent.click(screen.getByText('222'));

    expect(screen.getByText('lockList: ["111","222"]')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe('[\"111\",\"222\"]');

    fireEvent.click(screen.getByText('111'));

    expect(screen.getByText('lockList: ["222"]')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[\"222\"]");
  });

  it('should toggle items in lockList and when lockToggle is run and behave as expected regardless of order of button presses', () => {
    localStorage.setItem('testLocalStorage', '[]');

    render(<TestComponent />);

    expect(screen.getByText('lockList: []')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[]");

    fireEvent.click(screen.getByText('333'));

    expect(screen.getByText('lockList: ["333"]')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe('[\"333\"]');

    fireEvent.click(screen.getByText('111'));

    expect(screen.getByText('lockList: ["333","111"]')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[\"333\",\"111\"]");

    fireEvent.click(screen.getByText('222'));

    expect(screen.getByText('lockList: ["333","111","222"]')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[\"333\",\"111\",\"222\"]");

    fireEvent.click(screen.getByText('111'));

    expect(screen.getByText('lockList: ["333","222"]')).toBeInstanceOf(HTMLElement);
    expect(localStorage.getItem('testLocalStorage')).toBe("[\"333\",\"222\"]");
  });
});