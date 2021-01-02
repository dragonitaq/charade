import React from 'react';

import './category.style.scss';

class Category extends React.Component {
  // Here we make API call to get all categories about that particular language.

  render() {
    return (
      <div className='category'>
        <div className='category-card'>
          <div className='category-name'>
            <p>Category name</p>
          </div>
          <div className='category-btn'>
            <p>Play!</p>
          </div>
        </div>
        <div className='category-card'>
          <div className='category-name'>
            <p>Category name</p>
          </div>
          <div className='category-btn'>
            <p>Play!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
