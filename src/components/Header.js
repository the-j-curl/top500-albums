import React from "react";
import styled from "styled-components/macro";

export const Header = () => {
  return (
    <HeaderContainer>
      <H1>
        <TitleFont>Rolling Stone's</TitleFont> top 500 rated albums
      </H1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 100px;
  width: 100%;
  background: #d32531;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    height: 110px;
  }

  @media (min-width: 1024px) {
    height: 120px;
  }
`;

const H1 = styled.h1`
  padding: 4px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    font-size: 28px;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;
const TitleFont = styled.span`
  font-family: "Cookie", cursive;
  font-size: 42px;

  @media (min-width: 768px) {
    font-size: 74px;
    margin-right: 20px;
  }
`;
