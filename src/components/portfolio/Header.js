import React, { useContext } from "react"
import styled from "styled-components"
import API from "@globals/api"
import { UserContext, ProfileContext } from "@globals/contexts"
import { employeesAPIString } from "@globals/constants"
import ReusableButton from "../reusable/ReusableButton"

export default function Header() {
  const { userEmail } = useContext(UserContext)
  const { employee, editMode, setEditMode } = useContext(ProfileContext)

  function handleEditClick() {
    setEditMode(!editMode)
  }

  function handleSaveClick() {
    API.put(`${employeesAPIString}`, employee)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    setEditMode(false)
  }

  function editButtons() {
    if (employee.callibrity_email === userEmail) {
      return (
        <>
          <ReusableButton onClick={handleEditClick} text={editMode ? "Cancel Editing" : "Edit Profile"} />
          {editMode && <ReusableButton onClick={handleSaveClick} text="Save Profile" />}
        </>
      )
    } return null
  }

  return (
    <Container>
      {editButtons()}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`
