import * as React from "react";
import "./Dashboard.scss";
import profile from "../assets/images/profile.jpg";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BrowseArtist from "../components/BrowseArtist/BrowseArtist";
import Upload from "../components/Upload/Upload";

const theme = createTheme();

export default function Album() {
  const [artists, setArtists] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://v1.nocodeapi.com/fyiah876/spotify/fHCqbcjtNZRlBCZl/playlists?id=5HlbFuuO9gZ3Y4coHUtsSO&si=7dbcfaa9160c4816"
      );
      const mappedData = result.data.items.map((item) => ({
        id: item.id,
        name: item.name,
        images: item.images,
        followers: item.followers,
      }));
      setArtists(mappedData.slice(0, 6));
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="dashboard">
        <img className="dashboard__img-top" src={profile} alt="profile-pic" />
        <Typography
          component="h2"
          variant="subtitle6"
          sx={{
            fontWeight: "bold",
            color: "White",
            fontFamily: "Arial",
            mb: 2,
            margin: "10px",
          }}
        >
          Jasmine Johnson
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "white",
            mb: 1,
            margin: "10px",
          }}
        >
          Are you an Artist?
        </Typography>
        <Typography
          component="p"
          variant="subtitle6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "white",
            mb: 1,
            margin: "10px",
          }}
        >
          Upload your music to get discovered
        </Typography>
        <Upload />
        <Typography
          component="p"
          variant="subtitle6"
          sx={{
            fontWeight: "bold",
            color: "White",
            fontFamily: "Arial",
            mb: 2,
            margin: "10px",
          }}
        >
          Here are favorite tracks, playlists and albums from Unsigned artist
        </Typography>
        <Typography
          component="h2"
          variant="subtitle6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "White",
            margin: "10px",
            mb: 2,
          }}
        >
          Top Playlist by Listen
        </Typography>
        <BrowseArtist artists={artists} />
      </div>
    </ThemeProvider>
  );
}
