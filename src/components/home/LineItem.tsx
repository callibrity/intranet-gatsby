import React from 'react';

export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <div className="TimeTracker-Hours-details">
    <span>{label}:</span>
    <span>{value}</span>
  </div>
);

export default LineItem;