import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const AlbumCard = ({ position, artist, albumName, year, critic }) => {
  return (
    <Album>
      <AlbumText>No: {position}</AlbumText>
      <AlbumText>
        <BoldText>{albumName}</BoldText> by {artist}
      </AlbumText>
      <AlbumText>Released: {year}</AlbumText>
      <DetailsLink to={`/albums/${position}`}>
        <ShowMoreButton>See more info</ShowMoreButton>
      </DetailsLink>
    </Album>
  );
};

const Album = styled.article`
  border-bottom: 2px solid rgba(128, 128, 128, 0.2);
  padding: 5px 10px;
  width: 95%;
  font-size: 15px;
  background: rgba(22, 21, 21, 0.5);
  color: #fff;

  @media (min-width: 768px) {
    width: 40%;
    margin: 4px;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

const AlbumText = styled.p`
  margin: 10px 0;
`;

const DetailsLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const ShowMoreButton = styled.button`
  background: #fff;
  color: #d32531;
  border: none;
  border-radius: 14px;
  padding: 2px 6px;
  font-weight: 600;
  width: 150px;
  height: 25px;
  outline: none;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
