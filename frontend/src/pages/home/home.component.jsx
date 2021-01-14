import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import sprite from '../../assets/sprite.svg';
import { selectNeedLoader, selectErrorMessage, selectCategories } from '../../redux/playContent/playContent.selector';
import GameSettings from '../../components/settings/settings.component';
import Category from '../../components/category/category.component';
import Loader from '../../components/loader/loader.component';

import './home.style.scss';

class Home extends React.Component {
  render() {
    const { needLoader, errorMessage, categories } = this.props;
    return (
      <div>
        <div className='header'>
          <svg className='charade-logo'>
            <use href={sprite + '#charade-logo'} />
          </svg>
          <h1>Charades Go</h1>
        </div>
        <div>
          <GameSettings />
        </div>
        <div className='categories-container'>
          <h2 className='categories-title'>Categories</h2>
          <div className='categories'>
            {/* Check if component need loader to display, if not then check if the data fetching consists of error message, if not then only render categories component. */}
            {needLoader ? (
              <Loader />
            ) : (
              [
                errorMessage ? (
                  <div>{`${errorMessage}`}</div>
                ) : (
                  categories.map((category) => {
                    return <Category id={category._id} category={category} />;
                  })
                ),
              ]
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  needLoader: selectNeedLoader,
  errorMessage: selectErrorMessage,
  categories: selectCategories,
});

export default connect(mapStateToProps)(Home);
