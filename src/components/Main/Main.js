import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArtistCard from "../ArtistCard/ArtistCard";
import { Typography } from "@mui/material";

const Main = () => {
  return (
    <div>
      <main>
        <Typography>DiscoverUs</Typography>
        <Typography>
          Unleash Music's Hidden Gems with DiscoverUs!DiscoverUs
        </Typography>
        <div className="header__upload">
          <div className="header__upload-container">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Listen
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <Button variant="contained" component="label">
                Scout
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Stack>
            <Typography>Are you an Artist</Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Stack>
          </div>
          <Typography>Upload your music to get discovered</Typography>
          <Typography>Are you an Artist </Typography>
          <Typography> Here's who's hot and trending </Typography>
          <ArtistCard />
        </div>
      </main>
    </div>
  );
};

export default Main;

//Scout// link to artist section
//Listen// trending song  use an id
// top half artist  // top tranding songs
