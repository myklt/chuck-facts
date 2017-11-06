import { CHUCK_FACTS } from './actionTypes';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHUCK_FACTS.SEARCH_FACTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CHUCK_FACTS.SEARCH_FACTS_SUCCESS:
      return {
        data: action.payload.result,
        isLoading: false,
        error: null,
      };
    case CHUCK_FACTS.SEARCH_FACTS_FAILURE:
      return {
        data: null,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
