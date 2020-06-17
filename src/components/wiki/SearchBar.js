import React from "react"
import styled from "styled-components"
import { FaChevronDown, FaSearch } from "react-icons/fa"

import {whiteContainer} from "@globals/styles"

export default function SearchBar() {

  return(
    <Container>
      <CategoryDropdown>
        All <FaChevronDown />
      </CategoryDropdown>
      <SearchButton>
        <FaSearch />
      </SearchButton>
    </Container>
  )
}

const Container = styled.div`
  ${whiteContainer}
  width: 100%
`

const CategoryDropdown = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
`

const SearchButton = styled.div`
  background-color: ${props => props.theme.orange};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
`