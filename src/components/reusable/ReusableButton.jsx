import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { standardButton } from '@globals/styles';

export default function ReusableButton({ onClick, text }) {
  return (
    <Button onClick={onClick}>{text}</Button>
  );
}

ReusableButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const Button = styled.div`
  ${standardButton};
  font-size: 16px;
  padding: 3px 5px;
  margin-right: 20px;
`;
