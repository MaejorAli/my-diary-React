import axiosConfig from '../config/axiosConfig';
import {
  AUTH_SIGNOUT_USER,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
} from './actionTypes';


const persistAuth = (authenticated) => {
  localStorage.setItem('authenticated', JSON.stringify(authenticated));
};

export const signup = (formValues) => async (dispatch) => {
  try {
    const response = await axiosConfig.api.post('/auth/signup', formValues);

    // Store important details in local storage
    const { token, data } = response;
    persistAuth(token, data);

    // Then dispatch response
    dispatch({
      type: AUTH_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_USER_ERROR,
      payload: error.response,
    });
  }
};

export const signin = (formValues) => async (dispatch) => {
  try {
    const response = await axiosConfig.api.post('/auth/login', formValues);
    // Store important details in local storage
    const { data } = response;
    persistAuth(data);

    // Then dispatch response
    dispatch({
      type: AUTH_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_USER_ERROR,
      payload: error.response,
    });
  }
};

export const signout = () => (dispatch, getState, API) => {
  localStorage.clear();
  API.updateToken(null);
  return dispatch({ type: AUTH_SIGNOUT_USER });
};
