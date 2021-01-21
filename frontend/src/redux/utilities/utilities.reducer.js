const initialState = {
  showHowToPlay: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleHowToPlay':
      return {
        ...state,
        showHowToPlay: !state.showHowToPlay,
      };
    default:
      return state;
  }
};

export default timerReducer;
