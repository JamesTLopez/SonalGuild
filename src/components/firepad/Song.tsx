import React from "react";
import LyricsArea from "./layouts/LyricsArea";
import MainHeader from "./layouts/MainHeader";



function Song() {


  return (
    <div className="song-container">
      <MainHeader />
      <LyricsArea/>
    </div>
  );
}

export default Song;
