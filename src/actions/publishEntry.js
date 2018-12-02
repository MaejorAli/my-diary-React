
import axios from 'axios';
import {
  PUBLISH_ENTRY_LOADING,
  PUBLISH_ENTRY_SUCCESS,
  PUBLISH_ENTRY_ERROR,
} from './actionTypes';

const authenticated = JSON.parse(localStorage.getItem('authenticated')) || {};
// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;
// axios.defaults.headers.common['x-access-token'] = authenticated.token;
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: { 'x-access-token': authenticated.token },
});
const publishEntryLoading = () => (
  {
    type: PUBLISH_ENTRY_LOADING,
  }
);

const publishEntryError = (error) => (
  {
    type: PUBLISH_ENTRY_ERROR,
    error,
  }
);

const publishEntrySuccess = (payload) => (
  {
    type: PUBLISH_ENTRY_SUCCESS,
    payload,
  }
);

const publishEntry = (entryPayload) => async (dispatch) => {
  try {
    dispatch(publishEntryLoading());
    const request = await api.post('/entries', entryPayload);
    dispatch(publishEntrySuccess(request.data));
  } catch (error) {
    dispatch(publishEntryError(error));
  }
};

export default publishEntry;
