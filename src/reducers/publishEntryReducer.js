import {
  PUBLISH_ENTRY_LOADING,
  PUBLISH_ENTRY_SUCCESS,
  PUBLISH_ENTRY_ERROR,
} from '../actions/actionTypes';

const initialState = {
  publishedEntry: {},
  status: {
    error: false,
    success: false,
  },
};

const publishEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUBLISH_ENTRY_LOADING:
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };

    case PUBLISH_ENTRY_SUCCESS:
      return {
        ...state,
        publishedEntry: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case PUBLISH_ENTRY_ERROR: {
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

export default publishEntryReducer;
