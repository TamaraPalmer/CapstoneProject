import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./ArtistProfile.scss";
import axios from "axios";

function ArtistProfile() {
  const { idFromParams } = useParams();
  const [artist, setArtist] = useState(null);
  const [music, setMusic] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://v1.nocodeapi.com/fyiah876/spotify/fHCqbcjtNZRlBCZl/artists?id=${idFromParams}`
      );
      setArtist(result.data);
    };
    fetchData();
  }, [idFromParams]);

  useEffect(() => {
    axios
      .get(
        "https://v1.nocodeapi.com/fyiah876/spotify/fHCqbcjtNZRlBCZl/playlists?id=5HlbFuuO9gZ3Y4coHUtsSO?si=7dbcfaa9160c4816"
      )
      .then((response) => {
        const tracks = response.data.tracks.items
          .filter((item) => item.track.artists[0].name === artist.name)
          .map((item) => {
            const track = item.track;
            return {
              name: track.name,
              artist: track.artists[0].name, // assuming there is only one artist per track
              image: track.album.images[0].url, // get the first image url of the album
              preview: track.preview_url,
              id: track.artists[0].id,
            };
          });
        setMusic(tracks);
      });
  }, [artist]);

  useEffect(() => {
    const audioPlayer = document.getElementById("audioPlayer");
    if (audioPlayer && music.length > 0) {
      audioPlayer.src = music[currentIndex].preview;
      if (isPlaying) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    }
  }, [music, currentIndex, isPlaying]);

  function handleSongEnd() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % music.length);
  }

  function handlePlayerClick() {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }

  function handleMouseEnter(index) {
    setIsHovering(index);
  }

  function handleMouseLeave() {
    setIsHovering(-1);
  }

  function handleCardClick(index) {
    if (currentIndex === index) {
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    } else {
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  }

  if (!artist) {
    return <div>Loading...</div>;
  }

  return (
    <div className="artist-profile">
      <img src={artist.images[0].url} alt={artist.name} />
      <Typography
        component="h1"
        variant="subtitle4"
        sx={{
          fontWeight: "bold",
          color: "White",
          fontFamily: "Arial",
          mb: 2,
        }}
      >
        {artist.name}
      </Typography>
      <Typography
        component="p"
        variant="subtitle6"
        sx={{
          color: "White",
          fontFamily: "Arial",
          mb: 2,
        }}
      >
        Monthly Listeners: {artist.followers.total}
      </Typography>
      <Typography
        component="p"
        variant="subtitle6"
        sx={{
          color: "White",
          fontFamily: "Arial",
          mb: 2,
        }}
      >
        Streams: {artist.popularity}
      </Typography>
      <Typography
        component="h2"
        variant="subtitle6"
        sx={{
          fontWeight: "bold",
          color: "White",
          fontFamily: "Arial",
          mb: 2,
        }}
      >
        {music.length} Songs
      </Typography>
      <div className="browse-artist">
        <audio id="audioPlayer" onEnded={handleSongEnd} preload="auto"></audio>
        <div className="cards">
          {music.map((track, index) => (
            <div
              className="card"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(index)}
            >
              {isHovering === index && (
                <div className="player">
                  <button onClick={handlePlayerClick}>
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              )}
              <img src={track.image} alt={`${track.artist} - ${track.name}`} />
              <Link className="next-video" to={`/artist/${track.id}`}>
                <Typography
                  component="h4"
                  variant="subtitle6"
                  sx={{
                    fontWeight: "bold",
                    color: "White",
                    fontFamily: "Arial",
                    mb: 2,
                  }}
                >
                  {track.artist}
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle6"
                  sx={{
                    color: "White",
                    fontFamily: "Arial",
                    mb: 2,
                  }}
                >
                  {track.name}
                </Typography>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Add contact info here */}
    </div>
  );
}

export default ArtistProfile;
