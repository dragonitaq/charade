import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectGuessAmount, selectGuessWords, selectCorrectAmount, selectCorrectWords } from '../../redux/vocabulary/vocabulary.selector.js';
import sprite from '../../assets/sprite.svg';

import './result.style.scss';

class Result extends React.Component {
  // May not need the lifecycle method. Maybe can convert back to functional component.

  render() {
    const { guessAmount, guessWords, correctAmount, correctWords, history } = this.props;
    return (
      <div>
        <div className='score-container'>
          <svg className='icon-home' onClick={() => history.push('/')}>
            <use href={sprite + '#home'} />
          </svg>
          <div className='score'>
            <div className='correct-score'>
              Correct Words: <span>{correctAmount}</span>
            </div>
            <div className='tried-score'>
              Tried Words: <span>{guessAmount}</span>
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
              {correctWords.map((word) => {
                return <p>{word.text.toUpperCase()}</p>;
              })}
            </div>
          </div>
          <div>
            <h3 className='words-list__title'>Tried Words List:</h3>
            <div className='words-list tried-words-list'>
              {guessWords.map((word) => {
                return <p>{word.text.toUpperCase()}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  guessAmount: selectGuessAmount,
  guessWords: selectGuessWords,
  correctAmount: selectCorrectAmount,
  correctWords: selectCorrectWords,
});

export default withRouter(connect(mapStateToProps)(Result));
