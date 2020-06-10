import React from "react"

export default function Post({pageContext: {title, content}}) {
  return (
    <div>
      <div>{title}</div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}