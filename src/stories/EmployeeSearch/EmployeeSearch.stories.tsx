import React from 'react';
import { action } from '@storybook/addon-actions';
import EmployeeSearch from '../../components/home/EmployeeSearch';

export default {
  component: EmployeeSearch,
  title: 'Employee Search Bar',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const propData = {
    text: 
}

export const actionData = {
  setText: action('setText'),
};
export const Default = () => <EmployeeSearch text="" {...actionData} />;
