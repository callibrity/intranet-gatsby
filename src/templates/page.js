import React from "react"

export default function Page({ title, content}) {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  )
}