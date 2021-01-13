import { createSelector } from 'reselect';

const selectVocabulary = (state) => {
  return state.vocabulary;
};

export const selectLanguage = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.language;
});

export const selectNeedLoader = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.needLoader;
});

export const selectErrorMessage = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.errorMessage;
});

export const selectCategories = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.categories;
});

export const selectSelectedCategory = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.selectedCategory;
});

export const selectWords = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.words;
});

export const selectWordIndex = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.wordIndex;
});

export const selectGuessAmount = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.guessedAmount;
});

export const selectGuessWords = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.guessedWords;
});

export const selectCorrectAmount = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.correctAmount;
});

export const selectCorrectWords = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.correctWords;
});
