import React from 'react';

export const LineItem = ({ label, value }: { label: string, value: string | number }) => (
  <div>
    <span>{label}:</span>
    <span>{value}</span>
  </div>
);

export default LineItem;