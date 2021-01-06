export const addNewCorrectAmount = (correctAmount) => {
  return (correctAmount = correctAmount + 1);
};

export const addNewCorrectWord = (correctWords, payload) => {
  return [...correctWords, payload];
};

export const addNewGuessAmount = (guessAmount) => {
  return (guessAmount = guessAmount + 1);
};

export const addNewGuessWord = (guessWords, payload) => {
  return [...guessWords, payload];
};
