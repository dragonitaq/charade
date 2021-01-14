import { combineReducers } from 'redux';

import playContentReducer from './playContent/playContent.reducer';
import playDurationReducer from './playDuration/playDuration.reducer';

const rootReducer = combineReducers({
  playContent: playContentReducer,
  playDuration: playDurationReducer,
});

export default rootReducer;
