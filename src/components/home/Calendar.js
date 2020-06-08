import React from "react";
import styled from "styled-components";
import {calendarStrings} from "../../globals/constants";
const {baseStr, companyHolidays, lunchAndLearn} = calendarStrings;

export default function Calendar() {
  const url = [companyHolidays, lunchAndLearn].reduce((acc, value) => `${acc}&src=${value}`, baseStr);
  return (
    <Container>
      <iframe 
        title="calendar" 
        src={url}
        width="100%" 
        height="100%" 
        frameBorder="0" 
        scrolling="no" 
      />
    </Container>
  );
}

const Container = styled.div`
  height: 600px;
`;
