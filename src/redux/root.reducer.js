import { combineReducers } from 'redux';

import categoriesReducer from './categories/categories.reducer';
import correctAmountReducer from './correctAmount/correctAmount.reducer';
import guessAmountReducer from './guessAmount/guessAmount.reducer';
import languageReducer from './language/language.reducer';
import wordsReducer from './words/words.reducer';

const rootReducer = combineReducers({
  language: languageReducer,
  categories: categoriesReducer,
  words: wordsReducer,
  guessAmount: guessAmountReducer,
  correctAmount: correctAmountReducer,
});

export default rootReducer;
