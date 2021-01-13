import axios from 'axios';

/* ########################## Synchronous ######################### */

export const updateLanguage = (language) => {
  return {
    type: 'updateLanguage',
    payload: language,
  };
};

export const getCategoriesStart = () => {
  return {
    type: 'getCategoriesStart',
  };
};

export const updateCategories = (categories) => {
  return {
    type: 'updateCategories',
    payload: categories,
  };
};

export const getCategoriesFailure = (message) => {
  return {
    type: 'getCategoriesFailure',
    payload: message,
  };
};

export const resetNeedLoader = () => {
  return {
    type: 'resetNeedLoader',
  };
};

export const selectCategory = (category) => {
  return {
    type: 'selectCategory',
    payload: category,
  };
};


export const updateWords = (words) => {
  return {
    type: 'updateWords',
    payload: words,
  };
};

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

/* ######################### Asynchronous ######################### */

export const getCategoriesAsync = (language) => {
  return (dispatch) => {
    dispatch(getCategoriesStart());

    //This is use to text loader animation with 3 seconds delay
    // setTimeout(() => {
    //   axios
    //     .get(`http://localhost:5000/api/v1/category/${language}`)
    //     .then((response) => {
    //       dispatch(updateCategories(response.data.data));
    //     })
    //     .catch((error) => {
    //       dispatch(getCategoriesFailure(error.message));
    //     });
    // }, 3000);

    axios
      .get(`http://localhost:5000/api/v1/category/${language}`)
      .then((response) => {
        dispatch(updateCategories(response.data.data));
      })
      .catch((error) => {
        dispatch(getCategoriesFailure(error.message));
      });
  };
};
