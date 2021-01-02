import React from 'react';

import sprite from '../../assets/sprite.svg';

import './settings.style.scss';

export const GameSettings = () => {
  return (
    <div className='game-settings'>
      <h2>Game Settings</h2>
      <div>
        <label className='label-language' htmlFor='language'>Language: </label>
        <select className='select-language' name='language' id='language'>
          <option value='en-my'>English (Malaysia)</option>
          <option value='cn-my'>Mandarin (Malaysia)</option>
        </select>
      </div>

      <div className='duration'>
        <p>Duration:</p>
        <svg className='arrow-icon'>
          <use href={sprite + '#left-arrow'} />
        </svg>
        <span>1 minute</span>
        <svg className='arrow-icon'>
          <use href={sprite + '#right-arrow'} />
        </svg>
      </div>
    </div>
  );
};
