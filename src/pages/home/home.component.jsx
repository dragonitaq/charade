import React from 'react';
import sprite from '../../assets/sprite.svg';

import { GameSettings } from '../../components/settings/settings.component';
import Category from '../../components/category/category.component';

import './home.style.scss';

class Home extends React.Component {
  render() {
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
          <Category />
        </div>
      </div>
    );
  }
}

export default Home;
