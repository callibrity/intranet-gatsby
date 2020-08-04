import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { standardButton } from '@globals/styles';

export default function ReusableButton({ onClick, text } : {onClick: never, text: string}) {
  return (
    <Button onClick={onClick}>{text}</Button>
  );
}

const Button = styled.div`
  ${standardButton};
  font-size: 16px;
  padding: 3px 5px;
  margin-right: 20px;
`;
