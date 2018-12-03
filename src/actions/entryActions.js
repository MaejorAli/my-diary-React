import axios from 'axios';
import {
  GET_ENTRY_SUCCESS,
  GET_ENTRY_ERROR,
  ENTRY_LOADING,
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_ERROR,
} from './actionTypes';

const authenticated = JSON.parse(localStorage.getItem('authenticated')) || {};
// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;
// axios.defaults.headers.common['x-access-token'] = authenticated.token;
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: { 'x-access-token': authenticated.token },
});

const entryLoading = (status = true) => ({
  type: ENTRY_LOADING,
  payload: status,
});

export const getEntries = () => async (dispatch) => {
  try {
    const response = await api.get('/entries/');
    dispatch({
      type: GET_ENTRIES_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ENTRIES_ERROR,
      payload: error.response,
    });
  }
};

export const getAnEntry = (entryId) => async (dispatch) => {
  dispatch(entryLoading());
  try {
    const response = await api.get(`/entries/${entryId}`);
    dispatch(entryLoading(false));
    dispatch({
      type: GET_ENTRY_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch(entryLoading(false));
    dispatch({
      type: GET_ENTRY_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};
