import {
  AUTH_SIGNOUT_USER,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
} from './actionTypes';


const persistAuth = (authenticated, API) => {
  localStorage.setItem('authenticated', JSON.stringify(authenticated));
  API.updateToken(authenticated.token);
};

export const signup = (formValues) => async (dispatch, getState, API) => {
  try {
    const response = await API.api.post('/auth/signup', formValues);

    // Store important details in local storage
    const { data } = response;
    persistAuth(data, API);

    // Then dispatch response
    dispatch({
      type: AUTH_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_USER_ERROR,
      payload: error.response,
    });
  }
};

export const signin = (formValues) => async (dispatch, getState, API) => {
  try {
    const response = await API.api.post('/auth/login', formValues);
    // Store important details in local storage
    const { data } = response;
    persistAuth(data, API);

    // Then dispatch response
    dispatch({
      type: AUTH_USER_SUCCESS,
      payload: data,
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
