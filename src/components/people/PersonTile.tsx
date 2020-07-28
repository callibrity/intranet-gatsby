import React from 'react';
import { Link } from 'gatsby';

import './PersonTile.css';

interface personProps {
  name: string,
  role: string,
  photo: string,
}

const PersonTile = ({ name='', role='', photo='' }: personProps) => (
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
);



export default PersonTile;

