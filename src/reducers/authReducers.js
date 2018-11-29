import {
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  SET_USER,
  AUTH_SIGNOUT_USER,
} from '../actions/actionTypes';

import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        authenticated: action.payload,
        errorMessage: '',
      };
    case AUTH_USER_ERROR:
      return { ...state, errorMessage: action.payload };
    case AUTH_SIGNOUT_USER:
      return {
        ...state,
        authenticated: '',
        user: {},
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
