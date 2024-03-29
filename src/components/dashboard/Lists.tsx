import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "urql";
import { DELETE_SONG } from "../../urql/mutations";

interface creatorObj {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
}

interface songinformation {
  postId:number;
  title: string;
  creator: creatorObj;
  createdAt: string;
}

const Lists: React.FC<songinformation> = ({postId, title, creator, createdAt }) => {
  const [, deletePost] = useMutation(DELETE_SONG);

  let d = new Date(parseInt(createdAt));

  
  return (
    <div className="list">
      <Link id="half" to={`song/name=${postId}`}>
        <h3>{title}</h3>
      </Link>
      <h3 id="quarter"> {creator.username} </h3>
      <h3 id="quarter"> {d.getMonth()}/{d.getDay()}/ {d.getFullYear()}</h3>
      <svg
        onClick={()=>deletePost({id:postId})}
        id="delete"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 1024 1024"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M292.7 840h438.6l24.2-512h-487z"></path>
        <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"></path>
      </svg>
    </div>
  );
};

export default Lists;
