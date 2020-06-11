import React, { useContext } from "react"
import styled from "styled-components"
import { whiteContainer } from "globals/styles"
import ReusableModal from './../reusable/ReusableModal';
import ReusableButton from './../reusable/ReusableButton';

export default function EditImageModal(){


  return(
      <ReusableModal Show={true} Header={'Update Image'} Body={'asdf'} Footer={'asdf'}/>
  )
}
