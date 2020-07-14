import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ReusableModal({
  Show, handleClose, Header, Body, Footer,
}) {
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

ReusableModal.defaultProps = {
  Header: '',
  Footer: '',
};

ReusableModal.propTypes = {
  Show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  Header: PropTypes.string,
  Body: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  Footer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.string,
  ]),
};
