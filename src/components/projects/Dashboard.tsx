import React from "react";
import HeaderDash from "./HeaderDash";
import ProjectNavigation from "./ProjectNav"
import SongLibrary from "./SongLibrary"

function Dashboard() {
  return (
    <div className="dashboard-container">
      <HeaderDash />
      <div className="dashboard-content">
        <ProjectNavigation/>
        <SongLibrary/>
        
      </div>
    </div>
  );
}

export default Dashboard;
