import React, {useContext} from "react"
import styled from "styled-components"
import ReusableButton from "../reusable/ReusableButton";
import API from "@globals/api"
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
          <ReusableButton onClick={handleEditClick} text={editMode ? "Cancel Editing" : "Edit Profile"}/>
          {editMode && <ReusableButton onClick={handleSaveClick} text={"Save Profile"}/>}
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