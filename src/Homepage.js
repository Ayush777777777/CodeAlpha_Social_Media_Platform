import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
// import Timeline from "./timeline/Timeline";
import Suggestions from "./timeline/Suggestions";
import { Outlet } from 'react-router-dom';

function Homepage() {
  return (
      <div className="homepage">
        <div className="homepage__navWraper">
          <Sidenav />
        </div>
        <div className="homepage__timeline">
          {/* <Timeline /> */}
          <Outlet />
        </div>
        <div className="suggestionpanel">
          <Suggestions />
        </div>

      </div>
  );
}

export default Homepage;
