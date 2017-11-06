import { CHUCK_FACTS } from './actionTypes';

export const searchFacts = query => {
  return {
    type: CHUCK_FACTS.SEARCH_FACTS,
    query,
  };
};

export const searchFactsSuccess = payload => {
  return {
    type: CHUCK_FACTS.SEARCH_FACTS_SUCCESS,
    payload,
  };
};

export const searchFactsFailure = error => {
  return {
    type: CHUCK_FACTS.SEARCH_FACTS_FAILURE,
    error,
  };
};

