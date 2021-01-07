import allCategories from '../../data/categories';
import allWords from '../../data/words';
import { addNewCorrectAmount, addNewCorrectWord, addNewGuessedAmount, addNewGuessedWord } from './vocabulary.utils';

const initialState = {
  language: allCategories.enCategories.language, //en-my
  categories: allCategories.enCategories.categories,
  words: allWords.mixtureWords,
  wordIndex: 0,
  guessedAmount: 0,
  guessedWords: [],
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
        guessedAmount: addNewGuessedAmount(state.guessedAmount),
      };
    case 'addGuessedWord':
      return {
        ...state,
        guessedAmount: addNewGuessedAmount(state.guessedAmount),
        guessedWords: addNewGuessedWord(state.guessedWords, action.payload),
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
    case 'resetGuessedWords':
      return {
        ...state,
        guessedAmount: 0,
        guessedWords: [],
      };
    case 'resetCorrectWords':
      return {
        ...state,
        correctAmount: 0,
        correctWords: [],
      };
    default:
      return state;
  }
};

export default vocabularyReducer;
