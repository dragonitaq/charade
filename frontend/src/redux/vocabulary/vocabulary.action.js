export const addCorrectWord = (word) => {
  return {
    type: 'addCorrectWord',
    payload: word,
  };
};

export const addGuessedWord = (word) => {
  return {
    type: 'addGuessedWord',
    payload: word,
  };
};

export const updateWordIndex = () => {
  return {
    type: 'updateWordIndex',
  };
};

export const decreaseWordIndex = () => {
  return {
    type: 'decreaseWordIndex',
  };
};

export const resetGuessedWords = () => {
  return {
    type: 'resetGuessedWords',
  };
};

export const resetCorrectWords = () => {
  return {
    type: 'resetCorrectWords',
  };
};