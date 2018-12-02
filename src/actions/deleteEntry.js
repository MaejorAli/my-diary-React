import axios from 'axios';
import {
  DELETE_ENTRY_LOADING,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_ERROR,
} from './actionTypes';

const authenticated = JSON.parse(localStorage.getItem('authenticated')) || {};
// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;
// axios.defaults.headers.common['x-access-token'] = authenticated.token;
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: { 'x-access-token': authenticated.token },
});
const deleteEntryLoading = () => (
  {
    type: DELETE_ENTRY_LOADING,
  }
);

const deleteEntryError = (error) => (
  {
    type: DELETE_ENTRY_ERROR,
    error,
  }
);

const deleteEntrySuccess = (payload) => (
  {
    type: DELETE_ENTRY_SUCCESS,
    payload,
  }
);
const deleteEntry = (entryId) => async (dispatch) => {
  try {
    dispatch(deleteEntryLoading());
    const request = await api.delete(`/entries/${entryId}`);
    dispatch(deleteEntrySuccess(request.data));
  } catch (error) {
    dispatch(deleteEntryError(error));
  }
};

export default deleteEntry;
