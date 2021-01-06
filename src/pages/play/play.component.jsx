import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { addCorrectWord, addGuessedWord, updateWordIndex, decreaseWordIndex } from '../../redux/vocabulary/vocabulary.action';
import { selectWords, selectWordIndex, selectCorrectAmount } from '../../redux/vocabulary/vocabulary.selector.js';
import { selectTimer } from '../../redux/timer/timer.selector';
import sprite from '../../assets/sprite.svg';

import './play.style.scss';

class Play extends React.Component {
  // We can't deconstruct this.props here because this is class component constructor. So we have to this.props every time we need to use it.

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress.bind(this));
    this.props.updateWordIndex();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress.bind(this));
    this.props.addGuessedWord(this.props.words[this.props.wordIndex]);
  }

  handleKeyPress = (event) => {
    // Space key pressed
    if (event.keyCode === 32) {
      this.props.addGuessedWord(this.props.words[this.props.wordIndex]);
      this.props.decreaseWordIndex();
    }
    // Enter key pressed
    if (event.keyCode === 13) {
      this.props.addCorrectWord(this.props.words[this.props.wordIndex]);
      this.props.decreaseWordIndex();
    }
  };

  render() {
    const { words, wordIndex, correctAmount, timer, addCorrectWord, addGuessedWord, decreaseWordIndex, history } = this.props;

    return (
      <div onKeyDown={(event) => this.handleKeyPress(event)}>
        <div className='metrics'>
          <div className='timer'>
            <div className='timer-count'>{timer}S</div>
            <svg className='sand-timer-icon'>
              <use href={sprite + '#sand-timer'} />
            </svg>
          </div>
          <div className='score'>
            <svg className='checkmark-icon'>
              <use href={sprite + '#checkmark'} />
            </svg>
            <div className='score-count'>{correctAmount}</div>
          </div>
        </div>
        <div className='word-container'>
          <span className='word'>{words[wordIndex].text.toUpperCase()}</span>
        </div>
        <div className='play-buttons'>
          <svg className='exit-button'>
            <use href={sprite + '#exit-button'} />
          </svg>
          <div
            className='correct-button'
            onClick={() => {
              addCorrectWord(words[wordIndex]);
              decreaseWordIndex();
            }}
          >
            <span className='correct-button__text'>Correct</span>
            <span className='correct-button__shortcut'>(Press Enter)</span>
          </div>
          <div
            className='next-button'
            onClick={() => {
              addGuessedWord(words[wordIndex]);
              decreaseWordIndex();
            }}
          >
            <span className='next-button__text'>Next</span>
            <span className='next-button__shortcut'>(Press Spacebar)</span>
          </div>
          <svg className='pause-button' onClick={() => history.push('/result')}>
            <use href={sprite + '#pause-button'} />
          </svg>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCorrectWord: (word) => dispatch(addCorrectWord(word)),
    addGuessedWord: (word) => dispatch(addGuessedWord(word)),
    updateWordIndex: () => dispatch(updateWordIndex()),
    decreaseWordIndex: () => dispatch(decreaseWordIndex()),
  };
};

const mapStateToProps = createStructuredSelector({
  words: selectWords,
  wordIndex: selectWordIndex,
  correctAmount: selectCorrectAmount,
  timer: selectTimer,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));
