import PropTypes from 'prop-types';
import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ReusableModal(props){

  return(
    <Modal show={props.Show}>
    <Modal.Header>{props.Header}</Modal.Header>
    <Modal.Body>{props.Body}</Modal.Body>
    <Modal.Footer>{props.Footer}</Modal.Footer>
  </Modal>
  )
}

ReusableModal.propTypes = {
    Show: PropTypes.bool.isRequired,
    Header: PropTypes.string.isRequired,
    Body: PropTypes.object.isRequired,
    Footer: PropTypes.object.isRequired
}