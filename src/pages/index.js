import React from "react"
import styled from "styled-components"

import Section from "@home/Section"
import TimeTracker from "@home/TimeTracker"
import Calendar from "@home/Calendar"

export default function Homepage() {
  return (
    <Container>
      <Section label="Time Tracker" color='green'>
        <TimeTracker />
      </Section>
      <Section label="Calendar" color='orange'>
        <Calendar />
      </Section>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
`
