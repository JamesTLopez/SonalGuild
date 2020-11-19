import React from "react";
import { Link } from "react-router-dom";

interface songinformation {
  title: string;
  owner: string;
  createdAt: string;
}

const Lists: React.FC<songinformation> = ({ title, owner, createdAt }) => {
  return (
    <div className="list">
      <Link id="half" to="song">
        <h3>{title}</h3>
      </Link>
      <h3 id="quarter"> {owner} </h3>
      <h3 id="quarter"> {createdAt}</h3>
    </div>
  );
};

export default Lists;
