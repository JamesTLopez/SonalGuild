import React from "react";
import Button from "@material-ui/core/Button";
import Lists from "./Lists";
import { useQuery } from 'urql';
import {FIND_POSTS} from '../../urql/queries';

function SongLibrary() {

  const [result, reexecuteQuery] = useQuery({
    query: FIND_POSTS,
  });
  const { data, fetching, error } = result;


  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(data)

  return (
    <div className="SongLibrary">
      <div className="title">
        <div className="title-container">
          <h1>Songs</h1>
          <Button
            variant="contained"
            color="primary"
            style={{ background: "#264653", marginRight: "1em" }}
          >
            New Song
          </Button>
        </div>
        <div className="song-list">
          <div className="song-header">
            <h3 id="half">Name</h3>
            <h3 id="quarter">Owner</h3>
            <h3 id="quarter">Date</h3>
          </div>
          {data.posts.map((post:any) => (
            <Lists key={post.id} title={post.title} owner={post.owner} createdAt={post.createdAt}/>
          ))}
        </div>
      </div>
      <div className="songlist"></div>
    </div>
  );
}

export default SongLibrary;
