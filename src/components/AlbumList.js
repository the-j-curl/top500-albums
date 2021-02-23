import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { SearchBar } from "./SearchBar";
import { AlbumCard } from "./AlbumCard";
import { Loader } from "./Loader";
import { AlbumDetails } from "./AlbumDetails";

export const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ALBUMS_URL = `https://jamie-albums-api.herokuapp.com/albums`;

  useEffect(() => {
    setIsLoading(true);
    fetch(ALBUMS_URL)
      .then(res => res.json())
      .then(json => {
        setAlbums(json.results);
        console.log(albums.length);
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, [ALBUMS_URL]);

  console.log(albums.length);

  return (
    <>
      <H2>Album list</H2>
      <SearchBar
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <AlbumWrapper>
          {albums
            .filter(album => {
              if (input === "") {
                return album;
              } else {
                return album.albumName
                  .toLowerCase()
                  .includes(input.toLowerCase());
              }
            })
            .map(album => (
              <AlbumCard
                key={album.position}
                position={album.position}
                artist={album.artist}
                albumName={album.albumName}
                year={album.year}
                critic={album.critic}
              />
            ))}
        </AlbumWrapper>
      )}
    </>
  );
};

const H2 = styled.h2`
  margin-left: auto;
  margin-right: auto;
  width: max-content;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

const AlbumWrapper = styled.main`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
