import React, { useState } from "react";
import Lists from "./Lists";
import { useQuery } from "urql";
import { FIND_POSTS } from "../../urql/queries";
import { Button } from "@material-ui/core";
import CreatePostForm from "./CreatePostForm";


function SongLibrary() {


  const [showModal, setModal] = useState<boolean>(false);
  const [result] = useQuery({
    query: FIND_POSTS,
   
  });

  

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;



  const displayModal = () => {
    setModal(!showModal);

  };

  return (
    <div className="SongLibrary">
      <div className="title">
        <div className="title-container">
          <h1>Songs</h1>
          <Button
            variant="contained"
            color="primary"
            style={{ background: "#264653", marginRight: "1em" }}
            onClick={displayModal}
          >
            New Song
          </Button>
        </div>
        <div className="song-list">
          <div className="song-header">
            <h3 id="half">Name</h3>
            <h3 id="quarter">Description</h3>
            <h3 id="quarter">Date</h3>
          </div>
          {data.posts.map((post: any) => (
            <Lists
              key={post.id}
              title={post.title}
              owner={post.creatorId}
              createdAt={post.createdAt}
            />
          ))}
        </div>
      </div>
      <div className="songlist"></div>

      <div
        id="myModal"
        className={showModal ? "show modal" : "modal "}
      >
        <div className="modal-content">
          <span className="close" onClick={displayModal}>&times;</span>
          <CreatePostForm/>
        </div>
      </div>
    </div>
  );
}

export default SongLibrary;
