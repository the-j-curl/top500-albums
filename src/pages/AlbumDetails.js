import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import { Loader } from "../components/Loader";
import { BackButton } from "../components/BackButton";
import { BoldText } from "../components/AlbumCard";

export const AlbumDetails = () => {
  const [albumData, setAlbumData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { position } = useParams();

  const SINGLEALBUM_URL = `https://jamie-albums-api.herokuapp.com/albums?position=${position}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(SINGLEALBUM_URL)
      .then(res => res.json())
      .then(json => {
        console.log(json.results);
        setAlbumData(json.results);
        setIsLoading(false);
      });
  }, [SINGLEALBUM_URL]);

  console.log(position);
  console.log(albumData);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AlbumDetailsContainer>
          <BackButton history={history} />
          {albumData.map(album => (
            <AlbumTextWrapper key={album.position}>
              <p>
                <BoldText>{album.albumName}</BoldText> by {album.artist}
              </p>
              <p>Released: {album.year}</p>
              <p>{album.critic}</p>
            </AlbumTextWrapper>
          ))}
        </AlbumDetailsContainer>
      )}
    </>
  );
};

const AlbumDetailsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const AlbumTextWrapper = styled.div`
  padding: 20px;
  width: 90%;
  margin-top: 20px;
  background: rgba(22, 21, 21, 0.9);

  @media (min-width: 768px) {
    /* padding: 20px 30px; */
    width: 70%;
  }

  @media (min-width: 1024px) {
    /* padding: 20px 100px; */
    width: 50%;
  }
`;
