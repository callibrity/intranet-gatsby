import React from 'react';
import { FixedImage, EmployeeTypes, reactChildren } from '@globals/types';
import EmployeeCardRow from '@components/employeeCardRow/EmployeeCardRow';
import Col from 'react-bootstrap/Col';

export const createEmployeeElements = (
  employeeDataList: EmployeeTypes, lockList: string[], lockToggle: Function, searchString: string, images: FixedImage[], showAll: boolean,
)
  : { lockedElements: reactChildren[], searchElements: reactChildren[] } => {
  const placeholderImage = images.find((image) => image.originalName === 'mug-placeholder.png');
  const lockedElements: reactChildren[] = [];
  const searchElements: reactChildren[] = [];

  employeeDataList.forEach((developer) => {
    const {
      billable, growth, updatedAt, employeeId, employeeName
    } = developer;
    const isLocked = lockList.includes(employeeId);
    let isSearched = true;
    if (!showAll) {
      isSearched = searchString.length > 1 && employeeName.toLowerCase().includes(searchString.toLowerCase());
    }
    if (isLocked || isSearched) {
      const img = images.find((image) => image.originalName === `${employeeId}.jpg`) || placeholderImage;
      const EmployeeElement = (
        <Col key={employeeId}>
          <EmployeeCardRow
            employeeMetrics={{ billable, growth, updatedAt }}
            employeeId={employeeId}
            employeeName={employeeName}
            isLockedRow={isLocked}
            lockToggle={lockToggle}
            img={img}
          />
        </Col>
      );
      if (isLocked) {
        lockedElements.push(EmployeeElement);
      }
      if (isSearched) {
        searchElements.push(EmployeeElement);
      }
    }
  });

  return { lockedElements, searchElements };
};
