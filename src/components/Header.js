import React from "react";
import styled from "styled-components/macro";

export const Header = () => {
  return (
    <HeaderContainer>
      <H1>Rolling Stones top 500 rated albums</H1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 100px;
  border: 1px solid red;
`;

const H1 = styled.h1``;
