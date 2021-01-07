import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDuration } from '../../redux/timer/timer.selector';
import { increaseDuration, decreaseDuration } from '../../redux/timer/timer.action';
import sprite from '../../assets/sprite.svg';

import './settings.style.scss';

const GameSettings = ({ duration, increaseDuration, decreaseDuration } = this.props) => {
  return (
    <div className='game-settings'>
      <h2>Game Settings</h2>
      <div>
        <label className='label-language' htmlFor='language'>
          Language:{' '}
        </label>
        <select className='select-language' name='language' id='language'>
          <option value='en-my'>English (Malaysia)</option>
          <option value='cn-my'>Mandarin (Malaysia)</option>
        </select>
      </div>
      <div className='duration'>
        <p>Duration:</p>
        <svg
          className='arrow-icon'
          onClick={
            duration === 1
              ? null
              : () => {
                  decreaseDuration();
                }
          }
        >
          <use href={sprite + '#left-arrow'} />
        </svg>
        <span>
          {duration} {`${duration === 1 ? 'minute' : 'minutes'}`}
        </span>
        <svg
          className='arrow-icon'
          onClick={
            duration === 3
              ? null
              : () => {
                  increaseDuration();
                }
          }
        >
          <use href={sprite + '#right-arrow'} />
        </svg>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseDuration: () => dispatch(increaseDuration()),
    decreaseDuration: () => dispatch(decreaseDuration()),
  };
};

const mapStateToProps = createStructuredSelector({
  duration: selectDuration,
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);
