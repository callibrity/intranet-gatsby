import React, { useContext } from "react"
import styled from "styled-components"

import InfoItem from "./InfoItem"
import { whiteContainer } from "@styles"
import { ProfileContext } from "@contexts"

const infoList = [
  {
    label: "NAME",
    data: "name"
  },
  {
    label: "ROLE",
    data: "role"
  },
  {
    label: "OFFICE",
    data: "office"
  }
]

export default function Summary(){
  const {employee, setEmployee} = useContext(ProfileContext)

  const info = infoList.map(({label, data}) => 
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
      <Title>PROFESSIONAL DETAILS</Title>
      <Image src={employee.photo} />
      <InfoContainer>
        {info}
      </InfoContainer>
    </Container>
  )
}

const Container = styled.div`
  ${whiteContainer};
  padding: 0;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;
`

const Image = styled.img`
  width: 100%;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
`