import { BillableTypes, GrowthTypes } from '@globals/types';

export const billableConversion = ({ currentHours, currentTarget, totalTarget }: BillableTypes) => [
  {
    label: 'Current Hours',
    value: currentHours,
  },
  {
    label: 'Current Target',
    value: currentTarget,
  },
  {
    label: 'Total Target',
    value: totalTarget,
  },
];

export const growthConversion = ({ hoursUsed, hoursRemaining, totalGrowth }: GrowthTypes) => [
  {
    label: 'Hours Used',
    value: hoursUsed,
  },
  {
    label: 'Hours Left',
    value: hoursRemaining,
  },
  {
    label: 'Total Growth',
    value: totalGrowth,
  },
];
