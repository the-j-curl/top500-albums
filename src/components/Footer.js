import React from "react";
import styled from "styled-components/macro";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Created by Jamie Cook</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.header`
  height: 100px;
  border: 1px solid red;
`;
