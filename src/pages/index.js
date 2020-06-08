import React from "react"
import styled from "styled-components";

import Layout from "../components/Layout"
import Section from "../components/home/Section"
import Calendar from "../components/home/Calendar"
import News from "../components/home/News"

const HomePage = () => (
  <Layout>
    <Container>
      <Section label="News" color='green'>
        <News />
      </Section>
      <Section label="Calendar" color='orange'>
        <Calendar />
      </Section>
    </Container>
  </Layout>
)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
`

export default HomePage
