import React, {useContext} from "react"
import styled from "styled-components"
import API from "globals/api"
import { standardButton } from "globals/styles"
import { UserContext, ProfileContext } from "globals/UserContext"
import ReusableButton from "../reusable/ReusableButton";

export default function Header(){
  const { userEmail } = useContext(UserContext)
  const {employee, editMode, setEditMode} = useContext(ProfileContext)

  function handleEditClick(){
    setEditMode(!editMode)
  }
  
  function handleSaveClick(){
    API.put(`/employees?name=${employee.name}`, employee)
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