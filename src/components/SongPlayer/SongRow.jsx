import './SongPlayer.scss';

import PlayerBack from '../../assets/player-back.svg';
import PlayerDots from '../../assets/player-dots.svg';
import PlayerPicture from '../../assets/player-picture.png';


export function SongRow() {

  return (
      <div className="song-player">
        <div className="song-player__header">
          <div className="song-player__header__back header-button">
            <img src={PlayerBack} alt="back"/>
          </div>
          <div className="song-player__header__label">
            <h1 className="song-player__header__label--name">The monster</h1>
            <h1 className="song-player__header__label--singer">Eminem/ Rihanna</h1>
          </div>
          <div className="song-player__header__dots header-button">
            <img src={PlayerDots} alt="dots"/>
          </div>

        </div>
        <div className="song-player__content">
          <img src={PlayerPicture} alt="player" />
        </div>
        <div className="song-player__actions">

        </div>
      </div>
  );
}