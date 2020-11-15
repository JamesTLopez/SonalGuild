import React from "react";
import HeaderDash from "./HeaderDash";
import SongLibrary from "./SongLibrary";

function Dashboard() {


  return (
    <div className="dashboard-container">
      <HeaderDash  />
      <div className="dashboard-content">
        <SongLibrary />
      </div>
    </div>
  );
}

export default Dashboard;
