import React from "react";
import styled from "styled-components";

export const BackButton = ({ history }) => {
  return (
    <Button
      onClick={() => {
        history.goBack();
      }}
      type="button"
    >
      <BackButtonText>Back</BackButtonText>
    </Button>
  );
};

const Button = styled.button`
  background: #d32531;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 2px 6px;
  font-weight: 600;
  width: 150px;
  height: 40px;
  outline: none;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const BackButtonText = styled.p`
  color: #fff;
  font-size: 16px;
  margin: 0;
`;
