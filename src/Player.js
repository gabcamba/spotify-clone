import React, { useEffect } from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./styles/Player.css";
import Sidebar from "./Sidebar";

function Player({spotify}) {

  useEffect(() => {
    console.log("player useeffect", spotify)
    
  })

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify}/>
      </div>
      <Footer/>
    </div>

  );
}

export default Player;
