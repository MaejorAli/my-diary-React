import {
  GET_ENTRY_SUCCESS,
  GET_ENTRY_ERROR,
  ENTRY_LOADING,
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_ERROR,
} from './actionTypes';

const entryLoading = (status = true) => ({
  type: ENTRY_LOADING,
  payload: status,
});

export const getEntries = () => async (dispatch, getState, { api }) => {
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

export const getAnEntry = (entryId) => async (dispatch, getState, { api }) => {
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
