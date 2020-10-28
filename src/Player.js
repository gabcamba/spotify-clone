import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./styles/Player.css";
import Sidebar from "./Sidebar";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer/>
    </div>

  );
}

export default Player;
