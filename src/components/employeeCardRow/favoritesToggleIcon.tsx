import React from 'react';

interface FavoritesToggleIconsPropTypes {
    employeeId: string;
    isLockedRow: any;
  }
const favoritesToggleIcons = ({ employeeId, isLockedRow, lockToggle }: FavoritesToggleIconsPropTypes) => (
  <div
    id={employeeId}
    onClick={() => lockToggle(employeeId)}
  >
    {isLockedRow ? <FaStar /> : <FaRegStar />}
  </div>
);

export default favoritesToggleIcons;
