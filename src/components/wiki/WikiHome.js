import React from "react"
import styled from "styled-components"
import { mockWikiPages } from "@globals/constants"
import Header from "./Header"
import SearchBar from "./SearchBar"
import PageList from "./PageList"

export default function WikiHome() {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <SearchBar />
        <PageList pageList={mockWikiPages} />
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const InnerContainer = styled.div`
  max-width: 1000px;
`
