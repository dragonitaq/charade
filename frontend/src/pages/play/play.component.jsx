import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { updateItems, addCorrectWord, addGuessedWord, updateItemIndex, decreaseItemIndex, resetGuessedItems, resetCorrectItems } from '../../redux/playContent/playContent.action';
import { convertDurationToInitialTimer, copyInitialTimerToCurrentTimer, countDownTimer } from '../../redux/playDuration/playDuration.action';
import { selectVocabulary, selectItemIndex, selectCorrectAmount } from '../../redux/playContent/playContent.selector';
import { selectCurrentTimer } from '../../redux/playDuration/playDuration.selector';
import sprite from '../../assets/sprite.svg';

import './play.style.scss';

class Play extends React.Component {
  state = {
    intervalId: null,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    this.props.convertDurationToInitialTimer();
    this.props.copyInitialTimerToCurrentTimer();
    this.props.resetGuessedItems();
    this.props.resetCorrectItems();
    this.intervalId = setInterval(() => {
      this.props.countDownTimer();
    }, 1000);
  }

  componentDidUpdate() {
    if (this.props.currentTimer === 0) {
      this.props.history.push('/result');
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    if (this.props.vocabulary[this.props.itemIndex]) {
      this.props.addGuessedWord(this.props.vocabulary[this.props.itemIndex]);
    }
    clearInterval(this.intervalId);
  }

  handleKeyPress = (event) => {
    // Space key pressed
    if (event.keyCode === 32) {
      this.props.addGuessedWord(this.props.vocabulary[this.props.itemIndex]);
      this.props.decreaseItemIndex();
    }
    // Enter key pressed
    if (event.keyCode === 13) {
      this.props.addCorrectWord(this.props.vocabulary[this.props.itemIndex]);
      this.props.decreaseItemIndex();
    }
  };

  render() {
    const { vocabulary, itemIndex, correctAmount, currentTimer, addCorrectWord, addGuessedWord, decreaseItemIndex, history } = this.props;

    return (
      <div onKeyDown={(event) => this.handleKeyPress(event)}>
        <div className='metrics'>
          <div className='timer'>
            <div className='timer-count'>{currentTimer}S</div>
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
        <div className='item-container'>
          <span className='item'>{itemIndex >= 0 ? vocabulary[itemIndex].toUpperCase() : history.push('/result')}</span>
        </div>
        <div className='play-buttons'>
          <svg className='exit-button' onClick={() => history.push('/')}>
            <use href={sprite + '#exit-button'} />
          </svg>
          <div
            className='correct-button'
            onClick={() => {
              addCorrectWord(vocabulary[itemIndex]);
              decreaseItemIndex();
            }}
          >
            <span className='correct-button__text'>Correct</span>
            <span className='correct-button__shortcut'>(Press Enter)</span>
          </div>
          <div
            className='next-button'
            onClick={() => {
              addGuessedWord(vocabulary[itemIndex]);
              decreaseItemIndex();
            }}
          >
            <span className='next-button__text'>Next</span>
            <span className='next-button__shortcut'>(Press Spacebar)</span>
          </div>
          <svg className='pause-button' onClick={() => history.push('/result')}>
            <use href={sprite + '#sound'} />
          </svg>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateItems: (vocabulary) => dispatch(updateItems(vocabulary)),
    addCorrectWord: (item) => dispatch(addCorrectWord(item)),
    addGuessedWord: (item) => dispatch(addGuessedWord(item)),
    updateItemIndex: () => dispatch(updateItemIndex()),
    decreaseItemIndex: () => dispatch(decreaseItemIndex()),
    convertDurationToInitialTimer: () => dispatch(convertDurationToInitialTimer()),
    copyInitialTimerToCurrentTimer: () => dispatch(copyInitialTimerToCurrentTimer()),
    countDownTimer: () => dispatch(countDownTimer()),
    resetGuessedItems: () => dispatch(resetGuessedItems()),
    resetCorrectItems: () => dispatch(resetCorrectItems()),
  };
};

const mapStateToProps = createStructuredSelector({
  vocabulary: selectVocabulary,
  itemIndex: selectItemIndex,
  correctAmount: selectCorrectAmount,
  currentTimer: selectCurrentTimer,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));
