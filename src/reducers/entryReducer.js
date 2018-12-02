import {
  GET_ENTRY_SUCCESS,
  GET_ENTRY_ERROR,
  ENTRY_LOADING,
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_ERROR,
} from '../actions/actionTypes';

import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTRY_SUCCESS:
      return { ...state, entry: action.payload };
    case GET_ENTRY_ERROR:
      return { ...state, error: action.payload };
    case ENTRY_LOADING:
      return { ...state, entryLoading: action.payload };
    case GET_ENTRIES_SUCCESS:
      return { ...state, entries: action.payload };
    case GET_ENTRIES_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
