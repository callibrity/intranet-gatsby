import React from "react"
import styled from "styled-components"
import Section from "@home/Section"

import { EmployeeTimeTracking } from "@globals/constants"

const Hours = ({ title, hours }) => (
  <Section color="green" label={title} className="TimeTracker-Hours">
    {hours.map(({ label, amount }, index) => (
      <div key={index} className="TimeTracker-Hours-details">
        <span>{label}</span>
        <span>{amount}</span>
      </div>
    ))}
  </Section>
)

const TimeTracker = () => {
  const { data } = EmployeeTimeTracking

  return (
    <Container>
      {data.map(({ title, hours }, index) => (
        <Hours key={index} title={title} hours={hours} />
      ))}
    </Container>
  )
}

export default TimeTracker

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .TimeTracker-Hours {
    margin: 8px;
    width: 500px;
    min-width: 300px;

    .TimeTracker-Hours-details {
      display: flex;
      justify-content: space-between;
    }
  }
`
