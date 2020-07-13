import React, { useState } from "react"
import useAPI from "@hooks/useAPI"
import PersonTile from "@people/PersonTile"
import LocationButtons from "@people/LocationButtons"
import PeopleSearch from "@people/PeopleSearch"
import { employeesAPIOfficeString } from "@globals/constants"

export default function People() {
  const [location, setLocation] = useState("Cincinnati")
  const [name, setName] = useState("")
  const employees = useAPI(`${employeesAPIOfficeString}${location}`)

  const employeeList = typeof employees === "string" ? employees
    : employees
      .filter((person) => person.name.toLowerCase().includes(name.toLowerCase()))
      .sort((personA, personB) => {
        const a = personA.name.toLowerCase()
        const b = personB.name.toLowerCase()
        return (a < b) ? -1 : (a > b) ? 1 : 0
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
