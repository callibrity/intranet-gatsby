import React from "react"
import styled from "styled-components"
import Section from "home/Section"
import Calendar from "home/Calendar"
import News from "home/News"

export default function Homepage() {
  return (
    <Container>
      <Section label="News" color='green'>
        <News />
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
