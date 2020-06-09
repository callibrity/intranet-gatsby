import React from "react"

import useAPI from "@useAPI"
import {newsAPIString} from "@constants"

export function createNewsList(text) {
  const typeCheck = typeof text === "string"
  if (typeCheck) {
    return text
  }

  return text.map((ele) => (
    <div key={ele.date}>
      {`${ele.date}: ${ele.event}`}
    </div>
  ))
}

export default function News() {
  const news = useAPI(newsAPIString)
  const newsList = createNewsList(news)
  return (
    <>
      {newsList}
    </>
  )
}
