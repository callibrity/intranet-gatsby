import React, { useContext } from "react"
import styled from "styled-components"
import InfoItem from "./InfoItem"

import { whiteContainer } from "@globals/styles"
import { ProfileContext } from "@globals/contexts"
import { profileDetailsList } from "@globals/constants"

export default function Details(){

  const {employee, setEmployee} = useContext(ProfileContext)

  const info = profileDetailsList.map(({label, data}) => 
    <InfoItem 
      key={label} 
      label={label} 
      data={data}
      info={employee[data]}
      setEmployee={setEmployee}
    />
  )

  return(
    <Container>
      <Section>
        <Title>ABOUT ME</Title>
      </Section>
      <Section>
        <InfoContainer>
          {info}
        </InfoContainer>
      </Section>
      <LastSection>
        <BioContainer>
          {employee.bio}
        </BioContainer>
      </LastSection>
    </Container>
  )
}

const Container = styled.div`
  ${whiteContainer};
  padding: 0;
  background-color: inherit;
  overflow: hidden;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;;
`

const InfoContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Section = styled.div`
  background-color: white;
  margin-bottom: 3px;
`

const LastSection = styled.div`
  background-color: white;
`

const BioContainer = styled.div`
  padding: 20px;
`