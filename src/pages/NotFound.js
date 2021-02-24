import React from "react";
import styled from "styled-components/macro";

import { BackButton } from "../components/BackButton";

export const NotFound = ({ history }) => {
  return (
    <NotFoundWrapper>
      <P>404 - Page Not Found</P>
      <BackButton history={history} />
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
