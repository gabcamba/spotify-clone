import React from 'react';
import { useDataLayerValue } from './DataLayer';
import './styles/UserProfile.css';
function UserProfile() {
  const [{ userModal, modalPlaylists }, dispatch] = useDataLayerValue();

  return (
    <>
      <div className='profile__header'>
        <div className='img__container'>
          <img
            className='profile__image'
            alt='userimg'
            src={userModal?.images?.[0]?.url}
          />
        </div>
        <div className='profile__details'>
          <p className='profile__name'>{userModal?.display_name}</p>
          <p className='playlist__count'>{modalPlaylists?.length} playlists</p>
          <button onClick={() => console.log(modalPlaylists)} className='follow__button'>FOLLOW</button>
        </div>
      </div>

      <p>Public Playlists</p>
      <div className='user__playlists'>
        {modalPlaylists?.map((playlist) => (
          <div className="playlist__item">
            <img className="plst__image" src={playlist.images[0].url}></img>
            <p>{playlist.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserProfile;
