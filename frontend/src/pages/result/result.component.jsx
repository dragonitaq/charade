import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectSelectedCategory, selectItemIndex, selectGuessAmount, selectGuessItems, selectCorrectAmount, selectCorrectItems } from '../../redux/playContent/playContent.selector.js';
import { updateItems, updateItemIndex } from '../../redux/playContent/playContent.action';
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

  shuffleAndUpdateItems = () => {
    const shuffledItems = this.shuffle(this.props.selectedCategory.vocabulary);
    this.props.updateItems(shuffledItems);
  };

  render() {
    const { updateItemIndex, itemIndex, guessAmount, guessItems, correctAmount, correctItems, history } = this.props;
    return (
      <div>
        <div className='score-container'>
          <svg className='icon-home' onClick={() => history.push('/')}>
            <use href={sprite + '#home'} />
          </svg>
          <div className='score'>
            <div className='correct-score'>
              Correct Items: <span>{correctAmount}</span>
            </div>
            <div className='tried-score'>
              Tried Items: <span>{guessAmount}</span>
            </div>
          </div>
          <svg
            className='icon-replay-button'
            onClick={() => {
              this.shuffleAndUpdateItems();
              updateItemIndex();
              this.redirectToPlay();
            }}
          >
            <use href={sprite + '#replay-button'} />
          </svg>
        </div>
        <div className='no-more-item'>{itemIndex < 0 ? <p>You have used up all the items in the category!</p> : null}</div>
        <div className='vocabulary-lists'>
          <div>
            <h3 className='vocabulary-list__title'>Correct Items List:</h3>
            <div className='vocabulary-list correct-vocabulary-list'>
              {correctItems.map((item) => {
                return <p>{item.toUpperCase()}</p>;
              })}
            </div>
          </div>
          <div>
            <h3 className='vocabulary-list__title'>Tried Items List:</h3>
            <div className='vocabulary-list tried-vocabulary-list'>
              {guessItems.map((item) => {
                return <p>{item.toUpperCase()}</p>;
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
    updateItems: (vocabulary) => dispatch(updateItems(vocabulary)),
    updateItemIndex: () => dispatch(updateItemIndex()),
  };
};

const mapStateToProps = createStructuredSelector({
  selectedCategory: selectSelectedCategory,
  itemIndex: selectItemIndex,
  guessAmount: selectGuessAmount,
  guessItems: selectGuessItems,
  correctAmount: selectCorrectAmount,
  correctItems: selectCorrectItems,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result));
