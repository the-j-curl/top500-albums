import React, { useState } from "react";
import styled from "styled-components/macro";

export const AlbumCard = ({ position, artist, albumName, year, critic }) => {
  const [showMore, setShowMore] = useState(false);

  const handleOnClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Album>
      <p>No: {position}</p>
      <p>
        <BoldText>{albumName}</BoldText> by {artist}
      </p>
      <p>Released: {year}</p>
      {showMore && (
        <p>
          <ItalicText>{critic}</ItalicText>
        </p>
      )}
      <ShowMoreButton onClick={() => handleOnClick()}>Show more</ShowMoreButton>
    </Album>
  );
};

const Album = styled.article`
  border-bottom: 2px solid rgba(128, 128, 128, 0.2);
  padding: 5px;
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

const BoldText = styled.span`
  font-weight: 700;
`;

const ItalicText = styled.span`
  font-style: italic;
`;

const ShowMoreButton = styled.button`
  background: #fff;
  color: #d32531;
  border: none;
  border-radius: 10px;
  padding: 2px 6px;
  font-weight: 600;
  width: 150px;
`;
