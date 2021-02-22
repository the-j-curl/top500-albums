import React, { useEffect, useState } from "react";
import { AlbumCard } from "./AlbumCard";

export const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const ALBUMS_URL = `https://jamie-albums-api.herokuapp.com/albums`;

  useEffect(() => {
    fetch(ALBUMS_URL)
      .then(res => res.json())
      .then(json => {
        setAlbums(json.results);
        console.log(albums.length);
      });
    // eslint-disable-next-line
  }, [ALBUMS_URL]);

  console.log(albums.length);

  return (
    <>
      <h2>Album list</h2>
      {albums.map(album => (
        <AlbumCard
          key={album.position}
          position={album.position}
          artist={album.artist}
          albumName={album.albumName}
          year={album.year}
          review={album.critic}
        />
      ))}
    </>
  );
};
