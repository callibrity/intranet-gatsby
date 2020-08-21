import React, {Dispatch, SetStateAction} from 'react';

export type reactChildren = React.ReactNode[] | React.ReactElement;

export type setStateFunction<T> = Dispatch<SetStateAction<T>>;

export interface BillableTypes {
  billable: {
    currentHours: string | number,
    currentTarget: string | number,
    totalTarget: string | number
  },
  updatedAt?: string
}

export interface GrowthTypes {
  growth: {
    hoursUsed: string | number,
    hoursRemaining: string | number,
    totalGrowth: string | number
  },
  updatedAt?: string
}
