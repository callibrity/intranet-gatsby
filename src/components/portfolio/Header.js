import React, {useContext} from "react"
import styled from "styled-components"

import API from "@globals/api"
import { standardButton } from "@globals/styles"
import { UserContext, ProfileContext } from "@globals/contexts"
import { employeesAPINameString } from "@globals/constants"

export default function Header(){
  const { userEmail } = useContext(UserContext)
  const {employee, editMode, setEditMode} = useContext(ProfileContext)

  function handleEditClick(){
    setEditMode(!editMode)
  }
  
  function handleSaveClick(){
    API.put(`${employeesAPINameString}${employee.name}`, employee)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    
    setEditMode(false)
  }

  function editButtons() {
    if(employee.callibrity_email === userEmail){
      return(
        <>
          <Button onClick={handleEditClick}>{editMode ? "Cancel Editing" : "Edit Profile"}</Button>
          {editMode && <Button onClick={handleSaveClick}>Save Profile</Button>}
        </>
      )
    } else return null
  }

  return(
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

const Button = styled.div`
  ${standardButton};
  font-size: 16px;
  padding: 3px 5px;
  margin-right: 20px;
`