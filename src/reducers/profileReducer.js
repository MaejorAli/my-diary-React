import {
  PROFILE_ERROR,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  gottenProfile: {},
  statuss: {
    error: false,
    success: false,
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        statuss: {
          error: false,
          success: false,
        },
      };

    case PROFILE_SUCCESS:
      return {
        ...state,
        gottenProfile: action.payload,
        statuss: {
          success: true,
          error: false,
        },
      };

    case PROFILE_ERROR: {
      return {
        ...state,
        statuss: {
          error: true,
          success: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default profileReducer;
