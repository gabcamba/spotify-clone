import React from 'react';
import './styles/SidebarOption.css';

function SidebarOption({ title, Icon, thumbnail }) {
  return (
    <div className='sidebarOption'>
      {Icon && <Icon className='sidebarOption__icon'></Icon>}
      {thumbnail && <img className='sidebarOption__playlist_image' alt='thumb' src={thumbnail}></img>}
      {Icon ? <h5>{title}</h5> : <h6>{title}</h6>}
    </div>
  );
}

export default SidebarOption;
