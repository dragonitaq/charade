import { createSelector } from 'reselect';

const selectVocabulary = (state) => {
  return state.vocabulary;
};

export const selectLanguage = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.language;
});

export const selectCategories = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.categories;
});

export const selectWords = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.words;
});

export const selectWordIndex = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.wordIndex;
});

export const selectGuessAmount = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.guessAmount;
});

export const selectGuessWords = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.guessWords;
});

export const selectCorrectAmount = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.correctAmount;
});

export const selectCorrectWords = createSelector([selectVocabulary], (vocabulary) => {
  return vocabulary.correctWords;
});
