import {} from './vocabulary.utils';

import allCategories from '../../data/categories';
import allWords from '../../data/words';
import { addNewCorrectAmount, addNewCorrectWord, addNewGuessAmount, addNewGuessWord } from './vocabulary.utils';

const initialState = {
  language: allCategories.enCategories.language, //en-my
  categories: allCategories.enCategories.categories,
  words: allWords.mixtureWords,
  wordIndex: 0,
  guessAmount: 0,
  guessWords: [],
  correctAmount: 0,
  correctWords: [],
};

const vocabularyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addCorrectWord':
      return {
        ...state,
        correctAmount: addNewCorrectAmount(state.correctAmount),
        correctWords: addNewCorrectWord(state.correctWords, action.payload),
        guessAmount: addNewGuessAmount(state.guessAmount),
      };
    case 'addGuessedWord':
      return {
        ...state,
        guessAmount: addNewGuessAmount(state.guessAmount),
        guessWords: addNewGuessWord(state.guessWords, action.payload),
      };
    case 'updateWordIndex':
      return {
        ...state,
        wordIndex: state.words.length - 1,
      };
    case 'decreaseWordIndex':
      return {
        ...state,
        wordIndex: state.wordIndex - 1,
      };
    default:
      return state;
  }
};

export default vocabularyReducer;
