import React, { useState } from 'react';
import './styles/Body.css';
import Header from './Header.js';
import Banner from './Banner.js';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { useDataLayerValue } from './DataLayer';
// import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import SongRow from './SongRow.js';
import UserProfile from './UserProfile'

function Body({ spotify, play }) {
  const [{ displayList, heroImage, owner, userModal }, dispatch] = useDataLayerValue();

  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
    spotify.getUser(owner.id).then((user) => {
      dispatch({
        type: 'SET_USER_MODAL_DETAILS',
        userModal: user,
      });
    });

    spotify.getUserPlaylists(owner.id).then((userPlaylists) => {
      dispatch({
        type: 'SET_USER_MODAL_PLAYLISTS',
        modalPlaylists: userPlaylists.items,
      });
    })

  };

  const modalStyles = {
    'background-color': 'black',
    'border-radius': 10,
    'border': '1px solid #1db954',
    'display': 'flex',
    'flex-direction': "column"
  };
  return (
    <div className='body'>
      {/*<Header spotify={spotify} />*/}
      <Banner toggleModal={toggleModal} imageUrl={heroImage} />
      <Rodal
        // leaveAnimation='fade'
        animation="slideUp"
        customStyles={modalStyles}
        width={500}
        height={500}
        closeOnEsc={true}
        // duration={400}
        visible={visible}
        onClose={() => toggleModal()}
      >
      {/*USER PROFILE COMPONENT*/}
        
        <UserProfile/>
      </Rodal>
      <div className='body__info'>
        <div className='body__songs'>
          {displayList?.items.map((item) => (
            <SongRow key={item.track.id} play={play} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
