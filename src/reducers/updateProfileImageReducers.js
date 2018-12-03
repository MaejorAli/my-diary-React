import {
  UPDATE_PROFILEIMAGE_LOADING,
  UPDATE_PROFILEIMAGE_SUCCESS,
  UPDATE_PROFILEIMAGE_ERROR,
} from '../actions/actionTypes';

const initialState = {
  updatedImage: {},
  status: {
    error: false,
    success: false,
  },
};

const updateProfileImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILEIMAGE_LOADING:
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };

    case UPDATE_PROFILEIMAGE_SUCCESS:
      return {
        ...state,
        updatedImage: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case UPDATE_PROFILEIMAGE_ERROR: {
      return {
        ...state,
        status: {
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

export default updateProfileImageReducer;
