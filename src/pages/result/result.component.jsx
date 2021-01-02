import React from 'react';

import sprite from '../../assets/sprite.svg';

import './result.style.scss';

class Result extends React.Component {
  // May not need the lifecycle method. Maybe can convert back to functional component.

  render() {
    return (
      <div>
        <div className='score-container'>
          <svg className='icon-home'>
            <use href={sprite + '#home'} />
          </svg>
          <div className='score'>
            <div className='correct-score'>
              Correct Words: <span>13</span>
            </div>
            <div className='tried-score'>
              Tried Words: <span>28</span>
            </div>
          </div>
          <svg className='icon-replay-button'>
            <use href={sprite + '#replay-button'} />
          </svg>
        </div>
        <div className='words-lists'>
          <div>
            <h3 className='words-list__title'>Correct Words List:</h3>
            <div className='words-list correct-words-list'>
              <p>Police</p>
              <p>Happy</p>
              <p>Muffin</p>
            </div>
          </div>
          <div>
            <h3 className='words-list__title'>Tried Words List:</h3>
            <div className='words-list tried-words-list'>
              <p>Horse</p>
              <p>Sleep</p>
              <p>Bus</p>
              <p>Computer</p>
              <p>Medicine</p>
              <p>Coffee</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
