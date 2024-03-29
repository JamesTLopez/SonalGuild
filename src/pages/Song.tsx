import React from "react";
import LyricsArea from "../components/song/LyricsArea";
import MainHeader from "../components/song/MainHeader";
import {  useParams } from "react-router-dom";
import { useQuery } from "urql";
import { FIND_ONE_POST } from "../urql/queries";

interface localParams{
  id:string
}


function Song() {

  let sd:localParams = useParams();
  const [result] = useQuery({
    query: FIND_ONE_POST,
    variables:{
      id:parseInt(sd.id)
    }
  });


  const { data, fetching, error } = result;
  
  if (fetching) return <p>Loading...</p>;
  if (error ){

    return null;
  } 


  return (
    <div className="song-container">
      <MainHeader title={data.post.title}/>
      <LyricsArea songId={parseInt(sd.id)}/>
    </div>
  );
}

export default Song;
