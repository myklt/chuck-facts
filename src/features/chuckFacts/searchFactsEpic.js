import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { searchFactsSuccess, searchFactsFailure } from './actions';
import { CHUCK_FACTS } from './actionTypes';
import { ajax } from 'rxjs/observable/dom/ajax';

const searchFactsEpic = action$ => {
  return action$.ofType(CHUCK_FACTS.SEARCH_FACTS).switchMap(({ query }) => {
    if (!query.trim()) {
      return Observable.of(searchFactsSuccess([]));
    }

    return ajax({ url: `/jokes/search?query=${query}`, crossDomain: true })
      .map(payload => searchFactsSuccess(payload.response))
      .startWith({ type: CHUCK_FACTS.SEARCH_FACTS_REQUEST })
      .catch(error => Observable.of(searchFactsFailure(error)));
  });
};

export default searchFactsEpic;
