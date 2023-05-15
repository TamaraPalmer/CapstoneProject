import { Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BrowseArtist.scss";

function BrowseArtist() {
  const [music, setMusic] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);

  useEffect(() => {
    axios
      .get(
        "https://v1.nocodeapi.com/fyiah876/spotify/fHCqbcjtNZRlBCZl/playlists?id=5HlbFuuO9gZ3Y4coHUtsSO?si=7dbcfaa9160c4816"
      )
      .then((response) => {
        const tracks = response.data.tracks.items
          .slice(0, 6) // include only the first 6 tracks
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
  }, []);

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

  return (
    <div className="container">
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
              <Typography>{track.artist}</Typography>
              <Typography>{track.name}</Typography>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseArtist;
