import React, { useContext } from "react"
import { ProfileContext } from "globals/UserContext"
import ReusableModal from "./../reusable/ReusableModal"
import ReusableButton from "./../reusable/ReusableButton"
import InfoItem from "./InfoItem"

export default function EditImageModal(props) {
  const { employee, setEmployee } = useContext(ProfileContext)

  function getModalBody() {
    return (
      <InfoItem
        key={'Photo'}
        label={'Photo'}
        data={'photo'}
        info={employee.photo}
        setEmployee={setEmployee}
      />
    )
  }

  function getModalFooter() {
    return (
      <div>
        <ReusableButton onClick={props.onClose} text={"Close"} />
      </div>
    )
  }

  return (
    <ReusableModal
      Show={props.Show}
      handleClose={props.onClose}
      Header={"Update Image"}
      Body={getModalBody()}
      Footer={getModalFooter()}
    />
  )
}
