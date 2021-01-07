import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategories } from '../../redux/vocabulary/vocabulary.selector';
import sprite from '../../assets/sprite.svg';
import  GameSettings from '../../components/settings/settings.component';
import Category from '../../components/category/category.component';

import './home.style.scss';

class Home extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <div className='header'>
          <svg className='charade-logo'>
            <use href={sprite + '#charade-logo'} />
          </svg>
          <h1>Charade</h1>
        </div>
        <div>
          <GameSettings />
        </div>
        <div className='categories'>
          <h2 className='categories-title'>Categories</h2>
          <div className='category'>
            {categories.map((category) => {
              return <Category id={category.id} categoryName={category.categoryName} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default connect(mapStateToProps)(Home);
