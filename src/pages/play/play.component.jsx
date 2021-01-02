import React from 'react';
import sprite from '../../assets/sprite.svg';

import './play.style.scss';

class Play extends React.Component {
  // We need to randomize and loop every word for game play.

  render() {
    return (
      <div>
        <div className='metrics'>
          <div className='timer'>
            <div className='timer-count'>120S</div>
            <svg className='sand-timer-icon'>
              <use href={sprite + '#sand-timer'} />
            </svg>
          </div>
          <div className='score'>
            <svg className='checkmark-icon'>
              <use href={sprite + '#checkmark'} />
            </svg>
            <div className='score-count'>8</div>
          </div>
        </div>
        <div className='word-container'>
          <span className='word'>Police</span>
        </div>
        <div className='play-buttons'>
          <div className='correct-button'>
            <span className='correct-button__text'>Correct</span>
            <span className='correct-button__shortcut'>(Press Enter)</span>
          </div>
          <div className='next-button'>
            <span className='next-button__text'>Next</span>
            <span  className='next-button__shortcut'>(Press Spacebar)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
