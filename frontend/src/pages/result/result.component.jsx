import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectSelectedCategory, selectWordIndex, selectGuessAmount, selectGuessWords, selectCorrectAmount, selectCorrectWords } from '../../redux/vocabulary/vocabulary.selector.js';
import { updateWords, updateWordIndex } from '../../redux/vocabulary/vocabulary.action';
import sprite from '../../assets/sprite.svg';

import './result.style.scss';

class Result extends React.Component {
  // May not need the lifecycle method. Maybe can convert back to functional component.

  redirectToPlay = () => {
    this.props.history.push('/play');
  };

  shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  shuffleAndUpdateWords = () => {
    const shuffledWords = this.shuffle(this.props.selectedCategory.words);
    this.props.updateWords(shuffledWords);
  };

  render() {
    const { updateWordIndex, wordIndex, guessAmount, guessWords, correctAmount, correctWords, history } = this.props;
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
          <svg
            className='icon-replay-button'
            onClick={() => {
              this.shuffleAndUpdateWords();
              updateWordIndex();
              this.redirectToPlay();
            }}
          >
            <use href={sprite + '#replay-button'} />
          </svg>
        </div>
        <div className='no-more-word'>{wordIndex < 0 ? <p>You have used up all the words in the category!</p> : null}</div>
        <div className='words-lists'>
          <div>
            <h3 className='words-list__title'>Correct Words List:</h3>
            <div className='words-list correct-words-list'>
              {correctWords.map((word) => {
                return <p>{word.toUpperCase()}</p>;
              })}
            </div>
          </div>
          <div>
            <h3 className='words-list__title'>Tried Words List:</h3>
            <div className='words-list tried-words-list'>
              {guessWords.map((word) => {
                return <p>{word.toUpperCase()}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateWords: (words) => dispatch(updateWords(words)),
    updateWordIndex: () => dispatch(updateWordIndex()),
  };
};

const mapStateToProps = createStructuredSelector({
  selectedCategory: selectSelectedCategory,
  wordIndex: selectWordIndex,
  guessAmount: selectGuessAmount,
  guessWords: selectGuessWords,
  correctAmount: selectCorrectAmount,
  correctWords: selectCorrectWords,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result));
