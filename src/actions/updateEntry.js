
import {
  UPDATE_ENTRY_LOADING,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_ERROR,
} from './actionTypes';

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
const updateEntry = (entryPayload, entryId) => async (dispatch, getState, { api }) => {
  try {
    dispatch(updateEntryLoading());
    const request = await api.put(`/entries/${entryId}`, entryPayload);
    dispatch(updateEntrySuccess(request.data));
  } catch (error) {
    dispatch(updateEntryError(error));
  }
};

export default updateEntry;
