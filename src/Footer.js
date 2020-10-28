import React from 'react';
import './styles/Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import SkipPreviousIcon from '@material-ui/icons/SkipPreviousRounded';
import SkipNextIcon from '@material-ui/icons/SkipNextRounded';
import ShuffleIcon from '@material-ui/icons/ShuffleRounded';
import RepeatIcon from '@material-ui/icons/RepeatRounded';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlayRounded';
import VolumeDownIcon from '@material-ui/icons/VolumeDownRounded';

import { Grid, Slider } from '@material-ui/core';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img className="nowPlaying__art" alt="nowplaying" src="https://homepages.cae.wisc.edu/~ece533/images/baboon.png " />
        <div className="footer__songInfo">
          <h3>Yeah!</h3>
          <p>Usher</p>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__green' />
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
