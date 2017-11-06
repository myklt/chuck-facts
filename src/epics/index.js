import { combineEpics } from 'redux-observable';
import { searchFactsEpic } from '../features/chuckFacts';

export default combineEpics(searchFactsEpic);
