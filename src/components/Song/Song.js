import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ArtistProfile from "../../pages/ArtistProfile/ArtistProfile";

function Song() {
  return (
    <div>
      <ArtistProfile />
      <main>
        <h1>Song Title</h1>
        <p>Description of the song and the artist.</p>
        {/* Here you can add the audio player and other song details */}
      </main>
      <ArtistProfile />
    </div>
  );
}

export default Song;
