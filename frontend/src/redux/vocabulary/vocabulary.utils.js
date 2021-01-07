export const addNewCorrectAmount = (correctAmount) => {
  return (correctAmount = correctAmount + 1);
};

export const addNewCorrectWord = (correctWords, payload) => {
  return [...correctWords, payload];
};

export const addNewGuessedAmount = (guessAmount) => {
  return (guessAmount = guessAmount + 1);
};

export const addNewGuessedWord = (guessWords, payload) => {
  return [...guessWords, payload];
};
