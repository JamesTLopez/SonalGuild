import React from "react";
import MainHeader from "./layouts/MainHeader";
import SongToolbar from "./layouts/SongToolbar"

function Song() {
  return (
    <div className="song-container">
      <MainHeader />
      <SongToolbar />

    </div>
  );
}

export default Song;
