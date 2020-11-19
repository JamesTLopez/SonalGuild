import React from "react";
import LyricsArea from "../components/song/LyricsArea";
import MainHeader from "../components/song/MainHeader";

function Song() {
  return (
    <div className="song-container">
      <MainHeader />
      <LyricsArea />
    </div>
  );
}

export default Song;
