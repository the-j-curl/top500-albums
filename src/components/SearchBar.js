import React, { useState } from "react";
import styled from "styled-components/macro";

export const SearchBar = ({ value, onChange }) => {
  // const [searchValue, setSearchValue] = useState("");

  // const handleOnSubmit = () => {};

  return (
    <InputWrapper>
      <SearchInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by Album, Artist or Year"
      />
      <SearchButton type="submit">Search</SearchButton>
    </InputWrapper>
  );

  // return (
  //   <Form onSubmit={handleOnSubmit}>
  //     <SearchInput
  //       type="text"
  //       value={searchValue}
  //       onChange={e => setSearchValue(e.target.value)}
  //       placeholder="Search by Album, Artist or Year"
  //     />
  //     <SearchButton type="submit">Search</SearchButton>
  //   </Form>
  // );
};

// const Form = styled.form`
//   display: flex;
//   justify-content: center;
//   margin: 10px;
// `;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const SearchInput = styled.input`
  width: 60%;
  border: none;
  border-radius: 15px;
  padding: 6px 8px;
  margin: 0 4px;
`;

const SearchButton = styled.button`
  background: #d32531;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 2px 6px;
  font-weight: 600;
  width: 80px;
`;
