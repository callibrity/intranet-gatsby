import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ProfileContext } from "@globals/contexts"
import ReusableModal from "../reusable/ReusableModal"
import ReusableButton from "../reusable/ReusableButton"
import InfoItem from "./InfoItem"

export default function EditImageModal(props) {
  const { employee, setEmployee } = useContext(ProfileContext)
  const { onClose, Show } = props

  function getModalBody() {
    return (
      <InfoItem
        key="Photo"
        label="Photo"
        data="photo"
        info={employee.photo}
        setEmployee={setEmployee}
      />
    )
  }

  function getModalFooter() {
    return (
      <div>
        <ReusableButton onClick={onClose} text="Close" />
      </div>
    )
  }

  return (
    <ReusableModal
      Show={Show}
      handleClose={onClose}
      Header="Update Image"
      Body={getModalBody()}
      Footer={getModalFooter()}
    />
  )
}

EditImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  Show: PropTypes.bool.isRequired,
}
