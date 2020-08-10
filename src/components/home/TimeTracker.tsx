import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { getEmployeeMetrics } from '@api/serviceCalls';
import { Tooltip, OverlayTrigger, Container } from 'react-bootstrap';
import { UserContext } from '@globals/contexts';
import EmployeeSearch from './EmployeeSearch';
import DebugComponent from '../reusable/DebugComponent';

const renderTooltip = (props, updatedAt) => (
  <Tooltip id="tooltip" {...props}>
    {updatedAt}
  </Tooltip>
);

const loadStr = 'Loading...';

export const LineItem = ({ label, value } : {label: string, value: string | number}) => (
  <div className="TimeTracker-Hours-details">
    <span>
      {label}
      :
    </span>
    <span>{value}</span>
  </div>
);

interface BillableHoursPropTypes {
  billable: {
    currentHours: string | number,
    currentTarget: string | number,
    totalTarget: string | number
  }
}

const billableDefault = {
  currentHours: loadStr,
  currentTarget: loadStr,
  totalTarget: loadStr,
};

export const BillableHours = ({ billable = billableDefault, updatedAt } : BillableHoursPropTypes) => {
  const { currentHours, currentTarget, totalTarget } = billable;
  return (

    <Card className="TimeTracker-Hours shadow-sm" id="tooltip">
      <Card.Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => renderTooltip(props, updatedAt)}
        >
          <div>
            <Card.Title style={{ fontSize: '2.2rem' }}>Billable Hours</Card.Title>
            <LineItem label="Current Hours" value={currentHours} />
            <LineItem label="Current Target" value={currentTarget} />
            <LineItem label="Total Target" value={totalTarget} />
          </div>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
};

interface GrowthHoursPropTypes {
  growth: {
    hoursUsed: string | number,
    hoursRemaining: string | number,
    totalGrowth: string | number
  }
}

const growthDefault = {
  hoursUsed: loadStr,
  hoursRemaining: loadStr,
  totalGrowth: loadStr,
};

export const GrowthHours = ({ growth = growthDefault, updatedAt } : GrowthHoursPropTypes) => {
  const { hoursUsed, hoursRemaining, totalGrowth } = growth;
  return (
    <Card className="TimeTracker-Hours shadow-sm">
      <Card.Body>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => renderTooltip(props, updatedAt)}
        >
          <div>
            <Card.Title style={{ fontSize: '2.2rem' }}>Growth Time</Card.Title>
            <LineItem label="Hours Used" value={hoursUsed} />
            <LineItem label="Hours Remaining" value={hoursRemaining} />
            <LineItem label="Total Growth" value={totalGrowth} />
          </div>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
};

const TimeTracker = () => {
  const { userRole } = useContext(UserContext);
  const initialState = {
    billable: {
      currentHours: 'Loading...',
      currentTarget: 'Loading...',
      totalTarget: 'Loading...',
    },
    growth: {
      hoursUsed: 'Loading...',
      hoursRemaining: 'Loading...',
      totalGrowth: 'Loading...',
    },
  };
  const dummyReturnData = [
    {
      employeeName: 'Collin Johnson',
      employeeId: '99999',
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

  const [data, setData] = useState(initialState);
  const setDataHandler = (ReturnedByApiCall) => {
    setData(ReturnedByApiCall);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console

    getEmployeeMetrics(setDataHandler, console.log);
    console.log('userRole context in timetracker component is ', userRole);
  }, []);

  return userRole === 'Account Manager' ? (
    <>
      <Container style={{ backgroundColor: 'red', marginBottom: 16 }}>
        <EmployeeSearch />
      </Container>
      {
  dummyReturnData.map((employeeObject) => (
    <CustomContainer key={employeeObject.employeeId} style={{marginBottom: 10}}>
      <Card style={{ width: '10rem' }}><Card.Body><p>{employeeObject.employeeName}</p></Card.Body></Card>
      <BillableHours billable={employeeObject.billable} updatedAt={employeeObject.updatedAt} />
      <GrowthHours growth={employeeObject.growth} updatedAt={employeeObject.updatedAt} />
    </CustomContainer>
  ))
    }
      <DebugComponent dataobject={data} header="employeeObject Returned" />
    </>
  )
    : (
      <>
        <CustomContainer>
          <BillableHours billable={data.billable} updatedAt={data.updatedAt} />
          <GrowthHours growth={data.growth} updatedAt={data.updatedAt} />
        </CustomContainer>
        <DebugComponent dataobject={data} header="Data Returned" />
      </>
    );
};

export default TimeTracker;

const CustomContainer = styled.div`
  display: flex;
  flexDirection: row;
  justify-content: space-around;
  flex-wrap: wrap;

  .TimeTracker-Hours {
    width: 26rem;

    .TimeTracker-Hours-details {
      display: flex;
      justify-content: space-between;
    }
  }
`;
