import React, { useState } from 'react';
import useAPI from '@hooks/useAPI';
import PersonTile from '@people/PersonTile';
import LocationButtons from '@people/LocationButtons';
import PeopleSearch from '@people/PeopleSearch';
import { employeesAPIOfficeString } from '@globals/constants';

export default function People() {
  const [location, setLocation] = useState('Cincinnati');
  const [name, setName] = useState('');
  const employees = useAPI(`${employeesAPIOfficeString}${location}`);

  const employeeList = typeof employees === 'string' ? employees
    : employees
      .filter((person) => person.name.toLowerCase().includes(name.toLowerCase()))
      .sort((personA, personB) => {
        const a = personA.name.toLowerCase();
        const b = personB.name.toLowerCase();

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      })
      .map(({ photo, name: empName, role }) => (
        <PersonTile
          key={empName}
          name={empName}
          role={role}
          photo={photo}
        />
      ));

  return (
    <div className="container" data-testid="people-page">
      <LocationButtons location={location} setLocation={setLocation} />
      <PeopleSearch name={name} setName={setName} />
      <div className="row justify-content-center">
        {employeeList}
      </div>
    </div>
  );
}
