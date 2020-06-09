import React, { useState } from "react"

import useAPI from "@useAPI"
import PersonTile from "@people/PersonTile"
import LocationButtons from "@people/LocationButtons"
import PeopleSearch from "@people/PeopleSearch"

export default function People() {
  const [location, setLocation] = useState("Cincinnati")
  const [name, setName] = useState("")
  const employees = useAPI(`/employees?office=${location}`)

  const employeeList = typeof employees === "string" ? employees
    :employees
      .filter((person) => {
        return person.name.toLowerCase().includes(name.toLowerCase())
      })
      .map(({ photo, name, role }) => (
        <PersonTile 
          key={name} 
          name={name} 
          role={role} 
          photo={photo}
        />
      ))
  
  return (
    <div className="container" data-testid="people-page">
      <LocationButtons location={location} setLocation={setLocation} />
      <PeopleSearch name={name} setName={setName} />
      <div className="row justify-content-center">
        {employeeList}
      </div>
    </div>
  )
}
