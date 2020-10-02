import { BillableTypes, GrowthTypes } from './types';
export const googleClientId = '1084859424709-tk8745k1d0bnqfvlmsoa0j3uo5bkm9un.apps.googleusercontent.com';

export const quickLinks: { title: string, url: string }[] = [
  {
    title: 'Paylocity',
    url: 'https://login.paylocity.com/',
  },
  {
    title: 'John Hancock',
    url: 'https://myplan.johnhancock.com',
  },
  {
    title: 'Anthem',
    url: 'https://www.anthem.com/',
  },
  {
    title: 'HSA Bank',
    url: 'https://myaccounts.hsabank.com/',
  },
  {
    title: 'Dental Care Plus',
    url: 'https://member.dentalcareplus.com/login.aspx',
  },
  {
    title: 'EyeMed',
    url: 'https://eyemed.com/',
  },
  {
    title: 'Google Docs',
    url:
      'https://drive.google.com/drive/folders/0B28qaCwNRg44SU9CcDJ6OWc5Wlk?usp=sharing',
  },
  {
    title: 'Callibrity Wiki',
    url:
      'https://wiki.callibrity.systems',
  },
];

export const dummyEmployeeData: ({ employeeName: string, employeeId: string, updatedAt?: string } & BillableTypes & GrowthTypes)[] = [
  {
    employeeName: 'Collin Johnson',
    employeeId: '99999',
    billable: {
      currentHours: 7000,
      currentTarget: 9000,
      totalTarget: 5000,
    },
    growth: {
      hoursUsed: 4000,
      hoursRemaining: -1000,
      totalGrowth: 3000,
    },
  },
  {
    employeeName: 'Jordan Otrembiak',
    employeeId: '12345',
    billable: {
      currentHours: 23,
      currentTarget: 12,
      totalTarget: 50,
    },
    growth: {
      hoursUsed: 4,
      hoursRemaining: 10,
      totalGrowth: 3,
    },
  },
  {
    employeeName: 'Allen Hully',
    employeeId: '12346',
    billable: {
      currentHours: 7000,
      currentTarget: 9000,
      totalTarget: 5000,
    },
    growth: {
      hoursUsed: 4000,
      hoursRemaining: -1000,
      totalGrowth: 3000,
    },
  },
  {
    employeeName: 'Arielle Ferre',
    employeeId: '12347',
    billable: {
      currentHours: 7,
      currentTarget: 9,
      totalTarget: 50,
    },
    growth: {
      hoursUsed: 4,
      hoursRemaining: -1,
      totalGrowth: 3,
    },
  },
  {
    employeeName: 'Conner Manson',
    employeeId: '12348',
    billable: {
      currentHours: 7,
      currentTarget: 9,
      totalTarget: 50,
    },
    growth: {
      hoursUsed: 4,
      hoursRemaining: -1,
      totalGrowth: 3,
    },
  },
  {
    employeeName: 'Alex Morelli',
    employeeId: '12349',
    billable: {
      currentHours: 7,
      currentTarget: 9,
      totalTarget: 50,
    },
    growth: {
      hoursUsed: 4,
      hoursRemaining: -1,
      totalGrowth: 3,
    },
  },
];

export const billableDefault = {
  currentHours: 'Loading...',
  currentTarget: 'Loading...',
  totalTarget: 'Loading...',
};

export const growthDefault = {
  hoursUsed: 'Loading...',
  hoursRemaining: 'Loading...',
  totalGrowth: 'Loading...',
}

export const billableMissing = {
  currentHours: 'No Data',
  currentTarget: 'No Data',
  totalTarget: 'No Data',
};

export const growthMissing = {
  hoursUsed: 'No Data',
  hoursRemaining: 'No Data',
  totalGrowth: 'No Data',
}

export const tooltipShowDelay = 250;

export const tooltipHideDelay = 400;

export const closedLockTestId = 'closed-lock';

export const openLockTestId = 'open-lock';

export const billableTitle = 'Billable Hours';

export const growthTitle = 'Growth Time';

export const signOutButtonText = 'Sign Out';

export const indexRoute = '/';

export const developerRoute = '/developer-view';

export const accountManagerRoute = '/account-manager-view';

export const loginRoute = '/login';

export const errorRoute = '/error';

export const notFoundRoute = '/404';

export const developerString = 'Developer';

export const accountManagerString = 'Account Manager';

export const loginWelcomeMessage = 'Welcome to Callibrity!';

export const searchBarAltText = 'search bar';

export const searchBarPlaceholder = 'Type at least two characters to pull up developers';

export const hideLockedCardsButtonText = 'Hide Locked Cards';

export const showLockedCardsButtonText = 'Show Locked Cards';

export const showAllButtonText = 'Show All';

export const employeeMetricsString = '/api/employee/hours';

export const employeeDetailsString = '/api/employee';

export const allEmployeeMetricsString = '/api/employee/hours/all';