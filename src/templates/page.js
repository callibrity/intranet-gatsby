import React from "react"

export default function Page({ pageContext: {title, content}}) {
  return (
    <div>
      <div>{title}</div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}