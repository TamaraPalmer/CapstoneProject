import * as React from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BrowseArtist from "../components/BrowseArtist/BrowseArtist";

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
      <Typography
        component="h2"
        variant="subtitle6"
        sx={{ fontWeight: "bold", color: "Green", mb: 2 }}
      >
        Here are favorite tracks, playlists and albums from Unsigned artist
      </Typography>
      <Typography
        component="h1"
        variant="subtitle4"
        sx={{
          fontWeight: "bold",
          fontFamily: "Merriweather",
          color: "red",
          mb: 2,
        }}
      >
        Top Playlist by Listen
      </Typography>
      <BrowseArtist artists={artists} />
    </ThemeProvider>
  );
}
