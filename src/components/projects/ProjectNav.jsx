import React from "react";
import {Link} from "react-router-dom"

function ProjectNav() {
  return (
    <div className="project-navigation">
      <h1>Ideas</h1>
      <div className="sep"></div>
      <nav>
        <Link to="/song"> SONG</Link>
      </nav>
    </div>
  );
}

export default ProjectNav;
