import axios from 'axios';
import {
  UPDATE_ENTRY_LOADING,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_ERROR,
} from './actionTypes';

const authenticated = JSON.parse(localStorage.getItem('authenticated')) || {};
// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;
// axios.defaults.headers.common['x-access-token'] = authenticated.token;
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: { 'x-access-token': authenticated.token },
});

const updateEntryLoading = () => (
  {
    type: UPDATE_ENTRY_LOADING,
  }
);

const updateEntryError = (error) => (
  {
    type: UPDATE_ENTRY_ERROR,
    error,
  }
);

const updateEntrySuccess = (payload) => (
  {
    type: UPDATE_ENTRY_SUCCESS,
    payload,
  }
);
const updateEntry = (entryPayload, entryId) => async (dispatch) => {
  try {
    dispatch(updateEntryLoading());
    const request = await api.put(`/entries/${entryId}`, entryPayload);
    dispatch(updateEntrySuccess(request.data));
  } catch (error) {
    dispatch(updateEntryError(error));
  }
};

export default updateEntry;
