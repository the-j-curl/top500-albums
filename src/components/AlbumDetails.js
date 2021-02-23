import React from "react";
import styled from "styled-components/macro";

export const AlbumDetails = ({ text }) => {
  return (
    <DetailsWrapper>
      <ShowMoreText>{text}</ShowMoreText>
      {/* <button onClick={() => }>Close</button> */}
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  position: absolute;
  left: 50px;
  top: 100px;
  z-index: 99;
  background: rgba(22, 21, 21, 0.5);
  color: #fff;
`;

const ShowMoreText = styled.p``;
