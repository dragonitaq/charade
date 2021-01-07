import { combineReducers } from 'redux';

import vocabularyReducer from './vocabulary/vocabulary.reducer';
import timerReducer from './timer/timer.reducer';

const rootReducer = combineReducers({
  vocabulary: vocabularyReducer,
  playDuration: timerReducer,
});

export default rootReducer;
