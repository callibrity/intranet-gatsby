import React, { useContext } from "react"
import styled from "styled-components"
import EditImageModal from "./EditImageModal"

class ProfilePic extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
    this.onImageClick = this.onImageClick.bind(this);
  }
  
  onImageClick(){
    if (props.profileContext.editMode)
    this.setState({showModal: true});
  }

  render() {
    console.log(this.prop);
    return (
      <div>
        <EditImageModal />
        <Image onClick={this.onImageClick} src={this.props.profileContext.employee.photo} />
      </div>
    )
  }
}

export default ProfilePic

const Image = styled.img`
  width: 100%;
`
