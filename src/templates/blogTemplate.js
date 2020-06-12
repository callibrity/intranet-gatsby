import React from "react"
import { graphql } from "gatsby"
import ReactMarkDown from "react-markdown"

export default function Template({data}) {
  const { content, date, title } = data.postgres.allWikitestsList[0]
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <ReactMarkDown source={content} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    postgres {
      allWikitestsList (condition: {slug: $slug}) {
        content
        date
        title
      }
    }
  }
`