import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDuration } from '../../redux/timer/timer.selector';
import { selectLanguage } from '../../redux/vocabulary/vocabulary.selector';
import { increaseDuration, decreaseDuration } from '../../redux/timer/timer.action';
import { updateLanguage, getCategoriesAsync, updateWords } from '../../redux/vocabulary/vocabulary.action';
import sprite from '../../assets/sprite.svg';

import './settings.style.scss';

class GameSettings extends React.Component {
  componentDidMount() {
    const language = document.getElementById('language').value;
    this.props.updateLanguage(language);
    this.props.getCategoriesAsync(language);
  }

  getCategories = (event) => {
    const language = event.target.value;
    this.props.updateLanguage(language);
    this.props.getCategoriesAsync(language);
  };

  render() {
    const { language, duration, increaseDuration, decreaseDuration } = this.props;
    return (
      <div className='game-settings'>
        <h2>Game Settings</h2>
        <div>
          <label className='label-language' htmlFor='language'>
            Language:{' '}
          </label>
          <select className='select-language' name='language' id='language' defaultValue={`${language ? language : 'english'}`} onChange={this.getCategories}>
            <option value='english'>English</option>
            <option value='chinese'>Chinese</option>
          </select>
        </div>
        <div className='duration'>
          <p>Duration:</p>
          <svg
            className='arrow-icon'
            onClick={
              duration === 1
                ? null
                : () => {
                    decreaseDuration();
                  }
            }
          >
            <use href={sprite + '#left-arrow'} />
          </svg>
          <span>
            {duration} {`${duration === 1 ? 'minute' : 'minutes'}`}
          </span>
          <svg
            className='arrow-icon'
            onClick={
              duration === 3
                ? null
                : () => {
                    increaseDuration();
                  }
            }
          >
            <use href={sprite + '#right-arrow'} />
          </svg>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLanguage: (language) => dispatch(updateLanguage(language)),
    getCategoriesAsync: (language) => dispatch(getCategoriesAsync(language)),
    updateWords: (words) => dispatch(updateWords(words)),
    increaseDuration: () => dispatch(increaseDuration()),
    decreaseDuration: () => dispatch(decreaseDuration()),
  };
};

const mapStateToProps = createStructuredSelector({
  language: selectLanguage,
  duration: selectDuration,
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);
