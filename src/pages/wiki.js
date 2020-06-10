import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"


export default function Wiki() {
  const data = useStaticQuery(graphql`
  query {
    allWordpressPost {
      edges {
        node {
          slug
          title
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`)

  const pageList = data.allWordpressPage.edges.map(({node: {title, slug}}) => 
    <StyledLink to={`/wiki/${slug}`} key={title}>{title}</StyledLink>
  )

  const postsList = data.allWordpressPost.edges.map(({node: {title, slug}}) => 
    <StyledLink to={`/wiki/${slug}`} key={title}>{title}</StyledLink>
  )
  return (
    <Container>
      <Section>
        <Label>Posts</Label>
        <ListContainer>{postsList}</ListContainer>
      </Section>
      <Section>
        <Label>Pages</Label>
        <ListContainer>{pageList}</ListContainer>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Section = styled.div``

const Label = styled.div`
  font-size: 30px;
  font-weight: 700;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(Link)`
  color: blue;
`