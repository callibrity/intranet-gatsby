import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './PersonTile.css';

const PersonTile = ({ name, role, photo }) => (
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

PersonTile.defaultProps = {
  name: '',
  role: '',
  photo: '',
};

PersonTile.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  photo: PropTypes.string,
};

export default PersonTile;
