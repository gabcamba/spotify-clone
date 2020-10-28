import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusicRounded";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      ></img>

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />

      <SidebarOption title="Playlst 1"  />
      <SidebarOption title="Playlist 2" />
      <SidebarOption title="Playlist 3" />



    </div>
  );
}

export default Sidebar;
