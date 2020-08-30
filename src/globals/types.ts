import React, { Dispatch, SetStateAction } from 'react';
import { FixedObject } from 'gatsby-image';

export type reactChildren = React.ReactNode[] | React.ReactElement;

export type setStateFunction<T> = Dispatch<SetStateAction<T>>;

export interface BillableTypes {
  currentHours: string | number,
  currentTarget: string | number,
  totalTarget: string | number
}

export interface GrowthTypes {
  hoursUsed: string | number,
  hoursRemaining: string | number,
  totalGrowth: string | number
}

export interface EmployeeMetricTypes { billable: BillableTypes, growth: GrowthTypes, updatedAt: string };

export type FixedImage = FixedObject & { originalName: string };

export interface ImageQuery {
  data: {
    mugs: {
      nodes: {
        childImageSharp: {
          fixed: FixedImage
        }
      }[]
    },
    mugPlaceholder: {
      childImageSharp: {
        fixed: FixedImage
      }
    }
  }
}
