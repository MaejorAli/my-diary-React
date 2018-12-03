
import {
  PUBLISH_ENTRY_LOADING,
  PUBLISH_ENTRY_SUCCESS,
  PUBLISH_ENTRY_ERROR,
} from './actionTypes';

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

const publishEntry = (entryPayload) => async (dispatch, getState, { api }) => {
  try {
    dispatch(publishEntryLoading());
    const request = await api.post('/entries', entryPayload);
    dispatch(publishEntrySuccess(request.data));
  } catch (error) {
    dispatch(publishEntryError(error));
  }
};

export default publishEntry;
