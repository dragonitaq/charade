import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategories } from '../../redux/playContent/playContent.selector';
import { selectCategory, updateItems, updateItemIndex } from '../../redux/playContent/playContent.action';

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
  selectAndShuffleAndUpdateItems(categoryId) {
    const selectedCategory = this.props.categories.find((category) => category._id === categoryId);
    this.props.selectCategory(selectedCategory);
    const shuffledItems = this.shuffle(selectedCategory.vocabulary);
    this.props.updateItems(shuffledItems);
  }

  render() {
    const { category, updateItemIndex } = this.props;
    return (
      // TODO Get vocabulary length and display it
      <div className='category-card'>
        <div className='category-details'>
          <h3 className='category-details__title'>{category.title.toUpperCase()}</h3>
          <div className='category-divider'></div>
          <p className='category-details__description'>{category.description}</p>
          <p className='category-details__author'>{`Author: ${category.authorName}`}</p>
        </div>
        <div
          className='category-btn'
          onClick={() => {
            // The order of these functions is important
            this.selectAndShuffleAndUpdateItems(category._id);
            updateItemIndex();
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
    updateItems: (vocabulary) => dispatch(updateItems(vocabulary)),
    updateItemIndex: () => dispatch(updateItemIndex()),
  };
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
