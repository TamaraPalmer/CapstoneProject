import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArtistCard from "../ArtistCard/ArtistCard";

const Main = () => {
  return (
    <div>
      <main>
        <h1>DiscoverUs</h1>
        <p>Unleash Music's Hidden Gems with DiscoverUs!DiscoverUs</p>
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
            <h1>Are you an Artist</h1>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Stack>
          </div>
          <p>Upload your music to get discovered</p>
          <h2>Are you an Artist </h2>
          <p> Here's who's hot and trending </p>
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