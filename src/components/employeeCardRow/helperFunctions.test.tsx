import { mockEmployeeMetricsProps } from '@globals/testConstants';
import { billableConversion, growthConversion } from './helperFunctions';

test('conversions of helper functions', () => {
  const { billable, growth } = mockEmployeeMetricsProps;
  const actualBillable = billableConversion(billable);
  const actualGrowth = growthConversion(growth);

  const expectedBillable = [
    {
      label: 'Current Hours',
      value: billable.currentHours,
    },
    {
      label: 'Current Target',
      value: billable.currentTarget,
    },
    {
      label: 'Total Target',
      value: billable.totalTarget,
    },
  ];

  const expectedGrowth = [
    {
      label: 'Hours Used',
      value: growth.hoursUsed,
    },
    {
      label: 'Hours Left',
      value: growth.hoursRemaining,
    },
    {
      label: 'Total Growth',
      value: growth.totalGrowth,
    },
  ];

  expect(actualBillable).toStrictEqual(expectedBillable);
  expect(actualGrowth).toStrictEqual(expectedGrowth);
});
