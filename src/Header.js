import React from 'react';
import './styles/Header.css';
import SearchIcon from '@material-ui/icons/SearchRounded';
import {Avatar} from '@material-ui/core';
import { useDataLayerValue } from "./DataLayer";

function Header({spotify}) {

  const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artists, Songs, Albums and Podcasts" type="text" />
            </div>
            
            <div className="header__right">
                <Avatar className="avatar" src={user ?.images ? user.images[0].url : null} alt="GC"/>
                <h4>{user ? user.display_name : null}</h4>
            </div>
        </div>
    )
}

export default Header;