import React from "react";
import LyricsArea from "./layouts/LyricsArea";
import MainHeader from "./layouts/MainHeader";
import SongToolbar from "./layouts/SongToolbar";


function Song() {


  return (
    <div className="song-container">
      <MainHeader />
      <SongToolbar />
      <LyricsArea/>
    </div>
  );
}

export default Song;
