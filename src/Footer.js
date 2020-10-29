import React, { useEffect } from 'react';
import './styles/Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import SkipPreviousIcon from '@material-ui/icons/SkipPreviousRounded';
import SkipNextIcon from '@material-ui/icons/SkipNextRounded';
import ShuffleIcon from '@material-ui/icons/ShuffleRounded';
import RepeatIcon from '@material-ui/icons/RepeatRounded';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlayRounded';
import VolumeDownIcon from '@material-ui/icons/VolumeDownRounded';
import Pause from '@material-ui/icons/PauseCircleFilledRounded';
import { useDataLayerValue } from './DataLayer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Grid, Slider } from '@material-ui/core';

const MySwal = withReactContent(Swal);

function Footer({ spotify }) {
  const [{ playing, item }, dispatch] = useDataLayerValue();

  const pause = () => {
    spotify.pause();
    console.log('PAUSE');

    dispatch({
      type: 'SET_PLAYING',
      playing: false,
    });
  };

  const play = () => {
    if (item) {
      spotify
        .play()
        .then((res) => {
          spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
              type: 'SET_ITEM',
              item: r.item,
            });
            dispatch({
              type: 'SET_PLAYING',
              playing: true,
            });
          });
        });
    } else {
      MySwal.fire({
        title: <p>Uh-oh!</p>,
        text:
          'You are not currently playing any music. Please select a song from your playlists.',
        customClass: 'swal__custom'
      });
    }
  };
  useEffect(() => {
    console.log('footer rerendered!');
  }, [playing, item]);
  return (
    <div className='footer'>
      <div className='footer__left'>
        {item ? (
          <img
            className='nowPlaying__art'
            alt='nowplaying'
            src={item?.album?.images[0]?.url}
          />
        ) : null}
        <div className='footer__songInfo'>
          <h3>{item?.name}</h3>
          <p>{item?.artists[0].name}</p>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        {!playing ? (
          <div onClick={play}>
            <PlayCircleOutlineIcon fontSize='large' className='footer__green' />
          </div>
        ) : (
          <div onClick={pause}>
            <Pause fontSize='large' />
          </div>
        )}
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>

          <Grid item>
            <VolumeDownIcon />
          </Grid>

          <Grid item xs>
            <Slider color='primary' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
