import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategories } from '../../redux/vocabulary/vocabulary.selector';
import { selectCategory, updateWords, updateWordIndex } from '../../redux/vocabulary/vocabulary.action';

import './category.style.scss';

class Category extends React.Component {
  redirectToPlay() {
    this.props.history.push('/play');
  }

  shuffle(array) {
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
  }

  // Hope it's ok to do all actions in one function.
  selectAndShuffleAndUpdateWords(categoryId) {
    const selectedCategory = this.props.categories.find((category) => category._id === categoryId);
    this.props.selectCategory(selectedCategory);
    const shuffledWords = this.shuffle(selectedCategory.words);
    this.props.updateWords(shuffledWords);
  }

  render() {
    const { categoryName, categoryId, updateWordIndex } = this.props;
    return (
      <div className='category-card'>
        <div className='category-name'>
          <p>{categoryName.toUpperCase()}</p>
        </div>
        <div
          className='category-btn'
          onClick={() => {
            // The order of these functions is important
            this.selectAndShuffleAndUpdateWords(categoryId);
            updateWordIndex();
            this.redirectToPlay();
          }}
        >
          <p>Play!</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (category) => dispatch(selectCategory(category)),
    updateWords: (words) => dispatch(updateWords(words)),
    updateWordIndex: () => dispatch(updateWordIndex()),
  };
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
