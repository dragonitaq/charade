import { createSelector } from 'reselect';

const selectPlayTimer = (state) => {
  return state.playTimer;
};

// I hope it's ok to just return a timer variable
export const selectTimer = createSelector([selectPlayTimer], (playTimer) => {
  return playTimer.timer;
});
