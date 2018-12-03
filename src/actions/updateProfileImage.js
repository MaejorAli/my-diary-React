
import {
  UPDATE_PROFILEIMAGE_LOADING,
  UPDATE_PROFILEIMAGE_SUCCESS,
  UPDATE_PROFILEIMAGE_ERROR,
} from './actionTypes';

const updateprofileImageLoading = () => (
  {
    type: UPDATE_PROFILEIMAGE_LOADING,
  }
);

const updateprofileImageError = (error) => (
  {
    type: UPDATE_PROFILEIMAGE_ERROR,
    error,
  }
);

const updateprofileImageSuccess = (payload) => (
  {
    type: UPDATE_PROFILEIMAGE_SUCCESS,
    payload,
  }
);
const updateProfileImage = (imagePayload) => async (dispatch, getState, { api }) => {
  try {
    dispatch(updateprofileImageLoading());
    const request = await api.put('/auth/userimage', imagePayload);
    dispatch(updateprofileImageSuccess(request.data));
  } catch (error) {
    dispatch(updateprofileImageError(error));
  }
};

export default updateProfileImage;
