import { createSelector } from 'reselect';

const selectUtilities = (state) => {
  return state.utilities;
};

export const selectShowHowToPlay = createSelector([selectUtilities], (showHowToPlay) => {
  return showHowToPlay.showHowToPlay;
});
