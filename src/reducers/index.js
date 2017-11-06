import { combineReducers } from 'redux';
import { chuckFactsReducer as chuckFacts } from '../features/chuckFacts';

const rootReducer = combineReducers({
  chuckFacts,
});

export default rootReducer;
