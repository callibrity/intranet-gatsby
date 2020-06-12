import React from "react"
import Modal from "react-bootstrap/Modal"
import "bootstrap/dist/css/bootstrap.min.css"

export default function ReusableModal({Show, handleClose, Header, Body, Footer}) {
  return (
    <Modal show={Show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{Header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{Body}</Modal.Body>
      <Modal.Footer>{Footer}</Modal.Footer>
    </Modal>
  )
}
