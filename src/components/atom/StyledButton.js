import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  font-weight: bold;
  padding: 14px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #3e8e41;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Button = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;