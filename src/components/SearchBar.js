import React, { useState } from "react";
import styled from "styled-components/macro";

export const SearchBar = ({ value, onChange }) => {
  return (
    <InputWrapper>
      <SearchInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by Album Name..."
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const SearchInput = styled.input`
  width: 60%;
  border: none;
  border-radius: 15px;
  padding: 6px 10px;
  outline: none;

  ::placeholder {
    font-weight: 300;
    color: #696969;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;
