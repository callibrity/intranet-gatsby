import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { linkStyle } from '@globals/styles'; 

const { Toggle, Menu } = Dropdown;

interface propInterface {
  label: string,
  children: React.ReactNode[] | React.ReactElement,
}

export default function UserDropdown({ label, children }: propInterface) {
  return (
    <StyledDropdown>
      <Toggle as="a">{label}</Toggle>
      <Menu>
        {children}
      </Menu>
    </StyledDropdown>
  );
}



const StyledDropdown = styled(Dropdown)`
  ${linkStyle}
`;
