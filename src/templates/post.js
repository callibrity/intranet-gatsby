import React from "react"

export default function Post({
  content,
  categories,
  tags,
  title,
  date,
  author,
}) {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{categories}</div>
      <div>{tags}</div>
      <div>{date}</div>
      <div>{author}</div>
    </div>
  )
}