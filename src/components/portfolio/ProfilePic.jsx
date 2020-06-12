import React, { useContext, useState, Fragment } from "react"
import styled from "styled-components"
import EditImageModal from "./EditImageModal"
import { ProfileContext } from "@globals/contexts"

export default function ProfilePic() {
  const { employee, editMode } = useContext(ProfileContext)
  const [showModal, setShowModal] = useState(false)

  function onImageClick() {
    if (editMode) setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
  }

  function getImage() {
    if (!editMode) return <Image onClick={onImageClick} src={employee.photo} />
    else return <ImageEditMode onClick={onImageClick} src={employee.photo} />
  }

  return (
    <Fragment>
      <EditImageModal Show={showModal} onClose={closeModal} />
      {getImage()}
    </Fragment>
  )
}

const Image = styled.img`
  width: 100%;
`

const ImageEditMode = styled.img`
  width: 100%;
  &:hover {
    cursor: pointer;
    border-style: solid;
    border: 1 1 1 1;
    border-color: rgb(103, 205, 254);
  }
`
