import { addNewCorrectAmount, addNewCorrectWord, addNewGuessedAmount, addNewGuessedWord } from './vocabulary.utils';

const initialState = {
  language: '',
  /* My idea of handling the loading page for while fetching async data is to have needLoader default to true. This means that when a component did mount, the initial boolean value is true, thus trigger to render loader component. When the data is successfully fetched, we then set this value to false, this in turn trigger to render the desired component. When the component unmount, we then set the value default back to true, so next time when we need to mount a component that needs loading state (page), it will have value true for it to work initially.
  In short, once we finish fetching data, set it to false. When component unmount, set back to true. */
  needLoader: true,
  errorMessage: '',
  categories: [],
  selectedCategory: {},
  words: [],
  wordIndex: 0,
  guessedAmount: 0,
  guessedWords: [],
  correctAmount: 0,
  correctWords: [],
};

const vocabularyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateLanguage':
      return {
        ...state,
        language: action.payload,
      };
    case 'getCategoriesStart':
      return {
        ...state,
        needLoader: true,
      };
    case 'updateCategories':
      return {
        ...state,
        categories: action.payload,
        needLoader: false,
      };
    case 'getCategoriesFailure':
      return {
        ...state,
        errorMessage: action.payload,
        needLoader: false,
      };
    case 'resetNeedLoader':
      return {
        ...state,
        needLoader: true,
      };
    case 'selectCategory':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case 'updateWords':
      return {
        ...state,
        words: action.payload,
      };
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
