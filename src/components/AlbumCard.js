import React from "react";
import styled from "styled-components/macro";

export const AlbumCard = ({ position, artist, albumName, year, review }) => {
  return (
    <Album>
      <p>Position: {position}</p>
      <p>
        {artist} {albumName}
      </p>
      <p>Released: {year}</p>
      <p>{review}</p>
    </Album>
  );
};

const Album = styled.article`
  border: 1px solid white;
`;
