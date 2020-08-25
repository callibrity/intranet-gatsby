import React, {Dispatch, SetStateAction} from 'react';
import {FixedObject} from 'gatsby-image';

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

export interface FixedImage {
  childImageSharp: {
    fixed: FixedObject & { originalName: string }
  }
}

export interface ImageQuery {
  data: {
    mugs: {
      nodes: {
        childImageSharp: {
          fixed: FixedObject & { originalName: string }
        }
      } []
    },
    mugPlaceholder: {
      childImageSharp: {
        fixed: FixedObject & { originalName: string }
      }
    }
  }
}
