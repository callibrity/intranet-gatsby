import React from "react"
import { Link } from "gatsby"

import "./PersonTile.css"

export default function PersonTile({ name, role, photo }) {
  return (
    <Link to={`/portfolio?name=${name}`}>
      <div className="card tile">
        <img className="card-img-top" src={photo} alt={name} />
        <div className="card-text tile-overlay">
          <span className="tile-overlay-name">{name}</span>
          <br />
          <span>{role}</span>
        </div>
      </div>
    </Link>
  )
}
