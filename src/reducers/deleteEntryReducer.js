import {
  DELETE_ENTRY_LOADING,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_ERROR,
} from '../actions/actionTypes';

const initialState = {
  deletedEntry: {},
  status: {
    error: false,
    success: false,
  },
};

const deleteEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ENTRY_LOADING:
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };

    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        deletedEntry: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case DELETE_ENTRY_ERROR: {
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

export default deleteEntryReducer;
