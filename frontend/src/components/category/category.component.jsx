import React from 'react';
import { withRouter } from 'react-router-dom';

import './category.style.scss';

class Category extends React.Component {
  // Here we make API call to get all categories about that particular language.

  render() {
    const { categoryName, history } = this.props;
    return (
      <div className='category-card'>
        <div className='category-name'>
          <p>{categoryName.toUpperCase()}</p>
        </div>
        <div className='category-btn' onClick={() => history.push('/play')}>
          <p>Play!</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Category);
