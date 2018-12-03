import {
  DELETE_ENTRY_LOADING,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_ERROR,
} from './actionTypes';

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
const deleteEntry = (entryId) => async (dispatch, getState, { api }) => {
  try {
    dispatch(deleteEntryLoading());
    const request = await api.delete(`/entries/${entryId}`);
    dispatch(deleteEntrySuccess(request.data));
  } catch (error) {
    dispatch(deleteEntryError(error));
  }
};

export default deleteEntry;
