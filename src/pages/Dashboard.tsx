import React from "react";
import HeaderDash from "../components/dashboard/HeaderDash";
import SongLibrary from "../components/dashboard/SongLibrary";

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
