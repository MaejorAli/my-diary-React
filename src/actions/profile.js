
import {
  PROFILE_ERROR,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
} from './actionTypes';

const profileLoading = () => (
  {
    type: PROFILE_LOADING,
  }
);

const profileError = (error) => (
  {
    type: PROFILE_ERROR,
    error,
  }
);

const profileSuccess = (payload) => (
  {
    type: PROFILE_SUCCESS,
    payload,
  }
);
const getProfile = () => async (dispatch, getState, { api }) => {
  try {
    dispatch(profileLoading());
    const request = await api.get('/auth/user');
    dispatch(profileSuccess(request.data.data));
  } catch (error) {
    dispatch(profileError(error));
  }
};

export default getProfile;
