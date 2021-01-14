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


export const updateItems = (vocabulary) => {
  return {
    type: 'updateItems',
    payload: vocabulary,
  };
};

export const addCorrectWord = (item) => {
  return {
    type: 'addCorrectWord',
    payload: item,
  };
};

export const addGuessedWord = (item) => {
  return {
    type: 'addGuessedWord',
    payload: item,
  };
};

export const updateItemIndex = () => {
  return {
    type: 'updateItemIndex',
  };
};

export const decreaseItemIndex = () => {
  return {
    type: 'decreaseItemIndex',
  };
};

export const resetGuessedItems = () => {
  return {
    type: 'resetGuessedItems',
  };
};

export const resetCorrectItems = () => {
  return {
    type: 'resetCorrectItems',
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
