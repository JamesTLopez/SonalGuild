import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useQuery } from 'urql';
import {FIND_POSTS} from '../../urql/queries';

function SongLibrary() {

  const [result, reexecuteQuery] = useQuery({
    query: FIND_POSTS,
  });
  console.log(result.data);

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
          <div className="list">
              <Link id="half" to="song">
                  <h3>Babs</h3>
              </Link>
              <h3 id="quarter"> James Lopez </h3>
              <h3 id="quarter"> July 2nd 2020</h3>
          </div>
        </div>
      </div>
      <div className="songlist"></div>
    </div>
  );
}

export default SongLibrary;
