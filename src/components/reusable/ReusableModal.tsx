import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { reactChildren } from '@globals/types';

interface propTypes {
  Show: boolean,
  handleClose: never, 
  Header: string, 
  Body: string | reactChildren,
  Footer: string | reactChildren
}

export default function ReusableModal({ Show, handleClose, Header = '', Body, Footer = '' } : propTypes) {
  return (
    <Modal show={Show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{Header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{Body}</Modal.Body>
      <Modal.Footer>{Footer}</Modal.Footer>
    </Modal>
  );
}
