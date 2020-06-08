import React, {useContext} from "react"
import { navigate } from "gatsby"

import { UserContext } from "globals/UserContext" 

export default function Authentication (){
  const {username} = useContext(UserContext)
  if(!username){
    navigate("/login")
    return null
  } else{
    return null
  }
}